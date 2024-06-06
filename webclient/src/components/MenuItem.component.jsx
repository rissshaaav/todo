import React from "react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ leftIcon, text, rightIcon, header = false, to }) => {
    return (
        <NavLink
            to={to}
            className={`hover:bg-white bg-${
                header && "white"
            } p-2.5 rounded-[10px] flex items-center gap-[10px] h-[50px] w-full`}
            // style for when active menu item
            style={({ isActive }) =>
                isActive
                    ? {
                          backgroundColor: "white",
                          color: "#6161ff",
                          fontWeight: "bold",
                      }
                    : {}
            }
        >
            {/* if this component is used as header then 
            render image tag else render div containing icon */}
            {header ? (
                <div className="flex items-center gap-[10px]">
                    <img
                        src={leftIcon}
                        alt="profile"
                        className="h-[30px] w-[30px] rounded-full"
                    />
                </div>
            ) : (
                <div>{leftIcon}</div>
            )}

            {/* username or menu text */}
            {text && (
                <div className="flex-1">
                    <p className="text-md ">{text}</p>
                </div>
            )}

            {/* right side icon/optional */}
            {rightIcon && <div>{rightIcon}</div>}
        </NavLink>
    );
};

export default MenuItem;
