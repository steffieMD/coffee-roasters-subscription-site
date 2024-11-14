import { useState } from "react";
import React from "react";
import Dropdown from "./Dropdown";

const CreatePlan = () => {
  const questions = [
    "How do you drink your coffee?",
    "What type of coffee?",
    "How much would you like?",
    "Want us to grind them?",
    "How often should we deliver?",
  ];
  const options1 = [
    {
      value: "Capsule",
      label: "Capsule",
      label2: "Compatible with Nespresso systems and similar brewers",
    },
    {
      value: "Filter",
      label: "Filter",
      label2: "For pour over or drip methods like Aeropress, Chemex, and V60",
    },
    {
      value: "Espresso",
      label: "Espresso",
      label2:
        "Dense and finely ground beans for an intense, flavorful experience",
    },
  ];

  const options2 = [
    {
      value: "Single Origin",
      label: "Single Origin",
      label2: "Distinct, high quality coffee from a specific family-owned farm",
    },
    {
      value: "Decaf",
      label: "Decaf",
      label2: "Just like regular coffee, except the caffeine has been removed",
    },
    {
      value: "Blended",
      label: "Blended",
      label2:
        "Combination of two or three dark roasted beans of organic coffees",
    },
  ];

  const options3 = [
    {
      value: "250g",
      label: "250g",
      label2: "Perfect for the solo drinker. Yields about 12 delicious cups.",
    },
    {
      value: "500g",
      label: "500g",
      label2: "Perfect option for a couple. Yields about 40 delectable cups.",
    },
    {
      value: "1000g",
      label: "1000g",
      label2:
        "Perfect for offices and events. Yields about 90 delightful cups.",
    },
  ];

  const options4 = [
    {
      value: "Wholebean",
      label: "Wholebean",
      label2: "Best choice if you cherish the full sensory experience",
    },
    {
      value: "Filter",
      label: "Filter",
      label2: "For drip or pour-over coffee methods such as V60 or Aeropress",
    },
    {
      value: "Cafetiére",
      label: "Cafetiére",
      label2: "Course ground beans specially suited for french press coffee",
    },
  ];

  const options5 = [
    {
      value: "Every week",
      label: "Every week",
      label2: "$7.20 per shipment. Includes free first-class shipping.",
    },
    {
      value: "Every 2 weeks",
      label: "Every 2 weeks",
      label2: "$9.60 per shipment. Includes free priority shipping.",
    },
    {
      value: "Every month",
      label: "Every month",
      label2: "$12.00 per shipment. Includes free priority shipping.",
    },
  ];

  const sidebar = [
    { number: "01", opt: "Preferences" },
    { number: "02", opt: "Bean Type" },
    { number: "03", opt: "Quantity" },
    { number: "04", opt: "Grind Option" },
    { number: "05", opt: "Deliveries" },
  ];

  const [preferences, setPreferences] = useState("Capsule");
  const [beanType, setBeanType] = useState("Single Origin");
  const [quantity, setQuantity] = useState("250g");
  const [grindOption, setGrindOption] = useState("Wholebean");
  const [delivery, setDelivery] = useState("Every week");
  const [modalStyle, setModalStyle] = useState("hidden");
  const [optionClicked, setOptionClicked] = useState(0);

  const handleOptionClicked = (num) => {
    setOptionClicked(num);
  };

  const displayModal = () => {
    if (modalStyle !== "block") setModalStyle("block");
  };

  const closeModal = () => {
    if (modalStyle !== "hidden") setModalStyle("hidden");
  };

  function handlePreferences(option) {
    setPreferences(option);
  }

  const handleBeanTypes = (option) => {
    setBeanType(option);
  };

  const handleQuantity = (option) => {
    setQuantity(option);
  };

  const handleGrindOption = (option) => {
    setGrindOption(option);
  };

  const handleDelivery = (option) => {
    setDelivery(option);
  };

  return (
    <div>
      <div className="max-w-[1280px]" onClick={closeModal}>
        <div className="bg-[url('/src/assets/png/createplan-hero-img.png')] md:bg-[url('/src/assets/png/createplan-hero-img-tablet.png')] xl:bg-[url('/src/assets/png/createplan-hero-img-desktop.png')] xl:bg-center text-customeggwhite pt-[101px] pb-[136px] px-6 text-center rounded-[10px] bg-cover bg-no-repeat isolate brightness-50 md:filter-none md:px-[58px] xl:w-full">
          <div className="md:w-[65%] md:text-left xl:w-[50%] ">
            <h1 className="pb-[22px] font-fraunces text-[40px] md:text-5xl font-[900] leading-10 xl:text-7xl xl:mb-8">
              Create a plan
            </h1>
            <p className="font-barlow text-[15px] leading-[25px] xl:text-base xl:leading-relaxed xl:pb-14 xl:pr-28">
              Build a subscription plan that best fits your needs. We offer an
              assortment of the best artisan coffees from around the globe
              delivered fresh to your door.
            </p>
          </div>
        </div>
        <section className="my-[120px]  md:my-[144px] lg:my-[200px] text-center md:text-left py-[80px] md:pt-[112px] md:pb-[96px] px-6 -mx-6 md:px-10 lg:px-20 md:-mx-10 lg:-mx-0 bg-customdarkgrey rounded-[10px] text-white">
          <div className="hidden md:block border-customapricot border-t-2 lg:mt-[80px] w-[70%] lg:w-[74%]"></div>
          <div className="flex flex-col gap-14 md:gap-[10px] md:flex-row lg:gap-24">
            <div className="flex flex-col gap-6 md:gap-0   ">
              <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customdarkgrey border-bluelagoon relative bottom-4 md:mb-[62px]"></div>
              <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px] md:mb-[42px]">
                01
              </span>
              <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[150px] md:mb-[38px]">
                Pick your coffee
              </h3>
              <p
                className="text-[15px] font-barlow leading-[25px] lg:text-base lg:leading-[26px]
            ">
                Select from our evolving range of artisan coffees. Our beans are
                ethically sourced and we pay fair prices for them. There are new
                coffees in all profiles every month for you to try out.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-0  ">
              <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customdarkgrey border-bluelagoon relative bottom-4 md:mb-[62px]"></div>
              <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px] md:mb-[42px]">
                02
              </span>
              <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[60px] md:mb-[38px]">
                Choose the frequency
              </h3>
              <p className="text-[15px] font-barlow leading-[25px] lg:text-base lg:leading-[26px] ">
                Customize your order frequency, quantity, even your roast style
                and grind type. Pause, skip or cancel your subscription with no
                commitment through our online portal.
              </p>
            </div>
            <div className="flex flex-col gap-6 md:gap-0  ">
              <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customdarkgrey border-bluelagoon relative bottom-4 md:mb-[62px]"></div>
              <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px] md:mb-[42px]">
                03
              </span>
              <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[60px] md:mb-[38px]">
                Receive and enjoy!
              </h3>
              <p className="text-[15px] font-barlow leading-[25px] lg:text-base lg:leading-[26px] md:pr-[10px]">
                We ship your package within 48 hours, freshly roasted. Sit back
                and enjoy award-winning world-class coffees curated to provide a
                distinct tasting experience.
              </p>
            </div>
          </div>
        </section>
        <section className="flex xl:gap-[125px] mb-[114px]">
          <div className="inline-block">
            <div className="  text-2xl font-black font-fraunces leading-loose hidden xl:flex xl:flex-col gap-6">
              {sidebar.map((side, i) => (
                <div
                  className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 xl:pr-8 text-nowrap"
                  onClick={() => setOptionClicked(i)}>
                  <span
                    className={` ${
                      i === optionClicked ? "text-bluelagoon" : "text-[#A3A8AE]"
                    } `}>
                    {side.number}
                  </span>
                  <span
                    className={
                      i === optionClicked
                        ? "text-customgrayishblue"
                        : "text-[#A3A8AE]"
                    }>
                    {side.opt}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col gap-[88px]">
              <Dropdown
                options={options1}
                questions={questions[0]}
                onChange={handlePreferences}
                optionClicked={0}
                handleOptionClicked={handleOptionClicked}
              />
              <Dropdown
                options={options2}
                questions={questions[1]}
                onChange={handleBeanTypes}
                optionClicked={1}
                handleOptionClicked={handleOptionClicked}
              />
              <Dropdown
                options={options3}
                questions={questions[2]}
                onChange={handleQuantity}
                optionClicked={2}
                handleOptionClicked={handleOptionClicked}
              />
              <Dropdown
                options={options4}
                questions={questions[3]}
                onChange={handleGrindOption}
                optionClicked={3}
                handleOptionClicked={handleOptionClicked}
              />
              <Dropdown
                options={options5}
                questions={questions[4]}
                onChange={handleDelivery}
                optionClicked={4}
                handleOptionClicked={handleOptionClicked}
              />
            </div>
            <section className="bg-customdarkgrey rounded-[10px] px-[25px] py-[32px] text-white mt-[84px] mb-14 md:mb-10">
              <span className="text-base font-normal font-barlow uppercase leading-relaxed">
                order summary
              </span>
              <p className="text-2xl font-black font-fraunces leading-10">
                “I drink my coffee as{" "}
                <span className="text-bluelagoon">{preferences}</span>, with a{" "}
                <span className="text-bluelagoon">{beanType}</span> type of
                bean. <span className="text-bluelagoon">{quantity}</span> ground
                ala <span className="text-bluelagoon">{grindOption}</span>, sent
                to me <span className="text-bluelagoon">{delivery}</span>
                .”
              </p>
            </section>
          </div>
        </section>

        <div className="flex md:justify-center lg:justify-end">
          <button
            className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] text-customeggwhite hover:bg-hovergreen mb-[120px] md:mb-[144px] lg:mb-[168px]"
            onClick={displayModal}>
            Create your plan
          </button>
        </div>
        <div className={modalStyle}>
          <div className="fixed px-6 md:px-0 pt-[35px] md:pt-0 z-10 left-0 top-0 w-full h-full overflow-auto bg-opacity-50 bg-black flex justify-center items-center flex-col">
            {" "}
            <section className="bg-customeggwhite md:w-[70.3%] xl:w-[37.5%] text-[#83888f] mb-14 md:mb-10 rounded-lg">
              <div className="bg-customdarkgrey rounded-lg text-white px-6 md:px-14 py-7 rounded-b-none">
                <span className="text-[28px] font-black font-fraunces leading-loose capitalize">
                  order summary
                </span>
              </div>
              <div className="px-6 md:px-14 py-10 md:py-14">
                <p className="text-2xl font-black font-fraunces leading-10 md:mb-[7px]">
                  “I drink my coffee as{" "}
                  <span className="text-bluelagoon">{preferences}</span>, with a{" "}
                  <span className="text-bluelagoon">{beanType}</span> type of
                  bean. <span className="text-bluelagoon">{quantity}</span>{" "}
                  ground ala{" "}
                  <span className="text-bluelagoon">{grindOption}</span>, sent
                  to me <span className="text-bluelagoon">{delivery}</span>
                  .”
                </p>
                <p className="text-customgrayishblue text-[15px]font-normal font-barlow leading-[25px] mb-6 md:mb-[47px]">
                  Is this correct? You can proceed to checkout or go back to
                  plan selection if something is off. Subscription discount
                  codes can also be redeemed at the checkout.{" "}
                </p>
                <div className="flex md:justify-center lg:justify-end md:hidden">
                  <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] text-customeggwhite hover:bg-hovergreen ">
                    Checkout - $14.00 / mo
                  </button>
                </div>
                <div className="hidden md:grid grid-cols-2 gap-[13px]">
                  <span className="text-customdarkgrey text-[32px] font-black font-fraunces leading-9 text-center my-auto">
                    $14.00 / mo
                  </span>
                  <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] text-customeggwhite hover:bg-hovergreen ">
                    Checkout
                  </button>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePlan;
