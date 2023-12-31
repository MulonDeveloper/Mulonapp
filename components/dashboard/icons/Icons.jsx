import React from 'react'


export const TrashIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V9C18 7.9 17.1 7 16 7H8C6.9 7 6 7.9 6 9V19ZM11.65 10.35C11.85 10.15 12.16 10.15 12.36 10.35L16 14H14V18H10V14H8L11.65 10.35ZM15.5 4L14.79 3.29C14.61 3.11 14.35 3 14.09 3H9.91C9.65 3 9.39 3.11 9.21 3.29L8.5 4H6C5.45 4 5 4.45 5 5C5 5.55 5.45 6 6 6H18C18.55 6 19 5.55 19 5C19 4.45 18.55 4 18 4H15.5Z"
                fill="#969696"
            />
        </svg>
    );
};

export const DeleteIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M8.60834 13.75H11.3833"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M7.91669 10.4167H12.0834"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

export const EyeIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
        <path
            d="M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
        />
    </svg>
);

export const EditIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 20 20"
        width="1em"
        {...props}
    >
        <path
            d="M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
        <path
            d="M2.5 18.3333H17.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit={10}
            strokeWidth={1.5}
        />
    </svg>
);

export const LayoutIcon = (props) => (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M19 3H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2V5c0-1.103-.897-2-2-2zm0 2 .001 4H5V5h14zM5 11h8v8H5v-8zm10 8v-8h4.001l.001 8H15z"
            fill="currentColor"
        />
    </svg>
);

export const UsersIcon = (props) => (
    <svg height="1em" viewBox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            d="M16.604 11.048a5.67 5.67 0 0 0 .751-3.44c-.179-1.784-1.175-3.361-2.803-4.44l-1.105 1.666c1.119.742 1.8 1.799 1.918 2.974a3.693 3.693 0 0 1-1.072 2.986l-1.192 1.192 1.618.475C18.951 13.701 19 17.957 19 18h2c0-1.789-.956-5.285-4.396-6.952z"
            fill="currentColor"
        />
        <path
            d="M9.5 12c2.206 0 4-1.794 4-4s-1.794-4-4-4-4 1.794-4 4 1.794 4 4 4zm0-6c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2zm1.5 7H8c-3.309 0-6 2.691-6 6v1h2v-1c0-2.206 1.794-4 4-4h3c2.206 0 4 1.794 4 4v1h2v-1c0-3.309-2.691-6-6-6z"
            fill="currentColor"
        />
    </svg>
);

export const MailIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z"
            fill="currentColor"
        />
    </svg>
);

export const LockIcon = (props) => (
    <svg
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="1em"
        role="presentation"
        viewBox="0 0 24 24"
        width="1em"
        {...props}
    >
        <path
            d="M12.0011 17.3498C12.9013 17.3498 13.6311 16.6201 13.6311 15.7198C13.6311 14.8196 12.9013 14.0898 12.0011 14.0898C11.1009 14.0898 10.3711 14.8196 10.3711 15.7198C10.3711 16.6201 11.1009 17.3498 12.0011 17.3498Z"
            fill="currentColor"
        />
        <path
            d="M18.28 9.53V8.28C18.28 5.58 17.63 2 12 2C6.37 2 5.72 5.58 5.72 8.28V9.53C2.92 9.88 2 11.3 2 14.79V16.65C2 20.75 3.25 22 7.35 22H16.65C20.75 22 22 20.75 22 16.65V14.79C22 11.3 21.08 9.88 18.28 9.53ZM12 18.74C10.33 18.74 8.98 17.38 8.98 15.72C8.98 14.05 10.34 12.7 12 12.7C13.66 12.7 15.02 14.06 15.02 15.72C15.02 17.39 13.67 18.74 12 18.74ZM7.35 9.44C7.27 9.44 7.2 9.44 7.12 9.44V8.28C7.12 5.35 7.95 3.4 12 3.4C16.05 3.4 16.88 5.35 16.88 8.28V9.45C16.8 9.45 16.73 9.45 16.65 9.45H7.35V9.44Z"
            fill="currentColor"
        />
    </svg>
);


export const ViewIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 3H5C3.9 3 3 3.9 3 5V12C3 13.1 3.9 14 5 14H19C20.1 14 21 13.1 21 12V5C21 3.9 20.1 3 19 3ZM19 9H15.86C15.39 9 15.02 9.33 14.89 9.78C14.53 11.04 13.35 12 12 12C10.65 12 9.47 11.04 9.11 9.78C8.98 9.33 8.61 9 8.14 9H5V6C5 5.45 5.45 5 6 5H18C18.55 5 19 5.45 19 6V9ZM15.87 16H20C20.55 16 21 16.45 21 17V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V17C3 16.45 3.45 16 4 16H8.13C8.6 16 8.98 16.34 9.11 16.8C9.46 18.07 10.62 19 12 19C13.38 19 14.54 18.07 14.89 16.8C15.02 16.34 15.4 16 15.87 16Z"
                fill="#969696"
            />
        </svg>
    );
};

export const SettingsIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19.4308 12.98C19.4708 12.66 19.5008 12.34 19.5008 12C19.5008 11.66 19.4708 11.34 19.4308 11.02L21.5408 9.37C21.7308 9.22 21.7808 8.95 21.6608 8.73L19.6608 5.27C19.5408 5.05 19.2708 4.97 19.0508 5.05L16.5608 6.05C16.0408 5.65 15.4808 5.32 14.8708 5.07L14.4908 2.42C14.4608 2.18 14.2508 2 14.0008 2H10.0008C9.75082 2 9.54082 2.18 9.51082 2.42L9.13082 5.07C8.52082 5.32 7.96082 5.66 7.44082 6.05L4.95082 5.05C4.72082 4.96 4.46082 5.05 4.34082 5.27L2.34082 8.73C2.21082 8.95 2.27082 9.22 2.46082 9.37L4.57082 11.02C4.53082 11.34 4.50082 11.67 4.50082 12C4.50082 12.33 4.53082 12.66 4.57082 12.98L2.46082 14.63C2.27082 14.78 2.22082 15.05 2.34082 15.27L4.34082 18.73C4.46082 18.95 4.73082 19.03 4.95082 18.95L7.44082 17.95C7.96082 18.35 8.52082 18.68 9.13082 18.93L9.51082 21.58C9.54082 21.82 9.75082 22 10.0008 22H14.0008C14.2508 22 14.4608 21.82 14.4908 21.58L14.8708 18.93C15.4808 18.68 16.0408 18.34 16.5608 17.95L19.0508 18.95C19.2808 19.04 19.5408 18.95 19.6608 18.73L21.6608 15.27C21.7808 15.05 21.7308 14.78 21.5408 14.63L19.4308 12.98ZM12.0008 15.5C10.0708 15.5 8.50082 13.93 8.50082 12C8.50082 10.07 10.0708 8.5 12.0008 8.5C13.9308 8.5 15.5008 10.07 15.5008 12C15.5008 13.93 13.9308 15.5 12.0008 15.5Z"
                fill="#969696"
            />
        </svg>
    );
};

export const ReportsIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M19 3H14.82C14.4 1.84 13.3 1 12 1C10.7 1 9.6 1.84 9.18 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM12 3C12.55 3 13 3.45 13 4C13 4.55 12.55 5 12 5C11.45 5 11 4.55 11 4C11 3.45 11.45 3 12 3ZM13 17H8C7.45 17 7 16.55 7 16C7 15.45 7.45 15 8 15H13C13.55 15 14 15.45 14 16C14 16.55 13.55 17 13 17ZM16 13H8C7.45 13 7 12.55 7 12C7 11.45 7.45 11 8 11H16C16.55 11 17 11.45 17 12C17 12.55 16.55 13 16 13ZM16 9H8C7.45 9 7 8.55 7 8C7 7.45 7.45 7 8 7H16C16.55 7 17 7.45 17 8C17 8.55 16.55 9 16 9Z"
                fill="#969696"
            />
        </svg>
    );
};

export const ProductsIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20 6H16V4C16 2.89 15.11 2 14 2H10C8.89 2 8 2.89 8 4V6H4C2.89 6 2.01 6.89 2.01 8L2 19C2 20.11 2.89 21 4 21H20C21.11 21 22 20.11 22 19V8C22 6.89 21.11 6 20 6ZM14 6H10V4H14V6Z"
                fill="#969696"
            />
        </svg>
    );
};

export const PaymentsIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10 16V8C10 6.9 10.89 6 12 6H21V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V18H12C10.89 18 10 17.1 10 16ZM13 8C12.45 8 12 8.45 12 9V15C12 15.55 12.45 16 13 16H22V8H13ZM16 13.5C15.17 13.5 14.5 12.83 14.5 12C14.5 11.17 15.17 10.5 16 10.5C16.83 10.5 17.5 11.17 17.5 12C17.5 12.83 16.83 13.5 16 13.5Z"
                fill="#969696"
            />
        </svg>
    );
};

export const HomeIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 13H10C10.55 13 11 12.55 11 12V4C11 3.45 10.55 3 10 3H4C3.45 3 3 3.45 3 4V12C3 12.55 3.45 13 4 13ZM4 21H10C10.55 21 11 20.55 11 20V16C11 15.45 10.55 15 10 15H4C3.45 15 3 15.45 3 16V20C3 20.55 3.45 21 4 21ZM14 21H20C20.55 21 21 20.55 21 20V12C21 11.45 20.55 11 20 11H14C13.45 11 13 11.45 13 12V20C13 20.55 13.45 21 14 21ZM13 4V8C13 8.55 13.45 9 14 9H20C20.55 9 21 8.55 21 8V4C21 3.45 20.55 3 20 3H14C13.45 3 13 3.45 13 4Z"
                fill="#0085FF"
            />
        </svg>
    );
};

export const FilterIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                d="M4.25018 5.61C6.57018 8.59 10.0002 13 10.0002 13V18C10.0002 19.1 10.9002 20 12.0002 20C13.1002 20 14.0002 19.1 14.0002 18V13C14.0002 13 17.4302 8.59 19.7502 5.61C20.2602 4.95 19.7902 4 18.9502 4H5.04018C4.21018 4 3.74018 4.95 4.25018 5.61Z"
                fill="#969696"
            />
        </svg>
    );
};

export const DevIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.70047 15.9L4.80047 12L8.70047 8.09997C9.09047 7.70997 9.09047 7.08997 8.70047 6.69997C8.31047 6.30997 7.69047 6.30997 7.30047 6.69997L2.71047 11.29C2.32047 11.68 2.32047 12.31 2.71047 12.7L7.30047 17.3C7.69047 17.69 8.31047 17.69 8.70047 17.3C9.09047 16.91 9.09047 16.29 8.70047 15.9V15.9ZM15.3005 15.9L19.2005 12L15.3005 8.09997C14.9105 7.70997 14.9105 7.08997 15.3005 6.69997C15.6905 6.30997 16.3105 6.30997 16.7005 6.69997L21.2905 11.29C21.6805 11.68 21.6805 12.31 21.2905 12.7L16.7005 17.3C16.3105 17.69 15.6905 17.69 15.3005 17.3C14.9105 16.91 14.9105 16.29 15.3005 15.9V15.9Z"
                fill="#969696"
            />
        </svg>
    );
};


export const CustomersIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM15.61 8.34C16.68 8.34 17.54 9.2 17.54 10.27C17.54 11.34 16.68 12.2 15.61 12.2C14.54 12.2 13.68 11.34 13.68 10.27C13.67 9.2 14.54 8.34 15.61 8.34ZM9.61 6.76C10.91 6.76 11.97 7.82 11.97 9.12C11.97 10.42 10.91 11.48 9.61 11.48C8.31 11.48 7.25 10.42 7.25 9.12C7.25 7.81 8.3 6.76 9.61 6.76ZM9.61 15.89V19.64C7.21 18.89 5.31 17.04 4.47 14.68C5.52 13.56 8.14 12.99 9.61 12.99C10.14 12.99 10.81 13.07 11.51 13.21C9.87 14.08 9.61 15.23 9.61 15.89ZM12 20C11.73 20 11.47 19.99 11.21 19.96V15.89C11.21 14.47 14.15 13.76 15.61 13.76C16.68 13.76 18.53 14.15 19.45 14.91C18.28 17.88 15.39 20 12 20Z"
                fill="#969696"
            />
        </svg>
    );
};


export const ChangeLogIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M13.26 3.00007C8.17003 2.86007 4.00003 6.95007 4.00003 12.0001H2.21003C1.76003 12.0001 1.54003 12.5401 1.86003 12.8501L4.65003 15.6501C4.85003 15.8501 5.16003 15.8501 5.36003 15.6501L8.15003 12.8501C8.46003 12.5401 8.24003 12.0001 7.79003 12.0001H6.00003C6.00003 8.10007 9.18003 4.95007 13.1 5.00007C16.82 5.05007 19.95 8.18007 20 11.9001C20.05 15.8101 16.9 19.0001 13 19.0001C11.39 19.0001 9.90003 18.4501 8.72003 17.5201C8.32003 17.2101 7.76003 17.2401 7.40003 17.6001C6.98003 18.0201 7.01003 18.7301 7.48003 19.0901C9.00003 20.2901 10.91 21.0001 13 21.0001C18.05 21.0001 22.14 16.8301 22 11.7401C21.87 7.05007 17.95 3.13007 13.26 3.00007ZM12.75 8.00007C12.34 8.00007 12 8.34007 12 8.75007V12.4301C12 12.7801 12.19 13.1101 12.49 13.2901L15.61 15.1401C15.97 15.3501 16.43 15.2301 16.64 14.8801C16.85 14.5201 16.73 14.0601 16.38 13.8501L13.5 12.1401V8.74007C13.5 8.34007 13.16 8.00007 12.75 8.00007Z"
                fill="#969696"
            />
        </svg>
    );
};


export const BottomIcon = () => {
    return (
        <svg
            width="10"
            height="7"
            viewBox="0 0 10 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M0.412893 2.38145L4.01989 5.98845C4.56303 6.53159 5.44041 6.53159 5.98354 5.98845L9.59054 2.38145C10.4679 1.50408 9.84122 0 8.60175 0H1.38776C0.148287 0 -0.464485 1.50408 0.412893 2.38145Z"
                fill="#969696"
            />
        </svg>
    );
};

export const BalanceIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 16H18C18.55 16 19 15.55 19 15V9C19 8.45 18.55 8 18 8H15C14.45 8 14 8.45 14 9V15C14 15.55 14.45 16 15 16ZM16 10H17V14H16V10ZM9 16H12C12.55 16 13 15.55 13 15V9C13 8.45 12.55 8 12 8H9C8.45 8 8 8.45 8 9V15C8 15.55 8.45 16 9 16ZM10 10H11V14H10V10ZM6 8C5.45 8 5 8.45 5 9V15C5 15.55 5.45 16 6 16C6.55 16 7 15.55 7 15V9C7 8.45 6.55 8 6 8ZM2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6ZM19 18H5C4.45 18 4 17.55 4 17V7C4 6.45 4.45 6 5 6H19C19.55 6 20 6.45 20 7V17C20 17.55 19.55 18 19 18Z"
                fill="#969696"
            />
        </svg>
    );
};

export const AccountsIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 5V19C3 20.1 3.89 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3H5C3.89 3 3 3.9 3 5ZM15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6C13.66 6 15 7.34 15 9ZM6 17C6 15 10 13.9 12 13.9C14 13.9 18 15 18 17V18H6V17Z"
                fill="#969696"
            />
        </svg>
    );
};

export const NotificationIcon = () => {
    return (
        <svg
            width="28"
            height="24"
            viewBox="0 0 28 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="cursor-pointer"
        >
            <path
                className="fill-default-400"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.0005 22C13.1005 22 14.0005 21.1 14.0005 20H10.0005C10.0005 21.1 10.8905 22 12.0005 22ZM18.0005 16V11C18.0005 7.93 16.3605 5.36 13.5005 4.68V4C13.5005 3.17 12.8305 2.5 12.0005 2.5C11.1705 2.5 10.5005 3.17 10.5005 4V4.68C7.63054 5.36 6.00054 7.92 6.00054 11V16L4.71054 17.29C4.08054 17.92 4.52054 19 5.41054 19H18.5805C19.4705 19 19.9205 17.92 19.2905 17.29L18.0005 16Z"
            />
            <rect className="fill-danger" x="13" width="15" height="16" rx="7.5" />
            <path
                d="M18.0408 12V11.0483L20.5657 8.57315C20.8072 8.32931 21.0084 8.11269 21.1694 7.9233C21.3304 7.7339 21.4511 7.55043 21.5316 7.37287C21.6121 7.19531 21.6523 7.00592 21.6523 6.80469C21.6523 6.57505 21.6003 6.37855 21.4961 6.2152C21.3919 6.04948 21.2487 5.92164 21.0664 5.83168C20.8841 5.74171 20.677 5.69673 20.445 5.69673C20.2058 5.69673 19.9963 5.74645 19.8164 5.84588C19.6365 5.94294 19.4968 6.08144 19.3974 6.26136C19.3003 6.44129 19.2518 6.65554 19.2518 6.90412H17.9982C17.9982 6.44247 18.1036 6.04119 18.3143 5.70028C18.525 5.35937 18.815 5.09541 19.1843 4.90838C19.556 4.72135 19.9821 4.62784 20.4627 4.62784C20.9504 4.62784 21.3789 4.71899 21.7482 4.90128C22.1175 5.08357 22.404 5.33333 22.6076 5.65057C22.8136 5.9678 22.9165 6.33002 22.9165 6.73722C22.9165 7.00947 22.8645 7.27699 22.7603 7.53977C22.6561 7.80256 22.4727 8.09375 22.2099 8.41335C21.9495 8.73295 21.5837 9.12003 21.1126 9.57457L19.859 10.8494V10.8991H23.0266V12H18.0408Z"
                fill="white"
            />
        </svg>
    );
};

export const FeedbackIcon = () => {
    return (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                className="fill-default-400"
                d="M19.805 4.40893C19.8075 4.41143 19.81 4.41393 19.81 4.41893C20.13 4.85893 20.05 5.47893 19.62 5.79893C19.4633 5.91722 19.3039 6.03813 19.1435 6.15985C18.7614 6.44975 18.3733 6.74426 18 7.01893C17.56 7.34893 16.95 7.25893 16.62 6.81893C16.62 6.81393 16.6175 6.81143 16.615 6.80893C16.6125 6.80643 16.61 6.80393 16.61 6.79893C16.28 6.36893 16.36 5.74893 16.8 5.41893C17.1312 5.16416 17.4827 4.90128 17.8312 4.64062C18.0299 4.49203 18.2276 4.34416 18.42 4.19893C18.85 3.86893 19.47 3.95893 19.8 4.39893C19.8 4.40393 19.8025 4.40643 19.805 4.40893Z"
                fill="#969696"
            />
            <path
                className="fill-default-400"
                d="M18 11.6089C18 12.1589 18.45 12.6089 19 12.6089H21C21.55 12.6089 22 12.1589 22 11.6089C22 11.0589 21.55 10.6089 21 10.6089H19C18.45 10.6089 18 11.0589 18 11.6089Z"
                fill="#969696"
            />
            <path
                className="fill-default-400"
                d="M16.59 16.4288C16.26 16.8688 16.35 17.4788 16.79 17.7988C17.32 18.1888 17.88 18.6088 18.41 19.0088C18.85 19.3388 19.47 19.2488 19.79 18.8088C19.79 18.8038 19.7925 18.8013 19.795 18.7988C19.7975 18.7963 19.8 18.7938 19.8 18.7888C20.13 18.3488 20.04 17.7288 19.6 17.4088C19.0718 17.0101 18.5137 16.5915 17.9952 16.2026L17.99 16.1988C17.55 15.8688 16.93 15.9688 16.6 16.4088C16.6 16.4188 16.59 16.4288 16.59 16.4288Z"
                fill="#969696"
            />
            <path
                className="fill-default-400"
                d="M8 8.60889H4C2.9 8.60889 2 9.50889 2 10.6089V12.6089C2 13.7089 2.9 14.6089 4 14.6089H5V17.6089C5 18.1589 5.45 18.6089 6 18.6089C6.55 18.6089 7 18.1589 7 17.6089V14.6089H8L13 17.6089V5.60889L8 8.60889Z"
                fill="#969696"
            />
            <path
                className="fill-default-400"
                d="M14 8.25879C14.92 9.07879 15.5 10.2788 15.5 11.6088C15.5 12.9388 14.92 14.1388 14 14.9488V8.25879Z"
                fill="#969696"
            />
        </svg>
    );
};