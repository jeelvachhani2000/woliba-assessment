import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";

import { Button } from "@/components/ui/button";

import BackButton from "@/screens/authentication/components/BackButton";

import { cn } from "@/lib/utils";

import useWellbeing from "./useWellbeing";

const Wellbeing = () => {
  const { form, onSubmit, pillars } = useWellbeing();
  const selected = form.watch("wellbeing_pillars");
  const {
    formState: { isValid },
  } = form;

  const togglePillar = (id) => {
    const current = form.getValues("wellbeing_pillars");

    let updatedValues = current;

    if (current.includes(id)) {
      updatedValues = current.filter((item) => item !== id);
    } else if (current.length < 3) {
      updatedValues = [...current, id];
    }

    form.setValue("wellbeing_pillars", updatedValues, {
      shouldValidate: true,
      shouldDirty: true,
    });
  };

  const handleFinalSubmit = (data) => {
    onSubmit(data);
  };

  return (
    <>
      {/* Heading */}

      <h1 className="font-lato text-16 mb-5 text-center leading-6.5 font-bold text-[#184A61]">
        Select any 3 well-being pillars goal you want to achieve{" "}
      </h1>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleFinalSubmit)} className="flex flex-col">
          <FormField
            control={form.control}
            name="wellbeing_pillars"
            render={() => (
              <FormItem>
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                  {pillars.map((pillar) => {
                    const isSelected = selected.includes(pillar.id);

                    const isDisabled = selected.length >= 3 && !isSelected;

                    return (
                      <button
                        key={pillar.id}
                        type="button"
                        disabled={isDisabled}
                        onClick={() => togglePillar(pillar.id)}
                        className={cn(
                          "flex min-h-20.5 cursor-pointer items-center gap-4 rounded-[10px] border border-[#EFEFEF] bg-white px-4 py-2 text-left transition-all duration-200",

                          isDisabled
                            ? "cursor-not-allowed opacity-50"
                            : "hover:border-[#DA6C74]",
                        )}
                      >
                        <div
                          className={cn(
                            "mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-[4px] border transition-all duration-200",
                            isSelected
                              ? "border-[#DA6C74] bg-[#DA6C74]"
                              : "border-[#989898] bg-white",
                          )}
                        >
                          {isSelected && (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              className="h-2.5 w-2.5 text-white"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          )}
                        </div>

                        {/* Content */}

                        <div className="space-y-1">
                          <h3 className="text-muted-foreground text-sm font-medium">
                            {pillar.pillar_title}
                          </h3>

                          <p className="font-lato text-[14px] leading-[20px] text-[#BDBDBD]">
                            {pillar.description}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <FormMessage className="mt-4 text-xs" />
              </FormItem>
            )}
          />

          {/* Footer */}

          <div className="flex justify-center gap-4 pt-3">
            <BackButton className="w-50" />
            <Button type="submit" disabled={!isValid} className="w-50">
              Done
            </Button>
          </div>
        </form>
      </Form>
    </>
  );
};

export default Wellbeing;
