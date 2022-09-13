# Magna-React

## Introduction

Magna-React is a React library that implements UI components according to the [Atomic design specification](http://ux-document-lnx/~designer/sbg-ux/components/atoms/getting-started.html) (requires VPN) with some Magnetic re-skinning [Magnetic Design - Figma](https://www.figma.com/file/oVZWatImEIbl1c8sjdGxi0/%F0%9F%A7%B2--Magnetic-Design-Library) Developers can enjoy the following features:

- Flexible, tree-shakable components
- Full [documentation](https://magna-react.security.cisco.com/) -- coming soon
- [Auto-import](https://magna-react.security.cisco.com/#integrating) -- coming soon
- Baked-in accessibility
- Responsive helpers
- CSS helpers
- Form validation
- Extensibility

## Questions

Consult [the documentation](https://magna-react.security.cisco.com). For additional help and support, please reach out to Brennan Arvo on Webex Teams, or file an issue in this repository.

## Contributing

### Design Development

See the [Atomic contribution page](http://ux-document-lnx/~designer/sbg-ux/components/atoms/contribution.html).

### Component Development

Feel free to reach out to Brennan Arvo via Webex Teams to discuss contributions.
## DEV ===============
### Run Locally
```
npm ci
npm run dev
```

[Status page for known component migration](./MagneticStylingStatus.md)

### Testing locally with another local project

```
In magna-react:
  npm ci
  npm run build
In a project that is currently including atomic-react, npm install like normal
Then, copy everything in the magna-react lib directory to the atomic-react lib directory in the app you want to test.
Example of aliases I use:
cpatomr='cp -R /Users/alucigna/projects/magna-react/lib/* /Users/alucigna/projects/ctr-react/node_modules/@cisco-sbg-ui/atomic-react/lib'
cpatomrg='cp -R /Users/alucigna/projects/magna-react/lib/* /Users/alucigna/projects/GLaDOS/node_modules/@cisco-sbg-ui/atomic-react/lib'
cpatomrm='cp -R /Users/alucigna/projects/magna-react/lib/* /Users/alucigna/projects/mask/node_modules/@cisco-sbg-ui/atomic-react/lib'
Then restart the app...

Note: For GLaDOS I have to get it to drop the cache to see the change
```

