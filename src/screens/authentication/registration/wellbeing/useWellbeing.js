// hooks/useWellbeing.js

import { useUserRegistration } from "@/services/authentications";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

import { resetRegistration } from "@/store/authentications/registration/registrationSlice";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useGetWellbeingPillars } from "@/services/authentications";
import { setCredentials } from "@/store/authentications/authenticationsSlice";
import { useSelector } from "react-redux";

export const wellbeingSchema = z.object({
  wellbeing_pillars: z
    .array(z.number())
    .min(3, "Select exactly 3 pillars")
    .max(3, "Only 3 pillars allowed"),
});

const useWellbeing = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading } = useGetWellbeingPillars(1);
  const { mutate } = useUserRegistration();
  const registration = useSelector((state) => state.registration);

  const form = useForm({
    resolver: zodResolver(wellbeingSchema),

    mode: "onChange",

    defaultValues: {
      wellbeing_pillars: [],
    },
  });

  const pillars = data?.data || [];

  // =========================
  // SUBMIT
  // =========================

  const onSubmit = (data) => {
    // dispatch(setWellbeing(data.wellbeing_pillars));

    const payload = {
      fname: registration.userDetails.fname,
      lname: registration.userDetails.lname,
      password: registration.credentials.password,
      birthday: registration.credentials.birthday,
      phone_number: registration.credentials.phone_number,
      work_anniversary: registration.credentials.work_anniversary,
      token: registration.otpToken,
      accepted_privacy_policy: registration.credentials.accepted_privacy_policy,
      wellbeing_pillars: data.wellbeing_pillars,
      areas_of_interest: registration.interests,
      time_zone: Intl.DateTimeFormat().resolvedOptions().timeZone,
      language_id: 1,
      user_type: 0,
    };

    mutate(payload, {
      onSuccess: (response) => {
        // Save LOGIN/AUTH data
        dispatch(
          setCredentials({
            token: response?.data?.token,
            user: response?.data?.user,
          }),
        );

        // Clear registration flow data
        dispatch(resetRegistration());

        toast.success("Registration completed successfully");

        navigate("/dashboard");
      },

      onError: (error) => {
        toast.error(error?.response?.data?.error || "Registration failed");
      },
    });
  };

  return {
    form,

    onSubmit,

    pillars,

    isLoading,
  };
};

export default useWellbeing;
