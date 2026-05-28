import { Button } from "@/components/ui/button";

import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#f5f5f5] px-4">
      {/* Background Glow */}
      <div className="absolute h-[500px] w-[500px] rounded-full bg-gradient-to-r from-[#c8f7e3] via-[#f7f3c8] to-[#d9d6ff] opacity-40 blur-3xl" />

      {/* Card */}
      <div className="relative z-10 flex max-w-2xl flex-col items-center text-center">
        {/* Icon */}
        <img src="/welcome-bg.png" alt="welcome" className="mb-8 w-44 md:w-[300px]" />

        {/* Title */}
        <h1 className="mb-5 text-4xl font-bold text-[#0f3554] md:text-5xl">
          Welcome {`${user.fname} ${user.lname}`}
        </h1>

        {/* Description */}
        <p className="mb-8 max-w-3xl text-lg leading-relaxed text-[#23435d] md:text-xl">
          Welcome to Woliba! You’ll find wellness challenges, fitness and recipe videos,
          and daily tips to support your health goals. Download our iOS or Android app and
          start your wellbeing journey today.
        </p>

        {/* Button */}
        <Button className="rounded-md bg-[#db6d76] px-10 py-6 text-base font-medium text-white shadow-none hover:bg-[#cf5d67]">
          Let’s get Started
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
