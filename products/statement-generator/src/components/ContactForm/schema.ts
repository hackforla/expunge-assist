// import { z } from 'zod';
import * as z from 'zod';
import { TFunction } from 'i18next';

// export const createContactFormSchema = (t: TFunction) =>
//   z.object({
//     name: z
//       .string()
//       .min(1, { message: t('contact_us_page.errors.name_required') })
//       .max(100, { message: t('contact_us_page.errors.name_too_long') }),
//     email: z.email({ message: t('contact_us_page.errors.invalid_email') }),
//     message: z
//       .string()
//       .min(10, { message: t('contact_us_page.errors.message_too_short') })
//       .max(2000, { message: t('contact_us_page.errors.message_too_long') }),
//   });

export const createContactFormSchema = z.object({
  name: z.string().min(1, 'contact_us_page.errors.name_required'),

  email: z.email('no no'),
  message: z.string().min(10, 'contact_us_page.errors.message_too_short'),
});

// export type ContactFormData = z.infer<
//   ReturnType<typeof createContactFormSchema>
// >;
export type ContactFormData = z.infer<typeof createContactFormSchema>;
