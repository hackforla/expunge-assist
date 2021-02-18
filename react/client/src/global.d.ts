interface GlobalProps {
  goToPage: (pageNumber: number) => void;
}

interface userInputs {
  name: string;
  age: number | null;
  introduction: string;
  lifeChanges: string;
  communityServiceOrgName: string;
  communityServiceDescription: string;
  jobName: string;
  jobTitle: string;
  jobDescription: string;
  difficultyFindingWorkDescription: string;
  goals: string;
  goalsHow: string;
  clearRecordWhy: string;
  clearRecordHow: string;
  pdf: {} | undefined;
}

interface StepProps {
  setInputs: (value: any) => void;
  inputs: userInputs;
  goToPage: (pageNumber: number) => void;
}
