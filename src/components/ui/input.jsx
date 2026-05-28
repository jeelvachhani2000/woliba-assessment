import * as React from "react";

import { format } from "date-fns";

import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { CalendarDays, Eye, EyeOff } from "lucide-react";

import { cn } from "@/lib/utils";

function Input({ className, type = "text", value, onChange, placeholder, ...props }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const isPassword = type === "password";

  const isDate = type === "date";

  const handleDateSelect = (date) => {
    onChange?.(date);

    setOpen(false);
  };

  const inputElement = (
    <div
      className={cn(
        "flex h-12 w-full items-center rounded-[4px] border border-[#BDBDBD] bg-white px-4 transition-all duration-200 focus-within:border-[#DA6C74] focus-within:ring-2 focus-within:ring-[#DA6C74]/10 disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
    >
      <input
        type={isPassword ? (showPassword ? "text" : "password") : "text"}
        value={isDate && value ? format(new Date(value), "MM/dd/yyyy") : value || ""}
        readOnly={isDate}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        data-slot="input"
        className={cn(
          "font-lato flex-1 border-none bg-transparent text-[16px] text-[#184A61] outline-none placeholder:text-[#BDBDBD]",
          isDate && "cursor-pointer",
        )}
        {...props}
      />

      {/* Password Toggle */}

      {isPassword && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="ml-2 text-[#989898] transition-colors hover:text-[#184A61]"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      )}

      {/* Calendar Icon */}

      {isDate && (
        <div className="ml-2 text-[#DA6C74]">
          <CalendarDays size={18} />
        </div>
      )}
    </div>
  );

  if (isDate) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{inputElement}</DialogTrigger>

        <DialogContent className="w-auto max-w-fit rounded-[12px] p-4">
          <Calendar
            mode="single"
            selected={value ? new Date(value) : undefined}
            onSelect={handleDateSelect}
            disabled={(date) => date > new Date()}
            captionLayout="dropdown"
            fromYear={1950}
            toYear={new Date().getFullYear()}
            initialFocus
          />
        </DialogContent>
      </Dialog>
    );
  }

  return inputElement;
}

export { Input };
