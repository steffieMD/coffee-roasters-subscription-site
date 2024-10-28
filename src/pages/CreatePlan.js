import React from "react";

const CreatePlan = () => {
  return (
    <div className="">
      <div className="bg-[url('/src/assets/png/hero-img-subscribe.png')] text-[#FEFCF7] py-[100px] px-6 bg-cover text-center rounded-[10px] bg-center isolate brightness-50">
        <h1 className="pb-6 font-fraunces text-[40px] font-[900] leading-10">
          Great coffee made simple.
        </h1>
        <p className="font-barlow text-[15px] leading-[25px] pb-[39px]">
          Start your mornings with the world’s best coffees. Try our expertly
          curated artisan coffees from our best roasters delivered directly to
          your door, at your schedule.
        </p>
        <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900]">
          Create your plan
        </button>
      </div>
    </div>
  );
};

export default CreatePlan;
