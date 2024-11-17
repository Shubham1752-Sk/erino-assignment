import { z } from "zod";

export const contactSchema = z.object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phoneNumber: z
        .string()
        .regex(/^\d{10}$/, "Phone number must be 10 digits"),
    company: z.string().min(1,"Company name is required"),
    jobTitle: z.string().min(1,"Job title is required"),
});