export const nameIcon = (w = "50px") => {
    const nameIcon = (
        <svg
            width={w}
            height={w} //to make it a square always
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M14 4H10C6.22876 4 4.34315 4 3.17157 5.17157C2 6.34315 2 8.22876 2 12C2 15.7712 2 17.6569 3.17157 18.8284C4.34315 20 6.22876 20 10 20H14C17.7712 20 19.6569 20 20.8284 18.8284C22 17.6569 22 15.7712 22 12C22 8.22876 22 6.34315 20.8284 5.17157C19.6569 4 17.7712 4 14 4Z"
                fill="#1C274C"
            />
            <path
                d="M13.25 9C13.25 8.58579 13.5858 8.25 14 8.25H19C19.4142 8.25 19.75 8.58579 19.75 9C19.75 9.41421 19.4142 9.75 19 9.75H14C13.5858 9.75 13.25 9.41421 13.25 9Z"
                fill="#1C274C"
            />
            <path
                d="M14.25 12C14.25 11.5858 14.5858 11.25 15 11.25H19C19.4142 11.25 19.75 11.5858 19.75 12C19.75 12.4142 19.4142 12.75 19 12.75H15C14.5858 12.75 14.25 12.4142 14.25 12Z"
                fill="#1C274C"
            />
            <path
                d="M15.25 15C15.25 14.5858 15.5858 14.25 16 14.25H19C19.4142 14.25 19.75 14.5858 19.75 15C19.75 15.4142 19.4142 15.75 19 15.75H16C15.5858 15.75 15.25 15.4142 15.25 15Z"
                fill="#1C274C"
            />
            <path
                d="M9 11C10.1046 11 11 10.1046 11 9C11 7.89543 10.1046 7 9 7C7.89543 7 7 7.89543 7 9C7 10.1046 7.89543 11 9 11Z"
                fill="#1C274C"
            />
            <path
                d="M9 17C13 17 13 16.1046 13 15C13 13.8954 11.2091 13 9 13C6.79086 13 5 13.8954 5 15C5 16.1046 5 17 9 17Z"
                fill="#1C274C"
            />
        </svg>
    );
    return nameIcon;
};

export const usernameIcon = (w = "50px") => {
    const usernameIcon = (
        <svg
            width={w}
            height={w} //to make it a square always
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <circle cx="12" cy="6" r="4" fill="#1C274C" />
            <ellipse
                opacity="0.5"
                cx="12"
                cy="17"
                rx="7"
                ry="4"
                fill="#1C274C"
            />
        </svg>
    );
    return usernameIcon;
};

export const emailIcon = (w = "50px") => {
    const emailIcon = (
        <svg
            width={w}
            height={w} //to make it a square always
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <g id="style=bulk">
                <g id="email">
                    <path
                        opacity="0.5"
                        id="vector (Stroke)"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z"
                        fill="#1C274C"
                    />
                    <path
                        id="vector (Stroke)_2"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z"
                        fill="#1C274C"
                    />
                </g>
            </g>
        </svg>
    );
    return emailIcon;
};

export const passwordIcon = (w = "50px") => {
    const passwordIcon = (
        <svg
            width={w}
            height={w} //to make it a square always
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                opacity="0.5"
                d="M2 12C2 8.22876 2 6.34315 3.17157 5.17157C4.34315 4 6.22876 4 10 4H14C17.7712 4 19.6569 4 20.8284 5.17157C22 6.34315 22 8.22876 22 12C22 15.7712 22 17.6569 20.8284 18.8284C19.6569 20 17.7712 20 14 20H10C6.22876 20 4.34315 20 3.17157 18.8284C2 17.6569 2 15.7712 2 12Z"
                fill="#1C274C"
            />
            <path
                d="M12.7504 10C12.7504 9.58579 12.4146 9.25 12.0004 9.25C11.5861 9.25 11.2504 9.58579 11.2504 10V10.7012L10.6429 10.3505C10.2842 10.1434 9.82553 10.2663 9.61842 10.625C9.41131 10.9837 9.53422 11.4424 9.89294 11.6495L10.4999 11.9999L9.8927 12.3505C9.53398 12.5576 9.41108 13.0163 9.61818 13.375C9.82529 13.7337 10.284 13.8566 10.6427 13.6495L11.2504 13.2987V14C11.2504 14.4142 11.5861 14.75 12.0004 14.75C12.4146 14.75 12.7504 14.4142 12.7504 14V13.2993L13.357 13.6495C13.7158 13.8566 14.1745 13.7337 14.3816 13.375C14.5887 13.0163 14.4658 12.5576 14.107 12.3505L13.4999 11.9999L14.1068 11.6495C14.4655 11.4424 14.5884 10.9837 14.3813 10.625C14.1742 10.2663 13.7155 10.1434 13.3568 10.3505L12.7504 10.7006V10Z"
                fill="#1C274C"
            />
            <path
                d="M6.73278 9.25C7.147 9.25 7.48278 9.58579 7.48278 10V10.7006L8.08923 10.3505C8.44795 10.1434 8.90664 10.2663 9.11375 10.625C9.32085 10.9837 9.19795 11.4424 8.83923 11.6495L8.23229 11.9999L8.83946 12.3505C9.19818 12.5576 9.32109 13.0163 9.11398 13.375C8.90687 13.7337 8.44818 13.8566 8.08946 13.6495L7.48278 13.2993V14C7.48278 14.4142 7.147 14.75 6.73278 14.75C6.31857 14.75 5.98278 14.4142 5.98278 14V13.2987L5.37513 13.6495C5.01641 13.8566 4.55771 13.7337 4.35061 13.375C4.1435 13.0163 4.26641 12.5576 4.62513 12.3505L5.23229 11.9999L4.62536 11.6495C4.26664 11.4424 4.14373 10.9837 4.35084 10.625C4.55795 10.2663 5.01664 10.1434 5.37536 10.3505L5.98278 10.7012V10C5.98278 9.58579 6.31857 9.25 6.73278 9.25Z"
                fill="#1C274C"
            />
            <path
                d="M18.0182 10C18.0182 9.58579 17.6824 9.25 17.2682 9.25C16.854 9.25 16.5182 9.58579 16.5182 10V10.7012L15.9108 10.3505C15.552 10.1434 15.0934 10.2663 14.8863 10.625C14.6791 10.9837 14.802 11.4424 15.1608 11.6495L15.7677 11.9999L15.1605 12.3505C14.8018 12.5576 14.6789 13.0163 14.886 13.375C15.0931 13.7337 15.5518 13.8566 15.9105 13.6495L16.5182 13.2987V14C16.5182 14.4142 16.854 14.75 17.2682 14.75C17.6824 14.75 18.0182 14.4142 18.0182 14V13.2993L18.6249 13.6495C18.9836 13.8566 19.4423 13.7337 19.6494 13.375C19.8565 13.0163 19.7336 12.5576 19.3749 12.3505L18.7677 11.9999L19.3746 11.6495C19.7334 11.4424 19.8563 10.9837 19.6492 10.625C19.442 10.2663 18.9834 10.1434 18.6246 10.3505L18.0182 10.7006V10Z"
                fill="#1C274C"
            />
        </svg>
    );
    return passwordIcon;
};