// hooks/useInterests.js

import { toast } from "sonner";

import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  nextStep,
  setInterests,
} from "@/store/authentications/registration/registrationSlice";

import { useViewWellnessInterest } from "@/services/authentications";

export const interestSchema = z.object({
  areas_of_interest: z.array(z.number()).min(1, "Select at least one interest"),
});

const useInterests = () => {
  const dispatch = useDispatch();

  const { data, isLoading } = useViewWellnessInterest();

  const form = useForm({
    resolver: zodResolver(interestSchema),

    mode: "onChange",

    defaultValues: {
      areas_of_interest: [],
    },
  });

  const interests = data?.data || [];

  // =========================
  // GROUP INTERESTS
  // =========================

  const groupedInterests = interests.reduce((acc, item) => {
    if (!acc[item.interest_type]) {
      acc[item.interest_type] = [];
    }

    acc[item.interest_type].push(item);

    return acc;
  }, {});

  // =========================
  // SUBMIT
  // =========================

  const onSubmit = (data) => {
    dispatch(setInterests(data.areas_of_interest));

    dispatch(nextStep());

    toast.success("Interests selected successfully");
  };

  return {
    form,

    onSubmit,

    interests,

    groupedInterests,

    isLoading,
  };
};

export default useInterests;
