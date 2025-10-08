import z from "zod";

export const signUpSchema = z.object({
  email: z
    .string()
    .regex(
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g,
      "Invalid email address"
    ),
  password: z
    .string()
    .regex(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm,
      "Password must be at least 8 characters long, contain at least 1 uppercase letter, 1 lowercase letter, and 1 number, and can contain special characters"
    ),
  username: z
    .string()
    .min(3, "Username must be at least 3 characters long")
    .max(24, "Username must be at most 24 characters long")
    .regex(
      /(?!.*[\.\-\_]{2,})^[a-zA-Z0-9\.\-\_]{3,24}$/gm,
      "Username can only contain letters, numbers, dots, hyphens, and underscores"
    ),
});
