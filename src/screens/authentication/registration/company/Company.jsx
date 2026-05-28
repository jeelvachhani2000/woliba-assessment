import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import useCompany from "./useCompany";

const Company = () => {
  const { form, onSubmit, isPending } = useCompany();

  const {
    formState: { isValid },
  } = form;

  return (
    <>
      {/* Heading */}
      <h1 className="font-lato mb-5 text-center text-[32px] leading-9.5 font-bold text-[#184A61]">
        Registration
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Company Name */}
          <FormField
            control={form.control}
            name="company_name"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <label className="font-lato text-sm leading-4.5 font-medium text-[#184A61]">
                  Company Name
                </label>

                <FormControl>
                  <Input placeholder="Enter Company Name" {...field} />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <label className="font-lato text-sm leading-[18px] font-medium text-[#184A61]">
                  Company Password
                </label>

                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Company Password"
                    {...field}
                  />
                </FormControl>

                <FormMessage className="text-xs" />
              </FormItem>
            )}
          />

          {/* Button */}
          <div className="flex justify-center pt-2">
            <Button
              type="submit"
              disabled={!isValid}
              loading={isPending}
              className="w-[200px]"
            >
              Next
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Company;
