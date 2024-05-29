import React from "react";
import { colorConstants, designConstants } from "../constants";

const Input = ({placeholder, type, value, setValue, icon}) => {
    return (
        <div
            className="flex items-center h-[50px] sm:h-[75px]"
            style={{
                border: `2px solid ${designConstants.borderColor}`,
                borderRadius: designConstants.borderRadius,
            }}
        >
            {/* visile above 640px screen */}
            <div
                className="hidden h-full aspect-square sm:flex justify-center items-center"
                style={{
                    borderRight: `1px solid ${designConstants.borderColor}`,
                }}
            >
                {icon()}
            </div>

            {/* visible on 640px and below screen */}
            <div
                className="sm:hidden h-full aspect-square flex justify-center items-center"
                style={{
                    borderRight: `1px solid ${designConstants.borderColor}`,
                }}
            >
                {icon("35px")}
            </div>
            <input
                className="input border-none rounded-none h-full focus:outline-none text-[15px] sm:text-[30px] w-full"
                style={{
                    borderLeft: `1px solid ${designConstants.borderColor}`,
                    borderTopRightRadius: designConstants.borderRadius,
                    borderBottomRightRadius: designConstants.borderRadius,
                }}
                type={type ?? "text"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Input;