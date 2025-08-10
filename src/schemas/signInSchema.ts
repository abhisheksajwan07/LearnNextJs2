import { z } from "zod";
export const signInSchema = z.object({
  // email: z.string().email("Invalid email"),

  //   Sometimes apps allow login using either username or email.
  // Using a generic field name like identifier lets the backend handle whether it's an email or username.
  identifier: z.string(),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
