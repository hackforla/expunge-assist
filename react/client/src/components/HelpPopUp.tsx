import React from 'react';
import PopUp from 'components/PopUp';

import useUtilityStyles from 'styles/utilityStyles';

const HelpPopUp = () => {
  const utilityClasses = useUtilityStyles({});

  return (
    <div className={utilityClasses.helpPopup}>
      <PopUp
        title="Some advice for your personal statement"
        info={
          '1. Remember that you are writing for a judge, so refrain from using informal language such as abbreviations or slang' +
          '\n' +
          '2. Write in complete sentences when given the option' +
          '\n' +
          '3. Use the first person when answering questions. This means telling the story from your point of view.' +
          '\n' +
          '4. Please try to limit your responses. We recommend each paragraph being 3-5 sentences.'
        }
      />
    </div>
  );
};

export default HelpPopUp;
