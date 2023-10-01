import * as z from "zod";

export const contactFormValidator = z.object({
  firstName: z.string().trim().nonempty("Required"),
  lastName: z.string().trim().nonempty("Required"),
  email: z.string().trim().email("Invalid email"),
  message: z.string().trim().nonempty("Required"),
});

export type ContactFormSchema = z.infer<typeof contactFormValidator>;
