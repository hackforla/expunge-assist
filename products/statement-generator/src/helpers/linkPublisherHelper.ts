import { TFunction } from 'i18next';

export function getNormalizedHost(href: string): string | null {
  try {
    // Check for empty/invalid input
    if (!href || typeof href !== 'string') {
      return null;
    }

    // Check if it's a protocol-relative URL (starts with //)
    if (href.startsWith('//')) {
      const u = new URL(`https:${href}`);
      return u.host.toLowerCase().replace(/^www\./, '');
    }

    // For absolute URLs, parse directly without base
    const u = new URL(href);
    return u.host.toLowerCase().replace(/^www\./, '');
  } catch {
    return null;
  }
}

export function getPublisherName(
  t: TFunction,
  host?: string | null
): string | null {
  if (!host) return null;
  const publishers = t('publishers', { returnObjects: true }) as Record<
    string,
    string
  >;
  return publishers[host] ?? null;
}
