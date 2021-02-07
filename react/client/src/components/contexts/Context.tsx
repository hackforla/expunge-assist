import React, { useState } from 'react';

type ContextProviderProps = {
  children: React.ReactNode;
  history: {
    location: {
      pathname: string;
    };
    push: (address: string) => void;
  };
};

// const pageNumber: number = Number(match.params.page) || 0;

// Create Context
const defaultTheme = 'white';
export const Context = React.createContext<any>(undefined);

// Create Provider
const ContextProvider = ({ children, history }: ContextProviderProps) => {
  console.log(history);
  const [theme, setTheme] = useState(defaultTheme);
  const goToPage = (nextPage: number) => {
    history.push(`/form/${nextPage}`);
  };

  return (
    <Context.Provider value={{ theme, setTheme, goToPage }}>
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
