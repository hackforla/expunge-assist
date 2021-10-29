import React, { useState } from 'react';

interface AffirmationProviderProps {
  children: React.ReactNode;
}

interface AffirmationProps {
  isActive: boolean;
  titleText: string;
  buttonText: string;
  description: string;
}

export const AffirmationContext = React.createContext<any>(undefined);

const AffirmationContextProvider = ({ children }: AffirmationProviderProps) => {
  const [affirmationData, setAffirmationData] = useState<AffirmationProps>({
    isActive: false,
    titleText: '',
    buttonText: '',
    description: '',
  });

  const updateAffirmationData = (newState: object) => {
    setAffirmationData({ ...affirmationData, ...newState });
  };

  return (
    <AffirmationContext.Provider
      value={{ affirmationData, setAffirmationData, updateAffirmationData }}
    >
      {children}
    </AffirmationContext.Provider>
  );
};

export default AffirmationContextProvider;
