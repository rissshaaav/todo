import React from "react";

const SubmitBtn = ({text, func}) => {
    return (
        <button
            onClick={func}
            className="btn bg-[#3f3f3f] hover:bg-[#6161ff] btn-block text-[#fff] h-[50px] sm:h-[75px] text-[15px] sm:text-[30px] border-borderColor dark:border-borderColorDark"
        >
            {text}
        </button>
    );
};

export default SubmitBtn;
