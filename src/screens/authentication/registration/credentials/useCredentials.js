// hooks/useCredentials.js

import { format } from "date-fns";

import { useDispatch } from "react-redux";

import { toast } from "sonner";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  nextStep,
  setCredentialsData,
} from "@/store/authentications/registration/registrationSlice";

// ============================================
// SCHEMA
// ============================================

export const credentialsSchema = z
  .object({
    password: z
      .string()
      .min(8, "Minimum 8 characters")
      .regex(/[A-Z]/, "At least 1 uppercase letter")
      .regex(/[0-9]/, "At least 1 number"),

    confirmPassword: z.string(),

    birthday: z.date({
      required_error: "Birthday is required",
    }),

    phone_number: z.string().regex(/^[0-9]{10,15}$/, "Invalid phone number"),

    work_anniversary: z.date().optional(),

    accepted_privacy_policy: z.boolean().refine((value) => value, {
      message: "Please accept Terms & Privacy Policy",
    }),
  })

  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",

    path: ["confirmPassword"],
  });

// ============================================
// HOOK
// ============================================

const useCredentials = () => {
  const dispatch = useDispatch();

  const form = useForm({
    resolver: zodResolver(credentialsSchema),

    mode: "onChange",

    defaultValues: {
      password: "",

      confirmPassword: "",

      birthday: undefined,

      phone_number: "",

      work_anniversary: undefined,

      accepted_privacy_policy: false,
    },
  });

  // ============================================
  // SUBMIT
  // ============================================

  const onSubmit = (values) => {
    const payload = {
      ...values,

      birthday: values.birthday ? format(values.birthday, "yyyy-MM-dd") : null,

      work_anniversary: values.work_anniversary
        ? format(values.work_anniversary, "yyyy-MM-dd")
        : null,
    };

    dispatch(setCredentialsData(payload));

    dispatch(nextStep());

    toast.success("Credentials saved successfully");
  };

  return {
    form,
    onSubmit,
  };
};

export default useCredentials;
