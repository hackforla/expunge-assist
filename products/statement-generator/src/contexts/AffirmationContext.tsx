import React, { useState, useContext, useEffect } from 'react';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

// TODO: its kind of confusing that the data is which url this should show up
//  as opposed to the step that it is referring to
const AFFIRMATION_DATA = {
  [AppUrl.Introduction as string]: {
    titleText: 'affirmations.welcome.titleText',
    description: 'affirmations.welcome.description',
    buttonText: 'button.begin',
  },
  [AppUrl.Involvement as string]: {
    titleText: 'affirmations.introduction.titleText',
    description: 'affirmations.introduction.description',
    buttonText: 'button.next',
  },
  [AppUrl.Goals as string]: {
    titleText: 'affirmations.community_service.titleText',
    description: 'affirmations.community_service.description',
    buttonText: 'button.next',
  },
  [AppUrl.Why as string]: {
    titleText: 'affirmations.goals.titleText',
    description: 'affirmations.goals.description',
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
