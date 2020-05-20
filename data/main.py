""" stages """
##
# templates:
# =====
# for prototype these are inline, but could be factored out into own files
# or stored remotely on a database.. These are data only and should be able to be changed
# or moved around without needing to change code (much)


# stages model:
#
# this models the overall structure of the statement flows of a personal statement.
# The next stage(s) possible are labeled as "links" from a given template.
# We store the visited links in a progress list as we traverse the flow
# and check to make sure we're not cycling back over a stage we've already visited.
#
stages = {
    "intro": {
        "id": 0,
        # any response links to next stage, "name"
        "links": "name",
        "template": """...Let's begin with paragraph one, where you will introduce yourself to the
        judge reviewing your records.""",
        "input_type": "short-input",
    },
    "name": {
        "id": 100,
        # any response links to next stage, "age"
        "links": "age",
        "template": "Please enter your full name as you'd like to see it on your personal statement: ",
        "input_type": "short-input",
    },
    "age": {
        "id": 102,
        # input_type of "short-input" takes free text and progresses to the next link
        # regardless of response
        "links": "working",
        "template": " Please enter your age in years: ",
        "input_type": "short-input",
    },
    "working": {
        "id": 120,
        # input_type of yes-no can link to one or more next stages based on response
        # so links is a key-value pair of response to next stage
        "links": {
            # affirmative responses link to "industry-current" stage
            "yes": "industry-current",
            "yes, inconsistently": "industry-current",
            # specific negative response link to their respective stage
            "no, but I was until recently": "industry-past",
            "no": "industry-past-explanation",
        },
        "template": """Are you currently working? Choose the closest answer: 'Yes', 'Yes,
inconsistently', 'No, but I was until recently', 'No'""",
        "input_type": "yes-no",
    },
    "industry-current": {
        "id": 121,
        "links": "industry-current-duration",
        "template": "In what industry are you working?",
        "input_type": "short-input",
    },
    "industry-current-duration": {
        "id": 122,
        # jump to the end
        "links": "END",
        "template": """How long have you been working in this industry? Complete this sentence for
        your personal statement: I have been working in this industry for ____""",
        "input_type": "short-input",
    },
    "industry-past": {
        "id": 131,
        "links": "industry-past-duration",
        "template": "In what industry were you working?",
        "input_type": "short-input",
    },
    "industry-past-duration": {
        "id": 132,
        "links": "END",
        "template": """How long have you been working in this industry? Complete this sentence for
        your personal statement: I have been working in this industry for ____""",
        "input_type": "short-input",
    },
    "industry-past-explanation": {
        "id": 133,
        "links": {"yes": "industry-past-explanation-short-input", "no": "END"},
        "template": """Would you like to add a sentence explaining your work situation to the judge? We recommend this
    if you think it adds context, particularly if the reason that you are having trouble finding work
is related to your conviction.""",
        "input_type": "yes-no",
    },
    "industry-past-explanation-short-input": {
        "id": 134,
        "links": "END",
        "template": "Please enter a short explanation of why you're having trouble finding work.",
        "input_type": "short-input",
    },
    "END": {"title": "END", "id": -1, "links": [], "template": "You have reached the end of this form."},
}


def query_user(prompt, responses=[]):
    print(prompt)
    response_dict = {}
    count = 1
    for response in responses:
        response_dict[count] = response
        print(count, " - ", response)
        count += 1

    if responses:
        while True:
            inp = input()
            if inp.isdigit() and int(inp) in response_dict:
                break
            print("That is not an option. Try again.")
        return response_dict[int(inp)]
    inp = input()
    return inp.strip()


# exceptions
class NextStageLinkTypeError(Exception):
    """ next linked stage is incorrect type """


# response handlers
def noop(links, response):
    """ no operation placeholder """
    return links


def shortinput(links, response):
    """ return the next linked stage """
    if not isinstance(links, (str)):
        raise NextStageLinkTypeError("oops something broke")
    return links


def yesno(links, response) -> int:
    """
    example response parser
    params:
        links - list; a list of Stage Id integers of next possible links
        response - str; the raw input response data
    """
    response_data = response.lower()

    if not isinstance(links, (dict)):
        raise NextStageLinkTypeError("oops something broke")

    if response_data not in set(links.keys()):
        raise Exception("could not understand the response")

    return links[response_data]


def response_parser(stage, response_data):
    """
    apply the parser correspnoding to stage["input_type"]
    with the given response data.

    returns the next link(s) for the given response

    params:
        stage - dict; the current stage data
        response_data - string; raw response input from prompt
    returns:
        int - the stage id next
    """
    fn = None
    input_type = stage.get("input_type", None)

    if input_type is None:
        fn = noop
    elif input_type == "yes-no":
        fn = yesno
    elif input_type == "short-input":
        fn = shortinput
    else:
        fn = noop

    return fn(stage["links"], response_data)


def main(stage_model, stage="0", progress=[]):
    """ main """
    # are we at the final stage?
    if stage == "END":
        # print last template, record progress, and exit
        print(stage_model[stage]["template"])
        progress.append({"id": stage})
        return progress

    # have we been here already?
    # if so, go to the end
    if stage in set(x["id"] for x in progress):
        return main(stage_model, stage="-1", progress=progress)

    # run the current stage and progress
    current_stage = stage_model[stage]
    response = query_user(current_stage["template"])

    # do some logic or validation here on response data ...
    # based on the current_stage "input-type"
    next_stage = response_parser(current_stage, response)

    # record progress
    progress.append({"id": current_stage["id"], "response": response})

    return main(stage_model, stage=next_stage, progress=progress)


if __name__ == "__main__":
    prog = main(stages, stage="intro", progress=[])
    print(f"====== Final collected responses =============")
    print(prog)
