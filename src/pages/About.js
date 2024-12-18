import React from "react";
import secondImg from "../assets/png/about-second-img.png";

const About = () => {
  return (
    <div className="max-w-[1280px]">
      <div
        className="bg-[url('/src/assets/png/hero-img-about-mobile.png')] bg-right md:bg-[url('/src/assets/png/hero-img-about-tablet.png')] xl:bg-[url('/src/assets/png/hero-img-about-desktop.png')] 
      text-customeggwhite pt-[111px] pb-[87px] px-6 text-center rounded-[10px] bg-cover bg-no-repeat isolate brightness-50 md:filter-none md:px-[58px]">
        <div className="md:w-[65%] md:text-left xl:w-[34.8%] ">
          <h1 className="pb-6 font-fraunces text-[28px] md:text-[32px] font-black leading-7 md:leading-10 lg:text-[40px] lg:leading-[48px] lg:mb-6">
            About Us
          </h1>
          <p className="font-barlow text-[15px] leading-[25px] xl:text-base xl:leading-relaxed break-words">
            Coffeeroasters began its journey of exotic discovery in 1999,
            highlighting stories of coffee from around the world. We have since
            been dedicated to bring the perfect cup - from bean to brew - in
            every shipment.
          </p>
        </div>
      </div>
      <section className="mt-[120px] mb-[198px] md:mb-[313px] md:flex gap-[69px] xl:gap-[125px] xl:px-[85px]">
        <img
          src={secondImg}
          alt="Cute Barrista making coffee"
          className="rounded-lg w-full md:w-[40.8%] "
        />
        <div className="mt-12 md:mt-2 text-customgrayishblue text-center flex flex-col gap-8 md:text-left lg:pt-14 xl:pt-[90px]">
          <h2 className="font-black font-fraunces text-[32px] leading-[48px]">
            Our commitment
          </h2>
          <p className="text-[15px] font-barlow leading-[25px]">
            We’re built on a simple mission and a commitment to doing good along
            the way. We want to make it easy for you to discover and brew the
            world’s best coffee at home. It all starts at the source. To locate
            the specific lots we want to purchase, we travel nearly 60 days a
            year trying to understand the challenges and opportunities in each
            of these places. We collaborate with exceptional coffee growers and
            empower a global community of farmers through with well above
            fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating
            only the finest blends, we roast each lot to highlight tasting
            profiles distinctive to their native growing region.
          </p>
        </div>
      </section>
      <section className="bg-customdarkgrey flex flex-col items-center px-6 md:px-12 lg:px-[85px] rounded-[10px] xl:flex-row xl:gap-[125px]">
        <div className="w-full h-[14vh] md:h-[28.3vh] lg:h-[474px] bg-[url('/src/assets/png/about-third-img.png')] md:bg-[url('/src/assets/png/about-third-img-tablet.png')] md:bg-bottom lg:bg-[url('/src/assets/png/about-third-img-desktop.png')] bg-cover bg-bottom relative bottom-[78px] md:bottom-[160px] xl:bottom-20 -mb-16 md:-mb-40 rounded-lg xl:order-2 xl:w-1/2 xl:mb-0"></div>

        <div className="text-customeggwhite text-center mt-16 mb-[61px] md:mb-[67px] md:mx-[26px] flex flex-col gap-6 xl:order-1 xl:text-left xl:w-1/2">
          <h3 className="text-[28px] md:text-[32px] font-fraunces font-black leading-7 md:leading-[48px]">
            {" "}
            Uncompromising quality
          </h3>
          <p className="font-barlow text-[15px] leading-[25px] xl:text-base xl:leading-relaxed opacity-80">
            Although we work with growers who pay close attention to all stages
            of harvest and processing, we employ, on our end, a rigorous quality
            control program to avoid over-roasting or baking the coffee dry.
            Every bag of coffee is tagged with a roast date and batch number.
            Our goal is to roast consistent, user-friendly coffee, so that
            brewing is easy and enjoyable.
          </p>
        </div>
      </section>
      <section className="my-[120px] md:my-[144px]  text-center md:text-left lg:pl-[85px] lg:pr-[150px]">
        <h3 className="text-[#83888f] text-2xl font-black font-fraunces leading-loose mb-[72px]">
          Our headquarters
        </h3>
        <div className="flex flex-col gap-[60px] md:gap-4 lg:gap-[95px] md:flex-row ">
          <div className="flex flex-col items-center md:justify-start md:items-start text-nowrap md:flex-1">
            <svg
              className="mb-12"
              width="42"
              height="50"
              viewBox="0 0 42 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.01894 5.96796L6.01894 5.96795C5.97903 5.94583 5.93868 5.92345 5.89445 5.89397H5.90278C5.90552 5.88941 5.90885 5.88455 5.91239 5.8794L5.9124 5.87938C5.91964 5.86883 5.92774 5.85703 5.93334 5.84397C5.94445 5.8398 5.95625 5.83633 5.96806 5.83286L5.96808 5.83285C5.97988 5.82938 5.99168 5.82591 6.00278 5.82174C6.06808 5.86838 6.09077 5.91753 6.11462 5.96918C6.12629 5.99444 6.13823 6.02029 6.15556 6.04674C8.61945 7.59397 9.99723 6.76341 10.9611 4.60508C11.0944 4.29397 11.2222 3.95786 11.3472 3.59952C12.4857 0.255749 15.1641 0.215048 17.7545 0.175684C18.5835 0.163086 19.4035 0.150626 20.1611 0.0300776C21.9889 -0.256033 21.4056 1.44674 20.6139 2.26619C20.3526 2.54016 20.0454 2.77081 19.7274 3.00969C18.9264 3.61126 18.056 4.265 17.6722 5.79397C18.411 5.79397 19.1181 5.79859 19.8037 5.80307C21.3092 5.81291 22.7101 5.82207 24.1111 5.78008C26.7306 5.7023 27.175 6.65508 25.7306 8.77452C25.4142 9.24169 25.1583 9.7523 24.9029 10.2618L24.9029 10.2619C24.5843 10.8975 24.2666 11.5315 23.8333 12.0773C22.3194 13.9717 22.3528 15.2662 24.8361 16.1495C25.4611 16.3717 26.2667 16.9273 26.425 17.4912C27.1788 20.1624 28.9835 22.1696 30.7829 24.171C32.7766 26.3884 34.7638 28.5987 35.3083 31.6967C35.3337 31.8393 35.351 31.9713 35.3668 32.0922C35.4535 32.7535 35.4967 33.0828 36.5722 32.9912C38.4056 32.819 40.575 32.7967 41.0861 35.1356C41.5778 37.3662 39.9861 38.7856 38.2833 39.9634C38.0514 40.1219 37.8746 40.3543 37.6772 40.614L37.6771 40.614L37.6771 40.6141C37.5908 40.7276 37.5005 40.8462 37.4 40.9662C37.5571 41.6515 38.151 41.6697 38.707 41.6867C39.262 41.7037 39.7792 41.7196 39.7861 42.3967C39.7972 43.5245 38.5889 44.0495 37.7528 44.3079C33.4889 45.6329 28.9972 46.0829 24.625 45.994C22.2911 45.9425 20.2482 46.6884 18.2163 47.4303C16.7417 47.9687 15.2728 48.5051 13.7028 48.7329C13.4729 48.7672 13.2471 48.8186 13.017 48.871C12.1849 49.0604 11.2951 49.2629 9.94167 48.719C11.5466 48.1361 12.6068 46.9544 13.6748 45.7641C15.2687 43.9877 16.8799 42.192 20.3444 42.3384C19.738 42.0864 19.2508 41.8809 18.8417 41.7082L18.8387 41.707L18.8385 41.7069L18.8384 41.7069L18.8384 41.7069C18.0408 41.3703 17.5397 41.1589 17.0278 40.9717C14.6972 40.1301 14.3861 38.494 16.125 36.5995C17.1056 35.5356 17.7833 34.394 15.5611 33.9329C14.3395 33.6811 14.631 33.1584 14.9542 32.5789C15.1874 32.1608 15.4371 31.7131 15.1472 31.3162C14.775 30.8051 15.9972 30.6606 16.7028 30.7495C18.7917 31.019 21.7444 31.3801 20.9333 28.3273C20.8675 28.0806 20.805 27.8026 20.7384 27.5063L20.7384 27.5061L20.7384 27.5059C20.2773 25.4535 19.6182 22.5192 16.2444 22.9634C12.5889 23.444 11.4417 22.5384 13.7278 19.2217C13.2628 19.0137 12.6194 19.254 12.0027 19.4844C10.8327 19.9215 9.75854 20.3228 10.1806 17.5579C10.2056 17.3829 9.86111 16.9634 9.79167 16.9829C9.52591 17.0671 9.25434 17.3304 8.98439 17.5922L8.98438 17.5923C8.39937 18.1596 7.82196 18.7196 7.32778 17.4329C6.97517 16.5155 7.5719 16.273 8.27234 15.9883C8.9845 15.6988 9.80386 15.3658 9.84167 14.2356C9.78653 14.0567 9.3753 14.0527 8.93262 14.0484C8.19327 14.0412 7.3662 14.0332 7.96389 13.2079C9.95345 10.4628 8.4313 9.30913 6.72825 8.01841L6.7282 8.01837L6.72803 8.01825C6.55273 7.88538 6.37551 7.75107 6.2 7.61341C5.9698 7.43416 6.05363 7.1639 6.14326 6.8749C6.18558 6.73845 6.2292 6.59783 6.24167 6.46063C6.24167 6.45647 6.24028 6.45092 6.23889 6.44536L6.23889 6.44536C6.2375 6.4398 6.23611 6.43424 6.23611 6.43008C6.24445 6.29952 6.23056 6.16619 6.15 6.04674C6.10401 6.01513 6.06174 5.99169 6.01895 5.96796L6.01894 5.96796ZM1.47778 26.1856C0.91667 26.094 0.277781 25.5051 0.338892 24.6579C0.461114 23.1023 5.20278 19.9329 7.30834 20.0579C9.24747 20.1646 9.87281 21.4824 10.4606 22.7212C10.6988 23.2232 10.9308 23.7122 11.2417 24.1023C11.15 25.9356 10.0417 26.9717 8.85 26.9773C6.51 27.0064 4.15234 26.6218 1.8227 26.2418L1.47778 26.1856ZM8.19167 0.8773C5.56667 1.5773 4.05278 2.97174 4.23889 5.79119C2.48052 5.96414 2.99058 6.67928 3.46068 7.33839C3.53419 7.44146 3.60672 7.54315 3.66945 7.64119C3.80516 7.33243 4.04138 7.04233 4.28508 6.74303L4.28508 6.74303C4.44041 6.55226 4.59879 6.35775 4.73611 6.1523C4.89026 6.11242 5.04483 6.07169 5.19949 6.03095L5.19969 6.0309C5.4435 5.96666 5.68755 5.90237 5.93056 5.84119C6.16734 5.31917 6.57442 4.87779 6.98732 4.4301C7.82899 3.51752 8.69483 2.57873 8.19167 0.8773ZM3.575 8.42452C3.99723 8.2773 3.88334 7.98286 3.66667 7.64119C3.55834 7.88008 3.49445 8.13008 3.575 8.42452Z"
                fill="#0E8784"
              />
            </svg>
            <span className="font-fraunces text-customgrayishblue font-black text-[28px] leading-9 mb-[22px]">
              United Kingdom
            </span>
            <p className="font-barlow text-base leading-relaxed text-customgrayishblue flex flex-col">
              <span>68 Asfordby Rd</span>
              <span>Alcaston</span>
              <span>SY6 1YA</span>
              <span>+44 1241 918425</span>
            </p>
          </div>
          <div className="flex flex-col items-center md:justify-start md:items-start md:flex-1">
            <svg
              className="mb-12"
              width="52"
              height="50"
              viewBox="0 0 52 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M28.2744 5.04948V0.0607069L22.8308 0L20.79 3.38628L23.2848 5.88191L28.2744 5.04948ZM22.4532 10.8707L15.8004 4.21705L12.474 7.54428L18.1472 12.5971L22.4532 10.8707ZM29.4478 14.7617L26.1264 12.3459L26.7301 9.62911L32.4324 9.20832L39.9168 15.0287L38.2536 20.0183L35.7588 21.6823L33.264 20.0183V17.5235L30.7692 14.1971L29.4478 14.7617ZM49.0644 47.4611H47.4012C46.942 47.4611 46.5696 47.0888 46.5696 46.6295C46.5696 46.1702 46.942 45.7979 47.4012 45.7979H49.0644C49.5237 45.7979 49.896 46.1702 49.896 46.6295C49.896 47.0888 49.5237 47.4611 49.0644 47.4611ZM49.0644 35.8187H50.7277C51.1869 35.8187 51.5593 35.4464 51.5593 34.9871C51.5593 34.5278 51.1869 34.1555 50.7277 34.1555H49.0644C48.6052 34.1555 48.2328 34.5278 48.2328 34.9871C48.2328 35.4464 48.6052 35.8187 49.0644 35.8187ZM39.0852 35.8187L44.0748 32.4923V29.1659L39.0852 24.1763L35.7588 27.5027L32.4324 24.1763L29.106 26.6711L32.4324 30.8291L29.9376 35.8187L27.4428 31.6607L21.6216 29.1659L24.948 22.5131L27.4428 19.1867L21.6216 15.8603L18.2952 19.1867L7.48441 8.37588L0.831601 15.8603L2.78586 23.9118L0 26.6711L2.4948 34.1555L22.4532 44.1347L24.948 39.9767L29.9376 43.3031L33.264 49.9559L37.422 43.3031H44.0748L44.9064 38.3135L39.0852 35.8187Z"
                fill="#0E8784"
              />
            </svg>

            <span className="font-fraunces text-customgrayishblue font-black text-[28px] leading-9 mb-[22px] ">
              Canada
            </span>
            <p className="font-barlow text-base leading-relaxed text-customgrayishblue flex flex-col">
              <span>1528 Eglinton Avenue</span>
              <span>Toronto</span>
              <span>Ontario M4P 1A6</span>
              <span>+1 416 485 2997</span>
            </p>
          </div>
          <div className="flex flex-col items-center md:justify-start md:items-start md:flex-1">
            <svg
              className="mb-12"
              width="52"
              height="50"
              viewBox="0 0 49 44"
              fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.12213 32.8632C4.60545 29.7713 3.25319 26.6019 1.79811 23.6858C1.60829 23.3057 1.41741 22.9298 1.22904 22.559C0.830641 21.7745 0.443482 21.0122 0.101358 20.2785C-0.00147482 20.0562 -0.0271831 19.8028 0.0293751 19.5598L0.949732 15.7027C1.03714 15.3304 1.31479 15.0306 1.67985 14.9168C3.6491 14.2964 9.93735 12.0627 10.5029 8.77955C10.5132 8.71234 10.5492 8.65546 10.5955 8.60893L15.9582 3.41269C16.092 3.28343 16.3079 3.29894 16.4262 3.44371C16.9301 4.07967 18.3337 5.49636 20.4212 4.79835L19.7733 4.14171C19.6448 4.01762 19.65 3.81081 19.7785 3.68672L22.2311 1.36004C22.2876 1.30317 22.3647 1.27215 22.447 1.27215H29.923C30.1904 1.27215 30.3394 1.58754 30.1698 1.79436L27.7686 4.72597C27.6504 4.87591 27.6812 5.09306 27.8406 5.19647C28.3202 5.51021 29.3175 6.16508 30.372 6.85753C31.1944 7.39752 32.0516 7.96036 32.7252 8.40211C33.5068 8.91398 34.5609 8.59342 34.9155 7.72479C35.3115 6.75793 35.6816 5.25335 35.6868 3.01457C35.6868 2.97838 35.692 2.93701 35.7073 2.90082L36.746 0.201878C36.8436 -0.0463005 37.183 -0.0721524 37.3167 0.160515C37.8258 1.04982 38.7358 2.93701 38.7358 5.1396L39.2345 4.77767C39.3734 4.67426 39.5687 4.70529 39.6716 4.83972L40.7616 6.26674C40.8079 6.32879 40.8284 6.41151 40.8233 6.48907C40.7513 7.25946 40.5508 11.5043 44.258 13.2054C44.3248 13.2364 44.3814 13.2881 44.4122 13.3553L48.9369 22.4552C48.9575 22.5018 48.9677 22.5483 48.9677 22.6V26.4313C48.9677 27.0156 48.7209 27.5688 48.2838 27.9566C46.51 29.5387 41.8722 33.9284 41.5894 36.9686C41.574 37.1288 41.4403 37.2529 41.2758 37.2529H33.3011C33.2497 37.2529 33.1983 37.2426 33.152 37.2167C32.6378 36.9376 29.923 33.3597 29.3729 29.8903C29.3317 29.6318 29.0078 29.5335 28.8279 29.73L27.0436 31.7154C26.8791 31.9016 26.6426 32.005 26.3958 32.005C26.1232 32.005 25.8919 31.8085 25.8457 31.5396C25.64 30.3297 24.7248 27.1655 20.8891 27.1655C18.8324 27.1655 15.6292 27.9617 12.6573 28.8614C12.6573 28.8614 9.36663 29.8955 6.93462 33.2045C6.85236 33.3183 6.71867 33.3855 6.57471 33.3855H4.56946C4.29181 33.3855 4.081 33.1373 4.12213 32.8632ZM40.5199 43.1885C40.3503 43.8555 39.5739 44.1553 39.0031 43.7676C37.9543 43.0541 36.3706 41.808 34.936 39.9777C34.7253 39.7088 34.9155 39.3107 35.26 39.3107H40.9673C41.2397 39.3107 41.4351 39.564 41.3683 39.8277L40.5199 43.1885Z"
                fill="#0E8784"
              />
            </svg>

            <span className="font-fraunces text-customgrayishblue font-black text-[28px] leading-9 mb-[22px]">
              Australia
            </span>

            <p className="font-barlow text-base leading-relaxed text-customgrayishblue flex flex-col">
              <span>36 Swanston Street</span>
              <span>Kewell</span>
              <span>Victoria</span>
              <span> +61 4 9928 3629</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
