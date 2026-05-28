import AuthenticationLayout from "@/layout/AuthenticationLayout";

import { useSelector } from "react-redux";

import Company from "@/screens/authentication/registration/company/Company";

import UserDetails from "@/screens/authentication/registration/user-details/UserDetails";

import Otp from "@/screens/authentication/registration/otp/Otp";

import Credentials from "@/screens/authentication/registration/credentials/Credentials";

import Interests from "@/screens/authentication/registration/interests/Interests";

import Wellbeing from "@/screens/authentication/registration/wellbeing/Wellbeing";

const RegistrationFlow = () => {
  const step = useSelector((state) => state.registration.step);

  switch (step) {
    case 1:
      return (
        <AuthenticationLayout>
          <Company />
        </AuthenticationLayout>
      );

    case 2:
      return (
        <AuthenticationLayout>
          <UserDetails />
        </AuthenticationLayout>
      );

    case 3:
      return (
        <AuthenticationLayout>
          <Otp />
        </AuthenticationLayout>
      );

    case 4:
      return (
        <AuthenticationLayout>
          <Credentials />
        </AuthenticationLayout>
      );

    case 5:
      return (
        <AuthenticationLayout className="w-full md:max-w-[80%]">
          <Interests />
        </AuthenticationLayout>
      );

    case 6:
      return (
        <AuthenticationLayout className="w-full md:max-w-[80%]">
          <Wellbeing />
        </AuthenticationLayout>
      );

    default:
      return <Company />;
  }
};

export default RegistrationFlow;
