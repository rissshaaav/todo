import React, { useEffect } from "react";
import MenuItem from "../components/MenuItem.component";
import {
    menuIcon,
    todoIcon,
    inboxIcon,
    calendarIcon,
    trashIcon,
} from "../assets/icons";
import useUserDataStore from "../store/userData.store";
import userDataService from "../services/userRelated/userData.service";

const Menu = () => {
    // call setUserData action from userData store
    const { setUserData } = useUserDataStore((state) => state);

    // get name and profile picture link from userData store
    const { name, profilePictureLink } = useUserDataStore(
        (state) => state.userData
    );

    // call userDataService to get user data
    // and set it in userData store
    useEffect(() => {
        const fetchAndSetUserData = async () => {
            const { data } = await userDataService();
            setUserData({
                name: data[0].name,
                username: data[0].username,
                email: data[0].email,
                profilePictureLink: data[0].profilePictureLink,
            });
        };
        fetchAndSetUserData();
    }, [setUserData]);
    return (
        <div className="min-w-[250px] w-2/12 max-w-[300px] h-screen p-5 flex flex-col gap-[10px] bg-background dark:bg-backgroundNavDark text-textMain dark:text-textMainDark">
            {/* Menu header displaying user avatar, username & menu button */}
            <MenuItem
                leftIcon={profilePictureLink}
                text={name}
                rightIcon={menuIcon(
                    "30px",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "#fff"
                        : ""
                )}
                header={true}
                to="/profile"
            />

            {/* menu section text */}
            <p className="text-sm text-textSecondary dark:text-textSecondaryDark">General</p>

            {/* Menu items */}
            {/* Todo */}
            <MenuItem
                leftIcon={todoIcon(
                    "30px",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "#fff"
                        : ""
                )}
                text="Todo"
                to="/todo"
            />
            {/* Inbox */}
            <MenuItem
                leftIcon={inboxIcon(
                    "30px",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "#fff"
                        : ""
                )}
                text="Inbox"
                to="/inbox"
            />
            {/* Calendar */}
            <MenuItem
                leftIcon={calendarIcon(
                    "30px",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "#fff"
                        : ""
                )}
                text="Calendar"
                to="/calendar"
            />
            {/* Trash */}
            <MenuItem
                leftIcon={trashIcon(
                    "30px",
                    window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? "#fff"
                        : ""
                )}
                text="Trash"
                to="/trash"
            />
        </div>
    );
};

export default Menu;
// Path: webclient/src/Layout.jsx
