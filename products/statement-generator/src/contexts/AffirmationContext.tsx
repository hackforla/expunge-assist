import React, { useState, useContext, useEffect } from 'react';
import { AppUrl } from 'contexts/RoutingProps';
import RoutingContext from 'contexts/RoutingContext';

import FutureGoalsImg from 'assets/future-goals-img.svg';
import WhyImg from 'assets/why-img.svg';
import AlmostThereImg from 'assets/almost-there-img.svg';

const AFFIRMATION_DATA = {
  [AppUrl.Involvement as string]: {
    titleText: 'affirmation_popup.step2.titleText',
    description: 'affirmation_popup.step2.description',
    buttonText: 'button.letsContinue',
  },
  [AppUrl.Goals as string]: {
    titleText: 'affirmation_popup.step3.titleText',
    description: 'affirmation_popup.step3.description',
    buttonText: 'button.letsContinue',
    image: FutureGoalsImg,
  },
  [AppUrl.Why as string]: {
    titleText: 'affirmation_popup.step4.titleText',
    description: 'affirmation_popup.step4.description',
    buttonText: 'button.letsContinue',
    image: WhyImg,
  },
  [AppUrl.Finalize as string]: {
    titleText: 'affirmation_popup.step5.titleText',
    description: 'affirmation_popup.step5.description',
    buttonText: 'button.letsContinue',
    image: AlmostThereImg,
  },
};

interface AffirmationProviderProps {
  children: React.ReactNode;
}

interface AffirmationProps {
  isActive: boolean;
  titleText: string;
  buttonText: string;
  backButtonText?: string;
  description: string;
  image?: string;
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

  const [affirmationShown, setAffirmationShown] = useState<{
    [key: string]: boolean;
  }>({});

  const updateAffirmationData = (newState: Partial<AffirmationProps>) => {
    setAffirmationData((prevState) => ({ ...prevState, ...newState }));
  };

  useEffect(() => {
    const newData = AFFIRMATION_DATA[currentStep as string];

    if (newData && canShowAffirmation && !affirmationShown[currentStep]) {
      updateAffirmationData({
        ...newData,
        isActive: true,
      });
      setAffirmationShown((prev) => ({ ...prev, [currentStep]: true }));
    } else {
      updateAffirmationData({
        isActive: false,
      });
    }
  }, [currentStep, canShowAffirmation]);

  return (
    <AffirmationContext.Provider
      value={{
        affirmationData,
        setAffirmationData,
        updateAffirmationData,
      }}
    >
      {children}
    </AffirmationContext.Provider>
  );
};

export default AffirmationContextProvider;
