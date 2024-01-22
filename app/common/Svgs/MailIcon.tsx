import React from "react";
import styles from "./MailIcon.module.scss";
interface IMailIcon {
  color?: string;
  href?: string;
}
const MailIcon: React.FC<IMailIcon> = ({ color = "#CCB017", href = "#" }) => {
  return (
    <svg
      className={styles.mailIconMain}
      viewBox="0 0 23 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_186_111)">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.mailIconMain}
        >
          <path
            d="M20.25 3H4.91667C3.8625 3 3.00958 3.8625 3.00958 4.91667L3 16.4167C3 17.4708 3.8625 18.3333 4.91667 18.3333H20.25C21.3042 18.3333 22.1667 17.4708 22.1667 16.4167V4.91667C22.1667 3.8625 21.3042 3 20.25 3ZM20.25 16.4167H4.91667V6.83333L12.5833 11.625L20.25 6.83333V16.4167ZM12.5833 9.70833L4.91667 4.91667H20.25L12.5833 9.70833Z"
            fill={color}
          />
        </a>
      </g>
    </svg>
  );
};

export default MailIcon;
