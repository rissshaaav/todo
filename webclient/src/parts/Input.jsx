import React, { useState } from "react";
import { designConstants } from "../constants";

const Input = ({ placeholder, type, value, setValue, icon, iconSize, iconColor, className }) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <div
            className={`flex items-center h-[50px] sm:h-[75px] w-full border-[2px] border-borderColor dark:border-borderColorDark ${className}`}
            style={{
                // border: `2px solid ${designConstants.borderColor}`,
                borderRadius: designConstants.borderRadius,
                borderColor: isFocused && `#6161ff`,
            }}
        >
            {/* visile above 640px screen */}
            <div
                className="hidden h-full aspect-square sm:flex justify-center items-center rounded-l-[10px] border-r-[1px] border-borderColor dark:border-borderColorDark"
                style={{
                    // borderRight: `1px solid`,
                    borderColor: isFocused && `#6161ff`,
                }}
            >
                {icon(iconSize, iconColor)}
            </div>

            {/* visible on 640px and below screen */}
            <div
                className="sm:hidden h-full aspect-square flex justify-center items-center rounded-l-[10px] border-r-[1px] border-borderColor dark:border-borderColorDark"
                style={{
                    // borderRight: `1px solid`,
                    borderColor: isFocused && `#6161ff`,
                }}
            >
                {icon(iconSize ?? "35px", iconColor)}
            </div>

            {/* Input */}
            <input
                className="input border-none rounded-none h-full focus:outline-none text-[15px] sm:text-[20px] w-full text-textMain dark:text-textMainDark bg-foreground dark:bg-foregroundDark"
                style={{
                    // borderLeft: `1px solid ${designConstants.borderColor}`,
                    borderTopRightRadius: designConstants.borderRadius,
                    borderBottomRightRadius: designConstants.borderRadius,
                }}
                type={type ?? "text"}
                placeholder={placeholder}
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
            />
        </div>
    );
};

export default Input;
