import { Button } from "@/components/ui/button";
import { prevStep } from "@/store/authentications/registration/registrationSlice";
import { ChevronLeft } from "lucide-react";
import { useDispatch } from "react-redux";

const BackButton = ({ className }) => {
  const dispatch = useDispatch();

  return (
    <Button
      type="button"
      onClick={() => dispatch(prevStep())}
      variant={"outline"}
      className={`mb-5 flex items-center gap-2 text-sm font-medium text-[#184A61] transition-all hover:opacity-70 ${className}`}
    >
      <ChevronLeft size={18} className="text-crimson-blush-500" />
      Back
    </Button>
  );
};

export default BackButton;
