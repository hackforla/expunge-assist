import React from 'react';
import { makeStyles, createStyles, Link } from '@material-ui/core';
import { useHistory } from 'react-router-dom';

import Button from 'components/Button';

import useUtilityStyles from 'styles/utilityStyles';

const useStyles = makeStyles(() =>
  createStyles({
    linkAsText: {
      color: 'white',
    },
  })
);

function LinkAsText({ link }: any) {
  const classes = useStyles();
  return (
    <>
      &nbsp;
      <Link underline="always" className={classes.linkAsText} href={link}>
        {link}
      </Link>
      &nbsp;
    </>
  );
}

function FAQ() {
  const utilityClasses = useUtilityStyles({
    pageTheme: 'dark',
  });
  const history = useHistory();

  return (
    <div className={utilityClasses.primaryContainer}>
      <div className={utilityClasses.contentContainer}>
        <h2>FAQ</h2>

        <h3>Why do I need a personal statement?</h3>
        <p>
          The personal statement is a brief essay about your current life
          situation. You can use it to tell the judge why you’re worthy of
          having your felony conviction re-classified as a misdemeanor under
          Prop 47. You can also use it for the same purpose to reclassify your
          marijuana felony conviction to a misdemeanor or have it completely
          expunged under Pro 64.
        </p>

        <h3>
          What type of convictions are eligible to be reclassified to a
          misdemeanor under Prop 47?
        </h3>
        <p>
          Certain individuals with a low-level non-violent prior felony record
          or who are currently incarcerated may qualify to change their record
          or their sentence to a misdemeanor for the following offenses:
          <br />
          <br />
          • Simple drug possession
          <br />
          • Petty theft under $950
          <br />
          • Shoplifting under $950
          <br />
          • Forgery under $950
          <br />
          • Writing a bad check under $950
          <br />
          • Receipt of stolen property under $950
          <br />
          <br />
          However there are some very important exceptions and restrictions so
          please visit
          <LinkAsText link="https://www.courts.ca.gov/prop47.htm" />
          for more information.
        </p>

        <h3>When do I need to file my Prop 47 application?</h3>
        <p>
          You need to file your Prop 47 application by November 4, 2022.
          However, you can still file past that dateline if you have a valid
          excuse. Please visit
          <LinkAsText link="https://www.courts.ca.gov/prop47.htm" />
          for more information.
        </p>

        <h3>
          What type of marijuana convictions are eligible to be reclassified to
          a misdemeanor or completely expunged under Prop 64?
        </h3>
        <p>
          There is a long list of mariruana offenses that can be reclassified or
          completely expunged under California’s Prop 64. It includes:
          <br />
          <br />
          • Possession of one ounce or less of marijuana
          <br />
          • Possession of marijuana for sale.
          <br />
          <br />
          Please visit
          <LinkAsText link="https://www.courts.ca.gov/prop64.htm" />
          for a complete list and for more information.
        </p>

        <h3>When do I need to file my Prop 64 application?</h3>
        <p>
          There is no deadline for filing a Prop 64 application. You may file
          any time.
        </p>

        <h3>Are there any helpful resources for getting my record cleared?</h3>
        <p>
          There are a lot of organizations that help with record clearance. Here
          is a non-comprehensive list of organizations that provide support:
          <br />
          <br />
          Clear My Record (Code for America)
          <br />
          <br />• NDICA
        </p>

        <div className={utilityClasses.buttonContainerBuffer} />
        <div className={utilityClasses.buttonContainer}>
          <Button
            onClick={() => history.goBack()}
            buttonText="Back"
            theme="transparent"
          />
        </div>
      </div>
    </div>
  );
}

export default FAQ;
