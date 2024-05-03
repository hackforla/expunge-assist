const { Octokit } = require("@octokit/rest");

// Create Octokit instance
const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN });

const REQUIRED_LABELS = ["priority", "role", "feature", "size"];
const LABEL_MISSING = [
  "priority: missing",
  "role: missing",
  "feature: missing",
  "size: missing",
];

async function fetchOpenIssues() {
  let allIssues = [];
  let hasNextPage = true;
  let currentPage = 1;

  while (hasNextPage) {
    const { data: issues } = await octokit.issues.listForRepo({
      owner: "hackforla",
      repo: "expunge-assist",
      state: "open", // Only fetch open issues
      page: currentPage,
      per_page: 100, // You can increase per_page if needed (up to 100)
    });

    allIssues = allIssues.concat(issues); // Combine results from all pages

    hasNextPage = issues.length === 100; // Check if there's a next page
    currentPage++;
  }

  const allOpenIssues = allIssues.filter(
    (issue) => issue.pull_request === undefined
  );
  console.log("Fetched all open issues (excluding PRs):", allOpenIssues.length);
  return allOpenIssues;
}

// Main function to process open issues
async function main() {
  const openIssues = await fetchOpenIssues();
  // console.log(openIssues.length);

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
      await addLabels(labelsToAdd, issue.number);
    }
  }
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
    if (labelsToAdd.length > 0) {
      console.log("Successfully added labels to issue #", issueNum);
    }
    return true;
  } catch (err) {
    console.error("Error editing labels: ", err);
    return false;
  }
}

// Call main function
main().catch(console.error);
