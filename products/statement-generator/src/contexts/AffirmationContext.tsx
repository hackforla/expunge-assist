import React, { useState, useContext, useEffect } from 'react';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

const AFFIRMATION_DATA = {
  [AppUrl.Introduction as string]: {
    titleText: 'Welcome',
    buttonText: 'Begin',
    description: 'This is a tool to generate a personal statement.',
  },
  [AppUrl.Involvement as string]: {
    titleText: 'Congrats',
    buttonText: 'Next',
    description:
      'You just finished introducing yourself! You are well on your way to completing your personal statement and getting your record cleared.',
  },
  [AppUrl.Goals as string]: {
    titleText: 'Hooray',
    buttonText: 'Next',
    description:
      'You just finished telling everyone about your involvement in your city and your various communities. Thank you for taking the time to tell us about this.',
  },
  [AppUrl.Why as string]: {
    titleText: 'Great Job',
    buttonText: 'Next',
    description:
      'Those are some amazing goals you’ve set for yourself! You’re one step closer towards acheiving them too by getting your record cleared.',
  },
};

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
  const { currentStep, canShowAffirmation } = useContext(RoutingContext);
  const [affirmationData, setAffirmationData] = useState<AffirmationProps>({
    isActive: false,
    titleText: 'title',
    buttonText: 'Next',
    description: 'description',
  });

  const updateAffirmationData = (newState: object) => {
    setAffirmationData({ ...affirmationData, ...newState });
  };

  useEffect(() => {
    const newData = AFFIRMATION_DATA[currentStep as string];

    if (newData !== undefined) {
      updateAffirmationData({
        ...newData,
        isActive: canShowAffirmation,
      });
    } else {
      updateAffirmationData({
        isActive: false,
      });
    }
  }, [currentStep]);

  return (
    <AffirmationContext.Provider
      value={{ affirmationData, setAffirmationData, updateAffirmationData }}
    >
      {children}
    </AffirmationContext.Provider>
  );
};

export default AffirmationContextProvider;
