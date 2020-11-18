interface StepProps {
  setInputs: (value: any) => void;
  inputs: {};
}

interface userInputs {
  name:string;
  age:number | null;
  introduction:string;
  lifeChanges: string;
  communityServiceOrgName: string;
  communityServiceDescription: string;
  jobName:string;
  jobTitle:string;
  jobDescription:string;
  difficultyFindingWorkDescription:string
  goals: string;
  goalsHow: string;
  clearRecordWhy: string;
  clearRecordHow: string;
}