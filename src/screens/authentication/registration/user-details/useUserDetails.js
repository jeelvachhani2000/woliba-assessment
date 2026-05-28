import { toast } from "sonner";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  nextStep,
  setOtpToken,
  setUserDetails,
} from "@/store/authentications/registration/registrationSlice";

import { useSaveUserDetailsAndSendOtp } from "@/services/authentications";

export const userDetailsSchema = z.object({
  fname: z
    .string()
    .min(1, "First name is required")
    .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

  lname: z
    .string()
    .min(1, "Last name is required")
    .regex(/^[A-Za-z]+$/, "Only alphabets allowed"),

  mail: z.string().min(1, "Email is required").email("Invalid email"),
});

const useUserDetails = () => {
  const dispatch = useDispatch();

  const company = useSelector((state) => state.registration.company);

  const { mutate, isPending } = useSaveUserDetailsAndSendOtp();

  const form = useForm({
    resolver: zodResolver(userDetailsSchema),

    mode: "onChange",

    defaultValues: {
      fname: "",
      lname: "",
      mail: "",
    },
  });

  const onSubmit = (data) => {
    mutate(
      {
        ...data,
        company_id: company?.id,
      },
      {
        onSuccess: (response) => {
          dispatch(setOtpToken(response.data.token));

          dispatch(setUserDetails(data));

          dispatch(nextStep());

          toast.success(response?.data?.message || "OTP sent successfully");
        },

        onError: (error) => {
          toast.error(error?.response?.data?.error || "Failed to send OTP");
        },
      },
    );
  };

  return {
    form,
    onSubmit,
    isPending,
  };
};

export default useUserDetails;
