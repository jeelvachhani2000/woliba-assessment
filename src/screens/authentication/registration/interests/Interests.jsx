// components/registration/Interests.jsx

import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import { Button } from "@/components/ui/button";

import BackButton from "@/screens/authentication/components/BackButton";

import { cn } from "@/lib/utils";

import useInterests from "./useInterests";

const Interests = () => {
  const { form, onSubmit, groupedInterests } = useInterests();

  const selected = form.watch("areas_of_interest");

  // =========================
  // TOGGLE INTEREST
  // =========================

  const toggleInterest = (id) => {
    const current = form.getValues("areas_of_interest");

    const updatedValues = current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id];

    form.setValue("areas_of_interest", updatedValues, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const {
    formState: { isValid },
  } = form;

  return (
    <>
      {/* Heading */}

      <h1 className="font-lato text-16 mb-5 text-center leading-6.5 font-bold text-[#184A61]">
        Select all wellness interests that apply — at least one is required.
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="areas_of_interest"
            render={() => (
              <FormItem>
                <Accordion
                  type="multiple"
                  defaultValue={[Object.keys(groupedInterests)[0]]}
                  className="space-y-2"
                >
                  {Object.entries(groupedInterests).map(([category, interests]) => (
                    <AccordionItem key={category} value={category} className="border-0">
                      <AccordionTrigger className="font-lato text-16 py-2 text-left font-medium text-[#989898] hover:no-underline">
                        {category}
                      </AccordionTrigger>

                      <AccordionContent className="pb-5">
                        <div className="flex flex-wrap gap-3">
                          {interests.map((interest) => {
                            const isSelected = selected.includes(interest.id);
                            return (
                              <Button
                                key={interest.id}
                                type="button"
                                variant="outline"
                                onClick={() => toggleInterest(interest.id)}
                                className={cn(
                                  "font-lato h-auto rounded-full border px-5 py-2.5 text-[15px] font-medium transition-all duration-200",
                                  isSelected
                                    ? "border-[#DA6C74] bg-[#DA6C74] text-white hover:bg-[#C95A63]"
                                    : "border-[#E5E7EB] bg-white text-[#184A61] hover:border-[#DA6C74] hover:bg-[#FFF5F6]",
                                )}
                              >
                                {interest.name}
                              </Button>
                            );
                          })}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>

                <FormMessage className="mt-4 text-xs" />
              </FormItem>
            )}
          />

          {/* Footer Buttons */}

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

export default Interests;
