const iconNameMap = {
  add: "plus",
  "add-to-list": "file-plus",
  alarm: "",
  alert: "bell",
  "align-center": "text-align-center",
  "align-left": "text-align-left",
  "align-right": "text-align-right",
  allow: "arrow-circle-right",
  "allow-list": "list-checks",
  "api-cloud": "",
  append: "arrow-elbow-right-up",
  "arrow-bar-left": "arrow-line-left",
  "arrow-bar-right": "arrow-line-right",
  "arrow-left": "arrow-left",
  "arrow-right": "arrow-right",
  "arrow-up": "arrow-up",
  "arrow-down": "arrow-down",
  "arrow-up-right": "arrow-up-right",
  "arrow-up-left": "arrow-up-left",
  "arrow-down-right": "arrow-down-right",
  "arrow-down-left": "arrow-down-left",
  "asa-zone": "",
  at: "at",
  back: "arrow-bend-up-left",
  "bandwidth-quota": "arrows-down-up",
  bell: "bell",
  "bidirectional-tunnel": "arrows-left-right",
  block: "prohibit",
  blocked: "prohibit-inset",
  "block-with-reset": "prohibit-inset",
  bold: "text-bolder",
  "bulleted-list": "list-bullets",
  catalog: "book-open",
  calendar: "calendar-blank",
  "calendar-alt": "calendar-blank",
  capslock: "",
  certified: "circle-wavy-check",
  "change-log-state": "",
  "change-log-type": "",
  "change-log": "list-dashes",
  "change-request": "list-checks",
  "chart-bar": "chart-bar",
  "chart-curve": "chart-line",
  "chart-pie": "chart-pie-slice",
  checkmark: "check",
  "chevron-down": "caret-down",
  "chevron-left": "caret-left",
  "chevron-right": "caret-right",
  "chevron-up": "caret-up",
  cisco: "",
  clean: "sparkle",
  cli: "terminal",
  clock: "clock",
  close: "x",
  code: "code",
  collapse: "arrows-in",
  comments: "chat-text",
  compare: "square-half",
  computer: "desktop",
  "condensed-spacing": "",
  connectivity: "wifi-high",
  convergence: "",
  copy: "",
  crashy: "",
  created: "file-plus",
  "critical-stop": "",
  database: "",
  desktop: "",
  "data-source": "database",
  delay: "clock-counter-clockwise",
  "detail-view": "file",
  "device-hookup": "plugs-connected",
  "device-service": "hard-drive",
  "device-type": "hard-drives",
  disconnected: "plugs",
  domain: "globe", // TODO  (needs to be regular outline not fill)
  "dots-three": "",
  "dots-six": "",
  "dots-nine": "",
  download: "download-simple",
  dropped: "",
  "dynamic-nat": "",
  edit: "pencil-simple", // TODO (needs to be regular outline not fill)
  "ellipsis-horizontal": "dots-three-outline",
  "ellipsis-vertical": "dots-three-outline-vertical",
  email: "envelope",
  "email-address": "at",
  "email-recipient": "tray",
  "email-sender": "paper-plane-tilt",
  "email-service": "arrows-clockwise",
  "email-subject": "envelope-open",
  "event-total": "",
  expand: "arrows-out",
  diverge: "now",
  favorable: "check-circle",
  favorites: "star",
  fatal: "smiley-x-eyes",
  feedback: "chat-dots",
  "file-hash": "file",
  "file-name": "tag-simple",
  "file-policy": "file-text",
  filter: "funnel-simple",
  "find-observables": "file-search", // TODO revisit
  "find-usage": "binoculars",
  "first-page": "caret-double-left",
  "free-trial": "circle-wavy",
  "generate-report": "notebook",
  github: "github-logo",
  "global-view": "globe-stand",
  good: "check-circle", // TODO Fill?
  gripper: "dotsSix",
  group: "users-three",
  "grouped-object": "folder",
  "hardware-version": "",
  "heartbeat-status": "activity",
  help: "question",
  host: "desktop",
  hourglass: "hourglass-high",
  "html-format": "file-html",
  indicator: "fingerprint",
  info: "info",
  image: "image",
  import: "arrow-square-in",
  "incoming-mail": "archive-tray",
  "inconsistent-objects": "selection-background",
  "inline-zone": "",
  "input-parameter": "file-code",
  "insert-horizontal-rule": "",
  "insert-image": "file-image",
  inspect: "",
  "interactive-block-with-reset": "",
  "interactive-block": "",
  "interface-down": "",
  "interface-up": "",
  interface: "",
  intrusion: "",
  "intrusion-policy": "shield",
  ip: "hard-drives",
  "ip-simulated": "",
  issues: "warning-circle",
  italic: "text-italic",
  judgement: "scales",
  "label-group": "",
  "label-tag": "tag",
  "last-page": "caret-double-right",
  lightning: "",
  link: "link",
  "list-menu": "list",
  lock: "lock",
  "mac-address": "cpu",
  malware: "",
  malicious: "skull", // TODO disposition icon
  "malicious-alt": "",
  "merge-down": "stack-simple", // fill
  module: "puzzle-piece",
  monitor: "arrow-circle-down-right",
  "move-document": "",
  "name-empty": "",
  "nat-original-port": "",
  "nat-translated-port": "",
  nat: "",
  network: "git-branch",
  "new-window": "arrow-square-out",
  note: "notepad",
  null: "prohibit",
  "numbered-list": "list-numbers",
  object: "aperture",
  observable: "",
  "one-click-bidirectional": "",
  "one-click-unidirectional": "",
  "orbital-node-id": "asterisk",
  ospf: "",
  outgoing: "upload-simple",
  "page-break": "",
  "partially-dropped": "", // TODO
  "passive-zone": "", // TODO
  paste: "clipboard-text",
  path: "folder-open", // fill
  pause: "pause",
  pdf: "file-pdf",
  phishing: "",
  play: "play",
  prepend: "",
  progress: "spinner",
  query: "magnifying-glass-plus",
  question: "",
  quotes: "",
  reconnect: "plug",
  refresh: "arrow-clockwise",
  registered: "shield-check",
  release: "arrow-up",
  "remove-formatting": "text-aa",
  restore: "git-branch",
  restart: "clock-clockwise",
  "routed-zones": "",
  "safe-search": "",
  save: "floppy-disk",
  "sdc-cloud": "cloud", // fill
  "sdc-onprem": "house",
  "sdc-type": "navigation-arrow",
  search: "magnifying-glass",
  "security-intelligence": "",
  "security-zone": "",
  "send-copy": "",
  serverless: "",
  settings: "gear",
  "shadow-rule": "circle-half", // fill
  shutdown: "power",
  "sign-out": "sign-out",
  "sign-up": "note-pencil",
  sighting: "eye",
  "software-version": "",
  "sort-ascending": "sort-ascending",
  "sort-descending": "sort-descending",
  spacing: "",
  spam: "",
  "static-nat": "arrows-left-right",
  stop: "stop", // fill
  strikethrough: "text-strikethrough",
  subdomain: "browsers",
  subscript: "",
  subscription: "rss",
  subtract: "",
  superscript: "",
  suspicious: "",
  "swc-device-id": "cloud",
  "switched-zone": "",
  sync: "arrows-clockwise",
  "table-customize": "table", // fill
  table: "table",
  target: "crosshair-simple",
  "text-format": "text",
  theme: "",
  ticket: "ticket",
  "time-quota": "",
  "time-range": "calendar-blank",
  "time-zone": "",
  trash: "",
  "triangle-down": "",
  "triangle-left": "",
  "triangle-right": "",
  "triangle-up": "",
  troubleshoot: "",
  trust: "check-circle",
  underline: "text-underline",
  "ungrouped-object": "cube",
  "unidirectional-tunnel": "",
  unknown: "",
  unlock: "lock-simple-open",
  "unprovisioned-device": "",
  unregistered: "",
  unsynced: "",
  "unused-object": "selection",
  upgrade: "arrow-circle-up",
  upload: "upload-simple",
  url: "browser",
  user: "",
  variable: "",
  verdict: "",
  "view-metadata": "",
  "view-restricted": "eye-slash",
  "view-side-by-side": "",
  view: "eye",
  vpn: "",
  walkthrough: "chat-centered-text",
  "web-tracking": "user-switch",
  "would-have-dropped": ""
};

module.exports.iconNameMap = iconNameMap;
