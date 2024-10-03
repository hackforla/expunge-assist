import { Octokit } from "@octokit/rest";

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const REQUIRED_LABELS = ["priority", "role", "feature", "size", "issue level"];
const LABEL_MISSING = REQUIRED_LABELS.map((label) => {
  return `${label}: missing`;
});

async function fetchOpenIssues() {
  let allIssues = [];
  let hasNextPage = true;
  let currentPage = 1;

  while (hasNextPage) {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: "hackforla",
      repo: "expunge-assist",
      state: "open",
      page: currentPage,
      per_page: 100,
    });

    allIssues = allIssues.concat(issues);

    hasNextPage = issues.length === 100;
    currentPage++;
  }

  const allOpenIssues = allIssues.filter(
    (issue) => issue.pull_request === undefined
  );
  console.log("Fetched all open issues (excluding PRs):", allOpenIssues.length);
  return allOpenIssues;
}

async function main() {
  const openIssues = await fetchOpenIssues();
  let totalSuccessfulIssues = 0;

  for (const issue of openIssues) {
    const labels = issue.labels.map((label) => label.name);
    const filteredLabels = filterLabels(labels);
    const labelsToAdd = checkLabels(filteredLabels);

    if (labelsToAdd.length === 0) {
      console.log(
        `All required labels are included for issue #${issue.number}; no labels to add.`
      );
    } else {
      console.log(`Labels to add for issue #${issue.number}: `, labelsToAdd);
      const successfulIssue = await addLabels(labelsToAdd, issue.number);
      if (successfulIssue) {
        totalSuccessfulIssues++;
        console.log(`Successfully added labels to issue #${issue.number}`);
      } else {
        throw new Error(`Failed to process issue #${issue.number}`);
      }
    }
  }
  console.log(totalSuccessfulIssues, " issues have been successfully labeled");
}

function filterLabels(labels) {
  return labels.filter((label) => LABEL_MISSING.includes(label) === false);
}

function checkLabels(labels) {
  let labelsToAdd = [];

  REQUIRED_LABELS.forEach((requiredLabel, i) => {
    const regExp = new RegExp(`${requiredLabel}`, "gi");
    const isLabelPresent = labels.some((label) => {
      return regExp.test(label);
    });

    if (isLabelPresent === false) {
      labelsToAdd.push(LABEL_MISSING[i]);
    }
  });
  return labelsToAdd;
}

async function addLabels(
  labelsToAdd,
  issueNum,
  owner = "hackforla",
  repo = "expunge-assist"
) {
  const labels = [...new Set([...labelsToAdd])];

  try {
    await octokit.issues.addLabels({
      owner: owner,
      repo: repo,
      issue_number: issueNum,
      labels: labels,
    });
    return true;
  } catch (err) {
    console.error("Error editing labels: ", err);
    throw new Error(
      `Failed to add labels to issue #${issueNum}: ${err.message}`
    );
  }
}

(async () => {
  try {
    await main();
  } catch (err) {
    console.error("Action aborted because error occurred:", err.message);
    process.exit(1);
  }
})();
