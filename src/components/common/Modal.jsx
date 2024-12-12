"use client";
import React from "react";
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose, isOpen = true, title }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Modal Content */}
      <div className="bg-white w-full max-w-md mx-auto p-6 rounded-lg shadow-lg relative">
        {/* Close Button */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold">{title || "Modal Title"}</h2>
          <button onClick={onClose} className="text-gray-800">
            <IoClose size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
