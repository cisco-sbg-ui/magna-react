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
          strokeWidth="24"
        ></circle>
        <path
          d="M184,208c-15.21,10.11-36.37,16-56,16a96,96,0,1,1,96-96c0,22.09-8,40-28,40s-28-17.91-28-40V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  bell: {
    xml: (
      <>
        <path
          d="M96,184v8a32,32,0,0,0,64,0v-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M56,104a72,72,0,0,1,144,0c0,35.82,8.3,56.6,14.9,68A8,8,0,0,1,208,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  clock: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <polyline
          points="128 72 128 128 184 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <polyline
          points="168 168 216 168 216 40 88 40 88 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></ellipse>
        <path
          d="M40,80v48c0,26.51,39.4,48,88,48s88-21.49,88-48V80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M40,128v48c0,26.51,39.4,48,88,48s88-21.49,88-48V128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          height="140"
          rx="16"
          transform="translate(256 236) rotate(180)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="160"
          y1="224"
          x2="96"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="148"
          x2="224"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="192"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56a0,0,0,0,1,0,0Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="110.55"
          y1="128"
          x2="34.47"
          y2="197.74"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="221.53"
          y1="197.74"
          x2="145.45"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="37.46"
          y1="96"
          x2="218.54"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="37.46"
          y1="160"
          x2="218.54"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  plugs: {
    xml: (
      <>
        <line
          x1="140"
          y1="148"
          x2="120"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line x1="140" y1="148" x2="120" y2="168" fill="#231f20"></line>
        <line
          x1="108"
          y1="116"
          x2="88"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line x1="108" y1="116" x2="88" y2="136" fill="#231f20"></line>
        <line
          x1="64"
          y1="112"
          x2="144"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="58.06"
          y1="197.94"
          x2="24"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="112"
          y1="64"
          x2="192"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="197.94"
          y1="58.06"
          x2="232"
          y2="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M132,180l-29,29a24,24,0,0,1-33.94,0L47,186.91A24,24,0,0,1,47,153l29-29"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M180,132l29-29a24,24,0,0,0,0-33.94L186.91,47A24,24,0,0,0,153,47L124,76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  question: {
    xml: (
      <>
        <circle cx="128" cy="180" r="16"></circle>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M128,140v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,88.54,96,104v4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  sparkle: {
    xml: (
      <>
        <path
          d="M84.27,171.73l-55.09-20.3a7.92,7.92,0,0,1,0-14.86l55.09-20.3,20.3-55.09a7.92,7.92,0,0,1,14.86,0l20.3,55.09,55.09,20.3a7.92,7.92,0,0,1,0,14.86l-55.09,20.3-20.3,55.09a7.92,7.92,0,0,1-14.86,0Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="176"
          y1="16"
          x2="176"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="72"
          x2="224"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="40"
          x2="200"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="208"
          y1="88"
          x2="240"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  star: {
    xml: (
      <>
        <path
          d="M128,189.09l54.72,33.65a8.4,8.4,0,0,0,12.52-9.17l-14.88-62.79,48.7-42A8.46,8.46,0,0,0,224.27,94L160.36,88.8,135.74,29.2a8.36,8.36,0,0,0-15.48,0L95.64,88.8,31.73,94a8.46,8.46,0,0,0-4.79,14.83l48.7,42L60.76,213.57a8.4,8.4,0,0,0,12.52,9.17Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  tag: {
    xml: (
      <>
        <path
          d="M42.34,138.34A8,8,0,0,1,40,132.69V40h92.69a8,8,0,0,1,5.65,2.34l99.32,99.32a8,8,0,0,1,0,11.31L153,237.66a8,8,0,0,1-11.31,0Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle cx="88" cy="88" r="16" fill="currentColor"></circle>
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
          strokeWidth="24"
        ></polyline>
        <line
          x1="120"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <path
          d="M40,156H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M32,216c19.37-33.47,54.55-56,96-56s76.63,22.53,96,56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  alarm: {
    xml: (
      <>
        <circle
          cx="128"
          cy="136"
          r="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="56"
          y1="32"
          x2="24"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="200"
          y1="32"
          x2="232"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="128 88 128 136 176 136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "android-logo": {
    xml: (
      <>
        <circle cx="164" cy="148" r="16" fill="currentColor"></circle>
        <circle cx="92" cy="148" r="16" fill="currentColor"></circle>
        <path
          d="M24,184V161.13C24,103.65,70.15,56.2,127.63,56A104,104,0,0,1,232,160v24a8,8,0,0,1-8,8H32A8,8,0,0,1,24,184Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="32"
          y1="48"
          x2="63.07"
          y2="79.07"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="48"
          x2="193.1"
          y2="78.9"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
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
          strokeWidth="24"
        ></circle>
        <line
          x1="128"
          y1="32"
          x2="164.68"
          y2="134.7"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="44.86"
          y1="80"
          x2="152.14"
          y2="99.58"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="44.86"
          y1="176"
          x2="115.46"
          y2="92.89"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="91.32"
          y2="121.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="211.14"
          y1="176"
          x2="103.86"
          y2="156.42"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="211.14"
          y1="80"
          x2="140.54"
          y2="163.11"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "app-window": {
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
          strokeWidth="24"
        ></rect>
        <circle cx="76" cy="92" r="16"></circle>
        <circle cx="124" cy="92" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "apple-logo": {
    xml: (
      <>
        <path
          d="M216,73.52C204.53,62.66,185,56,168,56a63.72,63.72,0,0,0-40,14h0A63.71,63.71,0,0,0,88.88,56C52,55.5,23.06,86.3,24,123.19a119.62,119.62,0,0,0,37.65,84.12A31.92,31.92,0,0,0,83.6,216h87.7a31.75,31.75,0,0,0,23.26-10c15.85-17,21.44-33.2,21.44-33.2h0c-16.79-11.53-24-30.87-24-52.78,0-18.3,11.68-34.81,24-46.48Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M148,12a32.12,32.12,0,0,0-9.77,8.37"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  application: {
    xml: (
      <>
        <path d="M27 4.5H5C4.33696 4.5 3.70107 4.76339 3.23223 5.23223C2.76339 5.70107 2.5 6.33696 2.5 7V25C2.5 25.663 2.76339 26.2989 3.23223 26.7678C3.70107 27.2366 4.33696 27.5 5 27.5H27C27.663 27.5 28.2989 27.2366 28.7678 26.7678C29.2366 26.2989 29.5 25.663 29.5 25V7C29.5 6.33696 29.2366 5.70107 28.7678 5.23223C28.2989 4.76339 27.663 4.5 27 4.5ZM5.5 12.5H9.5V14.5H5.5V12.5ZM9.5 7.5V9.5H5.5V7.5H9.5ZM5.5 17.5H9.5V24.5H5.5V17.5ZM26.5 24.5H12.5V7.5H26.5V24.5Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
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
          strokeWidth="24"
        ></rect>
        <line
          x1="128"
          y1="76"
          x2="128"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M40,160H76.69a8,8,0,0,1,5.65,2.34l19.32,19.32a8,8,0,0,0,5.65,2.34h41.38a8,8,0,0,0,5.65-2.34l19.32-19.32a8,8,0,0,1,5.65-2.34H216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <polyline
          points="96 116 128 148 160 116"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeWidth="24"
        ></polyline>
        <path
          d="M224,200a96,96,0,0,0-96-96H32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="160"
          y1="160"
          x2="96"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="160 112 160 160 112 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="88"
          y1="128"
          x2="168"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="136 96 168 128 136 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <polyline
          points="96 120 128 88 160 120"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="128"
          y1="168"
          x2="128"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-clockwise": {
    xml: (
      <>
        <polyline
          points="184 104 232 104 232 56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M188.4,192a88,88,0,1,1,1.83-126.23L232,104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="168 192 64 192 64 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="88 192 192 192 192 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="56 144 128 216 200 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-elbow-right-up": {
    xml: (
      <>
        <polyline
          points="120 96 168 48 216 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="24 192 168 192 168 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="112 56 40 128 112 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          x2="80"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="40"
          x2="40"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="152 56 80 128 152 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          x2="176"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="216"
          y1="40"
          x2="216"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="104 56 176 128 104 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="144 56 216 128 144 200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-square-in": {
    xml: (
      <>
        <line
          x1="40"
          y1="216"
          x2="120"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="120 200 119.99 136.01 56 136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M164,184h44a8,8,0,0,0,8-8V48a8,8,0,0,0-8-8H80a8,8,0,0,0-8,8V92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrow-square-out": {
    xml: (
      <>
        <line
          x1="136"
          y1="120"
          x2="216"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="216 104 215.99 40.01 152 40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M184,140v68a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8h68"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="168 64 64 64 64 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="88 64 192 64 192 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <polyline
          points="56 112 128 40 200 112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-clockwise": {
    xml: (
      <>
        <polyline
          points="168 96 216 96 216 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="88 160 40 160 40 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M216,96,187.72,67.72A88,88,0,0,0,64,67"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M40,160l28.28,28.28A88,88,0,0,0,192,189"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="144 80 176 48 208 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="80"
          y1="48"
          x2="80"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="208"
          x2="176"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-in-cardinal": {
    xml: (
      <>
        <line
          x1="128"
          y1="24"
          x2="128"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="232"
          x2="128"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="232"
          y1="128"
          x2="160"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="24"
          y1="128"
          x2="96"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="160 64 128 96 96 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="160 192 128 160 96 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="192 160 160 128 192 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="64 160 96 128 64 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-in-simple": {
    xml: (
      <>
        <polyline
          points="148 60 148 108 196 108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="60 148 108 148 108 196"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="208"
          y1="48"
          x2="148"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="208"
          x2="108"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="64 152 104 152 104 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="152 192 152 152 192 152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="104 64 104 104 64 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="208"
          y1="48"
          x2="152"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="208"
          x2="104"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="208"
          y1="208"
          x2="152"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="48"
          x2="104"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="80 112 48 80 80 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="48"
          y1="176"
          x2="208"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="208"
          y1="80"
          x2="48"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-out-simple": {
    xml: (
      <>
        <polyline
          points="160 48 208 48 208 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="96 208 48 208 48 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="148"
          y1="108"
          x2="208"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="108"
          y1="148"
          x2="48"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "arrows-out": {
    xml: (
      <>
        <polyline
          points="160 48 208 48 208 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="96 208 48 208 48 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="208 160 208 208 160 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="48 96 48 48 96 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="152"
          y1="104"
          x2="208"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="152"
          x2="48"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="152"
          x2="208"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="48"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="80"
          x2="208"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="176"
          x2="208"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  barcode: {
    xml: (
      <>
        <polyline
          points="180 52 220 52 220 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="76 204 36 204 36 164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="220 164 220 204 180 204"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="36 92 36 52 76 52"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="88"
          y1="92"
          x2="88"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="168"
          y1="92"
          x2="168"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="92"
          x2="128"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "bell-slash": {
    xml: (
      <>
        <path
          d="M96,184v8a32,32,0,0,0,64,0v-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M99.94,37.67A72,72,0,0,1,200,104c0,23.24,3.49,40.15,7.75,52.26"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M178.91,184H48a8,8,0,0,1-6.88-12C47.71,160.6,56,139.81,56,104A71.65,71.65,0,0,1,68.85,62.94"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="48"
          y1="40"
          x2="208"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="88"
          x2="152"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M229.59,154.32,185.94,55A24,24,0,0,0,152,55V168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M104,168V55a24,24,0,0,0-33.94,0L26.41,154.32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle
          cx="64"
          cy="168"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="192"
          cy="168"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "book-open": {
    xml: (
      <>
        <path
          d="M128,88a32,32,0,0,1,32-32h72V200H160a32,32,0,0,0-32,32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M24,200H96a32,32,0,0,1,32,32V88A32,32,0,0,0,96,56H24Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "brackets-curly": {
    xml: (
      <>
        <path
          d="M80,40c-64,0,0,88-64,88,64,0,0,88,64,88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M176,40c64,0,0,88,64,88-64,0,0,88-64,88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <line
          x1="32"
          y1="96"
          x2="224"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  browsers: {
    xml: (
      <>
        <rect
          x="28"
          y="84"
          width="160"
          height="128"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <path
          d="M68,84V52a8,8,0,0,1,8-8H220a8,8,0,0,1,8,8V164a8,8,0,0,1-8,8H188"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="28"
          y1="124"
          x2="188"
          y2="124"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <line
          x1="176"
          y1="24"
          x2="176"
          y2="52"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="80"
          y1="24"
          x2="80"
          y2="52"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="88"
          x2="216"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  camera: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M21 19.5C21 18.5111 20.7068 17.5444 20.1574 16.7222C19.6079 15.8999 18.827 15.259 17.9134 14.8806C16.9998 14.5022 15.9945 14.4032 15.0246 14.5961C14.0546 14.789 13.1637 15.2652 12.4645 15.9645C11.7652 16.6637 11.289 17.5546 11.0961 18.5246C10.9031 19.4945 11.0022 20.4998 11.3806 21.4134C11.759 22.3271 12.3999 23.1079 13.2222 23.6574C14.0444 24.2068 15.0111 24.5 16 24.5C17.3261 24.5 18.5979 23.9732 19.5355 23.0355C20.4732 22.0979 21 20.8261 21 19.5ZM14 19.5C14 19.1044 14.1173 18.7178 14.3371 18.3889C14.5568 18.06 14.8692 17.8036 15.2346 17.6522C15.6001 17.5009 16.0022 17.4613 16.3902 17.5384C16.7781 17.6156 17.1345 17.8061 17.4142 18.0858C17.6939 18.3655 17.8844 18.7219 17.9616 19.1098C18.0387 19.4978 17.9991 19.8999 17.8478 20.2654C17.6964 20.6308 17.44 20.9432 17.1111 21.1629C16.7822 21.3827 16.3956 21.5 16 21.5C15.4696 21.5 14.9609 21.2893 14.5858 20.9142C14.2107 20.5391 14 20.0304 14 19.5Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 17L3.5 11C3.49992 10.716 3.58046 10.4378 3.73227 10.1978C3.88408 9.95775 4.10091 9.76575 4.35755 9.64412C4.61418 9.52248 5 9.51065 5.18198 9.51065L26.818 9.51065C27 9.51065 27.3858 9.52248 27.6425 9.64412C27.8991 9.76576 28.1159 9.95775 28.2677 10.1978C28.4195 10.4378 28.5001 10.716 28.5 11V17C28.5 20.3152 27.183 23.4946 24.8388 25.8388C22.4946 28.183 19.3152 29.5 16 29.5C12.6848 29.5 9.50537 28.183 7.16117 25.8388C4.81696 23.4946 3.5 20.3152 3.5 17ZM6.5 17C6.5 19.5196 7.50089 21.9359 9.28249 23.7175C11.0641 25.4991 13.4804 26.5 16 26.5C18.5196 26.5 20.9359 25.4991 22.7175 23.7175C24.4991 21.9359 25.5 19.5196 25.5 17V12.5033L6.5 12.4995L6.5 17Z"
        ></path>
        <path d="M29.5 6C29.5 6.39783 29.342 6.77935 29.0607 7.06066C28.7794 7.34196 28.3978 7.5 28 7.5L4 7.5C3.60217 7.5 3.22064 7.34196 2.93934 7.06066C2.65804 6.77935 2.5 6.39783 2.5 6C2.5 5.60217 2.65804 5.22065 2.93934 4.93934C3.22064 4.65804 3.60217 4.5 4 4.5L28 4.5C28.3978 4.5 28.7794 4.65804 29.0607 4.93934C29.342 5.22064 29.5 5.60218 29.5 6Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "caret-double-left": {
    xml: (
      <>
        <polyline
          points="200 208 120 128 200 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="120 208 40 128 120 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="136 48 216 128 136 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-line-left": {
    xml: (
      <>
        <polyline
          points="192 208 112 128 192 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="72"
          y1="48"
          x2="72"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "caret-line-right": {
    xml: (
      <>
        <polyline
          points="64 48 144 128 64 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="184"
          y1="48"
          x2="184"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
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
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "cellular-gateway": {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M22.5 3V7H27C27.663 7 28.2989 7.26339 28.7678 7.73223C29.2366 8.20107 29.5 8.83696 29.5 9.5V27.5C29.5 28.163 29.2366 28.7989 28.7678 29.2678C28.2989 29.7366 27.663 30 27 30H5C4.33696 30 3.70107 29.7366 3.23223 29.2678C2.76339 28.7989 2.5 28.163 2.5 27.5V9.5C2.5 8.83696 2.76339 8.20107 3.23223 7.73223C3.70107 7.26339 4.33696 7 5 7H9.5V3C9.5 2.60217 9.65809 2.22064 9.93939 1.93934C10.2207 1.65804 10.6022 1.5 11 1.5C11.3978 1.5 11.7794 1.65804 12.0607 1.93934C12.342 2.22064 12.5 2.60217 12.5 3V7H19.5V3C19.5 2.60217 19.6581 2.22064 19.9394 1.93934C20.2207 1.65804 20.6022 1.5 21 1.5C21.3979 1.5 21.7794 1.65804 22.0607 1.93934C22.342 2.22064 22.5 2.60217 22.5 3ZM5.5 27H26.5V10H5.5V27Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  certificate: {
    xml: (
      <>
        <line
          x1="72"
          y1="140"
          x2="116"
          y2="140"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="72"
          y1="100"
          x2="116"
          y2="100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="196"
          cy="128"
          r="44"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <polyline
          points="168 161.94 168 228 196 212 224 228 224 161.94"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M168,192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V94.06"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chart-bar": {
    xml: (
      <>
        <polyline
          points="48 208 48 136 96 136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="96 208 96 88 152 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="152 208 152 40 208 40 208 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="224"
          y1="208"
          x2="32"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="224 96 160 152 96 104 32 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chart-pie-slice": {
    xml: (
      <>
        <path
          d="M32.42,137q-.42-4.44-.42-9A95.93,95.93,0,0,1,88,40.74v65.41Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,128.42V32A96,96,0,1,1,45.22,176.64Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="100"
          x2="160"
          y2="100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="140"
          x2="160"
          y2="140"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M105.07,192l16,28a8,8,0,0,0,13.9,0l16-28H216a8,8,0,0,0,8-8V56a8,8,0,0,0-8-8H40a8,8,0,0,0-8,8V184a8,8,0,0,0,8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chat-dots": {
    xml: (
      <>
        <circle cx="104" cy="128" r="16" fill="currentColor"></circle>
        <circle cx="152" cy="128" r="16" fill="currentColor"></circle>
        <path
          d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "chat-text": {
    xml: (
      <>
        <path
          d="M45.15,230.11A8,8,0,0,1,32,224V64a8,8,0,0,1,8-8H216a8,8,0,0,1,8,8V192a8,8,0,0,1-8,8H80Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="96"
          y1="108"
          x2="160"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="148"
          x2="160"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "check-circle": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <polyline
          points="88 136 112 160 168 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  check: {
    xml: (
      <>
        <polyline
          points="40 144 96 200 224 72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  checks: {
    xml: (
      <>
        <polyline
          points="16 130.29 54.4 168 144 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="134.11 152 150.4 168 240 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></circle>
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="44.84"
          x2="176"
          y2="211.16"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
        <polyline
          points="172 104 113.3 160 84 132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  circle: {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  circuitry: {
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
          strokeWidth="24"
        ></rect>
        <circle cx="168" cy="104" r="24"></circle>
        <circle cx="88" cy="168" r="24"></circle>
        <polyline
          points="152 216 152 160 88 96 88 40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="136 40 136 72 168 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="88"
          y1="168"
          x2="88"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clipboard-text": {
    xml: (
      <>
        <line
          x1="96"
          y1="164"
          x2="160"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="124"
          x2="160"
          y2="124"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M160,40h40a8,8,0,0,1,8,8V216a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M88,72V64a40,40,0,0,1,80,0v8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clock-clockwise": {
    xml: (
      <>
        <polyline
          points="128 80 128 128 168 152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="184 104 224 104 224 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M188.4,192a88,88,0,1,1,1.83-126.23C202,77.69,211.72,88.93,224,104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "clock-counter-clockwise": {
    xml: (
      <>
        <polyline
          points="128 80 128 128 168 152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="72 104 32 104 32 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M67.6,192A88,88,0,1,0,65.77,65.77C54,77.69,44.28,88.93,32,104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cloud: {
    xml: (
      <>
        <path
          d="M80,128a80,80,0,1,1,80,80H72A56,56,0,1,1,85.92,97.74"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "code-block": {
    xml: (
      <>
        <polyline
          points="60 32 28 64 60 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="108 32 140 64 108 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M180,48h20a8,8,0,0,1,8,8V200a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V140"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polyline>
        <polyline
          points="192 88 240 128 192 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="160"
          y1="40"
          x2="96"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "computer-tower": {
    xml: (
      <>
        <rect
          x="32"
          y="56"
          width="192"
          height="144"
          rx="8"
          transform="translate(256 0) rotate(90)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="160"
          y1="76"
          x2="96"
          y2="76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="160"
          y1="116"
          x2="96"
          y2="116"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle cx="128" cy="184" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "corners-in": {
    xml: (
      <>
        <polyline
          points="208 96 160 96 160 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="48 160 96 160 96 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="160 208 160 160 208 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="96 48 96 96 48 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "corners-out": {
    xml: (
      <>
        <polyline
          points="168 48 208 48 208 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="88 208 48 208 48 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="208 168 208 208 168 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="48 88 48 48 88 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <line
          x1="208"
          y1="104"
          x2="232"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="208"
          y1="152"
          x2="232"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="24"
          y1="104"
          x2="48"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="24"
          y1="152"
          x2="48"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="208"
          x2="152"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="208"
          x2="104"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="24"
          x2="152"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="24"
          x2="104"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="128"
          y1="32"
          x2="128"
          y2="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="184"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="72"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="184"
          y1="128"
          x2="224"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  crosshair: {
    xml: (
      <>
        <line
          x1="128"
          y1="232"
          x2="128"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="24"
          x2="128"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="24"
          y1="128"
          x2="56"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="232"
          y1="128"
          x2="200"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cube: {
    xml: (
      <>
        <polyline
          points="32.7 76.92 128 129.08 223.3 76.92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M131.84,25l88,48.18a8,8,0,0,1,4.16,7v95.64a8,8,0,0,1-4.16,7l-88,48.18a8,8,0,0,1-7.68,0l-88-48.18a8,8,0,0,1-4.16-7V80.18a8,8,0,0,1,4.16-7l88-48.18A8,8,0,0,1,131.84,25Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="128"
          y1="129.09"
          x2="128"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  cursor: {
    xml: (
      <>
        <path
          d="M164.35,136.35a8,8,0,0,1,2.46-13l44.41-15.82a8,8,0,0,0-.71-14.85L50.44,40.41a8,8,0,0,0-10,10L92.68,210.51a8,8,0,0,0,14.85.71l15.82-44.41a8,8,0,0,1,13-2.46l51.31,51.31a8,8,0,0,0,11.31,0L215.66,199a8,8,0,0,0,0-11.31Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "device-mobile-speaker": {
    xml: (
      <>
        <rect
          x="24"
          y="64"
          width="208"
          height="128"
          rx="16"
          transform="translate(256) rotate(90)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="96"
          y1="56"
          x2="160"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "device-mobile": {
    xml: (
      <>
        <rect
          x="64"
          y="24"
          width="128"
          height="208"
          rx="16"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="64"
          y1="64"
          x2="192"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="64"
          y1="192"
          x2="192"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "device-tablet-speaker": {
    xml: (
      <>
        <rect
          x="32"
          y="48"
          width="192"
          height="160"
          rx="16"
          transform="translate(256) rotate(90)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="96"
          y1="72"
          x2="160"
          y2="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
            className="a-icon--disposition-main-clean"
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
      xmlns: "http://www.w3.org/2000/svg"
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
                  className="a-icon--disposition-main-stroke-common"
                ></path>
                <path
                  d="M14,6.85072893 L14,7.15010811 C14,9.52827176 12.8140641,11.6294452 11.0013298,12.8944911 C9.18637251,11.6302187 8,9.52870948 8,7.15010811 L8,6.85072893 C8,4.47212756 9.18637251,2.37061834 10.9996713,1.10564753 C12.8140641,2.37139181 14,4.47256529 14,6.85072893 Z"
                  fill="#81CDF0"
                  className="a-icon--disposition-main-common"
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
      xmlns: "http://www.w3.org/2000/svg"
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
          className="a-icon--disposition-main-malicious"
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
          className="a-icon--disposition-main-suspicious"
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
                  className="a-icon--disposition-main-unknown"
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
      xmlns: "http://www.w3.org/2000/svg"
    }
  },
  dot: {
    xml: (
      <>
        <circle cx="128" cy="128" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-nine": {
    xml: (
      <>
        <circle cx="60" cy="60" r="16"></circle>
        <circle cx="128" cy="60" r="16"></circle>
        <circle cx="196" cy="60" r="16"></circle>
        <circle cx="60" cy="128" r="16"></circle>
        <circle cx="128" cy="128" r="16"></circle>
        <circle cx="196" cy="128" r="16"></circle>
        <circle cx="60" cy="196" r="16"></circle>
        <circle cx="128" cy="196" r="16"></circle>
        <circle cx="196" cy="196" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-six-vertical": {
    xml: (
      <>
        <circle cx="92" cy="60" r="16"></circle>
        <circle cx="164" cy="60" r="16"></circle>
        <circle cx="92" cy="128" r="16"></circle>
        <circle cx="164" cy="128" r="16"></circle>
        <circle cx="92" cy="196" r="16"></circle>
        <circle cx="164" cy="196" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-six": {
    xml: (
      <>
        <circle cx="60" cy="92" r="16"></circle>
        <circle cx="128" cy="92" r="16"></circle>
        <circle cx="196" cy="92" r="16"></circle>
        <circle cx="60" cy="164" r="16"></circle>
        <circle cx="128" cy="164" r="16"></circle>
        <circle cx="196" cy="164" r="16"></circle>
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
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="128"
          cy="48"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="128"
          cy="208"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="208"
          cy="128"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="48"
          cy="128"
          r="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-three-vertical": {
    xml: (
      <>
        <circle cx="128" cy="60" r="16"></circle>
        <circle cx="128" cy="128" r="16"></circle>
        <circle cx="128" cy="196" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "dots-three": {
    xml: (
      <>
        <circle cx="128" cy="128" r="16"></circle>
        <circle cx="60" cy="128" r="16"></circle>
        <circle cx="196" cy="128" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "download-simple": {
    xml: (
      <>
        <line
          x1="128"
          y1="144"
          x2="128"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="216 144 216 208 40 208 40 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="168 104 128 144 88 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "envelope-open": {
    xml: (
      <>
        <path
          d="M224,96V200a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V96l96-64Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="110.55"
          y1="152"
          x2="34.47"
          y2="205.74"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="221.53"
          y1="205.74"
          x2="145.45"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="224 96 145.46 152 110.55 152 32 96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "envelope-simple": {
    xml: (
      <>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <polyline
          points="224 56 128 144 32 56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  export: {
    xml: (
      <>
        <path
          d="M180,104h20a8,8,0,0,1,8,8v96a8,8,0,0,1-8,8H56a8,8,0,0,1-8-8V112a8,8,0,0,1,8-8H76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <polyline
          points="88 64 128 24 168 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="128"
          y1="24"
          x2="128"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
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
          strokeWidth="24"
        ></line>
        <path
          d="M74,68.6C33.23,89.24,16,128,16,128s32,72,112,72a118.05,118.05,0,0,0,54-12.6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M214.41,163.59C232.12,145.73,240,128,240,128S208,56,128,56c-3.76,0-7.42.16-11,.46"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
        <circle
          cx="128"
          cy="128"
          r="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-code": {
    xml: (
      <>
        <polyline
          points="148 128 172 152 148 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="108 128 84 152 108 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M200,224a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8V216a8,8,0,0,0,8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-html": {
    xml: (
      <>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="144 208 144 160 166 192 188 160 188 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="220 160 220 208 244 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M48,116V40a8,8,0,0,1,8-8h96l56,56v28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="20"
          y1="160"
          x2="20"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="56"
          y1="160"
          x2="56"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="100"
          y1="160"
          x2="100"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="116"
          y1="160"
          x2="84"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="56"
          y1="184"
          x2="20"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-image": {
    xml: (
      <>
        <polygon
          points="62.32 164.39 24 224 152 224 104 152 79.03 189.46 62.32 164.39"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M196,224h4a8,8,0,0,0,8-8V88L152,32H56a8,8,0,0,0-8,8v84"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "file-pdf": {
    xml: (
      <>
        <polyline
          points="220 152 188 152 188 208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="212"
          y1="184"
          x2="188"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M44,192H60a20,20,0,0,0,0-40H44v56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M112,152v56h16a28,28,0,0,0,0-56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M48,108V40a8,8,0,0,1,8-8h96l56,56v20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
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
          strokeWidth="24"
        ></path>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="104"
          y1="152"
          x2="152"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="128"
          x2="128"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <circle
          cx="124"
          cy="148"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="141"
          y1="165"
          x2="159.8"
          y2="183.8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
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
          strokeWidth="24"
        ></path>
        <polyline
          points="148 32 148 92 208 92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="96"
          y1="132"
          x2="160"
          y2="132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="172"
          x2="160"
          y2="172"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  fingerprint: {
    xml: (
      <>
        <path
          d="M108,128a20,20,0,0,1,40,0,211.13,211.13,0,0,1-25,99.88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,68a60,60,0,0,1,60,60q0,12.13-1.12,24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M51.35,192.22A131.39,131.39,0,0,0,68,128,59.85,59.85,0,0,1,88,83.29"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M103.32,168A171,171,0,0,1,83,217.33"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M179.8,192a250.79,250.79,0,0,1-8.4,26.12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M22.28,160A92,92,0,0,0,28,128h0a100,100,0,0,1,200,0h0a293.41,293.41,0,0,1-7,64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "floppy-disk": {
    xml: (
      <>
        <path
          d="M216,83.31V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8H172.69a8,8,0,0,1,5.65,2.34l35.32,35.32A8,8,0,0,1,216,83.31Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M80,216V156a8,8,0,0,1,8-8h80a8,8,0,0,1,8,8v60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="152"
          y1="84"
          x2="96"
          y2="84"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "folder-open": {
    xml: (
      <>
        <path
          d="M32,208V64a8,8,0,0,1,8-8H93.33a8,8,0,0,1,4.8,1.6L128,80h72a8,8,0,0,1,8,8v28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M32,208l30.18-86.53A8,8,0,0,1,69.77,116H232a8,8,0,0,1,7.59,10.53L211.09,208Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  folder: {
    xml: (
      <>
        <path
          d="M216.89,208H39.38A7.4,7.4,0,0,1,32,200.62V80H216a8,8,0,0,1,8,8V200.89A7.11,7.11,0,0,1,216.89,208Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M32,80V52a8,8,0,0,1,8-8H92.41a8,8,0,0,1,6,2.69L128,80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="136"
          x2="192"
          y2="136"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="24"
          y1="88"
          x2="232"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="184"
          x2="152"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "gear-six": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M130.05,206.11c-1.34,0-2.69,0-4,0L94,224a104.61,104.61,0,0,1-34.11-19.2l-.12-36c-.71-1.12-1.38-2.25-2-3.41L25.9,147.24a99.15,99.15,0,0,1,0-38.46l31.84-18.1c.65-1.15,1.32-2.29,2-3.41l.16-36A104.58,104.58,0,0,1,94,32l32,17.89c1.34,0,2.69,0,4,0L162,32a104.61,104.61,0,0,1,34.11,19.2l.12,36c.71,1.12,1.38,2.25,2,3.41l31.85,18.14a99.15,99.15,0,0,1,0,38.46l-31.84,18.1c-.65,1.15-1.32,2.29-2,3.41l-.16,36A104.58,104.58,0,0,1,162,224Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
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
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M41.43,178.09A99.14,99.14,0,0,1,31.36,153.8l16.78-21a81.59,81.59,0,0,1,0-9.64l-16.77-21a99.43,99.43,0,0,1,10.05-24.3l26.71-3a81,81,0,0,1,6.81-6.81l3-26.7A99.14,99.14,0,0,1,102.2,31.36l21,16.78a81.59,81.59,0,0,1,9.64,0l21-16.77a99.43,99.43,0,0,1,24.3,10.05l3,26.71a81,81,0,0,1,6.81,6.81l26.7,3a99.14,99.14,0,0,1,10.07,24.29l-16.78,21a81.59,81.59,0,0,1,0,9.64l16.77,21a99.43,99.43,0,0,1-10,24.3l-26.71,3a81,81,0,0,1-6.81,6.81l-3,26.7a99.14,99.14,0,0,1-24.29,10.07l-21-16.78a81.59,81.59,0,0,1-9.64,0l-21,16.77a99.43,99.43,0,0,1-24.3-10l-3-26.71a81,81,0,0,1-6.81-6.81Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "generic-client": {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.5 11.5C12.5 10.6716 13.1716 10 14 10H18C18.8284 10 19.5 10.6716 19.5 11.5C19.5 12.3284 18.8284 13 18 13H14C13.1716 13 12.5 12.3284 12.5 11.5Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 19V7C4 5.89543 4.89543 5 6 5H26C27.1046 5 28 5.89543 28 7V19H30C30.5523 19 31 19.4477 31 20V23C31 25.2091 29.2091 27 27 27H5C2.79086 27 1 25.2091 1 23V20C1 19.4477 1.44772 19 2 19H4ZM7 19V8H25V19H7ZM28 22H4V23C4 23.5523 4.44772 24 5 24H27C27.5523 24 28 23.5523 28 23V22Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "generic-device": {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M28 9H4V23H28V9ZM4 6C2.34315 6 1 7.34315 1 9V23C1 24.6569 2.34315 26 4 26H28C29.6569 26 31 24.6569 31 23V9C31 7.34315 29.6569 6 28 6H4Z"
        ></path>
        <path d="M25 16C25 17.1046 24.1046 18 23 18C21.8954 18 21 17.1046 21 16C21 14.8954 21.8954 14 23 14C24.1046 14 25 14.8954 25 16Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "git-branch": {
    xml: (
      <>
        <path
          d="M80,168V144a16,16,0,0,1,16-16h88a16,16,0,0,0,16-16V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="80"
          y1="88"
          x2="80"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="80"
          cy="64"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="200"
          cy="64"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="80"
          cy="192"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "git-fork": {
    xml: (
      <>
        <path
          d="M64,88v24a16,16,0,0,0,16,16h96a16,16,0,0,0,16-16V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="128"
          y1="128"
          x2="128"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="64"
          cy="64"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="128"
          cy="192"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle
          cx="192"
          cy="64"
          r="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "github-logo": {
    xml: (
      <>
        <path
          d="M119.83,56A52,52,0,0,0,76,32a51.92,51.92,0,0,0-3.49,44.7A49.28,49.28,0,0,0,64,104v8a48,48,0,0,0,48,48h48a48,48,0,0,0,48-48v-8a49.28,49.28,0,0,0-8.51-27.3A51.92,51.92,0,0,0,196,32a52,52,0,0,0-43.83,24Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M104,232V192a32,32,0,0,1,32-32h0a32,32,0,0,1,32,32v40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M104,208H76a32,32,0,0,1-32-32,32,32,0,0,0-32-32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "globe-simple": {
    xml: (
      <>
        <line
          x1="32"
          y1="128"
          x2="224"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M168,128c0,64-40,96-40,96s-40-32-40-96,40-96,40-96S168,64,168,128Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "globe-stand": {
    xml: (
      <>
        <circle
          cx="136"
          cy="104"
          r="60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="104"
          y1="240"
          x2="168"
          y2="240"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="136"
          y1="204"
          x2="136"
          y2="240"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M204,177.32A100,100,0,0,1,62.68,36"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
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
          strokeWidth="24"
        ></rect>
        <circle cx="180" cy="128" r="16" fill="currentColor"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "hard-drives": {
    xml: (
      <>
        <rect
          x="40"
          y="48"
          width="176"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="216"
          y1="128"
          x2="40"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle cx="176" cy="88" r="16" fill="currentColor"></circle>
        <circle cx="176" cy="168" r="16" fill="currentColor"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  hash: {
    xml: (
      <>
        <line
          x1="48"
          y1="96"
          x2="224"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="40"
          x2="144"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="112"
          y1="40"
          x2="80"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="160"
          x2="208"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "hourglass-high": {
    xml: (
      <>
        <path
          d="M128,128,67.2,82.4A8,8,0,0,1,64,76V40a8,8,0,0,1,8-8H184a8,8,0,0,1,8,8V75.64A8,8,0,0,1,188.82,82L128,128h0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,128,67.2,173.6A8,8,0,0,0,64,180v36a8,8,0,0,0,8,8H184a8,8,0,0,0,8-8V180.36a8,8,0,0,0-3.18-6.38L128,128h0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="64"
          y1="72"
          x2="192"
          y2="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  house: {
    xml: (
      <>
        <path
          d="M104,216V152h48v64h64V120a8,8,0,0,0-2.34-5.66l-80-80a8,8,0,0,0-11.32,0l-80,80A8,8,0,0,0,40,120v96Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <circle cx="160" cy="96" r="16" fill="currentColor"></circle>
        <path
          d="M147.31,164,173,138.34a8,8,0,0,1,11.31,0L224,178.06"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M32,168.69l54.34-54.35a8,8,0,0,1,11.32,0L191.31,208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  information: {
    xml: (
      <>
        <circle cx="124" cy="84" r="16"></circle>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M120,124a8,8,0,0,1,8,8v36a8,8,0,0,0,8,8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  leaf: {
    xml: (
      <>
        <path
          d="M63.81,192.19c-47.89-79.81,16-159.62,151.64-151.64C223.43,176.23,143.62,240.08,63.81,192.19Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="160"
          y1="96"
          x2="40"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  lightning: {
    xml: (
      <>
        <polygon
          points="160 16 148 96 208 120 96 240 108 160 48 136 160 16"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  link: {
    xml: (
      <>
        <path
          d="M108.71,197.23l-5.11,5.11a46.63,46.63,0,0,1-66-.05h0a46.63,46.63,0,0,1,.06-65.89L72.4,101.66a46.62,46.62,0,0,1,65.94,0h0A46.34,46.34,0,0,1,150.78,124"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M147.29,58.77l5.11-5.11a46.62,46.62,0,0,1,65.94,0h0a46.62,46.62,0,0,1,0,65.94L193.94,144,183.6,154.34a46.63,46.63,0,0,1-66-.05h0A46.46,46.46,0,0,1,105.22,132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "linux-logo": {
    xml: (
      <>
        <path
          d="M32,208S64,168,64,88a64,64,0,0,1,128,0c0,80,32,120,32,120"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M97.46,208a44.86,44.86,0,0,1,61.08,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle cx="104" cy="104" r="16"></circle>
        <circle cx="152" cy="104" r="16"></circle>
        <polyline
          points="156 144 128 156 100 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle cx="44" cy="128" r="16"></circle>
        <circle cx="44" cy="64" r="16"></circle>
        <circle cx="44" cy="192" r="16"></circle>
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
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="40 64 56 80 88 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="40 128 56 144 88 112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="40 192 56 208 88 176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="56"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="128"
          x2="56"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="56"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "list-numbers": {
    xml: (
      <>
        <line
          x1="116"
          y1="128"
          x2="216"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="116"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="116"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="56 104 56 40 40 48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M72,208H40l28.68-38.37a15.69,15.69,0,0,0-3.24-22.41,16.78,16.78,0,0,0-23.06,3.15,15.85,15.85,0,0,0-2.38,4.3"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="192"
          x2="216"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <path
          d="M88,88V56a40,40,0,0,1,40-40c19.35,0,36.29,13.74,40,32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <circle cx="128" cy="152" r="16" fill="currentColor"></circle>
        <path
          d="M88,88V56a40,40,0,0,1,80,0V88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "magic-wand": {
    xml: (
      <>
        <rect
          x="21.49"
          y="105.37"
          width="213.02"
          height="45.25"
          rx="8"
          transform="translate(-53.02 128) rotate(-45)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="216"
          y1="128"
          x2="216"
          y2="176"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="192"
          y1="152"
          x2="240"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="80"
          y1="40"
          x2="80"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="56"
          y1="64"
          x2="104"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="168"
          y1="184"
          x2="168"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="200"
          x2="184"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="144"
          y1="80"
          x2="176"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  magnet: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 21.0002L4.5 15.1253C4.5 8.8144 9.55221 3.54417 15.9141 3.50032C17.4314 3.48899 18.936 3.77805 20.3411 4.35083C21.7463 4.92366 23.0243 5.76894 24.1013 6.83795C25.1783 7.90696 26.0331 9.17856 26.6164 10.5795C27.1997 11.9803 27.5 13.4828 27.5 15.0003L27.5 26.0003C27.5 26.6633 27.2366 27.2992 26.7678 27.7681C26.2989 28.2369 25.663 28.5003 25 28.5003L20 28.5003C19.337 28.5003 18.7011 28.2369 18.2322 27.768C17.7634 27.2992 17.5 26.6633 17.5 26.0003L17.5 15.0003C17.5 14.6025 17.342 14.2209 17.0607 13.9396C16.7794 13.6583 16.3978 13.5003 16 13.5003C15.6022 13.5003 15.2206 13.6583 14.9393 13.9396C14.658 14.2209 14.5 14.6025 14.5 15.0003L14.5 26.0003C14.5 26.6633 14.2366 27.2992 13.7678 27.768C13.2989 28.2369 12.663 28.5003 12 28.5003L7 28.5003C6.33696 28.5003 5.70107 28.2369 5.23223 27.768C4.76338 27.2992 4.5 26.6633 4.5 26.0003L4.5 21.0002ZM15.9363 6.50024C17.0578 6.49183 18.17 6.70548 19.2086 7.12888C20.2473 7.55227 21.1919 8.17705 21.9879 8.96718C22.784 9.75732 23.4158 10.6972 23.8469 11.7326C24.2781 12.7681 24.5 13.8787 24.5 15.0003L24.5 19.5002L20.5 19.5002L20.5 15.0003C20.5 13.8068 20.0259 12.6622 19.182 11.8183C18.3381 10.9744 17.1935 10.5003 16 10.5003C14.8065 10.5003 13.6619 10.9744 12.818 11.8183C11.9741 12.6622 11.5 13.8068 11.5 15.0003L11.5 19.5002L7.5 19.5002L7.5 15.1253C7.5 10.4115 11.2726 6.53196 15.9352 6.50025L15.9363 6.50024ZM11.5 22.5002L11.5 25.5003L7.5 25.5003L7.5 22.5002L11.5 22.5002ZM20.5 22.5002L20.5 25.5003L24.5 25.5003L24.5 22.5002L20.5 22.5002Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "magnifying-glass-plus": {
    xml: (
      <>
        <line
          x1="80"
          y1="112"
          x2="144"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="168.57"
          y1="168.57"
          x2="224"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="112"
          y1="80"
          x2="112"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="112"
          cy="112"
          r="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "magnifying-glass": {
    xml: (
      <>
        <circle
          cx="112"
          cy="112"
          r="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="168.57"
          y1="168.57"
          x2="224"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "map-trifold": {
    xml: (
      <>
        <line
          x1="96"
          y1="184"
          x2="96"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="160"
          y1="72"
          x2="160"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polygon
          points="96 184 32 200 32 56 96 40 160 72 224 56 224 200 160 216 96 184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  minus: {
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
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "moon-stars": {
    xml: (
      <>
        <line
          x1="208"
          y1="120"
          x2="208"
          y2="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="232"
          y1="96"
          x2="184"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="160"
          y1="32"
          x2="160"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="48"
          x2="144"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M210.69,158.18A96.78,96.78,0,0,1,192,160,96.08,96.08,0,0,1,97.82,45.31,88,88,0,1,0,210.69,158.18Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  moon: {
    xml: (
      <>
        <path
          d="M108.11,28.11A96.09,96.09,0,0,0,227.89,147.89,96,96,0,1,1,108.11,28.11Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "navigation-arrow": {
    xml: (
      <>
        <path
          d="M152,152,234.35,129a8,8,0,0,0,.27-15.21l-176-65.28A8,8,0,0,0,48.46,58.63l65.28,176a8,8,0,0,0,15.21-.27Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></polygon>
        <line
          x1="164"
          y1="60"
          x2="196"
          y2="92"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M216,140.57V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V48a8,8,0,0,1,8-8h67.43"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></rect>
        <line
          x1="120"
          y1="108"
          x2="176"
          y2="108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="120"
          y1="148"
          x2="176"
          y2="148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="80"
          y1="40"
          x2="80"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="124"
          x2="160"
          y2="124"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="164"
          x2="160"
          y2="164"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="84"
          y1="24"
          x2="84"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="24"
          x2="128"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="172"
          y1="24"
          x2="172"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M48,40H208a0,0,0,0,1,0,0V200a24,24,0,0,1-24,24H72a24,24,0,0,1-24-24V40A0,0,0,0,1,48,40Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  centos: {
    xml: (
      <>
        <rect width="448" height="512" fill="none"></rect>
        <path d="M289.6 97.5l31.6 31.7-76.3 76.5V97.5zm-162.4 31.7l76.3 76.5V97.5h-44.7zm41.5-41.6h44.7v127.9l10.8 10.8 10.8-10.8V87.6h44.7L224.2 32zm26.2 168.1l-10.8-10.8H55.5v-44.8L0 255.7l55.5 55.6v-44.8h128.6l10.8-10.8zm79.3-20.7h107.9v-44.8l-31.6-31.7zm173.3 20.7L392 200.1v44.8H264.3l-10.8 10.8 10.8 10.8H392v44.8l55.5-55.6zM65.4 176.2l32.5-31.7 90.3 90.5h15.3v-15.3l-90.3-90.5 31.6-31.7H65.4zm316.7-78.7h-78.5l31.6 31.7-90.3 90.5V235h15.3l90.3-90.5 31.6 31.7zM203.5 413.9V305.8l-76.3 76.5 31.6 31.7h44.7zM65.4 235h108.8l-76.3-76.5-32.5 31.7zm316.7 100.2l-31.6 31.7-90.3-90.5h-15.3v15.3l90.3 90.5-31.6 31.7h78.5zm0-58.8H274.2l76.3 76.5 31.6-31.7zm-60.9 105.8l-76.3-76.5v108.1h44.7zM97.9 352.9l76.3-76.5H65.4v44.8zm181.8 70.9H235V295.9l-10.8-10.8-10.8 10.8v127.9h-44.7l55.5 55.6zm-166.5-41.6l90.3-90.5v-15.3h-15.3l-90.3 90.5-32.5-31.7v78.7h79.4z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 448 512"}
  },
  oracle: {
    xml: (
      <>
        <path
          stroke="none"
          fillRule="evenodd"
          d="M7.957359,18.9123664 C4.11670252,18.9123664 1,15.803458 1,11.9617373 C1,8.12000773 4.11670252,5 7.957359,5 L16.0437948,5 C19.8855156,5 23,8.12000773 23,11.9617373 C23,15.803458 19.8855156,18.9123664 16.0437948,18.9123664 L7.957359,18.9123664 L7.957359,18.9123664Z M15.8639176,16.4585488 C18.352201,16.4585488 20.3674397,14.448858 20.3674397,11.9617373 C20.3674397,9.47460595 18.352201,7.45381934 15.8639176,7.45381934 L8.1360824,7.45381934 C5.64895285,7.45381934 3.63255855,9.47460595 3.63255855,11.9617373 C3.63255855,14.448858 5.64895285,16.4585488 8.1360824,16.4585488 L15.8639176,16.4585488 L15.8639176,16.4585488Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24"}
  },
  redhat: {
    xml: (
      <>
        <path
          d="M13.007 12.07c1.182 0 2.893-.253 2.893-1.699a1.398 1.398 0 00-.028-.333l-.705-3.145c-.162-.692-.305-1.006-1.487-1.614C12.764 4.797 10.764 4 10.173 4c-.549 0-.71.73-1.366.73-.632 0-1.1-.545-1.693-.545-.567 0-.936.398-1.221 1.215 0 0-.795 2.306-.899 2.64a.642.642 0 00-.019.19c0 .896 3.433 3.835 8.032 3.835m3.076-1.107c.163.797.163.88.163.985 0 1.361-1.488 2.117-3.445 2.117-4.421.002-8.295-2.661-8.295-4.421 0-.245.048-.488.142-.714C3.061 9.007 1 9.3 1 11.167 1 14.227 8.054 18 13.638 18 17.92 18 19 16.009 19 14.437c0-1.237-1.04-2.64-2.915-3.479"
          fillRule="nonzero"
        ></path>
      </>
    ),
    props: {viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg"}
  },
  ubuntu: {
    xml: (
      <>
        <path
          d="M15.737 5.118a1.34 1.34 0 00-1.32-1.344 1.334 1.334 0 00-1.352 1.333 1.336 1.336 0 002.672.01m0 11.771c0-.735-.6-1.335-1.333-1.336a1.337 1.337 0 101.333 1.337m-12.87-5.895a1.334 1.334 0 001.284 1.34 1.335 1.335 0 001.39-1.295c.023-.722-.558-1.35-1.27-1.375-.772-.027-1.379.548-1.404 1.33m5.564-5.193l.925 1.656c1.233-.518 2.44-.498 3.596.172 1.153.67 1.778 1.703 1.939 3.026l1.89-.028c0-.042.002-.076 0-.11a5.825 5.825 0 00-1.665-3.606c-.037-.036-.067-.039-.117-.027-.164.038-.33.086-.497.095a1.859 1.859 0 01-1.934-1.495c-.012-.056-.036-.082-.091-.096A5.801 5.801 0 008.43 5.8m.001 10.396l.05.026A5.739 5.739 0 0011 16.8c.492.002.977-.062 1.454-.184.074-.019.104-.049.12-.124.082-.395.271-.734.577-.998.545-.471 1.168-.593 1.855-.379.048.015.077.007.109-.029.085-.094.176-.184.26-.28a5.766 5.766 0 001.374-3.028c.018-.133.027-.267.041-.407-.642-.01-1.27-.02-1.899-.028-.16 1.325-.786 2.357-1.94 3.026-1.158.671-2.367.69-3.595.172l-.923 1.655M7.787 6.174c-.03.02-.055.034-.077.05-1.147.81-1.918 1.885-2.301 3.237-.016.056-.016.093.033.135.846.73.846 2.072 0 2.806-.044.039-.051.072-.036.128a5.775 5.775 0 001.856 2.901c.164.14.34.265.52.403l.977-1.64C7.692 13.388 7.11 12.335 7.11 11c0-1.337.585-2.392 1.65-3.197l-.972-1.629M10.567 1h.877c.04.005.082.013.123.015a9.869 9.869 0 012.014.32 10.007 10.007 0 017.348 10.854 9.827 9.827 0 01-1.697 4.487 9.976 9.976 0 01-10.016 4.163c-1.825-.329-3.433-1.117-4.827-2.34a9.992 9.992 0 01-3.21-9.364C1.603 6.943 2.64 5.088 4.293 3.59 5.93 2.105 7.86 1.261 10.06 1.044c.169-.016.337-.03.506-.044"
          fillRule="evenodd"
        ></path>
      </>
    ),
    props: {viewBox: "0 0 22 22", xmlns: "http://www.w3.org/2000/svg"}
  },
  "web-security-appliance": {
    xml: (
      <>
        <g fillRule="evenodd">
          <path
            fill-opacity="0.3"
            d="m 4.9995113,6.9998003 5.9979997,-2.5 6.002,2.5 V 14.9998 l -6.002,2.5 -5.9979997,-2.5 z"
            id="web-security-appliance-nestedId-path1"
          ></path>
          <path d="M 11.648,11 20.286,5.105 V 16.896 L 11.648,11.001 Z M 11.354,21.069 V 11.67 l 8.572,5.838 -8.579,3.607 c 0,-0.018 0.007,-0.03 0.007,-0.047 z m -0.708,-9.398 v 9.445 L 2.074,17.51 10.646,11.672 Z m 0,-10.739 V 10.33 L 2.074,4.493 10.653,0.885 c 0,0 -0.007,0.029 -0.007,0.047 z m 0.701,-0.047 8.58,3.608 -8.573,5.837 V 0.932 c 0,0 -0.007,-0.029 -0.007,-0.047 z M 1.714,5.134 10.37,11 1.713,16.895 V 5.134 Z M 20.998,17.6 V 4.4 a 0.178,0.178 0 0 0 0,-0.047 A 0.34,0.34 0 0 0 20.79,4.075 L 11.138,0.03 a 0.326,0.326 0 0 0 -0.276,0 L 1.218,4.085 a 0.346,0.346 0 0 0 -0.217,0.28 0.138,0.138 0 0 0 0,0.036 v 13.2 a 0.173,0.173 0 0 0 0,0.046 c 0.015,0.125 0.095,0.231 0.21,0.28 l 9.651,4.044 c 0.088,0.039 0.188,0.039 0.276,0 l 9.644,-4.056 a 0.343,0.343 0 0 0 0.21,-0.278 0.164,0.164 0 0 0 0.006,-0.037 z"></path>
        </g>
      </>
    ),
    props: {viewBox: "0 0 24 24"}
  },
  "paper-plane-tilt": {
    xml: (
      <>
        <line
          x1="108"
          y1="148"
          x2="160"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M223.69,42.18a8,8,0,0,0-9.87-9.87l-192,58.22a8,8,0,0,0-1.25,14.93L108,148l42.54,87.42a8,8,0,0,0,14.93-1.25Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  paperclip: {
    xml: (
      <>
        <path
          d="M96,176l95.8-92.2a28,28,0,0,0-39.59-39.6L54.06,142.06a48,48,0,0,0,67.88,67.88L204,128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  passthrough: {
    xml: (
      <>
        <path d="M20.0607 3.93934C19.4749 3.35355 18.5251 3.35355 17.9393 3.93934C17.3536 4.52513 17.3536 5.47487 17.9393 6.06066L23.8787 12H4.5C3.67157 12 3 12.6716 3 13.5C3 14.3284 3.67157 15 4.5 15H26.8964C28.4555 15 29.2363 13.115 28.1339 12.0126L20.0607 3.93934Z"></path>
        <path d="M5.10361 17C3.54453 17 2.76373 18.885 3.86617 19.9874L11.9394 28.0607C12.5252 28.6464 13.4749 28.6464 14.0607 28.0607C14.6465 27.4749 14.6465 26.5251 14.0607 25.9393L8.12137 20H27.5001C28.3285 20 29.0001 19.3284 29.0001 18.5C29.0001 17.6716 28.3285 17 27.5001 17H5.10361Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  pause: {
    xml: (
      <>
        <rect
          x="152"
          y="40"
          width="56"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <rect
          x="48"
          y="40"
          width="56"
          height="176"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "pencil-simple": {
    xml: (
      <>
        <path
          d="M92.69,216H48a8,8,0,0,1-8-8V163.31a8,8,0,0,1,2.34-5.65L165.66,34.34a8,8,0,0,1,11.31,0L221.66,79a8,8,0,0,1,0,11.31L98.34,213.66A8,8,0,0,1,92.69,216Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="136"
          y1="64"
          x2="192"
          y2="120"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  placeholder: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 3.5C4.61929 3.5 3.5 4.61929 3.5 6V26C3.5 27.3807 4.61929 28.5 6 28.5H26C27.3807 28.5 28.5 27.3807 28.5 26V6C28.5 4.61929 27.3807 3.5 26 3.5H6ZM6.5 13.4788V6.5H13.4788L6.5 13.4788ZM6.5 23.3782L23.3782 6.5H17.7203C17.7091 6.51198 17.6976 6.52382 17.6859 6.53551L6.5 17.7214V23.3782ZM25.5 8.62085L8.62085 25.5H14.2779L25.464 14.3139C25.4759 14.302 25.4879 14.2904 25.5 14.279V8.62085ZM25.5 25.5H18.5205L25.5 18.5205V25.5Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "play-circle": {
    xml: (
      <>
        <path d="M170.83,118.13l-52-36A12,12,0,0,0,100,92v72a12,12,0,0,0,18.83,9.87l52-36a12,12,0,0,0,0-19.74Z"></path>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  play: {
    xml: (
      <>
        <path
          d="M72,39.88V216.12a8,8,0,0,0,12.15,6.69l144.08-88.12a7.82,7.82,0,0,0,0-13.38L84.15,33.19A8,8,0,0,0,72,39.88Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "plug-small": {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.5 2.49609C9.04416 2.49609 3 8.54025 3 15.9961C3 23.4519 9.04416 29.4961 16.5 29.4961C23.9558 29.4961 30 23.4519 30 15.9961C30 8.54025 23.9558 2.49609 16.5 2.49609ZM6 15.9961C6 10.1971 10.701 5.49609 16.5 5.49609C22.299 5.49609 27 10.1971 27 15.9961C27 21.2497 23.1416 25.6022 18.1039 26.3744V23.7267C19.9682 23.0677 21.3039 21.2898 21.3039 19.1998V15.3998C21.3039 14.8475 20.8562 14.3998 20.3039 14.3998H19.7039V12.2C19.7039 11.6477 19.2562 11.2 18.7039 11.2C18.1516 11.2 17.7039 11.6477 17.7039 12.2V14.3998H15.3039V12.2C15.3039 11.6477 14.8562 11.2 14.3039 11.2C13.7516 11.2 13.3039 11.6477 13.3039 12.2V14.3998H12.7039C12.1516 14.3998 11.7039 14.8475 11.7039 15.3998V19.1998C11.7039 21.2898 13.0396 23.0677 14.9039 23.7267V26.3756C9.8624 25.6067 6 21.2525 6 15.9961Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  plug: {
    xml: (
      <>
        <line
          x1="144"
          y1="64"
          x2="184"
          y2="24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="232"
          y1="72"
          x2="192"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="144"
          x2="112"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="86.75"
          y1="169.25"
          x2="32"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M212,132l-58.63,58.63a32,32,0,0,1-45.25,0L65.37,147.88a32,32,0,0,1,0-45.25L124,44"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "plugs-connected": {
    xml: (
      <>
        <rect
          x="63.03"
          y="88.4"
          width="129.94"
          height="79.2"
          rx="24"
          transform="translate(-53.02 128) rotate(-45)"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="88"
          y1="88"
          x2="168"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="232"
          y1="24"
          x2="173.94"
          y2="82.06"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="82.06"
          y1="173.94"
          x2="24"
          y2="232"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="28"
          x2="104"
          y2="44"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="28"
          y1="96"
          x2="44"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="212"
          y1="152"
          x2="228"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="212"
          x2="160"
          y2="228"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="40"
          x2="128"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M176,56c24.08,15.7,40,41.11,40,72a88,88,0,0,1-176,0c0-30.89,15.92-56.3,40-72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  printer: {
    xml: (
      <>
        <rect
          x="64"
          y="160"
          width="128"
          height="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <polyline
          points="64 80 64 40 192 40 192 80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M64,176H24V96c0-8.84,7.76-16,17.33-16H214.67C224.24,80,232,87.16,232,96v80H192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle cx="188" cy="120" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "prohibit-inset": {
    xml: (
      <>
        <line
          x1="96"
          y1="96"
          x2="160"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  prohibit: {
    xml: (
      <>
        <line
          x1="195.88"
          y1="195.88"
          x2="60.12"
          y2="60.12"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "puzzle-piece": {
    xml: (
      <>
        <path
          d="M64,216a8,8,0,0,1-8-8V165.31a28,28,0,1,1,0-50.62V72a8,8,0,0,1,8-8h46.69a28,28,0,1,1,50.61,0H208a8,8,0,0,1,8,8v42.69a28,28,0,1,0,0,50.62V208a8,8,0,0,1-8,8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
        <path
          d="M224,144H156a8,8,0,0,1-8-8V72a8,8,0,0,1,8-8h60a8,8,0,0,1,8,8v88a40,40,0,0,1-40,40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  rocket: {
    xml: (
      <>
        <line
          x1="144"
          y1="228"
          x2="112"
          y2="228"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle cx="128" cy="100" r="16"></circle>
        <path
          d="M94.81,192C37.52,95.32,103.87,32.53,123.09,17.68a8,8,0,0,1,9.82,0C152.13,32.53,218.48,95.32,161.19,192Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M183.84,110.88l30.31,36.36a8,8,0,0,1,1.66,6.86l-12.36,55.63a8,8,0,0,1-12.81,4.51L161.19,192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M72.16,110.88,41.85,147.24a8,8,0,0,0-1.66,6.86l12.36,55.63a8,8,0,0,0,12.81,4.51L94.81,192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  rss: {
    xml: (
      <>
        <path
          d="M56,136a64,64,0,0,1,64,64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M56,88A112,112,0,0,1,168,200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M56,40A160,160,0,0,1,216,200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle cx="60" cy="196" r="16"></circle>
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
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="216"
          x2="152"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="56"
          y1="88"
          x2="200"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M24,168c0,17.67,20,24,32,24s32-6.33,32-24L56,88Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M168,136c0,17.67,20,24,32,24s32-6.33,32-24L200,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "seal-question": {
    xml: (
      <>
        <path
          d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,144v-8c17.67,0,32-12.54,32-28s-14.33-28-32-28S96,92.54,96,108v4"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <circle cx="128" cy="180" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "seal-warning": {
    xml: (
      <>
        <path
          d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="128"
          y1="80"
          x2="128"
          y2="132"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle cx="128" cy="172" r="16"></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  seal: {
    xml: (
      <>
        <path
          d="M54.46,201.54c-9.2-9.2-3.1-28.53-7.78-39.85C41.82,150,24,140.5,24,128s17.82-22,22.68-33.69C51.36,83,45.26,63.66,54.46,54.46S83,51.36,94.31,46.68C106.05,41.82,115.5,24,128,24S150,41.82,161.69,46.68c11.32,4.68,30.65-1.42,39.85,7.78s3.1,28.53,7.78,39.85C214.18,106.05,232,115.5,232,128S214.18,150,209.32,161.69c-4.68,11.32,1.42,30.65-7.78,39.85s-28.53,3.1-39.85,7.78C150,214.18,140.5,232,128,232s-22-17.82-33.69-22.68C83,204.64,63.66,210.74,54.46,201.54Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y="92"
          width="124"
          height="124"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="160"
          y1="40"
          x2="144"
          y2="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="216"
          y1="112"
          x2="216"
          y2="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M200,40h8a8,8,0,0,1,8,8v8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M200,168h8a8,8,0,0,0,8-8v-8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M104,40H96a8,8,0,0,0-8,8v8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <line
          x1="112"
          y1="216"
          x2="144"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="216"
          y1="144"
          x2="216"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="112"
          x2="40"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M184,40h24a8,8,0,0,1,8,8V72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M184,216h24a8,8,0,0,0,8-8V184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M72,216H48a8,8,0,0,1-8-8V184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M72,40H48a8,8,0,0,0-8,8V72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  sensor: {
    xml: (
      <>
        <path d="M16.0002 10.5C14.9124 10.5 13.849 10.8225 12.9446 11.4269C12.0401 12.0312 11.3352 12.8902 10.9189 13.8952C10.5026 14.9002 10.3937 16.0061 10.6059 17.073C10.8181 18.1399 11.3419 19.1199 12.1111 19.8891C12.8803 20.6583 13.8603 21.1821 14.9272 21.3943C15.9941 21.6065 17.1 21.4976 18.105 21.0813C19.11 20.665 19.9689 19.9601 20.5733 19.0556C21.1776 18.1511 21.5002 17.0878 21.5002 16C21.4986 14.5418 20.9186 13.1438 19.8875 12.1127C18.8564 11.0816 17.4584 10.5016 16.0002 10.5ZM16.0002 18.5C15.5058 18.5 15.0224 18.3534 14.6113 18.0787C14.2002 17.8039 13.8797 17.4135 13.6905 16.9567C13.5013 16.4999 13.4518 15.9972 13.5482 15.5123C13.6447 15.0273 13.8828 14.5818 14.2324 14.2322C14.5821 13.8826 15.0275 13.6445 15.5125 13.548C15.9974 13.4516 16.5001 13.5011 16.9569 13.6903C17.4137 13.8795 17.8042 14.1999 18.0789 14.6111C18.3536 15.0222 18.5002 15.5055 18.5002 16C18.5002 16.663 18.2368 17.2989 17.768 17.7677C17.2991 18.2366 16.6633 18.5 16.0002 18.5ZM25.674 20.0875C25.223 21.1536 24.5987 22.1377 23.8265 23C23.5612 23.2965 23.1891 23.4756 22.7919 23.4977C22.3946 23.5199 22.0049 23.3833 21.7083 23.1181C21.4118 22.8529 21.2327 22.4807 21.2106 22.0835C21.1884 21.6863 21.325 21.2965 21.5902 21C22.8222 19.6259 23.5035 17.8454 23.5035 16C23.5035 14.1545 22.8222 12.374 21.5902 11C21.325 10.7034 21.1884 10.3137 21.2106 9.91645C21.2327 9.51922 21.4118 9.14707 21.7083 8.88185C22.0049 8.61664 22.3946 8.48008 22.7919 8.50224C23.1891 8.52439 23.5612 8.70343 23.8265 8.99998C25.1525 10.4836 26.0301 12.3132 26.3572 14.276C26.6843 16.2387 26.4473 18.2541 25.674 20.0875ZM10.4102 21C10.6754 21.2965 10.812 21.6863 10.7898 22.0835C10.7677 22.4807 10.5886 22.8529 10.2921 23.1181C9.99554 23.3833 9.60578 23.5199 9.20856 23.4977C8.81133 23.4756 8.43918 23.2965 8.17396 23C6.45058 21.0757 5.49763 18.5832 5.49763 16C5.49763 13.4167 6.45058 10.9243 8.17396 8.99998C8.43918 8.70343 8.81133 8.52439 9.20856 8.50224C9.60578 8.48008 9.99554 8.61664 10.2921 8.88185C10.5886 9.14707 10.7677 9.51922 10.7898 9.91645C10.812 10.3137 10.6754 10.7034 10.4102 11C9.17826 12.374 8.49696 14.1545 8.49696 16C8.49696 17.8454 9.17826 19.6259 10.4102 21ZM31.5002 16C31.5051 20.057 29.9144 23.9531 27.0715 26.8475C26.9356 26.9959 26.7713 27.1155 26.5882 27.1991C26.4052 27.2828 26.2072 27.3287 26.0061 27.3342C25.8049 27.3397 25.6047 27.3047 25.4174 27.2313C25.23 27.1578 25.0594 27.0474 24.9156 26.9066C24.7718 26.7659 24.6578 26.5976 24.5804 26.4119C24.5029 26.2261 24.4637 26.0267 24.4649 25.8255C24.4662 25.6242 24.5079 25.4253 24.5876 25.2406C24.6673 25.0558 24.7834 24.889 24.929 24.75C27.2229 22.4152 28.5082 19.2731 28.5082 16C28.5082 12.7269 27.2229 9.58472 24.929 7.24998C24.6505 6.96586 24.4963 6.58276 24.5003 6.18495C24.5042 5.78714 24.6661 5.4072 24.9502 5.12873C25.2343 4.85025 25.6174 4.69604 26.0152 4.70003C26.413 4.70401 26.793 4.86586 27.0715 5.14998C29.915 8.04492 31.5057 11.9421 31.5002 16ZM7.07146 24.75C7.34994 25.0341 7.50415 25.4172 7.50016 25.815C7.49618 26.2128 7.33432 26.5928 7.05021 26.8712C6.7661 27.1497 6.383 27.3039 5.98518 27.2999C5.58737 27.2959 5.20744 27.1341 4.92896 26.85C2.08718 23.9545 0.495117 20.0595 0.495117 16.0025C0.495117 11.9455 2.08718 8.05044 4.92896 5.15498C5.21129 4.89266 5.58375 4.74908 5.9691 4.75399C6.35444 4.75891 6.72312 4.91196 6.99866 5.18139C7.2742 5.45082 7.43547 5.81597 7.44903 6.20111C7.46258 6.58626 7.32738 6.96184 7.07146 7.24998C4.77755 9.58472 3.49223 12.7269 3.49223 16C3.49223 19.2731 4.77755 22.4152 7.07146 24.75Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "shield-check": {
    xml: (
      <>
        <path
          d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <polyline
          points="88 136 112 160 168 104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  shield: {
    xml: (
      <>
        <path
          d="M216,112V56a8,8,0,0,0-8-8H48a8,8,0,0,0-8,8v56c0,96,88,120,88,120S216,208,216,112Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sign-out": {
    xml: (
      <>
        <polyline
          points="112 40 48 40 48 216 112 216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="184 88 224 128 184 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="112"
          y1="128"
          x2="224"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  skull: {
    xml: (
      <>
        <circle cx="92" cy="132" r="24" fill="currentColor"></circle>
        <circle cx="164" cy="132" r="24" fill="currentColor"></circle>
        <line
          x1="108"
          y1="224"
          x2="108"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="148"
          y1="224"
          x2="148"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M188,216a8,8,0,0,1-8,8H76a8,8,0,0,1-8-8V187.82C46.05,171,32,145.05,32,116c0-50.81,43-92,96-92s96,41.19,96,92c0,29.05-14.05,55-36,71.82Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
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
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle cx="128" cy="180" r="16" fill="currentColor"></circle>
        <line
          x1="176"
          y1="100"
          x2="148"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="128"
          x2="148"
          y2="100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="108"
          y1="100"
          x2="80"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="108"
          y1="128"
          x2="80"
          y2="100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sort-ascending": {
    xml: (
      <>
        <line
          x1="48"
          y1="128"
          x2="116"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="64"
          x2="180"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="192"
          x2="100"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="184"
          y1="208"
          x2="184"
          y2="112"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="144 168 184 208 224 168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sort-descending": {
    xml: (
      <>
        <line
          x1="48"
          y1="128"
          x2="116"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="64"
          x2="100"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="48"
          y1="192"
          x2="180"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="184"
          y1="48"
          x2="184"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="144 88 184 48 224 88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
          strokeWidth="24"
        ></line>
        <line
          x1="195.88"
          y1="60.12"
          x2="173.25"
          y2="82.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="128"
          x2="192"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="195.88"
          y1="195.88"
          x2="173.25"
          y2="173.25"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="224"
          x2="128"
          y2="192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60.12"
          y1="195.88"
          x2="82.75"
          y2="173.25"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="128"
          x2="64"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60.12"
          y1="60.12"
          x2="82.75"
          y2="82.75"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "square-half": {
    xml: (
      <>
        <rect
          x="48"
          y="48"
          width="160"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="128"
          y1="48"
          x2="128"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="88"
          x2="208"
          y2="88"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="128"
          x2="208"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="168"
          x2="208"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "stack-port": {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 8.5C3.5 7.67157 4.17157 7 5 7H27C27.8284 7 28.5 7.67157 28.5 8.5C28.5 9.32843 27.8284 10 27 10H5C4.17157 10 3.5 9.32843 3.5 8.5Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.5 13.5C3.5 12.6716 4.17157 12 5 12H27C27.8284 12 28.5 12.6716 28.5 13.5C28.5 14.3284 27.8284 15 27 15H5C4.17157 15 3.5 14.3284 3.5 13.5Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.50098 18.5C3.50098 17.6716 4.17255 17 5.00098 17H27.0002C27.8286 17 28.5002 17.6716 28.5002 18.5C28.5002 19.3284 27.8286 20 27.0002 20H5.00098C4.17255 20 3.50098 19.3284 3.50098 18.5Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.50098 23.5C3.50098 22.6716 4.17255 22 5.00098 22H27.0002C27.8286 22 28.5002 22.6716 28.5002 23.5C28.5002 24.3284 27.8286 25 27.0002 25H5.00098C4.17255 25 3.50098 24.3284 3.50098 23.5Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "stack-simple": {
    xml: (
      <>
        <polygon
          points="16 100 128 164 240 100 128 36 16 100"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
        <polyline
          points="16 148 128 212 240 148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  info: {
    xml: (
      <>
        <path d="M15 2.5H5C4.33696 2.5 3.70107 2.76339 3.23223 3.23223C2.76339 3.70107 2.5 4.33696 2.5 5V15C2.5 15.663 2.76339 16.2989 3.23223 16.7678C3.70107 17.2366 4.33696 17.5 5 17.5H15C15.663 17.5 16.2989 17.2366 16.7678 16.7678C17.2366 16.2989 17.5 15.663 17.5 15V5C17.5 4.33696 17.2366 3.70107 16.7678 3.23223C16.2989 2.76339 15.663 2.5 15 2.5Z"></path>
        <path
          d="M8.4389 6.47917C8.4389 6.24842 8.51221 6.02286 8.64956 5.831C8.78691 5.63914 8.98214 5.48961 9.21054 5.40131C9.43895 5.31301 9.69029 5.2899 9.93276 5.33492C10.1752 5.37993 10.398 5.49105 10.5728 5.65421C10.7476 5.81737 10.8666 6.02525 10.9149 6.25156C10.9631 6.47787 10.9384 6.71245 10.8437 6.92563C10.7491 7.13881 10.5889 7.32102 10.3834 7.44921C10.1778 7.57741 9.93613 7.64583 9.6889 7.64583C9.35738 7.64583 9.03944 7.52292 8.80502 7.30412C8.5706 7.08533 8.4389 6.78859 8.4389 6.47917ZM10.9389 12.3621V9.97917C10.9389 9.59239 10.7743 9.22146 10.4813 8.94797C10.1882 8.67448 9.7908 8.52083 9.3764 8.52083C9.155 8.52053 8.94063 8.59336 8.77125 8.72644C8.60188 8.85951 8.48843 9.04424 8.451 9.24791C8.41357 9.45157 8.45457 9.66103 8.56675 9.83918C8.67893 10.0173 8.85504 10.1527 9.0639 10.2213V12.6042C9.0639 12.9909 9.22852 13.3619 9.52154 13.6354C9.81457 13.9089 10.212 14.0625 10.6264 14.0625C10.8478 14.0628 11.0622 13.99 11.2315 13.8569C11.4009 13.7238 11.5144 13.5391 11.5518 13.3354C11.5892 13.1318 11.5482 12.9223 11.436 12.7442C11.3239 12.566 11.1478 12.4307 10.9389 12.3621Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  alert: {
    xml: (
      <>
        <path d="M8.95027 2.07066C9.59894 1.69227 10.4011 1.69227 11.0497 2.07066L16.4664 5.23038C17.1064 5.60374 17.5 6.28895 17.5 7.02992V12.97C17.5 13.711 17.1064 14.3962 16.4664 14.7696L11.0497 17.9293C10.4011 18.3077 9.59894 18.3077 8.95027 17.9293L3.5336 14.7696C2.89356 14.3962 2.5 13.711 2.5 12.97V7.02992C2.5 6.28895 2.89357 5.60374 3.5336 5.23038L8.95027 2.07066Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.16732 10.4167L9.16732 6.87508C9.16732 6.41484 9.54041 6.04175 10.0007 6.04175C10.4609 6.04175 10.834 6.41484 10.834 6.87508L10.834 10.4167C10.834 10.877 10.4609 11.2501 10.0007 11.2501C9.54041 11.2501 9.16732 10.877 9.16732 10.4167Z"
          fill="white"
        ></path>
        <path
          d="M11.0423 13.3334C11.0423 13.9087 10.5759 14.3751 10.0007 14.3751C9.42535 14.3751 8.95898 13.9087 8.95898 13.3334C8.95898 12.7581 9.42535 12.2917 10.0007 12.2917C10.5759 12.2917 11.0423 12.7581 11.0423 13.3334Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  allow: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.1339 4.74112C17.622 5.22927 17.622 6.02073 17.1339 6.50888L9.00888 14.6339C8.52073 15.122 7.72927 15.122 7.24112 14.6339L2.86612 10.2589C2.37796 9.77073 2.37796 8.97927 2.86612 8.49112C3.35427 8.00296 4.14573 8.00296 4.63388 8.49112L8.125 11.9822L15.3661 4.74112C15.8543 4.25296 16.6457 4.25296 17.1339 4.74112Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20"}
  },
  deny: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 4.375C6.8934 4.375 4.375 6.8934 4.375 10C4.375 13.1066 6.8934 15.625 10 15.625C13.1066 15.625 15.625 13.1066 15.625 10C15.625 6.8934 13.1066 4.375 10 4.375ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.2536 4.2536C4.74175 3.76544 5.53321 3.76544 6.02137 4.2536L15.7466 13.9789C16.2348 14.467 16.2348 15.2585 15.7466 15.7466C15.2585 16.2348 14.467 16.2348 13.9789 15.7466L4.2536 6.02137C3.76544 5.53321 3.76544 4.74175 4.2536 4.2536Z"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "none"
    }
  },
  disabled: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10 4.375C6.8934 4.375 4.375 6.8934 4.375 10C4.375 13.1066 6.8934 15.625 10 15.625C13.1066 15.625 15.625 13.1066 15.625 10C15.625 6.8934 13.1066 4.375 10 4.375ZM1.875 10C1.875 5.51269 5.51269 1.875 10 1.875C14.4873 1.875 18.125 5.51269 18.125 10C18.125 14.4873 14.4873 18.125 10 18.125C5.51269 18.125 1.875 14.4873 1.875 10Z"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.2536 4.2536C4.74175 3.76544 5.53321 3.76544 6.02137 4.2536L15.7466 13.9789C16.2348 14.467 16.2348 15.2585 15.7466 15.7466C15.2585 16.2348 14.467 16.2348 13.9789 15.7466L4.2536 6.02137C3.76544 5.53321 3.76544 4.74175 4.2536 4.2536Z"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  excellent: {
    xml: (
      <>
        <circle cx="10" cy="10" r="8.125"></circle>
        <path
          d="M6.33865 8.82389C6.38053 8.71907 6.44265 8.62351 6.52147 8.5427C6.60028 8.46189 6.69425 8.39739 6.79799 8.3529C6.90174 8.30841 7.01323 8.28479 7.12611 8.2834C7.23898 8.28201 7.35103 8.30287 7.45584 8.34479L9.14165 9.0194V7.42383C9.14165 7.19591 9.23219 6.97732 9.39335 6.81616C9.55452 6.65499 9.7731 6.56445 10.001 6.56445C10.2289 6.56445 10.4475 6.65499 10.6087 6.81616C10.7699 6.97732 10.8604 7.19591 10.8604 7.42383V9.0194L12.5462 8.34479C12.7574 8.26216 12.9926 8.26633 13.2007 8.35641C13.4088 8.44648 13.5729 8.61515 13.6572 8.82566C13.7415 9.03618 13.7391 9.27147 13.6507 9.48026C13.5622 9.68906 13.3949 9.85444 13.185 9.94036L11.3617 10.6701L12.4073 12.0645C12.475 12.1547 12.5243 12.2575 12.5523 12.3668C12.5803 12.4761 12.5865 12.5899 12.5705 12.7016C12.5545 12.8133 12.5167 12.9208 12.4592 13.0179C12.4017 13.115 12.3257 13.1999 12.2354 13.2676C12.1451 13.3353 12.0424 13.3846 11.9331 13.4126C11.8237 13.4406 11.71 13.4468 11.5982 13.4308C11.4865 13.4149 11.379 13.377 11.2819 13.3195C11.1848 13.2621 11.1 13.186 11.0323 13.0957L10.001 11.7207L8.96977 13.0957C8.90206 13.186 8.81723 13.2621 8.72012 13.3195C8.62301 13.377 8.51553 13.4149 8.40381 13.4308C8.29208 13.4468 8.17831 13.4406 8.06899 13.4126C7.95967 13.3846 7.85693 13.3353 7.76665 13.2676C7.67636 13.1999 7.6003 13.115 7.5428 13.0179C7.4853 12.9208 7.44749 12.8133 7.43153 12.7016C7.41557 12.5899 7.42177 12.4761 7.44978 12.3668C7.47779 12.2575 7.52706 12.1547 7.59477 12.0645L8.64034 10.6701L6.81704 9.94036C6.60563 9.85564 6.4365 9.69047 6.3468 9.48113C6.2571 9.27178 6.25417 9.0354 6.33865 8.82389Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  "in-progress": {
    xml: (
      <>
        <circle cx="10" cy="10" r="8.125"></circle>
        <path
          d="M7.29036 9.99992C7.29036 10.5752 6.82399 11.0416 6.2487 11.0416C5.6734 11.0416 5.20703 10.5752 5.20703 9.99992C5.20703 9.42462 5.6734 8.95825 6.2487 8.95825C6.82399 8.95825 7.29036 9.42462 7.29036 9.99992Z"
          fill="white"
        ></path>
        <path
          d="M11.0404 9.99992C11.0404 10.5752 10.574 11.0416 9.9987 11.0416C9.4234 11.0416 8.95703 10.5752 8.95703 9.99992C8.95703 9.42462 9.4234 8.95825 9.9987 8.95825C10.574 8.95825 11.0404 9.42462 11.0404 9.99992Z"
          fill="white"
        ></path>
        <path
          d="M14.7904 9.99992C14.7904 10.5752 14.324 11.0416 13.7487 11.0416C13.1734 11.0416 12.707 10.5752 12.707 9.99992C12.707 9.42462 13.1734 8.95825 13.7487 8.95825C14.324 8.95825 14.7904 9.42462 14.7904 9.99992Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  inactive: {
    xml: (
      <>
        <circle cx="10" cy="10" r="8.125"></circle>
        <path
          d="M13.5375 9.06177C13.7866 9.06177 14.0255 9.16071 14.2016 9.33683C14.3777 9.51295 14.4767 9.75182 14.4767 10.0009C14.4767 10.25 14.3777 10.4888 14.2016 10.665C14.0255 10.8411 13.7866 10.94 13.5375 10.94L6.46647 10.94C6.2174 10.94 5.97853 10.8411 5.80241 10.665C5.62629 10.4888 5.52734 10.25 5.52734 10.0009C5.52734 9.75182 5.62629 9.51295 5.80241 9.33683C5.97853 9.16071 6.2174 9.06177 6.46647 9.06177L13.5375 9.06177Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  "low-warning": {
    xml: (
      <>
        <circle cx="10" cy="10" r="8.125"></circle>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.0446 10.484C8.70688 10.2544 8.25936 10.2698 7.93823 10.5221L7.26675 11.0497C6.85962 11.3696 6.27025 11.2989 5.95037 10.8917C5.63048 10.4846 5.7012 9.89524 6.10833 9.57536L6.77982 9.04776C7.74321 8.29081 9.08577 8.24461 10.0989 8.93354L10.9555 9.516C11.2932 9.74564 11.7407 9.73025 12.0619 9.47794L12.7333 8.95035C13.1405 8.63047 13.7298 8.7012 14.0497 9.10833C14.3696 9.51546 14.2989 10.1048 13.8917 10.4247L13.2203 10.9523C12.2569 11.7092 10.9143 11.7554 9.90117 11.0665L9.0446 10.484Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  negative: {
    xml: (
      <>
        <path d="M8.86279 1.55234C9.56552 1.14922 10.4345 1.14922 11.1372 1.55235L17.0053 4.91862C17.6986 5.31638 18.125 6.04638 18.125 6.83579V13.1642C18.125 13.9536 17.6986 14.6836 17.0053 15.0814L11.1372 18.4477C10.4345 18.8508 9.56552 18.8508 8.86279 18.4477L2.99473 15.0814C2.30136 14.6836 1.875 13.9536 1.875 13.1642V6.83579C1.875 6.04638 2.30136 5.31638 2.99474 4.91862L8.86279 1.55234Z"></path>
        <path
          d="M12.5917 8.76276L11.3561 10L12.5941 11.2372C12.774 11.4171 12.875 11.661 12.875 11.9153C12.875 12.1696 12.774 12.4135 12.5941 12.5933C12.4143 12.7732 12.1704 12.8742 11.9161 12.8742C11.6618 12.8742 11.4179 12.7732 11.238 12.5933L10 11.3561L8.76276 12.5941C8.67371 12.6832 8.568 12.7538 8.45166 12.802C8.33532 12.8502 8.21063 12.875 8.08471 12.875C7.95878 12.875 7.83409 12.8502 7.71775 12.802C7.60141 12.7538 7.4957 12.6832 7.40666 12.5941C7.31761 12.5051 7.24698 12.3994 7.19879 12.283C7.1506 12.1667 7.1258 12.042 7.1258 11.9161C7.1258 11.7902 7.1506 11.6655 7.19879 11.5491C7.24698 11.4328 7.31761 11.3271 7.40666 11.238L8.6439 10L7.40586 8.76276C7.31682 8.67371 7.24618 8.568 7.19799 8.45166C7.1498 8.33532 7.125 8.21063 7.125 8.08471C7.125 7.95878 7.1498 7.83409 7.19799 7.71775C7.24618 7.60141 7.31682 7.4957 7.40586 7.40666C7.4949 7.31761 7.60061 7.24698 7.71695 7.19879C7.83329 7.1506 7.95798 7.1258 8.08391 7.1258C8.20983 7.1258 8.33453 7.1506 8.45087 7.19879C8.56721 7.24698 8.67292 7.31761 8.76196 7.40666L10 8.6439L11.2372 7.40586C11.4171 7.22603 11.661 7.125 11.9153 7.125C12.1696 7.125 12.4135 7.22603 12.5933 7.40586C12.7732 7.58569 12.8742 7.82959 12.8742 8.08391C12.8742 8.33823 12.7732 8.58213 12.5933 8.76196L12.5917 8.76276Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  positive: {
    xml: (
      <>
        <circle cx="10" cy="10" r="8.125"></circle>
        <path
          d="M13.4956 7.68226C13.5762 7.76262 13.6402 7.8581 13.6839 7.96324C13.7275 8.06838 13.75 8.1811 13.75 8.29494C13.75 8.40879 13.7275 8.52151 13.6839 8.62665C13.6402 8.73179 13.5762 8.82727 13.4956 8.90763L9.45908 12.9442C9.37873 13.0248 9.28324 13.0888 9.1781 13.1324C9.07296 13.1761 8.96024 13.1986 8.8464 13.1986C8.73256 13.1986 8.61984 13.1761 8.5147 13.1324C8.40956 13.0888 8.31407 13.0248 8.23371 12.9442L6.50378 11.2142C6.42332 11.1338 6.3595 11.0382 6.31596 10.9331C6.27241 10.828 6.25 10.7153 6.25 10.6015C6.25 10.4877 6.27241 10.3751 6.31596 10.2699C6.3595 10.1648 6.42332 10.0693 6.50378 9.98884C6.58424 9.90839 6.67976 9.84456 6.78488 9.80102C6.89001 9.75747 7.00268 9.73506 7.11647 9.73506C7.23025 9.73506 7.34292 9.75747 7.44805 9.80102C7.55317 9.84456 7.64869 9.90839 7.72915 9.98884L8.84712 11.1054L12.2717 7.6801C12.3521 7.59982 12.4476 7.53618 12.5527 7.49284C12.6578 7.4495 12.7704 7.42729 12.8841 7.42749C12.9977 7.42769 13.1103 7.4503 13.2152 7.49401C13.3201 7.53773 13.4154 7.60169 13.4956 7.68226Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  "severe-warning": {
    xml: (
      <>
        <path d="M18.1023 8.38351L11.6205 1.9017C11.1907 1.47193 10.6078 1.23049 10 1.23049C9.39221 1.23049 8.80932 1.47193 8.37955 1.9017L1.89774 8.38351C1.46796 8.81329 1.22652 9.39618 1.22652 10.004C1.22652 10.6118 1.46796 11.1947 1.89774 11.6244L8.37955 18.1062C8.80932 18.536 9.39221 18.7774 10 18.7774C10.6078 18.7774 11.1907 18.536 11.6205 18.1062L18.1023 11.6244C18.532 11.1947 18.7735 10.6118 18.7735 10.004C18.7735 9.39618 18.532 8.81329 18.1023 8.38351Z"></path>
        <path
          d="M9.1237 10.2917V6.5C9.1237 6.26794 9.21589 6.04538 9.37998 5.88128C9.54407 5.71719 9.76663 5.625 9.9987 5.625C10.2308 5.625 10.4533 5.71719 10.6174 5.88128C10.7815 6.04538 10.8737 6.26794 10.8737 6.5V10.2917C10.8737 10.5237 10.7815 10.7463 10.6174 10.9104C10.4533 11.0745 10.2308 11.1667 9.9987 11.1667C9.76663 11.1667 9.54407 11.0745 9.37998 10.9104C9.21589 10.7463 9.1237 10.5237 9.1237 10.2917ZM11.1654 13.2083C11.1654 13.4391 11.0969 13.6646 10.9687 13.8565C10.8406 14.0484 10.6583 14.1979 10.4452 14.2862C10.232 14.3745 9.9974 14.3976 9.77109 14.3526C9.54478 14.3076 9.3369 14.1965 9.17374 14.0333C9.01058 13.8701 8.89947 13.6622 8.85445 13.4359C8.80943 13.2096 8.83254 12.975 8.92084 12.7619C9.00914 12.5487 9.15868 12.3665 9.35053 12.2383C9.54239 12.1101 9.76795 12.0417 9.9987 12.0417C10.3081 12.0417 10.6049 12.1646 10.8237 12.3834C11.0424 12.6022 11.1654 12.8989 11.1654 13.2083Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 20 20",
      fill: "currentColor"
    }
  },
  warning: {
    xml: (
      <>
        <path d="M16.6422 13.2187L10.4618 2.53117C10.3138 2.27413 10.1007 2.06063 9.84394 1.91217C9.58719 1.76371 9.29584 1.68555 8.99926 1.68555C8.70267 1.68555 8.41132 1.76371 8.15457 1.91217C7.89781 2.06063 7.68472 2.27413 7.53676 2.53117L1.35629 13.2187C1.20615 13.4744 1.12636 13.7653 1.12502 14.0619C1.12368 14.3584 1.20084 14.6501 1.34866 14.9071C1.49648 15.1642 1.7097 15.3776 1.96667 15.5256C2.22364 15.6737 2.51521 15.751 2.81176 15.7499H15.1868C15.4833 15.751 15.7749 15.6737 16.0318 15.5256C16.2888 15.3776 16.502 15.1642 16.6499 14.9071C16.7977 14.6501 16.8748 14.3584 16.8735 14.0619C16.8722 13.7653 16.7924 13.4744 16.6422 13.2187Z"></path>
        <path
          d="M8.21172 9.825V6.4125C8.21172 6.20364 8.29469 6.00334 8.44237 5.85565C8.59006 5.70797 8.79036 5.625 8.99922 5.625C9.20808 5.625 9.40838 5.70797 9.55607 5.85565C9.70375 6.00334 9.78672 6.20364 9.78672 6.4125V9.825C9.78672 10.0339 9.70375 10.2342 9.55607 10.3818C9.40838 10.5295 9.20808 10.6125 8.99922 10.6125C8.79036 10.6125 8.59006 10.5295 8.44237 10.3818C8.29469 10.2342 8.21172 10.0339 8.21172 9.825ZM10.0492 12.45C10.0492 12.6577 9.98764 12.8607 9.87226 13.0333C9.75689 13.206 9.5929 13.3406 9.40104 13.4201C9.20917 13.4995 8.99805 13.5203 8.79437 13.4798C8.59069 13.4393 8.4036 13.3393 8.25676 13.1925C8.10991 13.0456 8.00991 12.8585 7.96939 12.6548C7.92888 12.4512 7.94967 12.24 8.02915 12.0482C8.10862 11.8563 8.2432 11.6923 8.41587 11.577C8.58854 11.4616 8.79155 11.4 8.99922 11.4C9.2777 11.4 9.54477 11.5106 9.74168 11.7075C9.93859 11.9045 10.0492 12.1715 10.0492 12.45Z"
          fill="white"
        ></path>
      </>
    ),
    props: {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 18 18",
      fill: "currentColor"
    }
  },
  stop: {
    xml: (
      <>
        <rect
          x="48"
          y="48"
          width="160"
          height="160"
          rx="8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  subtract: {
    xml: (
      <>
        <circle
          cx="96"
          cy="96"
          r="72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M167.6,88.4a72,72,0,1,1-79.2,79.2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="161.64"
          y1="125.64"
          x2="225.64"
          y2="189.64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="125.64"
          y1="161.64"
          x2="189.64"
          y2="225.64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "sun-dim": {
    xml: (
      <>
        <line
          x1="128"
          y1="36"
          x2="128"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60"
          y1="60"
          x2="56"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60"
          y1="196"
          x2="56"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="196"
          y1="60"
          x2="200"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="196"
          y1="196"
          x2="200"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="36"
          y1="128"
          x2="32"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="220"
          x2="128"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="220"
          y1="128"
          x2="224"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  sun: {
    xml: (
      <>
        <line
          x1="128"
          y1="36"
          x2="128"
          y2="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60"
          y1="60"
          x2="48"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="60"
          y1="196"
          x2="48"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="196"
          y1="60"
          x2="208"
          y2="48"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="196"
          y1="196"
          x2="208"
          y2="208"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="36"
          y1="128"
          x2="20"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="220"
          x2="128"
          y2="236"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="220"
          y1="128"
          x2="236"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <circle
          cx="128"
          cy="128"
          r="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  switch: {
    xml: (
      <>
        <path d="M28.1716 5.07795C28.614 5.47529 28.614 6.1686 28.1716 6.56594L23.9182 10.3859C23.2744 10.9641 22.25 10.5072 22.25 9.64193V2.00196C22.25 1.13669 23.2744 0.679804 23.9182 1.25797L28.1716 5.07795Z"></path>
        <path d="M16 5.82178C16 4.99335 16.6716 4.32178 17.5 4.32178H26.5C27.3284 4.32178 28 4.99335 28 5.82178C28 6.6502 27.3284 7.32178 26.5 7.32178H17.5C16.6716 7.32178 16 6.6502 16 5.82178Z"></path>
        <path d="M28.1716 18.366C28.614 18.7634 28.614 19.4567 28.1716 19.854L23.9182 23.674C23.2744 24.2522 22.25 23.7953 22.25 22.93V15.29C22.25 14.4248 23.2744 13.9679 23.9182 14.5461L28.1716 18.366Z"></path>
        <path d="M16 19.1099C16 18.2814 16.6716 17.6099 17.5 17.6099H26.5C27.3284 17.6099 28 18.2814 28 19.1099C28 19.9383 27.3284 20.6099 26.5 20.6099H17.5C16.6716 20.6099 16 19.9383 16 19.1099Z"></path>
        <path d="M3.83182 11.722C3.38939 12.1193 3.38939 12.8126 3.83182 13.21L8.08522 17.03C8.72898 17.6081 9.7534 17.1512 9.7534 16.286V8.646C9.7534 7.78073 8.72898 7.32385 8.08522 7.90201L3.83182 11.722Z"></path>
        <path d="M16.0034 12.4658C16.0034 11.6374 15.3318 10.9658 14.5034 10.9658H5.50342C4.67499 10.9658 4.00342 11.6374 4.00342 12.4658C4.00342 13.2942 4.67499 13.9658 5.50342 13.9658H14.5034C15.3318 13.9658 16.0034 13.2942 16.0034 12.4658Z"></path>
        <path d="M3.83182 25.0101C3.38939 25.4074 3.38939 26.1007 3.83182 26.4981L8.08522 30.3181C8.72898 30.8962 9.7534 30.4393 9.7534 29.5741V21.9341C9.7534 21.0688 8.72898 20.6119 8.08522 21.1901L3.83182 25.0101Z"></path>
        <path d="M16.0034 25.7539C16.0034 24.9255 15.3318 24.2539 14.5034 24.2539H5.50342C4.67499 24.2539 4.00342 24.9255 4.00342 25.7539C4.00342 26.5823 4.67499 27.2539 5.50342 27.2539H14.5034C15.3318 27.2539 16.0034 26.5823 16.0034 25.7539Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  table: {
    xml: (
      <>
        <path
          d="M32,56H224a0,0,0,0,1,0,0V192a8,8,0,0,1-8,8H40a8,8,0,0,1-8-8V56A0,0,0,0,1,32,56Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="32"
          y1="104"
          x2="224"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="152"
          x2="224"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="104"
          x2="88"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "tag-chevron": {
    xml: (
      <>
        <path
          d="M32,200H187.72a8,8,0,0,0,6.65-3.56L240,128,194.37,59.56A8,8,0,0,0,187.72,56H32l48,72Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "tag-simple": {
    xml: (
      <>
        <path
          d="M194.37,196.44,240,128,194.37,59.56A8,8,0,0,0,187.72,56H40a8,8,0,0,0-8,8V192a8,8,0,0,0,8,8H187.72A8,8,0,0,0,194.37,196.44Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "teleworker-gateway": {
    xml: (
      <>
        <path d="M3.25 9.02575C3.24847 11.6088 4.20059 14.1015 5.92375 16.0257C6.18897 16.3223 6.56113 16.5013 6.95835 16.5235C7.35558 16.5456 7.74533 16.4091 8.04188 16.1439C8.33842 15.8787 8.51747 15.5065 8.53962 15.1093C8.56177 14.712 8.42522 14.3223 8.16 14.0257C6.93012 12.6507 6.25017 10.8706 6.25017 9.02575C6.25017 7.18092 6.93012 5.4008 8.16 4.02575C8.2967 3.8799 8.40286 3.7082 8.47225 3.52074C8.54165 3.33328 8.57287 3.13385 8.5641 2.93415C8.55532 2.73445 8.50672 2.53852 8.42115 2.35787C8.33558 2.17722 8.21477 2.0155 8.06581 1.8822C7.91685 1.74891 7.74275 1.64673 7.55375 1.58167C7.36474 1.51661 7.16464 1.48999 6.96519 1.50336C6.76575 1.51673 6.57099 1.56983 6.39236 1.65954C6.21373 1.74925 6.05483 1.87376 5.925 2.02575C4.20138 3.94983 3.24881 6.44254 3.25 9.02575Z"></path>
        <path d="M8.25 9.02575C8.2498 10.3657 8.73874 11.6596 9.625 12.6645C9.75534 12.8122 9.9135 12.9329 10.0905 13.0195C10.2674 13.1061 10.4597 13.157 10.6563 13.1693C10.8529 13.1816 11.0501 13.1551 11.2364 13.0912C11.4228 13.0273 11.5948 12.9273 11.7425 12.797C11.8902 12.6667 12.0109 12.5085 12.0975 12.3315C12.1841 12.1546 12.235 11.9623 12.2473 11.7657C12.2596 11.5691 12.2331 11.3719 12.1692 11.1856C12.1053 10.9992 12.0053 10.8272 11.875 10.6795C11.4732 10.223 11.2515 9.63575 11.2515 9.02762C11.2515 8.41949 11.4732 7.83221 11.875 7.37575C12.1248 7.07559 12.2476 6.68986 12.2175 6.30055C12.1874 5.91123 12.0066 5.54901 11.7136 5.29087C11.4206 5.03272 11.0385 4.899 10.6485 4.91811C10.2585 4.93723 9.89133 5.10768 9.625 5.39325C8.73956 6.3962 8.25063 7.68786 8.25 9.02575Z"></path>
        <path d="M22.375 12.6645C23.2612 11.6596 23.7502 10.3657 23.75 9.02575C23.7493 7.68786 23.2604 6.3962 22.375 5.39325C22.1086 5.10768 21.7415 4.93723 21.3514 4.91811C20.9614 4.899 20.5793 5.03272 20.2864 5.29087C19.9934 5.54901 19.8126 5.91123 19.7825 6.30055C19.7523 6.68986 19.8752 7.07559 20.125 7.37575C20.5268 7.83221 20.7485 8.41949 20.7485 9.02762C20.7485 9.63575 20.5268 10.223 20.125 10.6795C19.9946 10.8272 19.8947 10.9992 19.8308 11.1856C19.7669 11.3719 19.7404 11.5691 19.7527 11.7657C19.765 11.9623 19.8159 12.1546 19.9025 12.3315C19.9891 12.5085 20.1097 12.6667 20.2575 12.797C20.4052 12.9273 20.5772 13.0273 20.7635 13.0912C20.9499 13.1551 21.147 13.1816 21.3437 13.1693C21.5403 13.157 21.7326 13.1061 21.9095 13.0195C22.0865 12.9329 22.2446 12.8122 22.375 12.6645Z"></path>
        <path d="M28.75 9.02575C28.7515 11.6088 27.7994 14.1015 26.0762 16.0257C25.811 16.3223 25.4388 16.5013 25.0416 16.5235C24.6444 16.5456 24.2546 16.4091 23.9581 16.1439C23.6615 15.8787 23.4825 15.5065 23.4604 15.1093C23.4382 14.712 23.5748 14.3223 23.84 14.0257C25.0699 12.6507 25.7498 10.8706 25.7498 9.02575C25.7498 7.18092 25.0699 5.4008 23.84 4.02575C23.7033 3.8799 23.5971 3.7082 23.5277 3.52074C23.4583 3.33328 23.4271 3.13385 23.4359 2.93415C23.4447 2.73445 23.4933 2.53852 23.5788 2.35787C23.6644 2.17722 23.7852 2.0155 23.9342 1.8822C24.0831 1.74891 24.2572 1.64673 24.4462 1.58167C24.6352 1.51661 24.8353 1.48999 25.0348 1.50336C25.2342 1.51673 25.429 1.56983 25.6076 1.65954C25.7862 1.74925 25.9451 1.87376 26.075 2.02575C27.7986 3.94983 28.7512 6.44254 28.75 9.02575Z"></path>
        <path d="M15.1388 10.6424C15.4677 10.8622 15.8544 10.9795 16.25 10.9795C16.7804 10.9795 17.2891 10.7688 17.6642 10.3937C18.0393 10.0186 18.25 9.50993 18.25 8.97949C18.25 8.58393 18.1327 8.19725 17.9129 7.86835C17.6932 7.53945 17.3808 7.28311 17.0154 7.13173C16.6499 6.98036 16.2478 6.94075 15.8598 7.01792C15.4718 7.09509 15.1155 7.28557 14.8358 7.56528C14.5561 7.84499 14.3656 8.20135 14.2884 8.58931C14.2112 8.97727 14.2509 9.37941 14.4022 9.74486C14.5536 10.1103 14.8099 10.4227 15.1388 10.6424Z"></path>
        <path d="M12 24C12 24.3956 11.8827 24.7822 11.6629 25.1111C11.4432 25.44 11.1308 25.6964 10.7654 25.8478C10.3999 25.9991 9.99778 26.0387 9.60982 25.9616C9.22186 25.8844 8.86549 25.6939 8.58579 25.4142C8.30608 25.1345 8.1156 24.7781 8.03843 24.3902C7.96126 24.0022 8.00087 23.6001 8.15224 23.2346C8.30362 22.8692 8.55996 22.5568 8.88886 22.3371C9.21776 22.1173 9.60444 22 10 22C10.5304 22 11.0391 22.2107 11.4142 22.5858C11.7893 22.9609 12 23.4696 12 24Z"></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 17.5H26C26.663 17.5 27.2989 17.7739 27.7678 18.2615C28.2366 18.7491 28.5 19.4104 28.5 20.1V27.9C28.5 28.5896 28.2366 29.2509 27.7678 29.7385C27.2989 30.2261 26.663 30.5 26 30.5H6C5.33696 30.5 4.70108 30.2261 4.23223 29.7385C3.76339 29.2509 3.5 28.5896 3.5 27.9V20.1C3.5 19.4104 3.76339 18.7491 4.23223 18.2615C4.70108 17.7739 5.33696 17.5 6 17.5ZM6.5 27.38H25.5V20.62H6.5V27.38Z"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "terminal-window": {
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
          strokeWidth="24"
        ></rect>
        <polyline
          points="80 96 120 128 80 160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <line
          x1="144"
          y1="160"
          x2="176"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-aa": {
    xml: (
      <>
        <polyline
          points="144 192 80 56 16 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <ellipse
          cx="200"
          cy="164"
          rx="32"
          ry="28"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></ellipse>
        <path
          d="M232,192V124c0-15.46-14.33-28-32-28-9.56,0-18.14,2.18-24,8"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <line
          x1="125.18"
          y1="152"
          x2="34.82"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="64"
          y1="104"
          x2="192"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="144"
          x2="216"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="64"
          y1="184"
          x2="192"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="104"
          x2="168"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="144"
          x2="216"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="184"
          x2="168"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="64"
          x2="216"
          y2="64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="104"
          x2="216"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="40"
          y1="144"
          x2="216"
          y2="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="184"
          x2="216"
          y2="184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-h": {
    xml: (
      <>
        <line
          x1="56"
          y1="56"
          x2="56"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="200"
          y1="128"
          x2="56"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="200"
          y1="56"
          x2="200"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
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
          strokeWidth="24"
        ></line>
        <line
          x1="64"
          y1="200"
          x2="144"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="112"
          y1="56"
          x2="192"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          strokeWidth="24"
        ></line>
        <path
          d="M72,168c0,22.09,25.07,40,56,40s56-17.91,56-40c0-23.77-21.62-33-45.6-40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M75.11,88c0-22.09,22-40,52.89-40,23,0,40.24,9.87,48,24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "text-underline": {
    xml: (
      <>
        <line
          x1="64"
          y1="224"
          x2="192"
          y2="224"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M184,56v72a56,56,0,0,1-112,0V56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  texter: {
    xml: (
      <>
        <path
          d="M64,120h88a40,40,0,0,1,0,80H64V48h76a36,36,0,0,1,0,72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  ticket: {
    xml: (
      <>
        <line
          x1="100"
          y1="56"
          x2="100"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M24,160a32,32,0,0,0,0-64V64a8,8,0,0,1,8-8H224a8,8,0,0,1,8,8V96a32,32,0,0,0,0,64v32a8,8,0,0,1-8,8H32a8,8,0,0,1-8-8Z"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "trash-simple": {
    xml: (
      <>
        <line
          x1="216"
          y1="60"
          x2="40"
          y2="60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="88"
          y1="20"
          x2="168"
          y2="20"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          y1="60"
          x2="40"
          y2="60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="104"
          y1="104"
          x2="104"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="152"
          y1="104"
          x2="152"
          y2="168"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M200,60V208a8,8,0,0,1-8,8H64a8,8,0,0,1-8-8V60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M168,60V36a16,16,0,0,0-16-16H104A16,16,0,0,0,88,36V60"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "trend-down": {
    xml: (
      <>
        <polyline
          points="232 192 136 96 96 136 24 64"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="232 128 232 192 168 192"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "trend-up": {
    xml: (
      <>
        <polyline
          points="232 56 136 152 96 112 24 184"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="232 120 232 56 168 56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
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
  type_Workflow: {
    xml: (
      <>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.33329 3.16797C8.24124 3.16797 8.16663 3.24259 8.16663 3.33464V7.5013H13.8333V3.33464C13.8333 3.24259 13.7587 3.16797 13.6666 3.16797H8.33329ZM13.8333 8.5013H8.16663V12.668C8.16663 12.76 8.24124 12.8346 8.33329 12.8346H13.6666C13.7587 12.8346 13.8333 12.76 13.8333 12.668V8.5013ZM7.16663 8.5013V12.668C7.16663 13.3123 7.68896 13.8346 8.33329 13.8346H13.6666C14.311 13.8346 14.8333 13.3123 14.8333 12.668V3.33464C14.8333 2.6903 14.311 2.16797 13.6666 2.16797H8.33329C7.68896 2.16797 7.16663 2.6903 7.16663 3.33464V7.5013H1.66663V8.5013H7.16663Z"
        ></path>
        <path d="M3.33333 8.00123C3.33333 8.9217 2.58714 9.66789 1.66667 9.66789C0.746192 9.66789 0 8.9217 0 8.00123C0 7.08075 0.746192 6.33456 1.66667 6.33456C2.58714 6.33456 3.33333 7.08075 3.33333 8.00123Z"></path>
        <path d="M7.31311 6.02145C7.50838 5.82618 7.82496 5.82618 8.02022 6.02145L9.64645 7.64767C9.84171 7.84294 9.84171 8.15952 9.64645 8.35478L8.02022 9.98101C7.82496 10.1763 7.50838 10.1763 7.31311 9.98101L5.68689 8.35478C5.49162 8.15952 5.49162 7.84294 5.68689 7.64767L7.31311 6.02145Z"></path>
        <path d="M12.6667 7.16789C12.6667 6.89175 12.8905 6.66789 13.1667 6.66789H15.5C15.7761 6.66789 16 6.89175 16 7.16789V8.83456C16 9.1107 15.7761 9.33456 15.5 9.33456H13.1667C12.8905 9.33456 12.6667 9.1107 12.6667 8.83456V7.16789Z"></path>
        <path d="M9.33333 12.4987C9.33333 12.2226 9.55719 11.9987 9.83333 11.9987H12.1667C12.4428 11.9987 12.6667 12.2226 12.6667 12.4987V14.1654C12.6667 14.4415 12.4428 14.6654 12.1667 14.6654H9.83333C9.55719 14.6654 9.33333 14.4415 9.33333 14.1654V12.4987Z"></path>
        <path d="M6 1.83203C6 1.55589 6.22386 1.33203 6.5 1.33203H8.83333C9.10948 1.33203 9.33333 1.55589 9.33333 1.83203V3.4987C9.33333 3.77484 9.10948 3.9987 8.83333 3.9987H6.5C6.22386 3.9987 6 3.77484 6 3.4987V1.83203Z"></path>
      </>
    ),
    props: {
      viewBox: "0 0 16 16",
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
  "minus-circle": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="88"
          y1="128"
          x2="168"
          y2="128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
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
  "x-circle": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <line
          x1="160"
          y1="96"
          x2="96"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="96"
          y1="96"
          x2="160"
          y2="160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "upload-simple": {
    xml: (
      <>
        <line
          x1="128"
          y1="144"
          x2="128"
          y2="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <polyline
          points="216 144 216 208 40 208 40 144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="88 72 128 32 168 72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "user-focus": {
    xml: (
      <>
        <polyline
          points="180 40 216 40 216 76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="180 216 216 216 216 180"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="76 216 40 216 40 180"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="76 40 40 40 40 76"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <circle
          cx="128"
          cy="112"
          r="32"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M80,168a60,60,0,0,1,96,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
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
          r="36"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <polyline
          points="204 128 224 148 244 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <polyline
          points="12 128 32 108 52 128"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polyline>
        <path
          d="M32,108v20a96,96,0,0,0,174,56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M224,148V128A96,96,0,0,0,50,72"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M66.62,201.82a64,64,0,0,1,122.76,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "users-three": {
    xml: (
      <>
        <circle
          cx="128"
          cy="144"
          r="40"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M72,216a65,65,0,0,1,112,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M164,72.55a32,32,0,1,1,39.63,45.28c14.33,3.1,27.89,14.84,36.4,26.17"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M16,144c8.51-11.33,22.06-23.07,36.4-26.17A32,32,0,1,1,92,72.55"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  users: {
    xml: (
      <>
        <circle
          cx="84"
          cy="108"
          r="52"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <path
          d="M13,196a88,88,0,0,1,142,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M172,160a87.86,87.86,0,0,1,71,36"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M158.62,57.74A52,52,0,1,1,172,160"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  wall: {
    xml: (
      <>
        <rect
          x="32"
          y="56"
          width="192"
          height="144"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></rect>
        <line
          x1="128"
          y1="104"
          x2="128"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="80"
          y1="152"
          x2="80"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="176"
          y1="152"
          x2="176"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="128"
          y1="200"
          x2="128"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="104"
          x2="224"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="32"
          y1="152"
          x2="224"
          y2="152"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wan-application": {
    xml: (
      <>
        <g clipPath="url(#clip0_178789_107060)">
          <path d="M12.1716 15.2562C12.614 15.6535 12.614 16.3468 12.1716 16.7442L7.9182 20.5641C7.27444 21.1423 6.25001 20.6854 6.25001 19.8202L6.25001 12.1802C6.25001 11.3149 7.27444 10.858 7.9182 11.4362L12.1716 15.2562Z"></path>
          <path d="M0 16C0 15.1716 0.671573 14.5 1.5 14.5H10.5C11.3284 14.5 12 15.1716 12 16C12 16.8284 11.3284 17.5 10.5 17.5H1.5C0.671573 17.5 0 16.8284 0 16Z"></path>
          <path d="M19.8284 15.2562C19.386 15.6535 19.386 16.3468 19.8284 16.7442L24.0818 20.5641C24.7256 21.1423 25.75 20.6854 25.75 19.8202V12.1802C25.75 11.3149 24.7256 10.858 24.0818 11.4362L19.8284 15.2562Z"></path>
          <path d="M32 16C32 15.1716 31.3284 14.5 30.5 14.5H21.5C20.6716 14.5 20 15.1716 20 16C20 16.8284 20.6716 17.5 21.5 17.5H30.5C31.3284 17.5 32 16.8284 32 16Z"></path>
          <path d="M15.2562 0.828398C15.6535 0.385976 16.3468 0.385977 16.7442 0.828399L20.5641 5.0818C21.1423 5.72556 20.6854 6.74999 19.8202 6.74999H12.1802C11.3149 6.74999 10.858 5.72556 11.4362 5.0818L15.2562 0.828398Z"></path>
          <path d="M16 13C15.1716 13 14.5 12.3284 14.5 11.5V2.5C14.5 1.67157 15.1716 1 16 1C16.8284 1 17.5 1.67157 17.5 2.5V11.5C17.5 12.3284 16.8284 13 16 13Z"></path>
          <path d="M16.7438 31.1716C16.3465 31.614 15.6532 31.614 15.2558 31.1716L11.4359 26.9182C10.8577 26.2744 11.3146 25.25 12.1798 25.25H19.8198C20.6851 25.25 21.142 26.2744 20.5638 26.9182L16.7438 31.1716Z"></path>
          <path d="M16 19C16.8284 19 17.5 19.6716 17.5 20.5V29.5C17.5 30.3284 16.8284 31 16 31C15.1716 31 14.5 30.3284 14.5 29.5V20.5C14.5 19.6716 15.1716 19 16 19Z"></path>
        </g>
        <defs>
          <clipPath id="wan-application-nestedId-clip0_178789_107060">
            <rect width="20" height="20"></rect>
          </clipPath>
        </defs>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "warning-circle": {
    xml: (
      <>
        <circle
          cx="128"
          cy="128"
          r="96"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></circle>
        <circle cx="128" cy="172" r="16"></circle>
        <line
          x1="128"
          y1="132"
          x2="128"
          y2="80"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-high": {
    xml: (
      <>
        <circle cx="128" cy="204" r="16"></circle>
        <path
          d="M232,93.19a164,164,0,0,0-208,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M200,129a116,116,0,0,0-144,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M168,165a68,68,0,0,0-80,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-lightning": {
    xml: (
      <>
        <path d="M29.0316 9.91447C29.0723 9.96077 29.101 10.0164 29.1151 10.0764C29.1292 10.1364 29.1283 10.199 29.1124 10.2586C29.0965 10.3182 29.0662 10.3729 29.0242 10.418L23.7742 16.043C23.7185 16.1026 23.6449 16.1425 23.5645 16.1565C23.4841 16.1706 23.4014 16.158 23.3288 16.1208C23.2562 16.0835 23.1977 16.0236 23.1623 15.9501C23.1268 15.8766 23.1163 15.7936 23.1323 15.7136L23.8198 12.2763L21.1183 11.2632C21.0606 11.2416 21.0091 11.206 20.9684 11.1597C20.9277 11.1134 20.899 11.0578 20.8849 10.9978C20.8708 10.9378 20.8718 10.8752 20.8876 10.8156C20.9035 10.7561 20.9338 10.7013 20.9759 10.6562L26.2259 5.03124C26.2815 4.97159 26.3551 4.93173 26.4355 4.9177C26.5159 4.90367 26.5986 4.91623 26.6712 4.95348C26.7438 4.99073 26.8023 5.05064 26.8377 5.12412C26.8732 5.1976 26.8837 5.28064 26.8677 5.36064L26.1803 8.79795L28.8817 9.81098C28.9394 9.83263 28.9909 9.86818 29.0316 9.91447Z"></path>
        <path d="M15.9956 8.50004C11.5751 8.49035 7.33032 10.2297 4.18772 13.3385C3.59877 13.9211 2.64904 13.916 2.06643 13.327C1.48382 12.7381 1.48896 11.7883 2.07791 11.2057C5.78338 7.54015 10.7883 5.48906 16.0005 5.50004L15.9956 8.50004Z"></path>
        <path d="M15.9993 20.5C14.7522 20.5 13.5531 20.9807 12.6513 21.842C12.0523 22.4143 11.1028 22.3925 10.5306 21.7934C9.95834 21.1944 9.9801 20.2449 10.5792 19.6727C12.0391 18.2782 13.9804 17.5 15.9993 17.5C18.0182 17.5 19.9595 18.2782 21.4194 19.6727C22.0185 20.2449 22.0403 21.1944 21.4681 21.7934C20.8958 22.3925 19.9463 22.4143 19.3473 21.842C18.4455 20.9807 17.2464 20.5 15.9993 20.5Z"></path>
        <path d="M8.42416 17.5849C10.4441 15.6008 13.1644 14.4925 15.9958 14.5L16.0017 11.5C12.382 11.491 8.90435 12.9081 6.32194 15.4446C5.73092 16.0251 5.72241 16.9749 6.30292 17.5659C6.88343 18.1569 7.83314 18.1654 8.42416 17.5849Z"></path>
        <path d="M16 27C17.1046 27 18 26.1046 18 25C18 23.8954 17.1046 23 16 23C14.8954 23 14 23.8954 14 25C14 26.1046 14.8954 27 16 27Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  "wifi-low": {
    xml: (
      <>
        <circle cx="128" cy="204" r="16"></circle>
        <path
          d="M168,165a68,68,0,0,0-80,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-medium": {
    xml: (
      <>
        <circle cx="128" cy="204" r="16"></circle>
        <path
          d="M200,129a116,116,0,0,0-144,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M168,165a68,68,0,0,0-80,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-slash": {
    xml: (
      <>
        <circle cx="128" cy="204" r="16"></circle>
        <line
          x1="48"
          y1="40"
          x2="208"
          y2="216"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M71.6,66A163.53,163.53,0,0,0,24,93.19"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M107.78,105.76A115.46,115.46,0,0,0,56,129"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M154.81,157.49A68.1,68.1,0,0,0,88,165"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M232,93.19A163.31,163.31,0,0,0,128,56q-5.58,0-11.06.37"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M200,129a115.84,115.84,0,0,0-34-18.66"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wifi-x": {
    xml: (
      <>
        <circle cx="128" cy="204" r="16"></circle>
        <line
          x1="224"
          y1="56"
          x2="176"
          y2="104"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="224"
          y1="104"
          x2="176"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <path
          d="M168,165a68,68,0,0,0-80,0"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,56A163.31,163.31,0,0,0,24,93.19"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
        <path
          d="M128,104a115.51,115.51,0,0,0-72,25"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "windows-logo": {
    xml: (
      <>
        <polygon
          points="92 108 92 61.09 32 72 32 108 92 108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
        <polygon
          points="208 108 208 40 132 53.82 132 108 208 108"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
        <polygon
          points="92 148 92 194.91 32 184 32 148 92 148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
        <polygon
          points="208 148 208 216 132 202.18 132 148 208 148"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></polygon>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  },
  "wireless-lan-controller": {
    xml: (
      <>
        <path d="M15.0783 1.33182C15.4757 0.889394 16.169 0.889395 16.5663 1.33182L20.3863 5.58522C20.9645 6.22898 20.5076 7.2534 19.6423 7.2534H17.3221L17.3222 12.0034C17.3222 12.8318 16.6506 13.5034 15.8221 13.5034C14.9937 13.5034 14.3221 12.8318 14.3221 12.0034V7.2534H12.0023C11.1371 7.2534 10.6802 6.22898 11.2583 5.58522L15.0783 1.33182Z"></path>
        <path d="M15.0204 18.8284C15.4102 18.386 16.0905 18.386 16.4804 18.8284L19.2473 23.0818C19.8145 23.7256 19.3663 24.75 18.5173 24.75H17.222L17.222 29.5C17.222 30.3284 16.563 31 15.7502 31C14.9374 31 14.2784 30.3284 14.2784 29.5V24.75H12.9835C12.1345 24.75 11.6862 23.7256 12.2535 23.0818L15.0204 18.8284Z"></path>
        <path d="M12.5002 15.9756C12.7522 15.4369 12.4813 14.7987 11.9188 14.6059L6.90162 13.672C6.08313 13.3913 5.31866 14.2122 5.65675 15.0087L6.17244 16.2236L1.80003 18.0795C1.03746 18.4032 0.68168 19.2838 1.00537 20.0464C1.32906 20.809 2.20965 21.1647 2.97223 20.841L7.34464 18.9851L7.86046 20.2003C8.19855 20.9968 9.32006 21.0171 9.68673 20.2333L12.5002 15.9756Z"></path>
        <path d="M20.0814 14.6059C19.5189 14.7987 19.248 15.4369 19.5 15.9756L22.3134 20.2333C22.6801 21.0171 23.8016 20.9968 24.1397 20.2003L24.6555 18.9851L29.0279 20.841C29.7905 21.1647 30.6711 20.809 30.9948 20.0464C31.3185 19.2838 30.9627 18.4032 30.2001 18.0795L25.8277 16.2236L26.3434 15.0087C26.6815 14.2122 25.917 13.3913 25.0985 13.672L20.0814 14.6059Z"></path>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 32 32"}
  },
  x: {
    xml: (
      <>
        <line
          x1="200"
          y1="56"
          x2="56"
          y2="200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
        <line
          x1="200"
          y1="200"
          x2="56"
          y2="56"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="24"
        ></line>
      </>
    ),
    props: {xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 256 256"}
  }
};

export default MagnaIcons;
