// hooks/useOtp.js

import { useEffect, useRef, useState } from "react";

import { toast } from "sonner";

import { useDispatch, useSelector } from "react-redux";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import {
  nextStep,
  setOtpVerified,
} from "@/store/authentications/registration/registrationSlice";

import {
  useSendOtpForUserRegistration,
  useVerifyOtpForUserRegistration,
} from "@/services/authentications";

export const otpSchema = z.object({
  otp: z.string().length(6, "OTP must be 6 digits"),
});

const useOtp = () => {
  const dispatch = useDispatch();

  const inputRefs = useRef([]);

  // =========================
  // 3 MINUTES TIMER
  // =========================

  const [timer, setTimer] = useState(180);

  const token = useSelector((state) => state.registration.otpToken);

  const email = useSelector((state) => state.registration.userDetails.mail);

  const { mutate, isPending } = useVerifyOtpForUserRegistration();

  const { mutate: resendOtpMutation } = useSendOtpForUserRegistration();

  const form = useForm({
    resolver: zodResolver(otpSchema),

    mode: "onChange",

    defaultValues: {
      otp: "",
    },
  });

  // =========================
  // FORMAT TIMER
  // =========================

  const minutes = Math.floor(timer / 60);

  const seconds = timer % 60;

  const formattedTime = `${minutes}:${seconds.toString().padStart(2, "0")}`;

  // =========================
  // TIMER
  // =========================

  useEffect(() => {
    if (timer <= 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  // =========================
  // OTP CHANGE
  // =========================

  const handleOtpChange = (e, index) => {
    const value = e.target.value.replace(/[^0-9]/g, "");

    const otpArray = form.getValues("otp").split("");

    otpArray[index] = value;

    const finalOtp = otpArray.join("").slice(0, 6);

    form.setValue("otp", finalOtp);

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  // =========================
  // BACKSPACE
  // =========================

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace") {
      const otpArray = form.getValues("otp").split("");

      otpArray[index] = "";

      form.setValue("otp", otpArray.join(""));

      if (index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  // =========================
  // PASTE OTP
  // =========================

  const handlePaste = (e) => {
    const pasted = e.clipboardData.getData("text").slice(0, 6);

    if (!/^[0-9]+$/.test(pasted)) return;

    form.setValue("otp", pasted);

    pasted.split("").forEach((digit, index) => {
      if (inputRefs.current[index]) {
        inputRefs.current[index].value = digit;
      }
    });
  };

  // =========================
  // SUBMIT
  // =========================

  const onSubmit = (data) => {
    mutate(
      {
        otp: data.otp,

        token,
      },
      {
        onSuccess: () => {
          dispatch(setOtpVerified(true));

          dispatch(nextStep());

          toast.success("OTP verified successfully");
        },

        onError: (error) => {
          toast.error(error?.response?.data?.error || "Invalid OTP");
        },
      },
    );
  };

  // =========================
  // RESEND OTP
  // =========================

  const resendOtp = () => {
    resendOtpMutation(
      {
        email,
      },
      {
        onSuccess: () => {
          // RESET TO 3 MINUTES
          setTimer(180);

          toast.success("OTP resent successfully");
        },

        onError: () => {
          toast.error("Failed to resend OTP");
        },
      },
    );
  };

  return {
    form,
    onSubmit,

    timer,
    formattedTime,

    resendOtp,

    isPending,

    inputRefs,

    handleOtpChange,

    handleKeyDown,

    handlePaste,
  };
};

export default useOtp;
