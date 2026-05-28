import { toast } from "sonner";

import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  nextStep,
  setCompanyData,
} from "@/store/authentications/registration/registrationSlice";

import { useVerifyCompanyNameAndPassword } from "@/services/authentications";

export const companySchema = z.object({
  company_name: z.string().min(1, "Company name is required"),

  password: z
    .string()
    .min(8, "Minimum 8 characters")
    .regex(/[A-Z]/, "At least 1 uppercase letter")
    .regex(/[0-9]/, "At least 1 number"),
});

const useCompany = () => {
  const dispatch = useDispatch();
  const { mutate, isPending } = useVerifyCompanyNameAndPassword();
  const form = useForm({
    resolver: zodResolver(companySchema),
    mode: "onChange",
    defaultValues: {
      company_name: "",
      password: "",
    },
  });
  const onSubmit = (data) => {
    mutate(data, {
      onSuccess: (response) => {
        dispatch(setCompanyData(response.data[0]));

        dispatch(nextStep());

        toast.success("Company verified successfully");
      },

      onError: (error) => {
        toast.error(error?.response?.data?.error || "Failed to verify company");
      },
    });
  };

  return {
    form,
    onSubmit,
    isPending,
  };
};

export default useCompany;
