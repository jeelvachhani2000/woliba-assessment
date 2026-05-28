// components/registration/UserDetails.jsx

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useSelector } from "react-redux";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useUserDetails from "./useUserDetails";

const UserDetails = () => {
  const { form, onSubmit, isPending } = useUserDetails();
  const company = useSelector((state) => state.registration.company);

  const {
    formState: { isValid },
  } = form;

  return (
    <>
      {/* Heading */}

      <h1 className="font-lato mb-5 text-center text-[32px] leading-[38px] font-bold text-[#184A61]">
        Registration
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email */}

          <FormField
            control={form.control}
            name="mail"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Email ID
                </label>

                <FormControl>
                  <Input autoFocus placeholder="Enter Email" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* First Name */}

          <FormField
            control={form.control}
            name="fname"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  First Name
                </label>

                <FormControl>
                  <Input placeholder="Enter First Name" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Last Name */}

          <FormField
            control={form.control}
            name="lname"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Last Name
                </label>

                <FormControl>
                  <Input placeholder="Enter Last Name" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          <div className="space-y-1">
            <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
              Company Name
            </label>

            <Input value={company?.company_name} disabled />
          </div>

          {/* Button */}
          <div className="flex justify-center gap-4 pt-2">
            <Button
              type="submit"
              disabled={!isValid}
              loading={isPending}
              className="w-50"
            >
              Verify Email
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default UserDetails;
