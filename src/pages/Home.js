import React from "react";
import granExpresso from "../assets/png/gran-expresso.png";
import planalto from "../assets/png/planalto.png";
import piccollo from "../assets/png/piccollo.png";
import danche from "../assets/png/danche.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-[url('/src/assets/png/hero-img-home.png')] md:bg-[url('/src/assets/png/hero-img-home-tablet.png')] xl:bg-[url('/src/assets/png/hero-image-home-large.png')] text-customeggwhite py-[100px] px-6 text-center rounded-[10px] bg-cover bg-no-repeat isolate brightness-50 md:filter-none md:px-[58px] xl:w-full">
        <div className="md:w-[65%] md:text-left xl:w-[50%] ">
          <h1 className="pb-6 font-fraunces text-[40px] md:text-5xl font-[900] leading-[48px] xl:text-7xl xl:mb-8">
            Great coffee made simple.
          </h1>
          <p className="font-barlow text-[15px] leading-[25px] pb-[39px] xl:text-base xl:leading-relaxed xl:pb-14 xl:pr-28">
            Start your mornings with the world’s best coffees. Try our expertly
            curated artisan coffees from our best roasters delivered directly to
            your door, at your schedule.
          </p>
          <Link to="/createplan">
            <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] hover:bg-hovergreen">
              Create your plan
            </button>
          </Link>
        </div>
      </div>
      <section className="my-[120px] md:my-[64px] text-center text-[#333D4B] xl:mx-[86px] ">
        <h2 className="text-transparent bg-clip-text bg-gradient-to-b from-[#83888F] from-0% to-customeggwhite to-100% font-fraunces text-[40px] md:text-[110px] font-[900]  mb-[13px] md:-z-10 xl:text-[150px] md:brightness-110">
          our collection
        </h2>
        <div className="flex flex-col gap-12 md:px-[58px] xl:px-0 md:text-left xl:text-center md:gap-8 md:relative md:bottom-[100px] xl:bottom-[120px] xl:flex-row">
          <div className="md:flex xl:flex-col xl:gap-[72px]">
            <img
              src={granExpresso}
              className="w-[53%] xl:w-full my-0 mx-auto mb-6 xl:mb-0 "
              alt="A pack of gran expresso"
            />
            <div className="md:mt-[30px]">
              <h3 className="font-fraunces text-2xl font-[900] mb-4 md:mb-6">
                Gran Espresso
              </h3>
              <p className="text-customgrayishblue text-[15px] font-['Barlow'] leading-[25px]">
                Light and flavorful blend with cocoa and black pepper for an
                intense experience
              </p>
            </div>
          </div>
          <div className="md:flex xl:flex-col xl:gap-[72px]">
            <img
              src={planalto}
              className="w-[53%] my-0 mx-auto mb-6 xl:mb-0  xl:w-full"
              alt="A pack of Planalto"
            />
            <div className="md:mt-[30px]">
              <h3 className="font-fraunces text-2xl font-[900] mb-4 md:mb-6">
                Planalto
              </h3>
              <p className="text-customgrayishblue text-[15px] font-['Barlow'] leading-[25px]">
                Brazilian dark roast with rich and velvety body, and hints of
                fruits and nuts
              </p>
            </div>
          </div>
          <div className="md:flex xl:flex-col xl:gap-[72px]">
            <img
              src={piccollo}
              className="w-[53%] my-0 mx-auto mb-6 xl:mb-0  xl:w-full"
              alt="A pack of Piccollo"
            />
            <div className="md:mt-[30px]">
              <h3 className="font-fraunces text-2xl font-[900] mb-4 md:mb-6">
                Piccollo
              </h3>
              <p className="text-customgrayishblue text-[15px] font-['Barlow'] leading-[25px]">
                Mild and smooth blend featuring notes of toasted almond and
                dried cherry{" "}
              </p>
            </div>
          </div>
          <div className="md:flex xl:flex-col xl:gap-[72px]">
            <img
              src={danche}
              className="w-[53%] my-0 mx-auto mb-6 xl:mb-0  xl:w-full"
              alt="A pack of Danche"
            />
            <div className="md:mt-[30px]">
              <h3 className="font-fraunces text-2xl font-[900] mb-4 md:mb-6">
                Danche
              </h3>
              <p className="text-customgrayishblue text-[15px] font-['Barlow'] leading-[25px] ">
                Ethiopian hand-harvested blend densely packed with vibrant fruit
                notes
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-customdarkgrey rounded-[10px] px-6 pt-16 text-center h-[902px] md:h-[573px] xl:h-[577px] text-customeggwhite md:px-[58px] md:pt-14 lg:pt-[100px] w-full xl:flex xl:flex-col xl:items-center">
        <div className="mb-16 md:mb-[70px] md:mx-4 lg:mb-[86px] xl:w-[540px]">
          <h2
            className="text-[28px] md:text-[32px] lg:text-[40px] md:leading-[48px]
         font-black font-fraunces leading-7 mb-6 lg:mb-8">
            Why choose us?
          </h2>
          <p className="text-[15px] lg:text-base font-barlow leading-[25px] font-normal">
            A large part of our role is choosing which particular coffees will
            be featured in our range. This means working closely with the best
            coffee growers to give you a more impactful experience on every
            level.
          </p>
        </div>
        <div className="flex flex-col gap-6 md:text-left w-full lg:flex-row lg:text-center">
          <div className="bg-bluelagoon rounded-lg pt-[72px] pb-[51px] flex flex-col justify-center items-center md:flex-row lg:flex-col md:pl-[70px] md:pr-[48px] md:py-[41px] md:h-[180px] lg:pl-[48px] lg:pt-[72px] lg:pb-[48px] lg:h-auto">
            <svg
              className="mb-14 md:mb-0 md:w-[56px] md:h-[56px] lg:w-[72px] lg:h-[72px] lg:mb-14"
              width="73"
              height="72"
              viewBox="0 0 73 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M59.0481 13.1037C66.3077 20.4657 70.8383 29.7448 71.8057 39.2263C72.7952 48.8834 69.9819 57.6044 63.8937 63.774C58.5999 69.1425 51.4112 72 43.3706 72C42.1592 72 40.93 71.9325 39.6831 71.802C30.3334 70.821 21.1834 66.2265 13.9238 58.8644C-1.19016 43.5373 -3.36451 20.8122 9.07807 8.19415C21.5118 -4.42828 43.9297 -2.21877 59.0481 13.1037ZM33.5284 40.0363C39.3592 41.6563 44.7285 43.1728 49.6806 47.0069C53.5639 50.0144 56.3299 53.8364 59.1269 57.7013C60.4146 59.4806 61.7088 61.2689 63.1216 62.9911C61.4887 48.6585 54.3843 36.3464 40.0248 32.1209C39.8009 32.0552 39.5778 31.9897 39.3553 31.9245C33.077 30.0836 27.3438 28.4026 22.1197 24.0479C18.76 21.2453 16.2865 17.7667 13.799 14.2682C12.5279 12.4806 11.2532 10.6878 9.85462 8.97729C11.5586 23.5347 18.8493 35.9548 33.5284 40.0363Z"
                fill="#FDD6BA"
              />
            </svg>

            <div className="md:pl-[55px] lg:p-0">
              <h3 className="mb-6 text-2xl font-black font-fraunces md:mb-4 lg:mb-6">
                Best quality
              </h3>
              <p className="text-[15px] lg:text-base lg:leading-[26px] font-barlow leading-[25px] mx-8 md:mx-0">
                Discover an endless variety of the world’s best artisan coffee
                from each of our roasters.
              </p>
            </div>
          </div>
          <div className="bg-bluelagoon rounded-lg pt-[72px] pb-[51px] flex flex-col justify-center items-center md:flex-row lg:flex-col md:pl-[70px] md:pr-[48px] md:py-[41px] md:h-[180px] lg:pl-[48px] lg:pt-[72px] lg:pb-[48px] lg:h-auto">
            <svg
              className="mb-14 md:mb-0 md:w-[56px] md:h-[56px] lg:w-[72px] lg:h-[72px] lg:mb-14"
              width="72"
              height="72"
              viewBox="0 0 72 72"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M36 23.9808C36.0994 23.9935 36.2001 24 36.3016 24C36.8763 24 37.4424 23.9931 38 23.9796V34.5V39H65.9556H66.7111C69.6124 39 72 36.63 72 33.75V26.25C72 23.37 69.6124 21 66.7111 21H54.5796C63.0488 17.7084 67 12.3266 67 8.06725C67 4.34664 64.0499 0.00296699 55.7306 0C44.9929 0 38.9117 7.61477 35.9997 14.5904C33.0874 7.6144 27.007 0 16.2725 0C7.95319 0 5 4.34421 5 8.06528C5 12.3253 8.95154 17.708 17.4214 21H5.28889C2.38756 21 0 23.37 0 26.25V33.75C0 36.63 2.38756 39 5.28889 39H6.04444H34V34.5V23.9796C34.5576 23.9931 35.1237 24 35.6984 24C35.7999 24 35.9006 23.9935 36 23.9808ZM39.1749 19.4842C40.5594 14.5561 44.7344 4.45346 55.7306 4.45346C58.9539 4.45346 62.3952 5.39993 62.3952 8.06429C62.3952 9.85338 60.8388 12.6572 56.4704 15.1643C53.3208 16.9712 47.8503 19.0926 39.1749 19.4842ZM34 44H6V66.8421C6 69.6716 8.39135 72 11.2973 72H34V44ZM66 66.8421V44H38V72H60.7027C63.6087 72 66 69.6716 66 66.8421ZM16.2725 4.45104C13.0491 4.45104 9.60477 5.40059 9.60477 8.06528C9.60477 11.8546 16.4597 18.7596 32.822 19.4866C31.4406 14.5549 27.2656 4.45104 16.2725 4.45104Z"
                fill="#FDD6BA"
              />
            </svg>
            <div className="md:pl-[55px] lg:p-0">
              <h3 className="mb-6 text-2xl font-black font-fraunces md:mb-4 lg:mb-6">
                Exclusive benefits
              </h3>
              <p className="text-[15px] font-barlow leading-[25px] mx-8 md:mx-0 lg:text-base lg:leading-[26px]">
                Special offers and swag when you subscribe, including 30% off
                your first shipment.
              </p>
            </div>
          </div>
          <div className="bg-bluelagoon rounded-lg pt-[83px] pb-[48px] flex flex-col justify-center items-center md:flex-row lg:flex-col md:pl-[70px] md:pr-[48px] md:py-[41px] lg:pt-[72px] lg:pl-[48px] lg:pb-[48px] md:h-[180px] lg:h-auto">
            <svg
              className="mb-[67px] md:mb-0 md:w-[55px] md:h-[39px] lg:w-[72px] lg:h-[72px] lg:mb-14"
              width="72"
              height="50"
              viewBox="0 0 72 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                id="Combined Shape"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.84615 0H9V4.16667H4.84615V0ZM0 19.4444H4.15385V23.6111H0V19.4444ZM16.4335 4.22917H13.1274V0H48.4615V35.3969C46.2975 37.2612 44.8997 39.9956 44.8101 43.0556H27.05C26.8847 37.409 22.263 32.8656 16.6017 32.8656C10.9403 32.8656 6.31864 37.4088 6.15331 43.0556H0V29.1199H11.7695C13.2731 29.1199 14.4964 27.8915 14.4964 26.3814C14.4964 24.8712 13.2731 23.6425 11.7695 23.6425H8.34462V19.4135H26.2659C27.7695 19.4135 28.9928 18.1848 28.9928 16.6746C28.9928 15.1644 27.7695 13.9358 26.2659 13.9358H0V9.70674H16.6017C18.1053 9.70674 19.3284 8.47821 19.3284 6.96802C19.3284 5.50901 17.9756 4.22917 16.4335 4.22917ZM49.1538 43.75C49.1538 40.3038 51.949 37.5 55.3846 37.5C58.8202 37.5 61.6154 40.3038 61.6154 43.75C61.6154 47.1962 58.8202 50 55.3846 50C51.949 50 49.1538 47.1962 49.1538 43.75ZM53.2844 45.8567H57.4849V41.6433H53.2844V45.8567ZM52.6154 4.86111H61.0622L70.6154 19.4444H52.6154V4.86111ZM52.6154 23.6111V33.1754C53.4514 32.9628 54.3266 32.8493 55.2283 32.8493C60.9476 32.8493 65.6166 37.3999 65.7837 43.0556H72V23.6111H52.6154ZM16.6154 37.5C13.1798 37.5 10.3846 40.3038 10.3846 43.75C10.3846 47.1962 13.1798 50 16.6154 50C20.051 50 22.8462 47.1962 22.8462 43.75C22.8462 40.3038 20.051 37.5 16.6154 37.5ZM18.7156 45.8567H14.5151V41.6433H18.7156V45.8567Z"
                fill="#FDD6BA"
              />
            </svg>
            <div className="md:pl-[55px] lg:p-0">
              <h3 className="mb-6 text-2xl font-black font-fraunces md:mb-4 lg:mb-6">
                Free shipping
              </h3>
              <p className="text-[15px] font-barlow leading-[25px] mx-8 md:mx-0 lg:text-base lg:leading-[26px]">
                We cover the cost and coffee is delivered fast. Peak freshness:
                guaranteed.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[717px] mb-[120px] md:mt-[434px] md:mb-[144px] lg:mt-[351px] lg:mb-[200px] text-center md:text-left">
        <h2 className="text-[#83888f] text-2xl font-black  font-fraunces">
          How it works
        </h2>
        <div className="hidden md:block border-customapricot border-t-2 md:mt-[55px] lg:mt-[80px] w-[70%] lg:w-[74%]"></div>
        <div className="my-20 md:mt-0 md:mb-11 lg:mb-16 flex flex-col gap-1 md:gap-[10px] md:flex-row lg:gap-24">
          <div className="flex flex-col gap-6 lg:gap-0  text-customgrayishblue">
            <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customeggwhite border-bluelagoon relative bottom-4"></div>
            <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px]">
              01
            </span>
            <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[150px]">
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
          <div className="flex flex-col gap-6 lg:gap-0 text-customgrayishblue">
            <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customeggwhite border-bluelagoon relative bottom-4"></div>
            <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px]">
              02
            </span>
            <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[60px]">
              Choose the frequency
            </h3>
            <p className="text-[15px] font-barlow leading-[25px] lg:text-base lg:leading-[26px] ">
              Customize your order frequency, quantity, even your roast style
              and grind type. Pause, skip or cancel your subscription with no
              commitment through our online portal.
            </p>
          </div>
          <div className="flex flex-col gap-6 lg:gap-0 text-customgrayishblue">
            <div className=" hidden md:block border-2 rounded-full w-[31px] h-[31px] bg-customeggwhite border-bluelagoon relative bottom-4"></div>
            <span className="text-customapricot text-7xl font-black font-fraunces leading-[72px] lg:mt-[67px] lg:mb-[38px]">
              03
            </span>
            <h3 className="text-[28px] font-black font-fraunces leading-loose md:pr-[20px] md:leading-9 lg:text-[32px] lg:mb-[42px] lg:pr-[60px]">
              Receive and enjoy!
            </h3>
            <p className="text-[15px] font-barlow leading-[25px] lg:text-base lg:leading-[26px]">
              We ship your package within 48 hours, freshly roasted. Sit back
              and enjoy award-winning world-class coffees curated to provide a
              distinct tasting experience.
            </p>
          </div>
        </div>
        <Link to="/createplan" className="md:mr-auto">
          <button className="bg-[#0E8784] px-[31px] pt-[15px] pb-[16px] rounded-md font-fraunces text-lg font-[900] text-customeggwhite hover:bg-hovergreen">
            Create your plan
          </button>
        </Link>
      </section>
    </div>
  );
};

export default Home;
