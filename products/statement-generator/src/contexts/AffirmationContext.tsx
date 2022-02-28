import React, { useState, useContext, useEffect } from 'react';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

// TODO: its kind of confusing that the data is which url this should show up
//  as opposed to the step that it is referring to
const AFFIRMATION_DATA = {
  // so this is welcoming new users after the Welcome screen,
  //  even though it is on the introduction page
  [AppUrl.Introduction as string]: {
    titleText: 'affirmations.step1.titleText',
    description: 'affirmations.step1.description',
    buttonText: 'button.begin',
  },
  [AppUrl.Involvement as string]: {
    titleText: 'affirmations.step2.titleText',
    description: 'affirmations.step2.description',
    buttonText: 'button.next',
  },
  [AppUrl.Goals as string]: {
    titleText: 'affirmations.step3.titleText',
    description: 'affirmations.step3.description',
    buttonText: 'button.next',
  },
  [AppUrl.Why as string]: {
    titleText: 'affirmations.step4.titleText',
    description: 'affirmations.step4.description',
    buttonText: 'button.next',
  },
  [AppUrl.Finalize as string]: {
    titleText: 'affirmations.step5.titleText',
    description: 'affirmations.step5.description',
    buttonText: 'button.next',
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
