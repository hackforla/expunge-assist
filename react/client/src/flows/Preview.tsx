import React, { useState, useEffect } from 'react';
import TextPreview from 'components/TextPreview';
import Button from 'components/Button';

interface PreviewProps {
  currentPrev: string;
  inputs: userInputs;
  goToPage: (pageNumber: number) => void;
}

const Preview = ({ currentPrev, inputs, goToPage }: PreviewProps) => {
  const [content, setContent] = useState('');
  const [prevPage, setPrevPage] = useState(1);
  const [nextPage, setNextPage] = useState(10);
  useEffect(() => {
    if (currentPrev === 'Introduction') {
      setContent(
        `Thank you so much for taking the time to read my personal statement. My name is ${inputs.name}, and I am ${inputs.age} years old.`
      );
      setPrevPage(3);
      setNextPage(4);
    } else if (currentPrev === 'Involvement') {
      setContent(
        `Since my conviction, ${inputs.introduction}. I believe that having my record cleared would help me find a job and be more involved in my community.`
      );
      setPrevPage(4);
      setNextPage(5);
    } else if (currentPrev === 'Future Goals') {
      setContent(
        `${inputs.goals}. To work towards my goals; ${inputs.goalsHow}. Having my record cleared would help me achieve these goals for my future.`
      );
      setPrevPage(5);
      setNextPage(6);
    } else if (currentPrev === 'Why') {
      setContent(
        `I want to clear my record because ${inputs.clearRecordWhy}. ${inputs.clearRecordHow}`
      );
      setPrevPage(6);
      setNextPage(7);
    }
  }, [currentPrev]);

  return (
    <div>
      <TextPreview
        content={content}
        onAdjustClick={() => console.log('adjust clicked')}
        nameOfStep={currentPrev}
      />
      <Button onClick={() => goToPage(prevPage)} buttonText="BACK" />
      <Button onClick={() => goToPage(nextPage)} buttonText="LOOKS GOOD" />
    </div>
  );
};

export default Preview;
