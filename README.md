# Magna-React

## Introduction

Magna-React is a React library that implements UI components according to the [Atomic design specification](http://ux-document-lnx/~designer/sbg-ux/components/atoms/getting-started.html) (requires VPN) with some Magnetic re-skinning [Magnetic Design - Figma](https://www.figma.com/file/oVZWatImEIbl1c8sjdGxi0/%F0%9F%A7%B2--Magnetic-Design-Library) Developers can enjoy the following features:

- Flexible, tree-shakable components
- Full [documentation](https://magna-react.vercel.app/) -- WIP
- Baked-in accessibility
- Responsive helpers
- CSS helpers
- Form validation
- Extensibility

---

## Usage

Magna-React is provided as an npm package from GitHub packages. To configure for use:

### Generate an access token

1. Go to https://github.com/settings/tokens
2. Click `Generate new token`

![generate token](./docs/images/github/generate_token.png)

3. Enter a note to identify the token
4. Select the `read:packages` scope

![package scope](./docs/images/github/package_scope.png)

5. Click `Generate`
6. Copy the token

7. Add the repository to your `~/.npmrc` file:

```
@advthreat:registry=https://npm.pkg.github.com
```

9. Paste the following in to your `~/.npmrc` file, replacing TOKEN with your new token:

```
//npm.pkg.github.com/:_authToken=TOKEN
```

### Installation

1. Run

```
npm install @cisco-sbg-ui/magna-react
```

2. Remove `@cisco-sbg-ui/atomic-react` from package.json

3. Swap imports/babel config from atomic-react to magna-react

---

## Component Development

Feel free to reach out to Robert Harris (roberha2) via Webex Teams to discuss contributions.

## DEV ===============

### Run Locally

```
npm ci
npm run dev
```

#### Integration testing

1.  ```
    npm run build
    npm pack
    ```
2.  Install magna as a dependency in other application:
    - In the other application's `package.json`, point to the generated tar file and `npm i`

#### PR process

1. `type/#<ISSUE_NUMBER>-your-feat` ex: `chore/#243-syntax-update`
2. Fill out PR template
3. `rebase` and push branch:
   ```
   git checkout main
   git pull
   git checkout <YOUR_BRANCH>
   git rebase main
   ```
4. Once approved click squash and merge and delete prepopulated commit comments.
5. Merge and delete branch

#### Build and versioning process

1. On main `git pull`
2. `git checkout -b release_<RELEASE_NUMBER>`
3. Update version in the `package.json`
4. ```
   npm i
   git add .
   git commit -m "<RELEASE_NUMBER>"
   git push origin release_<RELEASE_NUMBER>
   git tag v<RELEASE_NUMBER>
   git push origin tag v<RELEASE_NUMBER>
   ```
5. Go to `Releases` page in Github UI
6. Click the "Draft a new release" button
7. Select new tag and generate release notes for review
8. Select "Set as latest release" and publish

---
