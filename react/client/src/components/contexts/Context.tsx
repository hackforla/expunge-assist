import React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

interface ContextProviderProps extends RouteComponentProps<any> {
  children: React.ReactNode;
}

// Create Context
export const Context = React.createContext<any>(undefined);

// Create Provider
const ContextProvider = ({ children, history }: ContextProviderProps) => {
  const url = history.location.pathname;
  const pageNumber = Number(url.slice(url.indexOf('/form') + 6)) || 0;

  const goToPage = (pageNum: number) => {
    history.push(`/form/${pageNum}`);
  };

  return (
    <Context.Provider value={{ goToPage, pageNumber }}>
      {children}
    </Context.Provider>
  );
};

export default withRouter(ContextProvider);
