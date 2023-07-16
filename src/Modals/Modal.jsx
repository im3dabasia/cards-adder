import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed z-10 inset-0 overflow-y-auto flex items-center justify-center">
            <div
                className="fixed inset-0 bg-gray-500 opacity-75"
                aria-hidden="true"
                onClick={onClose}
            >

            </div>

            <div className="inline-block 
         align-bottom
         bg-white
         w-full
         max-w-3xl
         rounded-lg
         text-left 
         overflow-hidden 
         w-full
         max-w-3xl
         shadow-xl 
         transform 
         transition-all 
         my-auto
         mx-auto
         mt-12">
                {children}
            </div>
        </div>
    );
};

export default Modal;