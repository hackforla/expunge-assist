import { z } from 'zod';
import { TFunction } from 'i18next';

export const createContactFormSchema = (t: TFunction) =>
  z.object({
    name: z
      .string()
      .min(1, { message: t('contact_us_page.errors.name_required') })
      .max(100, { message: t('contact_us_page.errors.name_too_long') }),
    email: z.email({ message: t('contact_us_page.errors.invalid_email') }),
    message: z
      .string()
      .min(10, { message: t('contact_us_page.errors.message_too_short') })
      .max(2000, { message: t('contact_us_page.errors.message_too_long') }),
  });

export type ContactFormData = z.infer<
  ReturnType<typeof createContactFormSchema>
>;
