import { AXIOS } from "@/middleware/axios";
import { useMutation, useQuery } from "@tanstack/react-query";

export const useUserLogin = () => {
  return useMutation({
    mutationFn: async (payload) => {
      return await AXIOS.post("login", payload);
    },
  });
};

// =========================
// POST /verify-by-company-name-and-password
// =========================
export const useVerifyCompanyNameAndPassword = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await AXIOS.post("verify-by-company-name-and-password", payload);

      return response.data;
    },
  });
};

// =========================
// POST /save-user-details-and-send-otp
// =========================
export const useSaveUserDetailsAndSendOtp = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await AXIOS.post("save-user-details-and-send-otp", payload);

      return response.data;
    },
  });
};

// =========================
// POST /verify-otp-for-user-registration
// =========================
export const useVerifyOtpForUserRegistration = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await AXIOS.post("verify-otp-for-user-registration", payload);

      return response.data;
    },
  });
};

// =========================
// GET /get-wellbeing-pillars/{language_id}
// =========================
export const useGetWellbeingPillars = (languageId, options = {}) => {
  return useQuery({
    queryKey: ["wellbeing-pillars", languageId],

    queryFn: async () => {
      const response = await AXIOS.get(`get-wellbeing-pillars/${languageId}`);

      return response.data;
    },

    ...options,
  });
};

// =========================
// GET /viewWellnessInterest
// =========================
export const useViewWellnessInterest = (options = {}) => {
  return useQuery({
    queryKey: ["view-wellness-interest"],

    queryFn: async () => {
      const response = await AXIOS.get("viewWellnessInterest");

      return response.data;
    },

    ...options,
  });
};

// =========================
// POST /user-registration
// =========================
export const useUserRegistration = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await AXIOS.post("user-registration", payload);

      return response.data;
    },
  });
};

// =========================
// POST /send-otp-for-user-registration
// =========================
export const useSendOtpForUserRegistration = () => {
  return useMutation({
    mutationFn: async (payload) => {
      const response = await AXIOS.post("send-otp-for-user-registration", payload);

      return response.data;
    },
  });
};
