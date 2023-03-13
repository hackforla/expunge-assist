import React, { Dispatch, useEffect, useState } from 'react';
import { createClient, ContentfulClientApi } from 'contentful';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { INLINES } from '@contentful/rich-text-types';

import LinkAsText from 'components/LinkAsText';
import ContentContainer from 'components-layout/ContentContainer';

const CONTENTFUL_ENTRY_ID_FAQ = process.env.REACT_APP_CONTENTFUL_ENTRY_ID_FAQ;
const CONTENTFUL_ENV = process.env.REACT_APP_CONTENTFUL_ENV;
const CONTENTFUL_FAQ_SPACE_ID = process.env.REACT_APP_CONTENTFUL_FAQ_SPACE_ID;
const CONTENTFUL_DELIVERY_API_ACCESS_TOKEN =
  process.env.REACT_APP_CONTENTFUL_DELIVERY_API_ACCESS_TOKEN;

function FAQ() {
  let cmsClient: ContentfulClientApi;

  const [faqContent, setFaqContent]: [any, Dispatch<any>] = useState<any>(null);

  try {
    cmsClient = createClient({
      environment: CONTENTFUL_ENV,
      space: CONTENTFUL_FAQ_SPACE_ID || '',
      accessToken: CONTENTFUL_DELIVERY_API_ACCESS_TOKEN || '',
    });
  } catch (error) {
    // eslint-disable-next-line  no-console
    console.error(`error creating Contentful Client: ${error}`);
  }

  useEffect((): void => {
    if (cmsClient && CONTENTFUL_ENTRY_ID_FAQ) {
      cmsClient
        .getEntry(CONTENTFUL_ENTRY_ID_FAQ)
        .then((entry: any) => {
          const renderOptions = {
            renderNode: {
              // Renders hyperlink elements as a LinkAsText components
              // The LinkAsText implementation only renders the href/uri, which may
              // not work as expected if contentful link includes other content.
              [INLINES.HYPERLINK]: (node: any) => {
                const {
                  data: { uri },
                } = node;

                return <LinkAsText link={uri} />;
              },
            },
          };

          const nodes = documentToReactComponents(
            entry.fields.faqContent,
            renderOptions
          );

          setFaqContent(nodes);
        })
        .catch((error) => {
          // eslint-disable-next-line  no-console
          console.error(`error rendring FAQ from Contentful: ${error}`);
        });
    }
  }, []);

  return <ContentContainer>{faqContent}</ContentContainer>;
}

export default FAQ;
