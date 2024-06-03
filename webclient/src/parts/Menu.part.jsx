import React from "react";
import MenuItem from "../components/MenuItem.component";
import {
    usernameIcon,
    menuIcon,
    todoIcon,
    inboxIcon,
    calendarIcon,
    trashIcon,
} from "../assets/icons";

const Menu = () => {
    return (
        <div className="min-w-[250px] w-2/12 h-screen p-5 flex flex-col gap-[10px]">
            {/* Menu header displaying user avatar, username & menu button */}
            <MenuItem
                leftIcon={usernameIcon("30px")}
                text="username"
                rightIcon={menuIcon("30px")}
                header={true}
            />

            {/* menu section text */}
            <p className="text-sm text-[#3f3f3f]">General</p>

            {/* Menu items */}
            {/* Todo */}
            <MenuItem leftIcon={todoIcon("30px")} text="Todo" />
            {/* Inbox */}
            <MenuItem leftIcon={inboxIcon("30px")} text="Inbox" />
            {/* Calendar */}
            <MenuItem leftIcon={calendarIcon("30px")} text="Calendar" />
            {/* Trash */}
            <MenuItem leftIcon={trashIcon("30px")} text="Trash" />
        </div>
    );
};

export default Menu;
// Path: webclient/src/pages/Home.page.jsx
