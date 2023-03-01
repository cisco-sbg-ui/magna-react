import React from "react";

const MagnaIcons = {
  at: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M181.1,208A96,96,0,1,1,224,128c0,22.1-8,40-28,40s-28-17.9-28-40V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  bell: {
    xml: (
      <>
        <path
          d="M56.2,104a71.9,71.9,0,0,1,72.3-72c39.6.3,71.3,33.2,71.3,72.9V112c0,35.8,7.5,56.6,14.1,68a8,8,0,0,1-6.9,12H49a8,8,0,0,1-6.9-12c6.6-11.4,14.1-32.2,14.1-68Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M96,192v8a32,32,0,0,0,64,0v-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  circle: {
    xml: (
      <>
        <circle cx="128" cy="128" r="104"></circle>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 256 256"
    }
  },
  clock: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <polyline
          points="128 72 128 128 184 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  copy: {
    xml: (
      <>
        <rect
          x="40"
          y="88"
          width="128"
          height="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <polyline
          points="168 168 216 168 216 40 88 40 88 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  database: {
    xml: (
      <>
        <ellipse
          cx="128"
          cy="80"
          rx="88"
          ry="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></ellipse>
        <path
          d="M40,80v48c0,26.5,39.4,48,88,48s88-21.5,88-48V80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M40,128v48c0,26.5,39.4,48,88,48s88-21.5,88-48V128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  desktop: {
    xml: (
      <>
        <rect
          x="32"
          y="48"
          width="192"
          height="144"
          rx="16"
          transform="translate(256 240) rotate(180)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="160"
          y1="224"
          x2="96"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="32"
          y1="152"
          x2="224"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="192"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  envelope: {
    xml: (
      <>
        <polyline
          points="224 56 128 144 32 56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="110.5"
          y1="128"
          x2="34.5"
          y2="197.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="221.5"
          y1="197.7"
          x2="145.5"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  file: {
    xml: (
      <>
        <path
          d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  globe: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <line
          x1="37.5"
          y1="96"
          x2="218.5"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="37.5"
          y1="160"
          x2="218.5"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <ellipse
          cx="128"
          cy="128"
          rx="40"
          ry="93.4"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></ellipse>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  plugs: {
    xml: (
      <>
        <path
          d="M132,180l-31,31a24,24,0,0,1-34,0L45,189a24,24,0,0,1,0-34l31-31"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M180,132l31-31a24,24,0,0,0,0-34L189,45a24,24,0,0,0-34,0L124,76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="56"
          y1="200"
          x2="24"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="232"
          y1="24"
          x2="200"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="144"
          y1="144"
          x2="120"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line x1="144" y1="144" x2="120" y2="168" fill="#231f20"></line>
        <line
          x1="112"
          y1="112"
          x2="88"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line x1="112" y1="112" x2="88" y2="136" fill="#231f20"></line>
        <line
          x1="116"
          y1="68"
          x2="188"
          y2="140"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="68"
          y1="116"
          x2="140"
          y2="188"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  question: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle cx="128" cy="180" r="12"></circle>
        <path
          d="M128,144v-8a28,28,0,1,0-28-28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  sparkle: {
    xml: (
      <>
        <path
          d="M138.7,175.5l-19.2,52.1a8,8,0,0,1-15,0L85.3,175.5a8.1,8.1,0,0,0-4.8-4.8L28.4,151.5a8,8,0,0,1,0-15l52.1-19.2a8.1,8.1,0,0,0,4.8-4.8l19.2-52.1a8,8,0,0,1,15,0l19.2,52.1a8.1,8.1,0,0,0,4.8,4.8l52.1,19.2a8,8,0,0,1,0,15l-52.1,19.2A8.1,8.1,0,0,0,138.7,175.5Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="176"
          y1="16"
          x2="176"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="200"
          y1="40"
          x2="152"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="224"
          y1="72"
          x2="224"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="240"
          y1="88"
          x2="208"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  star: {
    xml: (
      <>
        <path
          d="M132.4,190.7l50.4,32c6.5,4.1,14.5-2,12.6-9.5l-14.6-57.4a8.7,8.7,0,0,1,2.9-8.8l45.2-37.7c5.9-4.9,2.9-14.8-4.8-15.3l-59-3.8a8.3,8.3,0,0,1-7.3-5.4l-22-55.4a8.3,8.3,0,0,0-15.6,0l-22,55.4a8.3,8.3,0,0,1-7.3,5.4L31.9,94c-7.7.5-10.7,10.4-4.8,15.3L72.3,147a8.7,8.7,0,0,1,2.9,8.8L61.7,209c-2.3,9,7.3,16.3,15,11.4l46.9-29.7A8.2,8.2,0,0,1,132.4,190.7Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  tag: {
    xml: (
      <>
        <path
          d="M122.7,25.9,42,42,25.9,122.7a8,8,0,0,0,2.2,7.2L132.5,234.3a7.9,7.9,0,0,0,11.3,0l90.5-90.5a7.9,7.9,0,0,0,0-11.3L129.9,28.1A8,8,0,0,0,122.7,25.9Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="84" cy="84" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  terminal: {
    xml: (
      <>
        <polyline
          points="40 64 112 128 40 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="120"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  tray: {
    xml: (
      <>
        <rect
          x="40"
          y="40"
          width="176"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <path
          d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  user: {
    xml: (
      <>
        <circle
          cx="128"
          cy="96"
          r="64"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <path
          d="M31,216a112,112,0,0,1,194,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  activity: {
    xml: (
      <>
        <polyline
          points="24 128 56 128 96 40 160 208 200 128 232 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  alarm: {
    xml: (
      <>
        <polyline
          points="128 72 128 128 184 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <circle
          cx="128"
          cy="128"
          r="88"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <line
          x1="195.9"
          y1="26.2"
          x2="229.8"
          y2="60.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="26.2"
          y1="60.1"
          x2="60.1"
          y2="26.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  info: {
    xml: (
      <>
        <path
          d="M0.5 6.5C0.5 3.18629 3.18629 0.5 6.5 0.5H13.5C16.8137 0.5 19.5 3.18629 19.5 6.5V13.5C19.5 16.8137 16.8137 19.5 13.5 19.5H6.5C3.18629 19.5 0.5 16.8137 0.5 13.5V6.5Z"
          fill="#5B92F0"
          className="a-icon-bg"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 14.25L9 10C9 9.44772 9.44771 9 10 9C10.5523 9 11 9.44772 11 10L11 14.25C11 14.8023 10.5523 15.25 10 15.25C9.44772 15.25 9 14.8023 9 14.25Z"
          fill="white"
          className="a-icon-text"
        ></path>
        <path
          d="M11.25 6.25C11.25 6.94036 10.6904 7.5 10 7.5C9.30964 7.5 8.75 6.94036 8.75 6.25C8.75 5.55964 9.30964 5 10 5C10.6904 5 11.25 5.55964 11.25 6.25Z"
          fill="white"
          className="a-icon-text"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  negative: {
    xml: (
      <>
        <path
          d="M7.74032 0.48484C8.51873 0.0307692 9.48127 0.0307698 10.2597 0.48484L16.7597 4.27651C17.5277 4.72453 18 5.54679 18 6.43595V13.5641C18 14.4533 17.5277 15.2755 16.7597 15.7235L10.2597 19.5152C9.48127 19.9693 8.51873 19.9693 7.74032 19.5152L1.24032 15.7235C0.472277 15.2755 0 14.4533 0 13.5641V6.43595C0 5.54679 0.472278 4.72453 1.24032 4.27651L7.74032 0.48484Z"
          fill="#E05843"
          className="a-icon-bg"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 10.5L8 6.25C8 5.69772 8.44771 5.25 9 5.25C9.55228 5.25 10 5.69772 10 6.25L10 10.5C10 11.0523 9.55228 11.5 9 11.5C8.44772 11.5 8 11.0523 8 10.5Z"
          fill="white"
          className="a-icon-text"
        ></path>
        <path
          d="M10.25 14C10.25 14.6904 9.69036 15.25 9 15.25C8.30964 15.25 7.75 14.6904 7.75 14C7.75 13.3096 8.30964 12.75 9 12.75C9.69036 12.75 10.25 13.3096 10.25 14Z"
          fill="white"
          className="a-icon-text"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 18 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  positive: {
    xml: (
      <>
        <path
          d="M19.75 10C19.75 15.3848 15.3848 19.75 10 19.75C4.61522 19.75 0.25 15.3848 0.25 10C0.25 4.61522 4.61522 0.25 10 0.25C15.3848 0.25 19.75 4.61522 19.75 10Z"
          fill="#45991F"
          className="a-icon-bg"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.457 6.79279C14.8476 7.18326 14.8477 7.81643 14.4572 8.20701L9.20879 13.4569C8.81839 13.8474 8.18535 13.8476 7.79475 13.4573L5.54316 11.2074C5.15249 10.817 5.15225 10.1838 5.54262 9.79316C5.933 9.40249 6.56617 9.40225 6.95684 9.79262L8.50122 11.3358L13.0428 6.79299C13.4333 6.40241 14.0664 6.40232 14.457 6.79279Z"
          fill="white"
          className="a-icon-text"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 20 20",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  warning: {
    xml: (
      <>
        <path
          d="M7.82473 1.34161C8.7822 -0.349225 11.2181 -0.349222 12.1756 1.34162L19.6369 14.518C20.5807 16.1846 19.3767 18.2499 17.4615 18.2499H2.53882C0.623589 18.2499 -0.580337 16.1846 0.363389 14.518L7.82473 1.34161Z"
          fill="#D9B216"
          className="a-icon-bg"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 10.75L9 6.5C9 5.94772 9.44771 5.5 10 5.5C10.5523 5.5 11 5.94772 11 6.5L11 10.75C11 11.3023 10.5523 11.75 10 11.75C9.44772 11.75 9 11.3023 9 10.75Z"
          fill="#464C54"
          className="a-icon-text"
        ></path>
        <path
          d="M11.25 14.25C11.25 14.9404 10.6904 15.5 10 15.5C9.30964 15.5 8.75 14.9404 8.75 14.25C8.75 13.5596 9.30964 13 10 13C10.6904 13 11.25 13.5596 11.25 14.25Z"
          fill="#464C54"
          className="a-icon-text"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 20 19",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  aperture: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <line
          x1="128"
          y1="32"
          x2="164.7"
          y2="134.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="44.9"
          y1="80"
          x2="152.1"
          y2="99.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="44.9"
          y1="176"
          x2="115.5"
          y2="92.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="91.3"
          y2="121.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="211.1"
          y1="176"
          x2="103.9"
          y2="156.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="211.1"
          y1="80"
          x2="140.5"
          y2="163.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "archive-tray": {
    xml: (
      <>
        <rect
          x="40"
          y="40"
          width="176"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <polyline
          points="94.1 118.1 128 152 161.9 118.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="128"
          y1="72"
          x2="128"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M40,160H76.7a7.9,7.9,0,0,1,5.6,2.3l19.4,19.4a7.9,7.9,0,0,0,5.6,2.3h41.4a7.9,7.9,0,0,0,5.6-2.3l19.4-19.4a7.9,7.9,0,0,1,5.6-2.3H216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-bend-up-left": {
    xml: (
      <>
        <polyline
          points="80 152 32 104 80 56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M224,200a96,96,0,0,0-96-96H32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-circle-down-right": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <polyline
          points="108 156 156 156 156 108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="100"
          y1="100"
          x2="156"
          y2="156"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-circle-right": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <polyline
          points="134.1 161.9 168 128 134.1 94.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="88"
          y1="128"
          x2="168"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-circle-up": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <polyline
          points="94.1 121.9 128 88 161.9 121.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="128"
          y1="168"
          x2="128"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-clockwise": {
    xml: (
      <>
        <polyline
          points="176.2 99.7 224.2 99.7 224.2 51.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-down-left": {
    xml: (
      <>
        <line
          x1="192"
          y1="64"
          x2="64"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="168 192 64 192 64 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-down-right": {
    xml: (
      <>
        <line
          x1="64"
          y1="64"
          x2="192"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="88 192 192 192 192 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-down": {
    xml: (
      <>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="56 144 128 216 200 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-elbow-right-up": {
    xml: (
      <>
        <polyline
          points="128 96 176 48 224 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="32 192 176 192 176 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-left": {
    xml: (
      <>
        <line
          x1="216"
          y1="128"
          x2="40"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="112 56 40 128 112 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-line-left": {
    xml: (
      <>
        <line
          x1="224"
          y1="128"
          x2="72"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="40"
          x2="40"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="144 56 72 128 144 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-line-right": {
    xml: (
      <>
        <line
          x1="32"
          y1="128"
          x2="184"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="216"
          y1="40"
          x2="216"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="112 56 184 128 112 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-right": {
    xml: (
      <>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="144 56 216 128 144 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-square-in": {
    xml: (
      <>
        <polyline
          points="112 204 112 144 52 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="40"
          y1="216"
          x2="112"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M160,192h48a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H72a8,8,0,0,0-8,8V96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-square-out": {
    xml: (
      <>
        <polyline
          points="216 100 216 40 156 40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="144"
          y1="112"
          x2="216"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M184,144v64a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-up-left": {
    xml: (
      <>
        <line
          x1="192"
          y1="192"
          x2="64"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="168 64 64 64 64 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-up-right": {
    xml: (
      <>
        <line
          x1="64"
          y1="192"
          x2="192"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="88 64 192 64 192 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-up": {
    xml: (
      <>
        <line
          x1="128"
          y1="216"
          x2="128"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="56 112 128 40 200 112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-clockwise": {
    xml: (
      <>
        <polyline
          points="176.2 99.7 224.2 99.7 224.2 51.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="79.8 156.3 31.8 156.3 31.8 204.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M65.8,65.8a87.9,87.9,0,0,1,124.4,0l34,33.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M190.2,190.2a87.9,87.9,0,0,1-124.4,0l-34-33.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-down-up": {
    xml: (
      <>
        <polyline
          points="112 176 80 208 48 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="144 80 176 48 208 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="80"
          y1="48"
          x2="80"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="176"
          y1="208"
          x2="176"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-in": {
    xml: (
      <>
        <polyline
          points="192 104 152 104 152 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="64 152 104 152 104 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="152 192 152 152 192 152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="104 64 104 104 64 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="208"
          y1="48"
          x2="152"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="208"
          x2="104"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="208"
          y1="208"
          x2="152"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="48"
          x2="104"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-left-right": {
    xml: (
      <>
        <polyline
          points="176 144 208 176 176 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="80 112 48 80 80 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="48"
          y1="176"
          x2="208"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="208"
          y1="80"
          x2="48"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-out": {
    xml: (
      <>
        <polyline
          points="168 48 208 48 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="88 208 48 208 48 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="208 168 208 208 168 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="48 88 48 48 88 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="152"
          y1="104"
          x2="208"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="152"
          x2="48"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="152"
          x2="208"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="48"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  asterisk: {
    xml: (
      <>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="51.8"
          y1="84"
          x2="204.2"
          y2="172"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="51.8"
          y1="172"
          x2="204.2"
          y2="84"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  binoculars: {
    xml: (
      <>
        <line
          x1="104"
          y1="92"
          x2="152"
          y2="92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M229.6,154.3,185.9,55A24.1,24.1,0,0,0,152,55V168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M104,168V55a24.1,24.1,0,0,0-33.9,0L26.4,154.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle
          cx="64"
          cy="168"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle
          cx="192"
          cy="168"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "book-open": {
    xml: (
      <>
        <path
          d="M128,88a32,32,0,0,1,32-32h64a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H160a32,32,0,0,0-32,32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M24,192a8,8,0,0,0,8,8H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H32a8,8,0,0,0-8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  browser: {
    xml: (
      <>
        <rect
          x="32"
          y="48"
          width="192"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="32"
          y1="96"
          x2="224"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  browsers: {
    xml: (
      <>
        <rect
          x="32"
          y="80"
          width="160"
          height="128"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <path
          d="M64,80V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V168a8,8,0,0,1-8,8H192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="32"
          y1="112"
          x2="192"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "calendar-blank": {
    xml: (
      <>
        <rect
          x="40"
          y="40"
          width="176"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="176"
          y1="24"
          x2="176"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="80"
          y1="24"
          x2="80"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="88"
          x2="216"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-double-left": {
    xml: (
      <>
        <polyline
          points="200 208 120 128 200 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="120 208 40 128 120 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-double-right": {
    xml: (
      <>
        <polyline
          points="56 48 136 128 56 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="136 48 216 128 136 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-down": {
    xml: (
      <>
        <polyline
          points="208 96 128 176 48 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-left": {
    xml: (
      <>
        <polyline
          points="160 208 80 128 160 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-right": {
    xml: (
      <>
        <polyline
          points="96 48 176 128 96 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-up": {
    xml: (
      <>
        <polyline
          points="48 160 128 80 208 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chart-bar": {
    xml: (
      <>
        <rect
          x="156"
          y="40"
          width="56"
          height="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <polyline
          points="44 208 44 136 100 136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="100 208 100 88 156 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="228"
          y1="208"
          x2="28"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chart-line": {
    xml: (
      <>
        <polyline
          points="224 208 32 208 32 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="224 96 160 152 96 104 32 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chart-pie-slice": {
    xml: (
      <>
        <line
          x1="128"
          y1="128"
          x2="128"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="211.1"
          y1="80"
          x2="44.9"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M33.6,145.6A92.9,92.9,0,0,1,32,128,95.9,95.9,0,0,1,96,37.5v72Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M128,32A96,96,0,1,1,45.2,176.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chat-centered-text": {
    xml: (
      <>
        <line
          x1="96"
          y1="104"
          x2="160"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="136"
          x2="160"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M149.7,195.9l-14.8,24.7a8.1,8.1,0,0,1-13.8,0l-14.8-24.7a7.9,7.9,0,0,0-6.8-3.9H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V184a8,8,0,0,1-8,8H156.5A7.9,7.9,0,0,0,149.7,195.9Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chat-dots": {
    xml: (
      <>
        <path
          d="M77.4,201.9l-32.3,27A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H82.5A7.8,7.8,0,0,0,77.4,201.9Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="128" cy="128" r="12"></circle>
        <circle cx="80" cy="128" r="12"></circle>
        <circle cx="176" cy="128" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chat-text": {
    xml: (
      <>
        <path
          d="M78,201.3,45.1,228.9A8,8,0,0,1,32,222.8V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H81.7Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="96"
          y1="112"
          x2="160"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="144"
          x2="160"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "check-circle": {
    xml: (
      <>
        <polyline
          points="172 104 113.3 160 84 132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  check: {
    xml: (
      <>
        <polyline
          points="216 72 104 184 48 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "circle-half": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="192"
          y1="56.5"
          x2="192"
          y2="199.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="160"
          y1="37.5"
          x2="160"
          y2="218.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "circle-wavy-check": {
    xml: (
      <>
        <path
          d="M54.5,201.5c-9.2-9.2-3.1-28.5-7.8-39.8S24,140.5,24,128s17.8-22,22.7-33.7-1.4-30.6,7.8-39.8S83,51.4,94.3,46.7,115.5,24,128,24s22,17.8,33.7,22.7,30.6-1.4,39.8,7.8,3.1,28.5,7.8,39.8S232,115.5,232,128s-17.8,22-22.7,33.7,1.4,30.6-7.8,39.8-28.5,3.1-39.8,7.8S140.5,232,128,232s-22-17.8-33.7-22.7S63.7,210.7,54.5,201.5Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="172 104 113.3 160 84 132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "circle-wavy": {
    xml: (
      <>
        <path
          d="M54.5,201.5c-9.2-9.2-3.1-28.5-7.8-39.8S24,140.5,24,128s17.8-22,22.7-33.7-1.4-30.6,7.8-39.8S83,51.4,94.3,46.7,115.5,24,128,24s22,17.8,33.7,22.7,30.6-1.4,39.8,7.8,3.1,28.5,7.8,39.8S232,115.5,232,128s-17.8,22-22.7,33.7,1.4,30.6-7.8,39.8-28.5,3.1-39.8,7.8S140.5,232,128,232s-22-17.8-33.7-22.7S63.7,210.7,54.5,201.5Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clipboard-text": {
    xml: (
      <>
        <line
          x1="96"
          y1="152"
          x2="160"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="120"
          x2="160"
          y2="120"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M88,72V64a40,40,0,0,1,80,0v8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clock-clockwise": {
    xml: (
      <>
        <line
          x1="128"
          y1="80"
          x2="128"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="169.6"
          y1="152"
          x2="128"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="184.2 99.7 224.2 99.7 224.2 59.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M190.2,190.2a88,88,0,1,1,0-124.4l34,33.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clock-counter-clockwise": {
    xml: (
      <>
        <line
          x1="128"
          y1="80"
          x2="128"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="169.6"
          y1="152"
          x2="128"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="71.8 99.7 31.8 99.7 31.8 59.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M65.8,190.2a88,88,0,1,0,0-124.4l-34,33.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cloud: {
    xml: (
      <>
        <path
          d="M80,128a80,80,0,1,1,80,80H72A56,56,0,0,1,72,96a57.5,57.5,0,0,1,13.9,1.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  code: {
    xml: (
      <>
        <polyline
          points="64 88 16 128 64 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="192 88 240 128 192 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="160"
          y1="40"
          x2="96"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cpu: {
    xml: (
      <>
        <rect
          x="100"
          y="100"
          width="56"
          height="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <rect
          x="48"
          y="48"
          width="160"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="208"
          y1="104"
          x2="232"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="208"
          y1="152"
          x2="232"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="24"
          y1="104"
          x2="48"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="24"
          y1="152"
          x2="48"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="208"
          x2="152"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="208"
          x2="104"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="24"
          x2="152"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="24"
          x2="104"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "crosshair-simple": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <line
          x1="128"
          y1="36"
          x2="128"
          y2="76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="36"
          y1="128"
          x2="76"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="220"
          x2="128"
          y2="180"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="220"
          y1="128"
          x2="180"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cube: {
    xml: (
      <>
        <path
          d="M224,177.3V78.7a8.1,8.1,0,0,0-4.1-7l-88-49.5a7.8,7.8,0,0,0-7.8,0l-88,49.5a8.1,8.1,0,0,0-4.1,7v98.6a8.1,8.1,0,0,0,4.1,7l88,49.5a7.8,7.8,0,0,0,7.8,0l88-49.5A8.1,8.1,0,0,0,224,177.3Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="222.9 74.6 128.9 128 33.1 74.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="128.9"
          y1="128"
          x2="128"
          y2="234.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  clean: {
    xml: (
      <>
        <title>clean</title>
        <g
          id="clean-nestedId-Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="clean-nestedId-disposition_icons"
            transform="translate(-77.000000, -138.000000)"
            fill="#6CC04A"
          >
            <g
              id="clean-nestedId-Clean"
              transform="translate(77.000000, 137.796549)"
            >
              <path
                d="M8.00044997,0 L8.00403079,0.202575531 C8.03158337,1.10694794 8.26028665,4.18655558 10.0397098,5.96226415 C11.819951,7.73960631 14.8958057,7.96801141 15.7980156,7.9962009 L16,8 C15.5239327,8.00179695 11.9979751,8.08265948 10.0397098,10.0377358 C8.08234434,11.9910153 8.00134991,15.5220126 8.00044997,16 L7.99310422,15.6998653 C7.95144673,14.6891937 7.68039925,11.7542541 5.96029023,10.0377358 C4.18004899,8.26039369 1.10419433,8.03198859 0.201984386,8.0037991 L0,8 L0.299322372,7.99266461 C1.30781174,7.95106336 4.23939036,7.68036157 5.96029023,5.96226415 C7.91765566,4.00898473 7.99865009,0.477987421 8.00044997,0 Z M13.9943879,1.98742138 C14.5376188,2.53049815 15.4432534,2.63972913 15.8217522,2.66140062 L15.978479,2.66666667 C15.8200033,2.66726565 14.646265,2.69421983 13.9943879,3.34591195 C13.4538198,3.88607811 13.3431656,4.78821763 13.3209807,5.17091484 L13.3155489,5.33333333 L13.3102828,5.17600912 C13.2886121,4.79627966 13.1793917,3.88848957 12.6364104,3.34591195 C12.0977064,2.80736082 11.2026136,2.69545485 10.8186178,2.67249294 L10.6523193,2.66666667 L10.809046,2.66140062 C11.1875449,2.63972913 12.0931794,2.53049815 12.6364104,1.98742138 C13.2155904,1.40867192 13.3012469,0.41439183 13.3135522,0.0886838054 L13.3155489,0 L13.3206889,0.157324216 C13.3421862,0.537053675 13.4514066,1.44484377 13.9943879,1.98742138 Z"
                id="clean-nestedId-clean"
              ></path>
            </g>
          </g>
        </g>
      </>
    ),
    props: {
      viewBox: "0 0 16 16",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  },
  common: {
    xml: (
      <>
        <title>Common</title>
        <g stroke="none" strokeWidth="1">
          <g transform="translate(-74.000000, -166.000000)">
            <g transform="translate(44.000000, 166.000000)">
              <g transform="translate(30.000000, 0.000000)">
                <path
                  d="M7,0.5 C8.10843365,0.5 9.1521092,0.777362307 10.0652821,1.26664656 C8.54692138,2.68374164 7.57671276,4.60033599 7.50434411,6.74246815 C7.50014712,9.24192674 8.49890442,11.2799379 10.0706072,12.6529949 C9.16245329,13.219374 8.11371572,13.5 7,13.5 C5.20507456,13.5 3.58007456,12.7724627 2.40380592,11.5961941 C1.22753728,10.4199254 0.5,8.79492544 0.5,7 C0.5,5.20507456 1.22753728,3.58007456 2.40380592,2.40380592 C3.58007456,1.22753728 5.20507456,0.5 7,0.5 Z M15,0.5 C16.7949254,0.5 18.4199254,1.22753728 19.5961941,2.40380592 C20.7724627,3.58007456 21.5,5.20507456 21.5,7 C21.5,8.79492544 20.7724627,10.4199254 19.5961941,11.5961941 C18.4199254,12.7724627 16.7949254,13.5 15,13.5 C13.8915664,13.5 12.8478908,13.2226377 11.9347179,12.7333534 C13.4530786,11.3162584 14.4232872,9.39966401 14.4956559,7.25753185 C14.4998529,4.75807326 13.5010956,2.72006212 11.9293928,1.34700506 C12.8375467,0.780626037 13.8862843,0.5 15,0.5 Z"
                  stroke="#81CDF0"
                ></path>
                <path
                  d="M14,6.85072893 L14,7.15010811 C14,9.52827176 12.8140641,11.6294452 11.0013298,12.8944911 C9.18637251,11.6302187 8,9.52870948 8,7.15010811 L8,6.85072893 C8,4.47212756 9.18637251,2.37061834 10.9996713,1.10564753 C12.8140641,2.37139181 14,4.47256529 14,6.85072893 Z"
                  fill="#81CDF0"
                ></path>
              </g>
            </g>
          </g>
        </g>
      </>
    ),
    props: {
      viewBox: "0 0 22 14",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  },
  malicious: {
    xml: (
      <>
        <rect x="5" y="8" width="4" height="4"></rect>
        <rect x="11" y="8" width="4" height="4"></rect>
        <path
          d="M9.69532 1.25785C5.66407 1.40628 2.37501 4.6641 2.19532 8.70316C2.12852 10.0417 2.40928 11.3747 3.01028 12.5726C3.61127 13.7705 4.51205 14.7925 5.62501 15.5391V16.875C5.62501 17.2066 5.75671 17.5245 5.99113 17.7589C6.22555 17.9933 6.54349 18.125 6.87501 18.125H7.50001C7.58289 18.125 7.66238 18.0921 7.72098 18.0335C7.77959 17.9749 7.81251 17.8954 7.81251 17.8125V15.961C7.80994 15.7988 7.86899 15.6417 7.97774 15.5213C8.08648 15.401 8.23684 15.3264 8.39845 15.3125C8.48375 15.3072 8.56924 15.3194 8.64964 15.3484C8.73003 15.3774 8.80363 15.4226 8.86586 15.4812C8.9281 15.5398 8.97767 15.6105 9.01149 15.689C9.04531 15.7675 9.06268 15.8521 9.06251 15.9375V17.8125C9.06251 17.8954 9.09543 17.9749 9.15404 18.0335C9.21264 18.0921 9.29213 18.125 9.37501 18.125H10.625C10.7079 18.125 10.7874 18.0921 10.846 18.0335C10.9046 17.9749 10.9375 17.8954 10.9375 17.8125V15.961C10.9349 15.7988 10.994 15.6417 11.1027 15.5213C11.2115 15.401 11.3618 15.3264 11.5234 15.3125C11.6088 15.3072 11.6942 15.3194 11.7746 15.3484C11.855 15.3774 11.9286 15.4226 11.9909 15.4812C12.0531 15.5398 12.1027 15.6105 12.1365 15.689C12.1703 15.7675 12.1877 15.8521 12.1875 15.9375V17.8125C12.1875 17.8954 12.2204 17.9749 12.279 18.0335C12.3376 18.0921 12.4171 18.125 12.5 18.125H13.125C13.4565 18.125 13.7745 17.9933 14.0089 17.7589C14.2433 17.5245 14.375 17.2066 14.375 16.875V15.5391C15.7832 14.5883 16.8431 13.2043 17.3939 11.5968C17.9447 9.98942 17.9565 8.24624 17.4274 6.63155C16.8983 5.01685 15.8572 3.61867 14.4619 2.64896C13.0666 1.67924 11.3932 1.19086 9.69532 1.25785V1.25785ZM7.18751 11.875C6.87848 11.875 6.57638 11.7834 6.31943 11.6117C6.06248 11.44 5.86221 11.196 5.74395 10.9105C5.62569 10.625 5.59474 10.3108 5.65503 10.0077C5.71532 9.70461 5.86414 9.4262 6.08266 9.20768C6.30117 8.98916 6.57959 8.84035 6.88268 8.78006C7.18578 8.71977 7.49994 8.75071 7.78545 8.86897C8.07096 8.98723 8.31499 9.1875 8.48668 9.44445C8.65837 9.70141 8.75001 10.0035 8.75001 10.3125C8.74796 10.7263 8.58268 11.1225 8.2901 11.4151C7.99751 11.7077 7.60128 11.873 7.18751 11.875ZM12.8125 11.875C12.5035 11.875 12.2014 11.7834 11.9444 11.6117C11.6875 11.44 11.4872 11.196 11.3689 10.9105C11.2507 10.625 11.2197 10.3108 11.28 10.0077C11.3403 9.70461 11.4891 9.4262 11.7077 9.20768C11.9262 8.98916 12.2046 8.84035 12.5077 8.78006C12.8108 8.71977 13.1249 8.75071 13.4105 8.86897C13.696 8.98723 13.94 9.1875 14.1117 9.44445C14.2834 9.70141 14.375 10.0035 14.375 10.3125C14.373 10.7263 14.2077 11.1225 13.9151 11.4151C13.6225 11.7077 13.2263 11.873 12.8125 11.875V11.875Z"
          fill="#CC2D37"
        ></path>
      </>
    ),
    props: {viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg"}
  },
  suspicious: {
    xml: (
      <>
        <rect x="7" y="7" width="6" height="6"></rect>
        <path
          d="M19.3204 9.75C19.2969 9.6875 18.6329 8.21875 17.1641 6.74219C15.2032 4.78906 12.7266 3.75 10 3.75C7.27348 3.75 4.79692 4.78906 2.83598 6.74219C1.36723 8.21875 0.703168 9.6875 0.679731 9.75C0.644851 9.82873 0.626831 9.91389 0.626831 10C0.626831 10.0861 0.644851 10.1713 0.679731 10.25C0.703168 10.3125 1.36723 11.7812 2.83598 13.2578C4.79692 15.2109 7.27348 16.25 10 16.25C12.7266 16.25 15.2032 15.2109 17.1641 13.2578C18.6329 11.7812 19.2969 10.3125 19.3204 10.25C19.3552 10.1713 19.3733 10.0861 19.3733 10C19.3733 9.91389 19.3552 9.82873 19.3204 9.75V9.75ZM10 7.1875C10.5563 7.1875 11.1001 7.35245 11.5626 7.66149C12.0251 7.97053 12.3856 8.40979 12.5985 8.9237C12.8113 9.43762 12.867 10.0031 12.7585 10.5487C12.65 11.0943 12.3821 11.5954 11.9888 11.9887C11.5954 12.3821 11.0943 12.6499 10.5487 12.7585C10.0032 12.867 9.43766 12.8113 8.92375 12.5984C8.40983 12.3855 7.97058 12.0251 7.66154 11.5625C7.35249 11.1 7.18754 10.5563 7.18754 10C7.18754 9.25408 7.48386 8.53871 8.01131 8.01126C8.53875 7.48382 9.25412 7.1875 10 7.1875V7.1875Z"
          fill="#F7782F"
        ></path>
      </>
    ),
    props: {viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg"}
  },
  unknown: {
    xml: (
      <>
        <g stroke="none" strokeWidth="1" fillRule="evenodd">
          <g transform="translate(-78.000000, -77.000000)">
            <g transform="translate(51.000000, 77.000000)">
              <g transform="translate(27.000000, 0.000000)">
                <rect
                  fill="#7F7F86"
                  x="0"
                  y="0"
                  width="14"
                  height="14"
                  rx="7"
                ></rect>
                <path d="M6.934375,11.1941522 C7.87651609,11.1941522 8.61976073,10.988277 9.16410891,10.5765264 C9.79220297,10.1019664 10.10625,9.41455239 10.10625,8.51428424 L10.10625,8.51428424 L10.10625,3.5 L8.42086427,3.5 L8.42086427,8.62943482 C8.42086427,9.0202489 8.3057137,9.33080652 8.07541254,9.56110767 C7.81719609,9.81932412 7.44033966,9.94843234 6.94484323,9.94843234 C6.51913504,9.94843234 6.18415154,9.85072882 5.93989274,9.65532178 C5.66073982,9.42502063 5.52116337,9.08305831 5.52116337,8.62943482 L5.52116337,8.62943482 L5.52116337,3.5 L3.7625,3.5 L3.7625,8.51428424 C3.7625,9.30289123 4.00326939,9.92749587 4.48480817,10.3880982 C5.043114,10.9254675 5.85963628,11.1941522 6.934375,11.1941522 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </>
    ),
    props: {
      viewBox: "0 0 14 14",
      version: "1.1",
      xmlns: "http://www.w3.org/2000/svg",
      "xmlns:xlink": "http://www.w3.org/1999/xlink"
    }
  },
  "dots-nine": {
    xml: (
      <>
        <circle cx="60" cy="60" r="12"></circle>
        <circle cx="128" cy="60" r="12"></circle>
        <circle cx="196" cy="60" r="12"></circle>
        <circle cx="60" cy="128" r="12"></circle>
        <circle cx="128" cy="128" r="12"></circle>
        <circle cx="196" cy="128" r="12"></circle>
        <circle cx="60" cy="196" r="12"></circle>
        <circle cx="128" cy="196" r="12"></circle>
        <circle cx="196" cy="196" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-six": {
    xml: (
      <>
        <circle cx="60" cy="92" r="12"></circle>
        <circle cx="128" cy="92" r="12"></circle>
        <circle cx="196" cy="92" r="12"></circle>
        <circle cx="60" cy="164" r="12"></circle>
        <circle cx="128" cy="164" r="12"></circle>
        <circle cx="196" cy="164" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-three-outline-vertical": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle
          cx="128"
          cy="48"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle
          cx="128"
          cy="208"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-three-outline": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle
          cx="48"
          cy="128"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle
          cx="208"
          cy="128"
          r="24"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-three": {
    xml: (
      <>
        <circle cx="128" cy="128" r="12"></circle>
        <circle cx="192" cy="128" r="12"></circle>
        <circle cx="64" cy="128" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "download-simple": {
    xml: (
      <>
        <polyline
          points="86 110 128 152 170 110"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "envelope-open": {
    xml: (
      <>
        <path
          d="M32,96V200a8,8,0,0,0,8,8H216a8,8,0,0,0,8-8V96L128,32Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="110.5"
          y1="152"
          x2="34.5"
          y2="205.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="221.5"
          y1="205.7"
          x2="145.5"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="224 96 145.5 152 110.5 152 32 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "eye-slash": {
    xml: (
      <>
        <line
          x1="48"
          y1="40"
          x2="208"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M154.9,157.6A39.6,39.6,0,0,1,128,168a40,40,0,0,1-26.9-69.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M74,68.6C33.2,89.2,16,128,16,128s32,72,112,72a117.9,117.9,0,0,0,54-12.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M208.6,169.1C230.4,149.6,240,128,240,128S208,56,128,56a123.9,123.9,0,0,0-20.7,1.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M135.5,88.7a39.9,39.9,0,0,1,32.3,35.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  eye: {
    xml: (
      <>
        <path
          d="M128,56C48,56,16,128,16,128s32,72,112,72,112-72,112-72S208,56,128,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-code": {
    xml: (
      <>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="148 128 172 152 148 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="108 128 84 152 108 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-html": {
    xml: (
      <>
        <line
          x1="120"
          y1="176"
          x2="88"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="216"
          x2="104"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="36"
          y1="176"
          x2="36"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="64"
          y1="176"
          x2="64"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="36"
          y1="196"
          x2="64"
          y2="196"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="212 176 212 216 236 216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="144 216 144 176 164 204 184 176 184 216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M48,136V40a8,8,0,0,1,8-8h96l56,56v48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-image": {
    xml: (
      <>
        <path
          d="M152,224l-44.7-67a3.9,3.9,0,0,0-6.6,0L79.8,188.4a4,4,0,0,1-6.7-.1l-9.7-15.1a4.1,4.1,0,0,0-6.8,0L24,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M192,224h8a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-pdf": {
    xml: (
      <>
        <path
          d="M48,128V40a8,8,0,0,1,8-8h96l56,56v40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M48,200H64a16,16,0,0,0,0-32H48v48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M128,216a24,24,0,0,0,0-48H114v48Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="216 168 188 168 188 216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="212"
          y1="196"
          x2="188"
          y2="196"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-plus": {
    xml: (
      <>
        <path
          d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="104"
          y1="152"
          x2="152"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="128"
          x2="128"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-search": {
    xml: (
      <>
        <path
          d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="143.8"
          y1="167.8"
          x2="159.8"
          y2="183.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <circle
          cx="124"
          cy="148"
          r="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-text": {
    xml: (
      <>
        <path
          d="M200,224H56a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h96l56,56V216A8,8,0,0,1,200,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="152 32 152 88 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="96"
          y1="136"
          x2="160"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="168"
          x2="160"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  fingerprint: {
    xml: (
      <>
        <path
          d="M50.7,184.9A127.4,127.4,0,0,0,64,128,64.2,64.2,0,0,1,88,78"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M128,128a191.2,191.2,0,0,1-24,93"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M96,128a32,32,0,0,1,64,0,222.3,222.3,0,0,1-21.3,95.4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M218.6,184a294.6,294.6,0,0,0,5.4-56,96,96,0,0,0-192,0,94.4,94.4,0,0,1-5.5,32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M92.8,160a161.9,161.9,0,0,1-18.1,47.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M120,64.5a70.1,70.1,0,0,1,8-.5,64,64,0,0,1,64,64,260.6,260.6,0,0,1-2,32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M183.9,192c-1.5,5.9-3.2,11.8-5.1,17.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "floppy-disk": {
    xml: (
      <>
        <path
          d="M216,91.3V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H164.7a7.9,7.9,0,0,1,5.6,2.3l43.4,43.4A7.9,7.9,0,0,1,216,91.3Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M80,216V152a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="152"
          y1="72"
          x2="96"
          y2="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "folder-open": {
    xml: (
      <>
        <path
          d="M32,208V64a8,8,0,0,1,8-8H93.3a8.1,8.1,0,0,1,4.8,1.6l27.8,20.8a8.1,8.1,0,0,0,4.8,1.6H200a8,8,0,0,1,8,8v24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M32,208l30.2-90.5a8,8,0,0,1,7.6-5.5H228.9a8,8,0,0,1,7.6,10.5L208,208Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  folder: {
    xml: (
      <>
        <path
          d="M216.9,208H39.4a7.4,7.4,0,0,1-7.4-7.4V80H216a8,8,0,0,1,8,8V200.9A7.1,7.1,0,0,1,216.9,208Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M32,80V56a8,8,0,0,1,8-8H92.7a7.9,7.9,0,0,1,5.6,2.3L128,80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "funnel-simple": {
    xml: (
      <>
        <line
          x1="64"
          y1="128"
          x2="192"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="24"
          y1="80"
          x2="232"
          y2="80"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="176"
          x2="152"
          y2="176"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  gear: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M183.7,65.1q3.8,3.5,7.2,7.2l27.3,3.9a103.2,103.2,0,0,1,10.2,24.6l-16.6,22.1s.3,6.8,0,10.2l16.6,22.1a102.2,102.2,0,0,1-10.2,24.6l-27.3,3.9s-4.7,4.9-7.2,7.2l-3.9,27.3a103.2,103.2,0,0,1-24.6,10.2l-22.1-16.6a57.9,57.9,0,0,1-10.2,0l-22.1,16.6a102.2,102.2,0,0,1-24.6-10.2l-3.9-27.3q-3.7-3.5-7.2-7.2l-27.3-3.9a103.2,103.2,0,0,1-10.2-24.6l16.6-22.1s-.3-6.8,0-10.2L27.6,100.8A102.2,102.2,0,0,1,37.8,76.2l27.3-3.9q3.5-3.7,7.2-7.2l3.9-27.3a103.2,103.2,0,0,1,24.6-10.2l22.1,16.6a57.9,57.9,0,0,1,10.2,0l22.1-16.6a102.2,102.2,0,0,1,24.6,10.2Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "git-branch": {
    xml: (
      <>
        <circle
          cx="68"
          cy="188"
          r="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle
          cx="188"
          cy="68"
          r="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle
          cx="68"
          cy="68"
          r="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M68,160v-8a23.9,23.9,0,0,1,24-24h72a23.9,23.9,0,0,0,24-24V96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="68"
          y1="96"
          x2="68"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "github-logo": {
    xml: (
      <>
        <path
          d="M84,240a23.9,23.9,0,0,0,24-24V168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M172,240a23.9,23.9,0,0,1-24-24V168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M152,168h16a23.9,23.9,0,0,1,24,24v8a23.9,23.9,0,0,0,24,24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M104,168H88a23.9,23.9,0,0,0-24,24v8a23.9,23.9,0,0,1-24,24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M111.8,64A52,52,0,0,0,68,40a52,52,0,0,0-3.5,44.7A49.3,49.3,0,0,0,56,112v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.3,49.3,0,0,0-8.5-27.3A52,52,0,0,0,188,40a52,52,0,0,0-43.8,24Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "globe-stand": {
    xml: (
      <>
        <circle
          cx="128"
          cy="96"
          r="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M201.5,169.5a103.9,103.9,0,0,1-147-147"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="96"
          y1="232"
          x2="160"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="200"
          x2="128"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "hard-drive": {
    xml: (
      <>
        <rect
          x="24"
          y="72"
          width="208"
          height="112"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <circle cx="188" cy="128" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "hard-drives": {
    xml: (
      <>
        <rect
          x="40"
          y="144"
          width="176"
          height="64"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <rect
          x="40"
          y="48"
          width="176"
          height="64"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <circle cx="180" cy="80" r="12"></circle>
        <circle cx="180" cy="176" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "hourglass-high": {
    xml: (
      <>
        <path
          d="M128,128,67.2,82.4A8.1,8.1,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.6a8.1,8.1,0,0,1-3.2,6.4L128,128h0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M128,128,67.2,173.6A8.1,8.1,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.4a8.1,8.1,0,0,0-3.2-6.4L128,128h0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="64"
          y1="64"
          x2="192"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  house: {
    xml: (
      <>
        <path
          d="M152,208V160a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v48a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V115.5a8.3,8.3,0,0,1,2.6-5.9l80-72.7a8,8,0,0,1,10.8,0l80,72.7a8.3,8.3,0,0,1,2.6,5.9V208a8,8,0,0,1-8,8H160A8,8,0,0,1,152,208Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  image: {
    xml: (
      <>
        <rect
          x="32"
          y="48"
          width="192"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <path
          d="M32,168l50.3-50.3a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,0,11.4,0l20.6-20.6a8,8,0,0,1,11.4,0L224,184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="156" cy="100" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  information: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle cx="126" cy="84" r="12"></circle>
        <polyline
          points="120 120 128 120 128 176 136 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  lightning: {
    xml: (
      <>
        <polygon
          points="96 240 112 160 48 136 160 16 144 96 208 120 96 240"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polygon>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  link: {
    xml: (
      <>
        <path
          d="M122.3,71.4l19.8-19.8a44.1,44.1,0,0,1,62.3,62.3l-28.3,28.2a43.9,43.9,0,0,1-62.2,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M133.7,184.6l-19.8,19.8a44.1,44.1,0,0,1-62.3-62.3l28.3-28.2a43.9,43.9,0,0,1,62.2,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "list-bullets": {
    xml: (
      <>
        <line
          x1="88"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <circle cx="44" cy="64" r="12"></circle>
        <circle cx="44" cy="128" r="12"></circle>
        <circle cx="44" cy="192" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "list-checks": {
    xml: (
      <>
        <line
          x1="128"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="92 48 57.3 80 40 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="92 112 57.3 144 40 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="92 176 57.3 208 40 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "list-dashes": {
    xml: (
      <>
        <line
          x1="96"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="56"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="128"
          x2="56"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="56"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "list-numbers": {
    xml: (
      <>
        <line
          x1="104"
          y1="128"
          x2="216"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="64"
          x2="216"
          y2="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="192"
          x2="216"
          y2="192"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <polyline
          points="40 60 56 52 56 108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <path
          d="M41.1,152.6a14,14,0,1,1,24.5,13.2L40,200H68"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  list: {
    xml: (
      <>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="216"
          y2="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="216"
          y2="192"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "lock-simple-open": {
    xml: (
      <>
        <rect
          x="40"
          y="88"
          width="176"
          height="128"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <path
          d="M92,88V52a36,36,0,0,1,72,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  lock: {
    xml: (
      <>
        <rect
          x="40"
          y="88"
          width="176"
          height="128"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <path
          d="M92,88V52a36,36,0,0,1,72,0V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="128" cy="152" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "magnifying-glass-plus": {
    xml: (
      <>
        <line
          x1="84"
          y1="116"
          x2="148"
          y2="116"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="116"
          y1="84"
          x2="116"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="175.4"
          y1="175.4"
          x2="224"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <circle
          cx="116"
          cy="116"
          r="84"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "magnifying-glass": {
    xml: (
      <>
        <circle
          cx="116"
          cy="116"
          r="84"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <line
          x1="175.4"
          y1="175.4"
          x2="224"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "navigation-arrow": {
    xml: (
      <>
        <path
          d="M37.4,47.6,96,216.9c2.5,7.3,12.9,7.1,15.2-.3L134.8,140a7.5,7.5,0,0,1,5.3-5.2l76.5-23.6c7.4-2.3,7.6-12.7.3-15.2L47.6,37.4A8,8,0,0,0,37.4,47.6Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "note-pencil": {
    xml: (
      <>
        <polygon
          points="128 160 96 160 96 128 192 32 224 64 128 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polygon>
        <line
          x1="168"
          y1="56"
          x2="200"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M216,120v88a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  notebook: {
    xml: (
      <>
        <rect
          x="40"
          y="40"
          width="176"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="112"
          y1="112"
          x2="176"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="112"
          y1="144"
          x2="176"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="80"
          y1="40"
          x2="80"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  notepad: {
    xml: (
      <>
        <line
          x1="96"
          y1="128"
          x2="160"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="160"
          x2="160"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="80"
          y1="24"
          x2="80"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="24"
          x2="128"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="176"
          y1="24"
          x2="176"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M56,40H200a8,8,0,0,1,8,8V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V48A8,8,0,0,1,56,40Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "paper-plane-tilt": {
    xml: (
      <>
        <path
          d="M210.3,35.9,23.9,88.4a8,8,0,0,0-1.2,15l85.6,40.5a7.8,7.8,0,0,1,3.8,3.8l40.5,85.6a8,8,0,0,0,15-1.2L220.1,45.7A7.9,7.9,0,0,0,210.3,35.9Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="110.9"
          y1="145.1"
          x2="156.1"
          y2="99.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  pause: {
    xml: (
      <>
        <rect
          x="156"
          y="40"
          width="52"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <rect
          x="48"
          y="40"
          width="52"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "pencil-simple": {
    xml: (
      <>
        <path
          d="M92.7,216H48a8,8,0,0,1-8-8V163.3a7.9,7.9,0,0,1,2.3-5.6l120-120a8,8,0,0,1,11.4,0l44.6,44.6a8,8,0,0,1,0,11.4l-120,120A7.9,7.9,0,0,1,92.7,216Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="136"
          y1="64"
          x2="192"
          y2="120"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  play: {
    xml: (
      <>
        <path
          d="M228.1,121.2,84.2,33.2A8,8,0,0,0,72,40V216a8,8,0,0,0,12.2,6.8l143.9-88A7.9,7.9,0,0,0,228.1,121.2Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  plug: {
    xml: (
      <>
        <path
          d="M212,132l-57.4,57.4a31.9,31.9,0,0,1-45.2,0L66.6,146.6a31.9,31.9,0,0,1,0-45.2L124,44"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="88"
          y1="168"
          x2="32"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="144"
          y1="64"
          x2="184"
          y2="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="232"
          y1="72"
          x2="192"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="224"
          y1="144"
          x2="112"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "plugs-connected": {
    xml: (
      <>
        <rect
          x="60.1"
          y="88.4"
          width="135.8"
          height="79.2"
          rx="24"
          transform="translate(-53 128) rotate(-45)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="80"
          y1="176"
          x2="24"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="232"
          y1="24"
          x2="176"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="92"
          y1="92"
          x2="164"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="224"
          y1="160"
          x2="200"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="56"
          y1="104"
          x2="32"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="96"
          y1="32"
          x2="104"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="200"
          x2="160"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  plus: {
    xml: (
      <>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  power: {
    xml: (
      <>
        <line
          x1="128"
          y1="48"
          x2="128"
          y2="124"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M176,54.2a88,88,0,1,1-96,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "prohibit-inset": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <line
          x1="99.7"
          y1="99.7"
          x2="156.3"
          y2="156.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  prohibit: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <line
          x1="60.1"
          y1="60.1"
          x2="195.9"
          y2="195.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "puzzle-piece": {
    xml: (
      <>
        <path
          d="M64,216a8,8,0,0,1-8-8V165.3a27.6,27.6,0,0,1-14.1,2.6A28,28,0,1,1,56,114.7V72a8,8,0,0,1,8-8h46.7a27.6,27.6,0,0,1-2.6-14.1A28,28,0,1,1,161.3,64H208a8,8,0,0,1,8,8v42.7a27.6,27.6,0,0,0-14.1-2.6A28,28,0,1,0,216,165.3V208a8,8,0,0,1-8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  quotes: {
    xml: (
      <>
        <path
          d="M108,144H40a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  rss: {
    xml: (
      <>
        <path
          d="M48,144a63.8,63.8,0,0,1,64,64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M48,96A112,112,0,0,1,160,208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M48,48A159.1,159.1,0,0,1,161.1,94.9,159.1,159.1,0,0,1,208,208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="52" cy="204" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  scales: {
    xml: (
      <>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="216"
          x2="152"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="56"
          y1="88"
          x2="200"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M24,168c0,17.7,20,24,32,24s32-6.3,32-24L56,88Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M168,136c0,17.7,20,24,32,24s32-6.3,32-24L200,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "selection-background": {
    xml: (
      <>
        <rect
          x="40"
          y="88"
          width="128"
          height="128"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="160"
          y1="40"
          x2="144"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="216"
          y1="112"
          x2="216"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M200,40h8a8,8,0,0,1,8,8v8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M200,168h8a8,8,0,0,0,8-8v-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M104,40H96a8,8,0,0,0-8,8v8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  selection: {
    xml: (
      <>
        <line
          x1="144"
          y1="40"
          x2="112"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="112"
          y1="216"
          x2="144"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="216"
          y1="144"
          x2="216"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="112"
          x2="40"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M184,40h24a8,8,0,0,1,8,8V72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M184,216h24a8,8,0,0,0,8-8V184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M72,216H48a8,8,0,0,1-8-8V184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M72,40H48a8,8,0,0,0-8,8V72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "shield-check": {
    xml: (
      <>
        <path
          d="M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="172 104 113.3 160 84 132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  shield: {
    xml: (
      <>
        <path
          d="M40,114.7V56a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v58.7c0,84-71.3,111.8-85.5,116.5a7.2,7.2,0,0,1-5,0C111.3,226.5,40,198.7,40,114.7Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sign-out": {
    xml: (
      <>
        <polyline
          points="174 86 216 128 174 170"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="104"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M104,216H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  skull: {
    xml: (
      <>
        <circle
          cx="92"
          cy="132"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <circle
          cx="164"
          cy="132"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M80,194.5a92,92,0,1,1,96,0V216a8,8,0,0,1-8,8H88a8,8,0,0,1-8-8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="112"
          y1="224"
          x2="112"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="144"
          y1="224"
          x2="144"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "smiley-x-eyes": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle cx="128" cy="180" r="12"></circle>
        <line
          x1="184"
          y1="96"
          x2="152"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="184"
          y1="128"
          x2="152"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="96"
          x2="72"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="128"
          x2="72"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sort-ascending": {
    xml: (
      <>
        <polyline
          points="144 168 184 208 224 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="184"
          y1="112"
          x2="184"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="128"
          x2="120"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="64"
          x2="184"
          y2="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="192"
          x2="104"
          y2="192"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sort-descending": {
    xml: (
      <>
        <polyline
          points="144 88 184 48 224 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="184"
          y1="144"
          x2="184"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="128"
          x2="120"
          y2="128"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="64"
          x2="104"
          y2="64"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="48"
          y1="192"
          x2="184"
          y2="192"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  spinner: {
    xml: (
      <>
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="195.9"
          y1="60.1"
          x2="173.3"
          y2="82.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="195.9"
          y1="195.9"
          x2="173.3"
          y2="173.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="60.1"
          y1="195.9"
          x2="82.7"
          y2="173.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="60.1"
          y1="60.1"
          x2="82.7"
          y2="82.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "square-half": {
    xml: (
      <>
        <rect
          x="44"
          y="44"
          width="168"
          height="168"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
        <line
          x1="128"
          y1="44"
          x2="128"
          y2="212"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="80"
          x2="212"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="112"
          x2="212"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="144"
          x2="212"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="128"
          y1="176"
          x2="212"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "stack-simple": {
    xml: (
      <>
        <polygon
          points="16 104 128 168 240 104 128 40 16 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polygon>
        <polyline
          points="16 144 128 208 240 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  stop: {
    xml: (
      <>
        <rect
          x="52"
          y="52"
          width="152"
          height="152"
          rx="6.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></rect>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  table: {
    xml: (
      <>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="32"
          y1="104"
          x2="224"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="32"
          y1="152"
          x2="224"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="104"
          x2="88"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "tag-simple": {
    xml: (
      <>
        <path
          d="M194.4,196.4,240,128,194.4,59.6a7.9,7.9,0,0,0-6.7-3.6H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.7A7.9,7.9,0,0,0,194.4,196.4Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-aa": {
    xml: (
      <>
        <polyline
          points="152 192 80 56 8 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <ellipse
          cx="208"
          cy="166.9"
          rx="32"
          ry="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></ellipse>
        <path
          d="M184,112.4a34.1,34.1,0,0,1,24-9.5c17.7,0,32,12.5,32,28V192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <line
          x1="130.8"
          y1="152"
          x2="29.2"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-align-center": {
    xml: (
      <>
        <line
          x1="40"
          y1="68"
          x2="216"
          y2="68"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="64"
          y1="108"
          x2="192"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="148"
          x2="216"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="64"
          y1="188"
          x2="192"
          y2="188"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-align-left": {
    xml: (
      <>
        <line
          x1="40"
          y1="68"
          x2="216"
          y2="68"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="108"
          x2="168"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="148"
          x2="216"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="188"
          x2="168"
          y2="188"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-align-right": {
    xml: (
      <>
        <line
          x1="40"
          y1="68"
          x2="216"
          y2="68"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="108"
          x2="216"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="40"
          y1="148"
          x2="216"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="88"
          y1="188"
          x2="216"
          y2="188"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-bolder": {
    xml: (
      <>
        <path
          d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-italic": {
    xml: (
      <>
        <line
          x1="152"
          y1="56"
          x2="104"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="64"
          y1="200"
          x2="144"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="112"
          y1="56"
          x2="192"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-strikethrough": {
    xml: (
      <>
        <line
          x1="40"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M76.3,96a25.3,25.3,0,0,1-1.2-8c0-22.1,22-40,52.9-40,23.8,0,42.3,10.6,49.5,25.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M72,168c0,22.1,25.1,40,56,40s56-17.9,56-40c0-23.8-21.6-33-45.6-40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-underline": {
    xml: (
      <>
        <line
          x1="40"
          y1="216"
          x2="216"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M64,56v64a64,64,0,0,0,128,0V56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  ticket: {
    xml: (
      <>
        <line
          x1="96"
          y1="56"
          x2="96"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M24,167.2a7.9,7.9,0,0,1,6.4-7.8,32.1,32.1,0,0,0,0-62.8A7.9,7.9,0,0,1,24,88.8V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V88.8a7.9,7.9,0,0,1-6.4,7.8,32.1,32.1,0,0,0,0,62.8,7.9,7.9,0,0,1,6.4,7.8V192a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  trash: {
    xml: (
      <>
        <line
          x1="216"
          y1="56"
          x2="40"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="104"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="152"
          y1="104"
          x2="152"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M200,56V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M168,56V40a16,16,0,0,0-16-16H104A16,16,0,0,0,88,40V56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  type_Admin: {
    xml: (
      <>
        <path
          opacity="0.4"
          d="M12 8C12 9.40141 11.2793 10.6345 10.1883 11.3489C10.9796 11.6091 11.7086 12.0065 12.3471 12.5131C11.957 13.0268 11.7361 13.6615 11.7361 14.3277V18.673C11.7361 18.783 11.7421 18.8921 11.7539 19H2C1.44771 19 1 18.5523 1 18C1 14.8982 3.01741 12.2677 5.81167 11.3489C4.72069 10.6345 4 9.40141 4 8C4 5.79086 5.79086 4 8 4C10.2091 4 12 5.79086 12 8Z"
          fill="#6250D4"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18.9995 11.289C18.6901 11.1104 18.3089 11.1104 17.9995 11.289L14.2363 13.4617C13.9269 13.6403 13.7363 13.9704 13.7363 14.3277V18.673C13.7363 19.0302 13.9269 19.3604 14.2363 19.539L17.9995 21.7117C18.3089 21.8903 18.6901 21.8903 18.9995 21.7117L22.7626 19.539C23.072 19.3604 23.2626 19.0302 23.2626 18.673V14.3277C23.2626 13.9704 23.072 13.6403 22.7626 13.4617L18.9995 11.289ZM18.5 18.2507C19.4665 18.2507 20.25 17.4672 20.25 16.5007C20.25 15.5342 19.4665 14.7507 18.5 14.7507C17.5335 14.7507 16.75 15.5342 16.75 16.5007C16.75 17.4672 17.5335 18.2507 18.5 18.2507Z"
          fill="#6250D4"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Cameras: {
    xml: (
      <>
        <path
          opacity="0.7"
          d="M2.5 5C2.5 4.44772 2.94772 4 3.5 4H20.5C21.0523 4 21.5 4.44772 21.5 5C21.5 5.55228 21.0523 6 20.5 6H3.5C2.94771 6 2.5 5.55228 2.5 5Z"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 13C21 18.0625 16.9706 22 12 22C7.02944 22 3 18.0625 3 13V9C3 8.44772 3.44772 8 4 8H20C20.5523 8 21 8.44772 21 9V13ZM12 19.5C14.7614 19.5 17 17.2614 17 14.5C17 11.7386 14.7614 9.5 12 9.5C9.23858 9.5 7 11.7386 7 14.5C7 17.2614 9.23858 19.5 12 19.5Z"
        ></path>
        <circle cx="12" cy="14.5" r="3"></circle>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Cellular_gateway: {
    xml: (
      <>
        <path d="M4 10.5C4 9.67157 4.67157 9 5.5 9H18.5C19.3284 9 20 9.67157 20 10.5V20.5C20 21.3284 19.3284 22 18.5 22H5.5C4.67157 22 4 21.3284 4 20.5V10.5Z"></path>
        <path
          opacity="0.4"
          d="M7 2C7 1.44772 7.44772 1 8 1C8.55228 1 9 1.44772 9 2V8H7V2Z"
        ></path>
        <path
          opacity="0.4"
          d="M15 2C15 1.44772 15.4477 1 16 1C16.5523 1 17 1.44772 17 2V8H15V2Z"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Environmental: {
    xml: (
      <>
        <path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.0828 5.42472C12.1729 4.87984 12.6877 4.51119 13.2326 4.60133C16.3886 5.12343 18.8777 7.61244 19.3997 10.7685C19.4899 11.3134 19.1212 11.8282 18.5764 11.9183C18.0315 12.0084 17.5167 11.6398 17.4266 11.0949C17.0442 8.78372 15.2174 6.95685 12.9062 6.57451C12.3613 6.48438 11.9926 5.9696 12.0828 5.42472ZM5.42484 12.0826C5.96972 11.9925 6.4845 12.3612 6.57464 12.906C6.95697 15.2172 8.78384 17.0441 11.095 17.4264C11.6399 17.5166 12.0086 18.0314 11.9184 18.5762C11.8283 19.1211 11.3135 19.4898 10.7686 19.3996C7.61256 18.8775 5.12355 16.3885 4.60145 13.2324C4.51132 12.6876 4.87996 12.1728 5.42484 12.0826Z"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8341 1.95205C11.8794 1.40162 12.3622 0.9921 12.9127 1.03735C18.2607 1.47704 22.5232 5.73951 22.9629 11.0876C23.0081 11.638 22.5986 12.1209 22.0482 12.1661C21.4978 12.2114 21.0149 11.8019 20.9696 11.2514C20.6101 6.8786 17.1216 3.39013 12.7488 3.03063C12.1984 2.98537 11.7888 2.50248 11.8341 1.95205ZM1.9523 11.8339C2.50272 11.7886 2.98562 12.1981 3.03087 12.7486C3.39038 17.1214 6.87885 20.6099 11.2517 20.9694C11.8021 21.0146 12.2116 21.4975 12.1664 22.0479C12.1211 22.5984 11.6382 23.0079 11.0878 22.9626C5.73976 22.523 1.47728 18.2605 1.0376 12.9124C0.992344 12.362 1.40187 11.8791 1.9523 11.8339Z"
        ></path>
        <circle cx="12" cy="12" r="3"></circle>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Insight: {
    xml: (
      <>
        <path
          opacity="0.4"
          d="M3 14.5C3 13.6716 3.67157 13 4.5 13C5.32843 13 6 13.6716 6 14.5V19.5C6 20.3284 5.32843 21 4.5 21C3.67157 21 3 20.3284 3 19.5V14.5Z"
        ></path>
        <path d="M8 9.5C8 8.67157 8.67157 8 9.5 8C10.3284 8 11 8.67157 11 9.5V19.5C11 20.3284 10.3284 21 9.5 21C8.67157 21 8 20.3284 8 19.5V9.5Z"></path>
        <path
          opacity="0.7"
          d="M13 12.5C13 11.6716 13.6716 11 14.5 11C15.3284 11 16 11.6716 16 12.5V19.5C16 20.3284 15.3284 21 14.5 21C13.6716 21 13 20.3284 13 19.5V12.5Z"
        ></path>
        <path d="M18 7.5C18 6.67157 18.6716 6 19.5 6C20.3284 6 21 6.67157 21 7.5V19.5C21 20.3284 20.3284 21 19.5 21C18.6716 21 18 20.3284 18 19.5V7.5Z"></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Network: {
    xml: (
      <>
        <g opacity="0.4">
          <path d="M16.75 14.7007V7H15.25V14.7007C15.4706 14.573 15.7268 14.5 16 14.5C16.2732 14.5 16.5294 14.573 16.75 14.7007Z"></path>
          <path d="M16.75 14.7007C17.1981 14.9601 17.5 15.4449 17.5 16C17.5 16.555 17.1985 17.0397 16.7504 17.2991L23.4195 21.1495L24.1695 19.8505L17.5 16L24.1695 12.1495L23.4195 10.8505L16.75 14.7007Z"></path>
          <path d="M16.7504 17.2991C16.5298 17.4267 16.2732 17.5 16 17.5C15.7268 17.5 15.4706 17.427 15.25 17.2993V25H16.75L16.7504 17.2991Z"></path>
          <path d="M15.25 17.2993C14.8018 17.04 14.5001 16.5553 14.5 16.0002L7.83105 19.8505L8.58105 21.1495L15.25 17.2993Z"></path>
          <path d="M14.5 16.0002C14.5001 15.4451 14.8018 14.96 15.25 14.7007L8.58105 10.8505L7.83105 12.1495L14.5 16.0002Z"></path>
        </g>
        <circle cx="16" cy="8" r="1.5"></circle>
        <circle cx="23.5" cy="11.75" r="1.5"></circle>
        <circle cx="8.5" cy="11.75" r="1.5"></circle>
        <circle cx="23.5" cy="20.25" r="1.5"></circle>
        <circle cx="8.5" cy="20.25" r="1.5"></circle>
        <circle cx="16" cy="24" r="1.5"></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 19.5C17.933 19.5 19.5 17.933 19.5 16C19.5 14.067 17.933 12.5 16 12.5C14.067 12.5 12.5 14.067 12.5 16C12.5 17.933 14.067 19.5 16 19.5ZM16 17.5C16.8284 17.5 17.5 16.8284 17.5 16C17.5 15.1716 16.8284 14.5 16 14.5C15.1716 14.5 14.5 15.1716 14.5 16C14.5 16.8284 15.1716 17.5 16 17.5Z"
        ></path>
        <rect
          opacity="0.4"
          x="1"
          y="1"
          width="30"
          height="30"
          rx="7"
          stroke="#889099"
          strokeWidth="2"
        ></rect>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  "type_Network-wide": {
    xml: (
      <>
        <g opacity="0.7">
          <path d="M15.6416 5.15713C15.8515 4.69678 15.9766 4.18968 15.997 3.65576C17.8946 4.56641 19.4335 6.10532 20.3442 8.00295C19.8103 8.0234 19.3032 8.1485 18.8428 8.35832C18.1181 6.99944 17.0005 5.88181 15.6416 5.15713Z"></path>
          <path d="M18.8428 15.6416C18.1181 17.0005 17.0005 18.1181 15.6416 18.8428C15.8515 19.3032 15.9766 19.8103 15.997 20.3442C17.8946 19.4335 19.4335 17.8946 20.3442 15.997C19.8103 15.9765 19.3032 15.8515 18.8428 15.6416Z"></path>
          <path d="M5.15713 15.6416C5.88181 17.0005 6.99944 18.1181 8.35832 18.8428C8.1485 19.3032 8.0234 19.8103 8.00296 20.3442C6.10532 19.4335 4.56641 17.8946 3.65576 15.997C4.18968 15.9765 4.69678 15.8515 5.15713 15.6416Z"></path>
          <path d="M5.15713 8.35832C5.88181 6.99943 6.99944 5.88181 8.35832 5.15713C8.1485 4.69678 8.0234 4.18968 8.00295 3.65576C6.10532 4.56641 4.56641 6.10532 3.65576 8.00295C4.18968 8.0234 4.69678 8.1485 5.15713 8.35832Z"></path>
        </g>
        <circle cx="12" cy="3.5" r="2"></circle>
        <circle cx="20.5" cy="12" r="2"></circle>
        <circle cx="12" cy="20.5" r="2"></circle>
        <circle cx="3.5" cy="12" r="2"></circle>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.50536 8.50536C8.66306 7.47586 8.88931 6.53934 9.17144 5.73998C9.45924 4.92455 9.81927 4.21133 10.2564 3.68746C10.69 3.1678 11.2757 2.75 12 2.75C12.7243 2.75 13.31 3.1678 13.7436 3.68746C14.1807 4.21133 14.5408 4.92455 14.8286 5.73998C15.1107 6.53934 15.3369 7.47586 15.4946 8.50536C16.5241 8.66306 17.4607 8.88931 18.26 9.17144C19.0755 9.45924 19.7887 9.81927 20.3125 10.2564C20.8322 10.69 21.25 11.2757 21.25 12C21.25 12.7243 20.8322 13.31 20.3125 13.7436C19.7887 14.1807 19.0755 14.5408 18.26 14.8286C17.4607 15.1107 16.5241 15.3369 15.4946 15.4946C15.3369 16.5241 15.1107 17.4607 14.8286 18.26C14.5408 19.0755 14.1807 19.7887 13.7436 20.3125C13.31 20.8322 12.7243 21.25 12 21.25C11.2757 21.25 10.69 20.8322 10.2564 20.3125C9.81927 19.7887 9.45924 19.0755 9.17144 18.26C8.88931 17.4607 8.66306 16.5241 8.50536 15.4946C7.47586 15.3369 6.53934 15.1107 5.73998 14.8286C4.92455 14.5408 4.21133 14.1807 3.68746 13.7436C3.1678 13.31 2.75 12.7243 2.75 12C2.75 11.2757 3.1678 10.69 3.68746 10.2564C4.21133 9.81927 4.92455 9.45924 5.73998 9.17144C6.53934 8.88931 7.47586 8.66306 8.50536 8.50536ZM10.055 8.32644C10.1935 7.54356 10.3741 6.83936 10.5859 6.23921C10.841 5.51644 11.1274 4.98486 11.4081 4.64849C11.6923 4.3079 11.8959 4.25 12 4.25C12.1041 4.25 12.3077 4.3079 12.5919 4.64849C12.8726 4.98486 13.159 5.51644 13.4141 6.23921C13.6259 6.83936 13.8065 7.54356 13.945 8.32644C13.317 8.27625 12.666 8.25 12 8.25C11.334 8.25 10.683 8.27625 10.055 8.32644ZM8.32644 13.945C7.54356 13.8065 6.83936 13.6259 6.23921 13.4141C5.51644 13.159 4.98486 12.8726 4.64849 12.5919C4.3079 12.3077 4.25 12.1041 4.25 12C4.25 11.8959 4.3079 11.6923 4.64849 11.4081C4.98486 11.1274 5.51644 10.841 6.23921 10.5859C6.83936 10.3741 7.54356 10.1935 8.32644 10.055C8.27625 10.683 8.25 11.334 8.25 12C8.25 12.666 8.27625 13.317 8.32644 13.945ZM9.85007 14.1499C9.78509 13.468 9.75 12.7473 9.75 12C9.75 11.2527 9.78509 10.532 9.85007 9.85007C10.532 9.78509 11.2527 9.75 12 9.75C12.7473 9.75 13.468 9.78509 14.1499 9.85007C14.2149 10.532 14.25 11.2527 14.25 12C14.25 12.7473 14.2149 13.468 14.1499 14.1499C13.468 14.2149 12.7473 14.25 12 14.25C11.2527 14.25 10.532 14.2149 9.85007 14.1499ZM10.055 15.6736C10.1935 16.4564 10.3741 17.1606 10.5859 17.7608C10.841 18.4836 11.1274 19.0151 11.4081 19.3515C11.6923 19.6921 11.8959 19.75 12 19.75C12.1041 19.75 12.3077 19.6921 12.5919 19.3515C12.8726 19.0151 13.159 18.4836 13.4141 17.7608C13.6259 17.1606 13.8065 16.4564 13.945 15.6736C13.317 15.7238 12.666 15.75 12 15.75C11.334 15.75 10.683 15.7238 10.055 15.6736ZM15.6736 13.945C16.4564 13.8065 17.1606 13.6259 17.7608 13.4141C18.4836 13.159 19.0151 12.8726 19.3515 12.5919C19.6921 12.3077 19.75 12.1041 19.75 12C19.75 11.8959 19.6921 11.6923 19.3515 11.4081C19.0151 11.1274 18.4836 10.841 17.7608 10.5859C17.1606 10.3741 16.4564 10.1935 15.6736 10.055C15.7238 10.683 15.75 11.334 15.75 12C15.75 12.666 15.7238 13.317 15.6736 13.945Z"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Organization: {
    xml: (
      <>
        <path
          opacity="0.4"
          d="M11 18.3787C11 18.9309 11.4477 19.3787 12 19.3787C12.5523 19.3787 13 18.9309 13 18.3787V17.3787H18V18.3787C18 18.9309 18.4477 19.3787 19 19.3787C19.5523 19.3787 20 18.9309 20 18.3787V16.3787C20 15.8264 19.5523 15.3787 19 15.3787H13V13.8787H11V15.3787H5C4.44772 15.3787 4 15.8264 4 16.3787V18.3787C4 18.9309 4.44772 19.3787 5 19.3787C5.55228 19.3787 6 18.9309 6 18.3787V17.3787H11V18.3787Z"
        ></path>
        <path d="M10.9391 4.43934C11.5249 3.85355 12.4746 3.85355 13.0604 4.43934L15.9391 7.31802C16.5249 7.90381 16.5249 8.85355 15.9391 9.43934L13.0604 12.318C12.4746 12.9038 11.5249 12.9038 10.9391 12.318L8.06043 9.43934C7.47465 8.85355 7.47465 7.90381 8.06043 7.31802L10.9391 4.43934Z"></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Security: {
    xml: (
      <>
        <path
          opacity="0.4"
          d="M20 14V5.65753C20 5.2575 19.7616 4.89787 19.3939 4.74029L14.3939 2.59743C13.7341 2.31463 13 2.79866 13 3.51658V20.4835C13 21.2014 13.7258 21.665 14.3499 21.3102C16.3841 20.1541 20 17.5936 20 14Z"
        ></path>
        <path d="M4 5.65752V14C4 17.5936 7.61593 20.1541 9.65009 21.3102C10.2742 21.665 11 21.2014 11 20.4835V3.51658C11 2.79866 10.2659 2.31463 9.60608 2.59744L4.60608 4.74029C4.2384 4.89787 4 5.2575 4 5.65752Z"></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Switch: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 3C4.44772 3 4 3.44772 4 4V7C4 7.55228 4.44772 8 5 8H19C19.5523 8 20 7.55228 20 7V4C20 3.44772 19.5523 3 19 3H5ZM7 6.5C7.55228 6.5 8 6.05228 8 5.5C8 4.94772 7.55228 4.5 7 4.5C6.44772 4.5 6 4.94772 6 5.5C6 6.05228 6.44772 6.5 7 6.5Z"
        ></path>
        <path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 9.5C4.44772 9.5 4 9.94772 4 10.5V13.5C4 14.0523 4.44772 14.5 5 14.5H19C19.5523 14.5 20 14.0523 20 13.5V10.5C20 9.94772 19.5523 9.5 19 9.5H5ZM7 13C7.55228 13 8 12.5523 8 12C8 11.4477 7.55228 11 7 11C6.44772 11 6 11.4477 6 12C6 12.5523 6.44772 13 7 13Z"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 16C4.44772 16 4 16.4477 4 17V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V17C20 16.4477 19.5523 16 19 16H5ZM7 19.5C7.55228 19.5 8 19.0523 8 18.5C8 17.9477 7.55228 17.5 7 17.5C6.44772 17.5 6 17.9477 6 18.5C6 19.0523 6.44772 19.5 7 19.5Z"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Systems_Manager: {
    xml: (
      <>
        <g opacity="0.4">
          <path d="M3 4C2.44772 4 2 4.44772 2 5V15C2 15.5523 2.44772 16 3 16H14.5V9C14.5 8.17157 15.1716 7.5 16 7.5H19V5C19 4.44772 18.5523 4 18 4H3Z"></path>
          <path d="M13 17H9V19H7.5C7.22386 19 7 19.2239 7 19.5C7 19.7761 7.22386 20 7.5 20H14C14.2761 20 14.5 19.7761 14.5 19.5C14.5 19.2239 14.2761 19 14 19H13V17Z"></path>
        </g>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 9C16.4477 9 16 9.44771 16 10V19C16 19.5523 16.4477 20 17 20H21C21.5523 20 22 19.5523 22 19V10C22 9.44772 21.5523 9 21 9H17ZM19 18.5C19.4142 18.5 19.75 18.1642 19.75 17.75C19.75 17.3358 19.4142 17 19 17C18.5858 17 18.25 17.3358 18.25 17.75C18.25 18.1642 18.5858 18.5 19 18.5Z"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  type_Wireless: {
    xml: (
      <>
        <path d="M9.41688 16.5116C10.9831 15.4948 13.017 15.4948 14.5831 16.5116C15.0464 16.8124 15.0422 17.4568 14.6517 17.8474L12.7071 19.7919C12.3166 20.1825 11.6834 20.1825 11.2929 19.7919L9.34836 17.8474C8.95784 17.4568 8.95366 16.8124 9.41688 16.5116Z"></path>
        <path
          opacity="0.7"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.4801 15.0189C17.0896 15.4095 16.4601 15.4021 16.0166 15.073C13.6381 13.3077 10.362 13.3077 7.98347 15.073C7.53998 15.4021 6.91048 15.4095 6.51995 15.0189L5.45929 13.9583C5.06877 13.5678 5.06611 12.93 5.49241 12.5789C9.26404 9.4724 14.736 9.4724 18.5077 12.5789C18.934 12.93 18.9313 13.5678 18.5408 13.9583L17.4801 15.0189Z"
        ></path>
        <path
          opacity="0.4"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21.369 11.1299C20.9785 11.5204 20.3472 11.5163 19.9265 11.1584C15.3655 7.27922 8.63413 7.27922 4.07315 11.1584C3.65245 11.5163 3.02118 11.5204 2.63066 11.1299L1.57 10.0692C1.17947 9.67867 1.17804 9.04228 1.59223 8.67694C7.52974 3.43972 16.4699 3.43972 22.4074 8.67694C22.8216 9.04228 22.8202 9.67867 22.4296 10.0692L21.369 11.1299Z"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 24 24",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  gitMerge: {
    xml: (
      <>
        <path d="M188,104a36.1,36.1,0,0,0-35.8,32H130.5a40,40,0,0,1-30.8-14.4L82.5,100.9A35.9,35.9,0,1,0,60,103.1v49.8a36,36,0,1,0,16,0V118.1l11.5,13.7a55.4,55.4,0,0,0,43,20.2h23.6A36,36,0,1,0,188,104ZM88,188a20,20,0,1,1-20-20A20.1,20.1,0,0,1,88,188Zm100-28a20,20,0,1,1,20-20A20.1,20.1,0,0,1,188,160Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 256 256"
    }
  },
  loader: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1741 3.89131C17.46 2.82437 18.5567 2.19121 19.6236 2.47709C27.0921 4.47828 31.5243 12.155 29.5231 19.6235C29.2372 20.6905 28.1405 21.3236 27.0736 21.0377C26.0067 20.7519 25.3735 19.6552 25.6594 18.5882C27.0888 13.2536 23.923 7.77021 18.5883 6.3408C17.5214 6.05491 16.8882 4.95824 17.1741 3.89131Z"
          fill="#C1C6CC"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  sort: {
    xml: (
      <>
        <path
          d="M12.0002 19.4329C11.7305 19.4329 11.4875 19.5953 11.3843 19.8444C11.2811 20.0935 11.3381 20.3803 11.5288 20.5709L15.5287 24.571C15.6538 24.696 15.8233 24.7663 16.0002 24.7663C16.177 24.7663 16.3465 24.696 16.4716 24.571L20.4716 20.571C20.6623 20.3803 20.7193 20.0936 20.6161 19.8445C20.5129 19.5953 20.2698 19.4329 20.0002 19.4329L12.0002 19.4329Z"
          fill="#6F7680"
        ></path>
        <path
          d="M16.4716 7.62861C16.3465 7.50359 16.177 7.43335 16.0002 7.43335C15.8233 7.43335 15.6538 7.50359 15.5287 7.62862L11.5288 11.6287C11.3381 11.8193 11.2811 12.1061 11.3843 12.3552C11.4875 12.6043 11.7305 12.7667 12.0002 12.7667L20.0002 12.7667C20.2698 12.7667 20.5129 12.6043 20.6161 12.3551C20.7193 12.106 20.6623 11.8193 20.4716 11.6286L16.4716 7.62861Z"
          fill="#6F7680"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  textAlignCenter: {
    xml: (
      <>
        <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"></path>
        <path d="M64,100a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"></path>
        <path d="M216,140H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        <path d="M192,180H64a8,8,0,0,0,0,16H192a8,8,0,0,0,0-16Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 256 256"
    }
  },
  textAlignRight: {
    xml: (
      <>
        <path d="M40,76H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16Z"></path>
        <path d="M216,100H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        <path d="M216,140H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
        <path d="M216,180H88a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "none",
      viewBox: "0 0 256 256"
    }
  },
  textBolder: {
    xml: (
      <>
        <path d="M170.5,115.7A44,44,0,0,0,140,40H64a7.9,7.9,0,0,0-8,8V200a8,8,0,0,0,8,8h88a48,48,0,0,0,18.5-92.3ZM72,56h68a28,28,0,0,1,0,56H72Zm80,136H72V128h80a32,32,0,0,1,0,64Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#0f141a",
      viewBox: "0 0 256 256"
    }
  },
  textH: {
    xml: (
      <>
        <path d="M208,56V200a8,8,0,0,1-16,0V136H64v64a8,8,0,0,1-16,0V56a8,8,0,0,1,16,0v64H192V56a8,8,0,0,1,16,0Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#0f141a",
      viewBox: "0 0 256 256"
    }
  },
  textItalic: {
    xml: (
      <>
        <path d="M200,56a8,8,0,0,1-8,8H157.8L115.1,192H144a8,8,0,0,1,0,16H64a8,8,0,0,1,0-16H98.2L140.9,64H112a8,8,0,0,1,0-16h80A8,8,0,0,1,200,56Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#0f141a",
      viewBox: "0 0 256 256"
    }
  },
  textStrikethrough: {
    xml: (
      <>
        <path d="M224,128a8,8,0,0,1-8,8H175.9c9.2,7.1,16.1,17.2,16.1,32s-7,25.7-19.8,34.8S144.6,216,128,216s-32.3-4.7-44.2-13.2S64,181.3,64,168a8,8,0,0,1,16,0c0,17.3,22,32,48,32s48-14.7,48-32c0-14.9-10.5-23.6-38.8-32H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM76.3,104a6.9,6.9,0,0,0,2.5-.4,8,8,0,0,0,5.1-10.1,19.2,19.2,0,0,1-.8-5.5c0-18.2,19.3-32,44.9-32,19.5,0,36.1,8.3,42.3,21A8.1,8.1,0,0,0,181,80.7,7.9,7.9,0,0,0,184.7,70c-9-18.5-30.7-30-56.7-30C93.3,40,67.1,60.6,67.1,88a36,36,0,0,0,1.6,10.5A8,8,0,0,0,76.3,104Z"></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      fill: "#0f141a",
      viewBox: "0 0 256 256"
    }
  },
  "empty-background": {
    xml: (
      <>
        <rect
          opacity="0.4"
          x="270.409"
          y="42"
          width="36"
          height="160"
          rx="18"
          transform="rotate(25 270.409 42)"
          className="a-icon-bg"
        ></rect>
        <rect
          opacity="0.2"
          x="45.5044"
          y="119"
          width="36"
          height="120"
          rx="18"
          transform="rotate(25 45.5044 119)"
          className="a-icon-bg"
        ></rect>
        <rect
          opacity="0.3"
          x="86.9438"
          y="-5"
          width="36"
          height="64.2542"
          rx="18"
          transform="rotate(25 86.9438 -5)"
          className="a-icon-bg"
        ></rect>
      </>
    ),
    props: {
      viewBox: "0 0 298 238",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  "sort-down": {
    xml: (
      <>
        <path
          d="M12.0002 19.4329C11.7305 19.4329 11.4875 19.5953 11.3843 19.8444C11.2811 20.0935 11.3381 20.3803 11.5288 20.5709L15.5287 24.571C15.6538 24.696 15.8233 24.7663 16.0002 24.7663C16.177 24.7663 16.3465 24.696 16.4716 24.571L20.4716 20.571C20.6623 20.3803 20.7193 20.0936 20.6161 19.8445C20.5129 19.5953 20.2698 19.4329 20.0002 19.4329L12.0002 19.4329Z"
          fill="#6F7680"
        ></path>
        <path
          d="M16.4716 7.62861C16.3465 7.50359 16.177 7.43335 16.0002 7.43335C15.8233 7.43335 15.6538 7.50359 15.5287 7.62862L11.5288 11.6287C11.3381 11.8193 11.2811 12.1061 11.3843 12.3552C11.4875 12.6043 11.7305 12.7667 12.0002 12.7667L20.0002 12.7667C20.2698 12.7667 20.5129 12.6043 20.6161 12.3551C20.7193 12.106 20.6623 11.8193 20.4716 11.6286L16.4716 7.62861Z"
          fill="#C1C6CC"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  "sort-empty": {
    xml: (
      <>
        <path
          d="M12.0002 19.4329C11.7305 19.4329 11.4875 19.5953 11.3843 19.8444C11.2811 20.0935 11.3381 20.3803 11.5288 20.5709L15.5287 24.571C15.6538 24.696 15.8233 24.7663 16.0002 24.7663C16.177 24.7663 16.3465 24.696 16.4716 24.571L20.4716 20.571C20.6623 20.3803 20.7193 20.0936 20.6161 19.8445C20.5129 19.5953 20.2698 19.4329 20.0002 19.4329L12.0002 19.4329Z"
          fill="#C1C6CC"
        ></path>
        <path
          d="M16.4716 7.62861C16.3465 7.50359 16.177 7.43335 16.0002 7.43335C15.8233 7.43335 15.6538 7.50359 15.5287 7.62862L11.5288 11.6287C11.3381 11.8193 11.2811 12.1061 11.3843 12.3552C11.4875 12.6043 11.7305 12.7667 12.0002 12.7667L20.0002 12.7667C20.2698 12.7667 20.5129 12.6043 20.6161 12.3551C20.7193 12.106 20.6623 11.8193 20.4716 11.6286L16.4716 7.62861Z"
          fill="#C1C6CC"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  "sort-up": {
    xml: (
      <>
        <path
          d="M12.0002 19.4329C11.7305 19.4329 11.4875 19.5953 11.3843 19.8444C11.2811 20.0935 11.3381 20.3803 11.5288 20.5709L15.5287 24.571C15.6538 24.696 15.8233 24.7663 16.0002 24.7663C16.177 24.7663 16.3465 24.696 16.4716 24.571L20.4716 20.571C20.6623 20.3803 20.7193 20.0936 20.6161 19.8445C20.5129 19.5953 20.2698 19.4329 20.0002 19.4329L12.0002 19.4329Z"
          fill="#C1C6CC"
        ></path>
        <path
          d="M16.4716 7.62861C16.3465 7.50359 16.177 7.43335 16.0002 7.43335C15.8233 7.43335 15.6538 7.50359 15.5287 7.62862L11.5288 11.6287C11.3381 11.8193 11.2811 12.1061 11.3843 12.3552C11.4875 12.6043 11.7305 12.7667 12.0002 12.7667L20.0002 12.7667C20.2698 12.7667 20.5129 12.6043 20.6161 12.3551C20.7193 12.106 20.6623 11.8193 20.4716 11.6286L16.4716 7.62861Z"
          fill="#6F7680"
        ></path>
      </>
    ),
    props: {
      viewBox: "0 0 32 32",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  "upload-simple": {
    xml: (
      <>
        <polyline
          points="86 82 128 40 170 82"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <line
          x1="128"
          y1="152"
          x2="128"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <path
          d="M216,152v56a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "user-switch": {
    xml: (
      <>
        <circle
          cx="128"
          cy="120"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M63.8,199.4a72,72,0,0,1,128.4,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M224,152V128A96,96,0,0,0,47.3,75.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M32,104v24a96,96,0,0,0,176.7,52.1"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <polyline
          points="200 128 224 152 248 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
        <polyline
          points="8 128 32 104 56 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "users-three": {
    xml: (
      <>
        <circle
          cx="128"
          cy="140"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></circle>
        <path
          d="M196,116a59.8,59.8,0,0,1,48,24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M12,140a59.8,59.8,0,0,1,48-24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M70.4,216a64.1,64.1,0,0,1,115.2,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M60,116A32,32,0,1,1,91.4,78"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M164.6,78A32,32,0,1,1,196,116"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "warning-circle": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeMiterlimit="10"
          strokeWidth="16"
        ></circle>
        <circle cx="128" cy="172" r="12"></circle>
        <line
          x1="128"
          y1="80"
          x2="128"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-high": {
    xml: (
      <>
        <path
          d="M92.9,166.1a50.7,50.7,0,0,1,70.2,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M59,132.1a98.8,98.8,0,0,1,138,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <path
          d="M25.1,98.2a146.6,146.6,0,0,1,205.8,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></path>
        <circle cx="128" cy="200" r="12"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  x: {
    xml: (
      <>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  }
};

export default MagnaIcons;
