import { TFunction } from 'i18next';

export function getHost(href: string): string | null {
  try {
    const u = new URL(href, window.location.origin);
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
