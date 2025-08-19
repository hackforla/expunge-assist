// src/__tests__/linkPublisherHelper.test.ts
import { TFunction } from 'i18next';
import { getHost, getPublisherName } from 'helpers/linkPublisherHelper';

const PUBLISHERS: Record<string, string> = {
  'selfhelp.courts.ca.gov': 'Judicial Branch of California',
  'courts.ca.gov': 'Los Angeles County Neighborhood Legal Services',
  'leginfo.legislature.ca.gov': 'California Legislative Counsel',
  'roadmap.rootandrebound.org': 'Root & Rebound',
};

const createMockT = (publishers: Record<string, string>): TFunction =>
  ((key: string, options?: { returnObjects?: boolean }) =>
    key === 'publishers' && options?.returnObjects
      ? publishers
      : key) as unknown as TFunction;

const t = createMockT(PUBLISHERS);

// --- getHost ---
describe('getHost', () => {
  it.each([
    [
      'https://selfhelp.courts.ca.gov/clean-your-record',
      'selfhelp.courts.ca.gov',
    ],
    [
      'https://www.courts.ca.gov/partners/documents/ExpSBS.pdf',
      'courts.ca.gov',
    ],
    [
      'https://leginfo.legislature.ca.gov/faces/billTextClient.xhtml?bill_id=202120220SB731',
      'leginfo.legislature.ca.gov',
    ],
    ['//example.com/path', 'example.com'], // protocol-relative
    ['https://EXAMPLE.COM/path', 'example.com'], // lowercased
    ['https://example.com/path?query=value#fragment', 'example.com'],
  ])('extracts host from %s → %s', (url, expected) => {
    expect(getHost(url)).toBe(expected);
  });

  it.each([[''], ['not-a-valid-url'], ['http://']])(
    'returns null for invalid/hostless input "%s"',
    (input) => {
      expect(getHost(input)).toBeNull();
    }
  );
});

// --- getPublisherName ---
describe('getPublisherName', () => {
  it.each([
    ['selfhelp.courts.ca.gov', 'Judicial Branch of California'],
    ['courts.ca.gov', 'Los Angeles County Neighborhood Legal Services'],
    ['leginfo.legislature.ca.gov', 'California Legislative Counsel'],
    ['roadmap.rootandrebound.org', 'Root & Rebound'],
  ])('returns mapped publisher for %s', (host, expected) => {
    expect(getPublisherName(t, host)).toBe(expected);
  });

  it.each([[null], [undefined], [''], ['unknown.example.com']])(
    'returns null for non-matching host %p',
    (host) => {
      expect(getPublisherName(t, host)).toBeNull();
    }
  );
});

// --- Integration ---
describe('integration: URL → host → publisher', () => {
  it.each([
    [
      'https://www.courts.ca.gov/partners/documents/ExpSBS.pdf',
      'courts.ca.gov',
      'Los Angeles County Neighborhood Legal Services',
    ],
    ['https://unknown.example.com/page', 'unknown.example.com', null],
    ['invalid-url', null, null],
  ])(
    'pipes %s → host %p → publisher %p',
    (url, hostExpected, publisherExpected) => {
      const host = getHost(url);
      const publisher = getPublisherName(t, host);
      expect(host).toBe(hostExpected);
      expect(publisher).toBe(publisherExpected);
    }
  );
});
