import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";
import BackButton from "@/screens/authentication/components/BackButton";

import useOtp from "./useOtp";

const Otp = () => {
  const { form, onSubmit, formattedTime, timer, resendOtp, isPending } = useOtp();

  const {
    formState: { isValid },
  } = form;

  return (
    <>
      {/* Heading */}

      <div className="mb-8 text-center">
        <h1 className="font-lato text-[32px] leading-9.5 font-bold text-[#184A61]">
          Input verification code
        </h1>

        <p className="text-muted-foreground mt-2 text-sm">
          We’ve sent a 6-digit OTP to your work email. Please enter it below to continue.
        </p>
      </div>

      {/* Form */}

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="otp"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-center">
                  <InputOTP maxLength={6} value={field.value} onChange={field.onChange}>
                    <InputOTPGroup className="gap-3">
                      {Array.from({ length: 6 }).map((_, index) => (
                        <InputOTPSlot
                          key={index}
                          index={index}
                          className="font-lato flex h-12 w-12 items-center justify-center !rounded-[4px] !border !border-[#BDBDBD] bg-white text-[16px] leading-none font-semibold text-[#184A61] transition-all duration-200 data-[active=true]:border-[#DA6C74] data-[active=true]:ring-2 data-[active=true]:ring-[#DA6C74]/10"
                        />
                      ))}
                    </InputOTPGroup>
                  </InputOTP>
                </div>

                <FormMessage className="text-center text-xs" />
              </FormItem>
            )}
          />

          {/* Resend */}

          <button
            type="button"
            disabled={timer > 0}
            onClick={resendOtp}
            className="text-primary w-full text-center text-sm font-medium disabled:cursor-not-allowed disabled:opacity-50"
          >
            {timer > 0 ? `Resend OTP in ${formattedTime}` : "Resend OTP"}
          </button>

          {/* Buttons */}

          <div className="flex justify-center gap-4 pt-2">
            <BackButton className="w-50" />

            <Button
              type="submit"
              disabled={!isValid || isPending}
              loading={isPending}
              className="w-50"
            >
              Submit
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Otp;
