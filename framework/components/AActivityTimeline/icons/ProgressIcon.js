import React from "react";
import "../AActivityTimeline.scss";

function ProgressIcon() {
  return (
    <svg
      fill="none"
      height="18"
      viewBox="0 0 18 18"
      width="18"
      className="a-activity-timeline__list-item__status-icon"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="9"
        cy="9"
        fill="var(--base-bg-default)"
        r="8"
        stroke="var(--interact-border-weak-default)"
        strokeWidth="2"
      ></circle>
      <path
        d="M9 0C10.5782 1.88202e-08 12.1287 0.415016 13.4959 1.20342C14.8631 1.99182 15.999 3.12588 16.7895 4.49184C17.5801 5.8578 17.9975 7.40763 18 8.98586C18.0025 10.5641 17.5899 12.1152 16.8036 13.4837C16.0174 14.8521 14.8851 15.9897 13.5204 16.7824C12.1557 17.5751 10.6065 17.995 9.02828 18C7.45005 18.0049 5.89827 17.5948 4.5286 16.8107C3.15893 16.0266 2.01953 14.8961 1.22469 13.5326L2.95081 12.5264C3.56919 13.5872 4.45565 14.4667 5.52125 15.0767C6.58686 15.6867 7.79414 16.0058 9.022 16.002C10.2499 15.9981 11.4551 15.6714 12.5169 15.0547C13.5786 14.438 14.4595 13.5529 15.0712 12.4883C15.6829 11.4236 16.0039 10.2169 16.002 8.989C16.0001 7.76114 15.6753 6.55537 15.0602 5.49265C14.4452 4.42993 13.5615 3.54763 12.4978 2.93426C11.4341 2.32088 10.2279 1.998 9 1.998V0Z"
        fill="var(--interact-border-default)"
        style={{
          transform: "rotate(-6deg)",
          transformOrigin: "50% 50%"
        }}
      ></path>
    </svg>
  );
}

export default ProgressIcon;
