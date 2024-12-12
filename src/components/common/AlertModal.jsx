import Link from "next/link";
import React from "react";

import { RxCross1 } from "react-icons/rx";

const AlertModal = ({
  children,
  onClose,
  isOpen,
  rightButton = "Confirm",
  leftButton = "Cancel",
}) => {
  if (!isOpen) return null;
  return (
    <>
      <div
        className={`${
          isOpen ? " scale-[1] opacity-100" : " scale-[0] opacity-0"
        } w-full h-screen fixed top-0 left-0 z-50 bg-[#0000002a] flex items-center justify-center transition-all duration-300 `}
      >
        <div className="w-[90%] lg:w-[40%] bg-[#ffffff] rounded-lg p-4 ">
          <div className="w-full flex items-end justify-end">
            <RxCross1
              className="p-2 text-[2.5rem] hover:bg-[#e7e7e7] rounded-full transition-all duration-300 cursor-pointer"
              onClick={onClose}
            />
          </div>
          {children}

          <div className="flex items-center gap-3 lg:gap-5 w-full justify-end mt-6">
            <button
              className="px-4 py-2 border border-[#a8a8a8] rounded-lg text-[#585858]"
              onClick={onClose}
            >
              {leftButton}
            </button>
            <Link
              href={"/sign-in"}
              className="px-4 py-2 bg-[#1789FB] rounded-lg text-[#ffffff]"
            >
              {rightButton}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlertModal;
