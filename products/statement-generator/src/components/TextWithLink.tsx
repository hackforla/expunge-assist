/* eslint-disable jsx-a11y/anchor-is-valid */
// disabling -- lint is not recognizing that hrefs are being dynamically pulled from i18n translations

import React from 'react';
import { useTranslation, Trans } from 'react-i18next';

const DynamicLink = ({ className }: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
  console.log(className)
  return (
    <a>test</a>
  )
};

export default function TextWithLink({ className, i18nkey }: any) {
  const { t } = useTranslation();
  return (
    <>
      <Trans i18nKey={i18nkey} components={{ Link: <DynamicLink /> }} />
      { }
    </>
  );
}