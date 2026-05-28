// components/registration/Credentials.jsx

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import BackButton from "@/screens/authentication/components/BackButton";
import { format } from "date-fns";

import { Input } from "@/components/ui/input";

import { Checkbox } from "@/components/ui/checkbox";

import useCredentials from "./useCredentials";

const Credentials = () => {
  const {
    form,

    onSubmit,
  } = useCredentials();

  const {
    formState: { isValid },
  } = form;

  return (
    <>
      {/* Heading */}

      <h1 className="font-lato mb-5 text-center text-[32px] leading-[38px] font-bold text-[#184A61]">
        Login Credentials
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Password */}

          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Password
                </label>

                <FormControl>
                  <Input
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Enter password"
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Confirm Password */}

          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Confirm Password
                </label>

                <FormControl>
                  <Input
                    type="password"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder="Confirm password"
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Birthday */}

          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Birthday
                </label>

                <FormControl>
                  <Input
                    type="date"
                    onChange={field.onChange}
                    value={field.value ? format(new Date(field.value), "MM/dd/yyyy") : ""}
                    placeholder="Select date of birth [MM/DD/YYYY]"
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Phone */}

          <FormField
            control={form.control}
            name="phone_number"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Contact Number
                </label>

                <FormControl>
                  <Input placeholder="Enter contact number" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Work Anniversary */}

          {/* <FormField
            control={form.control}
            name="work_anniversary"
            render={({ field }) => (
              <FormItem className="space-y-1">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Work Anniversary
                </label>

                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          /> */}

          {/* Terms */}

          <FormField
            control={form.control}
            name="accepted_privacy_policy"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3 pt-2">
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />

                <label className="text-sm">
                  I agree to Woliba’s Terms of Service and Privacy Policy.
                </label>
              </FormItem>
            )}
          />

          {/* Button */}

          <div className="flex justify-center gap-4 pt-2">
            <BackButton className="w-50" />
            <Button type="submit" disabled={!isValid} className="w-50">
              Next
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Credentials;
