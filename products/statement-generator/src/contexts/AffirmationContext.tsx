import React, { useState, useContext, useEffect } from 'react';

import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

// TODO: its kind of confusing that the data is which url this should show up
//  as opposed to the step that it is referring to
const AFFIRMATION_DATA = {
  // even though it is on the Involvement page,
  //  this is to thank new users after the Introduction
  [AppUrl.Involvement as string]: {
    titleText: 'affirmation_popup.step2.titleText',
    description: 'affirmation_popup.step2.description',
    buttonText: 'button.letsContinue',
  },
  [AppUrl.Goals as string]: {
    titleText: 'affirmation_popup.step3.titleText',
    description: 'affirmation_popup.step3.description',
    buttonText: 'button.letsContinue',
  },
  [AppUrl.Why as string]: {
    titleText: 'affirmation_popup.step4.titleText',
    description: 'affirmation_popup.step4.description',
    buttonText: 'button.letsContinue',
  },
  [AppUrl.Finalize as string]: {
    titleText: 'affirmation_popup.step5.titleText',
    description: 'affirmation_popup.step5.description',
    buttonText: 'button.letsContinue',
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
    titleText: 'affirmation_popup.step2.titleText',
    buttonText: 'button.next',
    description: 'affirmation_popup.step2.description',
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
