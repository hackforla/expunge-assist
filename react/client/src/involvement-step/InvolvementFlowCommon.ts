
export interface ICheckState {
  isJobChecked: boolean;
  isRecoveryChecked: boolean;
  isSchoolChecked: boolean;
  isParentingChecked: boolean;
  isCommunityChecked: boolean;
  isNoneChecked: boolean;
}

export interface IFlow1Props {
  state: ICheckState;
  onChangeState: (newState: object) => void;
}
