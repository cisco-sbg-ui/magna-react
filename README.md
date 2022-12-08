# Magna-React (BETA)

## *THIS REPOSITORY AND PACKAGE IS CURRENTLY IN BETA. DO _NOT_ USE THIS IN PRODUCTION. ANY PRODUCTION USAGE AT THIS TIME WILL RESULT IN SEVERE CONSEQUENCES.*

## Introduction

Magna-React is a React library that implements UI components according to the [Atomic design specification](http://ux-document-lnx/~designer/sbg-ux/components/atoms/getting-started.html) (requires VPN) with some Magnetic re-skinning [Magnetic Design - Figma](https://www.figma.com/file/oVZWatImEIbl1c8sjdGxi0/%F0%9F%A7%B2--Magnetic-Design-Library) Developers can enjoy the following features:

- Flexible, tree-shakable components
- Full [documentation](https://magna-react.vercel.app/) -- WIP
- Baked-in accessibility
- Responsive helpers
- CSS helpers
- Form validation
- Extensibility

-------------

## Usage

## *THIS REPOSITORY AND PACKAGE IS CURRENTLY IN BETA. DO _NOT_ USE THIS IN PRODUCTION. ANY PRODUCTION USAGE AT THIS TIME WILL RESULT IN SEVERE CONSEQUENCES.*

Magna-React is provided as an npm package from GitHub packages. To configure for use:

### Generate an access token

1) Go to https://github.com/settings/tokens
2) Click `Generate new token`

![generate token](./docs/images/github/generate_token.png)

3) Enter a note to identify the token
4) Select the `read:packages` scope

![package scope](./docs/images/github/package_scope.png)

5) Click `Generate`
6) Copy the token

8) Add the repository to your `~/.npmrc` file:

```
@advthreat:registry=https://npm.pkg.github.com
```

9) Paste the following in to your `~/.npmrc` file, replacing TOKEN with your new token:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

### Installation 

1) Run

```
npm install @cisco-sbg-ui/magna-react@beta
```

2) Remove `@cisco-sbg-ui/atomic-react` from package.json

3) Swap imports/babel config from atomic-react to magna-react

-------------

## Component Development

Feel free to reach out to Robert Harris (roberha2) or Brennan Arvo via Webex Teams to discuss contributions.
## DEV ===============
### Run Locally
```
npm ci
npm run dev
```

[Status page for known component migration](./MagneticStylingStatus.md)

## Testing locally with another local project

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

-------------

## *THIS REPOSITORY AND PACKAGE IS CURRENTLY IN BETA. DO _NOT_ USE THIS IN PRODUCTION. ANY PRODUCTION USAGE AT THIS TIME WILL RESULT IN SEVERE CONSEQUENCES.*
