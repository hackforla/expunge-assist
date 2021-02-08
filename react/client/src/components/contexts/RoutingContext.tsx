import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface RoutingProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

export const RoutingContext = React.createContext<any>(undefined);

const RoutingContextProvider = ({
  children,
  history,
}: RoutingProviderProps) => {
  const url = history.location.pathname;
  const pageNumber = Number(url.slice(url.indexOf('/form') + 6)) || 0;

  const goToPage = (pageNum: number) => {
    history.push(`/form/${pageNum}`);
  };

  return (
    <RoutingContext.Provider value={{ goToPage, pageNumber }}>
      {children}
    </RoutingContext.Provider>
  );
};

export default withRouter(RoutingContextProvider);
