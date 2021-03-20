import React, { useEffect, useState } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { FORM_STEPS, initFormSteps } from 'contexts/RoutingProps';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

export const RoutingContext = React.createContext<any>(undefined);

const FormStepNode = initFormSteps();

const RoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const [stepNode, updateStepNode] = useState(FormStepNode);

  const url = history.location.pathname;
  const pageNumber = Number(url.slice(url.indexOf('/form') + 6)) || 0;

  const goNextPage = () => {
    const nextNode = stepNode.next;
    if (nextNode !== undefined) {
      updateStepNode(nextNode);
      history.push(`/form/${nextNode.data.split('.')[1]}`);
    }
  };
  const goBackPage = () => {
    // history.push(`/form/${pageNumber - 1}`);
    const prevNode = stepNode.prev;
    if (prevNode !== undefined) {
      updateStepNode(prevNode);
      history.push(`/form/${prevNode.data.split('.')[1]}`);
    }
  };

  // useEffect(() => {
  //   const isOnFormPage = url.indexOf('/form') >= 0;
  //   console.log('isOnFormPage', isOnFormPage)
  //   if (isOnFormPage && stepNode.data === null) {
  //     updateStepNode(initFormSteps());
  //   }
  // }, [url]);

  return (
    <RoutingContext.Provider
      value={{ goNextPage, goBackPage, pageNumber, formStep: stepNode.data }}
    >
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
