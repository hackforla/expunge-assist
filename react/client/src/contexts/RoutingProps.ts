import LinkedListNode from 'common/LinkedListNode';

export const FORM_STEPS = {
  NONE: 'FORM_STEPS.NONE',
  BEFORE_YOU_BEGIN: 'FORM_STEPS.BEFORE_YOU_BEGIN',
  INTRODUCTION: 'FORM_STEPS.INTRODUCTION',
  INVOLVEMENT_GENERIC: 'FORM_STEPS.INVOLVEMENT_GENERIC',
  INVOLVEMENT: {
    JOB: 'FORM_STEPS.INVOLVEMENT.JOB',
    COMMUNITY_SERVICE: 'FORM_STEPS.INVOLVEMENT.COMMUNITY_SERVICE',
    RECOVERY: 'FORM_STEPS.INVOLVEMENT.RECOVERY',
    SCHOOL: 'FORM_STEPS.INVOLVEMENT.SCHOOL',
    PARENTING: 'FORM_STEPS.INVOLVEMENT.PARENTING',
    UNEMPLOYED: 'FORM_STEPS.INVOLVEMENT.UNEMPLOYED',
  },
  GOALS: 'FORM_STEPS.GOALS',
  WHY: 'FORM_STEPS.WHY',
  FINALIZE: 'FORM_STEPS.FINALIZE',
  EDITING: 'FORM_STEPS.EDITING',
  DOWNLOAD: 'FORM_STEPS.DOWNLOAD',
};

/**
 * am I overengineering???
 *
 * @returns {LinkedListNode}
 */
export function initFormSteps() {
  const NullNode = new LinkedListNode({
    data: null,
  });

  const BeforeYouBeginNode = new LinkedListNode({
    prev: NullNode,
    data: FORM_STEPS.BEFORE_YOU_BEGIN,
  });
  NullNode.next = BeforeYouBeginNode;

  const IntroductionNode = new LinkedListNode({
    prev: BeforeYouBeginNode,
    data: FORM_STEPS.INTRODUCTION,
  });
  BeforeYouBeginNode.next = IntroductionNode;

  const InvolvementNode = new LinkedListNode({
    prev: IntroductionNode,
    data: FORM_STEPS.INVOLVEMENT_GENERIC,
  });
  IntroductionNode.next = InvolvementNode;

  const GoalsNode = new LinkedListNode({
    prev: InvolvementNode,
    data: FORM_STEPS.GOALS,
  });
  InvolvementNode.next = GoalsNode;

  const WhyNode = new LinkedListNode({
    prev: GoalsNode,
    data: FORM_STEPS.WHY,
  });
  GoalsNode.next = WhyNode;

  const FinalizeNode = new LinkedListNode({
    prev: WhyNode,
    data: FORM_STEPS.FINALIZE,
  });
  WhyNode.next = FinalizeNode;

  const EditingNode = new LinkedListNode({
    prev: FinalizeNode,
    data: FORM_STEPS.EDITING,
  });
  FinalizeNode.next = EditingNode;

  const DownloadNode = new LinkedListNode({
    prev: EditingNode,
    data: FORM_STEPS.DOWNLOAD,
  });
  EditingNode.next = DownloadNode;

  return NullNode;
}
