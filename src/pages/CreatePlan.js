import { useState } from "react";
import React from "react";

const CreatePlan = () => {
  const [drinkMenu, setDrinkMenu] = useState("hidden");
  const [coffeeMenu, setCoffeeMenu] = useState("hidden");
  const [weightMenu, setWeightMenu] = useState("hidden");
  const [textureMenu, setTextureMenu] = useState("hidden");
  const [deliveryMenu, setDeliveryMenu] = useState("hidden");
  const [svgContent, setSvgContent] = useState(
    <svg
      width="19"
      height="13"
      viewBox="0 0 19 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        id="Path 2"
        d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
        fill="#0E8784"
      />
    </svg>
  );

  const handleSelectDrinkMenu = () => {
    if (drinkMenu !== "block") {
      setDrinkMenu("block");
      handleArrowUpClick();
    } else {
      setDrinkMenu("hidden");
      handleArrowDownClick();
    }
  };

  const handleSelectCoffeeMenu = () => {
    if (coffeeMenu !== "block") {
      setCoffeeMenu("block");
      handleArrowUpClick();
    } else {
      setCoffeeMenu("hidden");
      handleArrowDownClick();
    }
  };

  const handleSelectWeightMenu = () => {
    if (weightMenu !== "block") {
      setWeightMenu("block");
      handleArrowUpClick();
    } else {
      setWeightMenu("hidden");
      handleArrowDownClick();
    }
  };

  const handleSelectTextureMenu = () => {
    if (textureMenu !== "block") {
      setTextureMenu("block");
      handleArrowUpClick();
    } else {
      setTextureMenu("hidden");
      handleArrowDownClick();
    }
  };

  const handleSelectDeliveryMenu = () => {
    if (deliveryMenu !== "block") {
      setDeliveryMenu("block");
      handleArrowUpClick();
    } else {
      setDeliveryMenu("hidden");
      handleArrowDownClick();
    }
  };

  const handleArrowUpClick = () => {
    setSvgContent(
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          id="Path 2"
          d="M15.9488 0.585785L18.7773 3.41421L9.6816 12.5099L0.585938 3.41421L3.41436 0.585785L9.68115 6.853L15.9488 0.585785Z"
          fill="#0E8784"
        />
      </svg>
    );
  };

  const handleArrowDownClick = () => {
    setSvgContent(
      <svg
        width="19"
        height="13"
        viewBox="0 0 19 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          id="Path 2"
          d="M15.9488 12.5099L18.7773 9.68145L9.6816 0.585787L0.585938 9.68145L3.41436 12.5099L9.68115 6.24266L15.9488 12.5099Z"
          fill="#0E8784"
        />
      </svg>
    );
  };

  return (
    <div className="max-w-[1280px]">
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
          <div className="text-customgrayishblue opacity-45 text-2xl font-black font-fraunces leading-loose   hidden xl:flex xl:flex-col gap-6">
            <div className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 xl:pr-8">
              <span>01</span>
              <span>Preferences</span>
            </div>
            <div className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 ">
              <span>02</span>
              <span>Bean Type</span>
            </div>
            <div className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 ">
              <span>03</span>
              <span>Quantity</span>
            </div>
            <div className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 ">
              <span>04</span>
              <span className="text-nowrap">Grind Option</span>
            </div>
            <div className="flex gap-6 border-b-2 border-customdarkgrey border-opacity-55 ">
              <span>05</span>
              <span>Deliveries</span>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col gap-[88px]">
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 mb-[22px] md:mb-[12px] lg:mb-[22px]">
            <div
              className="flex gap-[69px] cursor-pointer"
              onClick={handleSelectDrinkMenu}>
              <span className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                How do you drink your coffee?
              </span>
              <div className="ml-auto flex items-center">{svgContent}</div>
            </div>
            <div className={drinkMenu}>
              <div className="flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]">
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Capsule
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Compatible with Nespresso systems and similar brewers
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Filter
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    For pour over or drip methods like Aeropress, Chemex, and
                    V60
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Espresso
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Dense and finely ground beans for an intense, flavorful
                    experience
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 mb-[22px] md:mb-[12px] lg:mb-[22px]">
            <div
              className="flex gap-[69px] cursor-pointer"
              onClick={handleSelectCoffeeMenu}>
              <span className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                What type of coffee?
              </span>
              <div className="ml-auto flex items-center">{svgContent}</div>
            </div>
            <div className={coffeeMenu}>
              <div className="flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]">
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Single Origin
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Distinct, high quality coffee from a specific family-owned
                    farm
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Decaf
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Just like regular coffee, except the caffeine has been
                    removed
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Blended
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Combination of two or three dark roasted beans of organic
                    coffees
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 mb-[22px] md:mb-[12px] lg:mb-[22px]">
            <div
              className="flex gap-[69px] cursor-pointer"
              onClick={handleSelectWeightMenu}>
              <span className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                How much would you like?
              </span>
              <div className="ml-auto flex items-center">{svgContent}</div>
            </div>
            <div className={weightMenu}>
              <div className="flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]">
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    250g
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Perfect for the solo drinker. Yields about 12 delicious
                    cups.
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    500g
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Perfect option for a couple. Yields about 40 delectable
                    cups.
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    1000g
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Perfect for offices and events. Yields about 90 delightful
                    cups.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 mb-[22px] md:mb-[12px] lg:mb-[22px]">
            <div
              className="flex gap-[69px] cursor-pointer"
              onClick={handleSelectTextureMenu}>
              <span className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                Want us to grind them?
              </span>
              <div className="ml-auto flex items-center">{svgContent}</div>
            </div>
            <div className={textureMenu}>
              <div className="flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]">
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Wholebean
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Best choice if you cherish the full sensory experience
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Filter
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    For drip or pour-over coffee methods such as V60 or
                    Aeropress
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Cafetiére
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    Course ground beans specially suited for french press coffee
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-14 mb-[22px] md:mb-[12px] lg:mb-[22px]">
            <div
              className="flex gap-[69px] cursor-pointer"
              onClick={handleSelectDeliveryMenu}>
              <span className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px]">
                How often should we deliver?
              </span>
              <div className="ml-auto flex items-center">{svgContent}</div>
            </div>
            <div className={deliveryMenu}>
              <div className="flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]">
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Every week
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    $7.20 per shipment. Includes free first-class shipping.
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Every 2 weeks
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    $9.60 per shipment. Includes free priority shipping.
                  </p>
                </div>
                <div className="flex flex-col bg-[#F4F1EB] rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1">
                  <h3 className=" text-2xl font-black font-fraunces leading-loose">
                    Every month
                  </h3>
                  <p className="text-base font-normal font-['Barlow'] leading-relaxed">
                    $12.00 per shipment. Includes free priority shipping.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] text-customeggwhite hover:bg-hovergreen">
        Create your plan
      </button>
    </div>
  );
};

export default CreatePlan;
