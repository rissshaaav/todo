import React from "react";

const MenuItem = ({ leftIcon, text, rightIcon, header }) => {
    return (
        <div className={`hover:bg-white bg-${header && "white"} p-2.5 rounded-[10px] flex items-center gap-[10px] h-[50px] w-full`}>
            {/* avatar or icon */}
            {leftIcon && <div>{leftIcon}</div>}

            {/* username or menu text */}
            {text && (
                <div className="flex-1">
                    <p className="text-sm font-semibold">{text}</p>
                </div>
            )}

            {/* right side icon/optional */}
            {rightIcon && <div>{rightIcon}</div>}
        </div>
    );
};

export default MenuItem;
