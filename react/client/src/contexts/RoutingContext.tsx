import React, { useEffect, useState } from 'react';
import {
  withRouter,
  RouteComponentProps,
} from 'react-router-dom';

const FORM_STEPS = {
  NONE: 'FORM_STEPS.NONE',
  BEFORE_YOU_BEGIN: 'FORM_STEPS.BEFORE_YOU_BEGIN',
  INTRODUCTION: 'FORM_STEPS.INTRODUCTION',
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
}

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

export const RoutingContext = React.createContext<any>(undefined);

const RoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [formStep, updateFormStep] = useState(FORM_STEPS.NONE);

  const url = history.location.pathname;
  const pageNumber = Number(url.slice(url.indexOf('/form') + 6)) || 0;

  const goNextPage = () => {
    history.push(`/form/${pageNumber + 1}`);
  };
  const goBackPage = () => {
    history.push(`/form/${pageNumber - 1}`);
  };

  useEffect(() => {
    const isOnFormPage = url.indexOf('/form') >= 0;
    if (!isOnFormPage) {
      updateFormStep(FORM_STEPS.NONE);

    } else if (isOnFormPage && formStep === FORM_STEPS.NONE) {
      updateFormStep(FORM_STEPS.BEFORE_YOU_BEGIN);
    }
  }, [url])

  return (
    <RoutingContext.Provider value={{ goNextPage, goBackPage, pageNumber, formStep }}>
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
