import { useState } from "react";
import React from "react";

const Dropdown = ({
  options,
  questions,
  onChange,
  optionClicked,
  handleOptionClicked,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("_____");

  const handleOptionClick = (option, event) => {
    setSelectedOption(option.value);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    handleOptionClicked(optionClicked);
  };

  const handleArrowChange = (open) => {
    if (open)
      return (
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
    else
      return (
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
    <div className="relative inline-block">
      <div onClick={toggleDropdown}>
        <div className="flex justify-between mb-14">
          <button className="text-[#83888f] text-2xl font-black font-fraunces leading-7 md:text-[32px] md:leading-[48px] lg:text-[40px] text-left hover:text-[#A3A8AE]">
            {questions}
          </button>
          <div className="cursor-pointer">{handleArrowChange(isOpen)}</div>
        </div>
      </div>
      {isOpen && (
        <ul
          className=" flex flex-col gap-2 lg:gap-[23px] md:flex-row md:gap-[10px]"
          onClick={onChange(selectedOption)}>
          {options.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                handleOptionClick(option);
              }}
              className={`flex flex-col  rounded-lg py-6 px-[25px] md:pt-[32px] md:pb-[84px] gap-2 text-customgrayishblue md:flex-1 hover:bg-[#FDD6BA] hover:text-white ${
                selectedOption === option.value
                  ? "bg-bluelagoon"
                  : "bg-[#F4F1EB]"
              }`}>
              <span className="text-2xl font-black font-fraunces leading-loos">
                {option.label}
              </span>
              <span className="text-base font-normal font-['Barlow'] leading-relaxed">
                {option.label2}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default Dropdown;
