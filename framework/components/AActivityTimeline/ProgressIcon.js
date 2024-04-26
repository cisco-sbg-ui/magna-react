import React from "react";
import "./AActivityTimeline.scss";

function ProgressIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      className="a-activity-timeline__item__svg-icon a-activity-timeline__item__svg-icon--progress"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="8" cy="9" r="8" stroke-width="2" />
      <path
        d="M8 0C9.57823 1.88202e-08 11.1287 0.415016 12.4959 1.20342C13.8631 1.99182 14.999 3.12588 15.7895 4.49184C16.5801 5.8578 16.9975 7.40763 17 8.98586C17.0025 10.5641 16.5899 12.1152 15.8036 13.4837C15.0174 14.8521 13.8851 15.9897 12.5204 16.7824C11.1557 17.5751 9.6065 17.995 8.02828 18C6.45005 18.0049 4.89827 17.5948 3.5286 16.8107C2.15893 16.0266 1.01953 14.8961 0.224692 13.5326L1.95081 12.5264C2.56919 13.5872 3.45565 14.4667 4.52125 15.0767C5.58686 15.6867 6.79414 16.0058 8.022 16.002C9.24986 15.9981 10.4551 15.6714 11.5169 15.0547C12.5786 14.438 13.4595 13.5529 14.0712 12.4883C14.6829 11.4236 15.0039 10.2169 15.002 8.989C15.0001 7.76114 14.6753 6.55537 14.0602 5.49265C13.4452 4.42993 12.5615 3.54763 11.4978 2.93426C10.4341 2.32088 9.22786 1.998 8 1.998V0Z"
        fill="#1D69CC"
      />
    </svg>
  );
}

export default ProgressIcon;
