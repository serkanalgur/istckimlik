# isTCKimlik ![npm](https://img.shields.io/npm/dt/istckimlik) ![npm bundle size](https://img.shields.io/bundlephobia/minzip/istckimlik)

A tool for validate Turkish Identification Number

## Installation

You can install this component via npm or yarn

```bash
npm install istckimlik
yarn add istckimlik
```

## Usage

### CommonJS

```js
const { isTCKimlik } = require('istckimlik');

// Pass a number to validate
const isValid = isTCKimlik(48265878901);
console.log(isValid); // returns true or false
```

### ES Module / TypeScript

```ts
import { isTCKimlik } from 'istckimlik';

// The function accepts a number and returns a boolean
const isValid: boolean = isTCKimlik(48265878901);
console.log(isValid); // returns true or false
```

## Validation Rules

A valid Turkish ID must meet these criteria:

- Must be exactly 11 digits
- Cannot start with 0
- Must pass the checksum validation (mod 10 checks)

## Notes

- Input must be a **number** type
- Returns `true` if the ID is valid, `false` otherwise

## Publishing & Trusted Publishers ✅

This repository includes an example GitHub Actions workflow that uses OpenID Connect (OIDC) to publish packages via npm's Trusted Publisher feature. Trusted publishing allows you to publish from CI/CD without long-lived npm tokens.

- Workflow: `.github/workflows/publish.yml` (publishes when a tag prefixed with `v` is pushed, e.g., `v1.2.3`)
- Workflow permissions include `id-token: write`, which is required for OIDC to work.
- Ensure you are using npm CLI 11.5.1 or later in your workflow (the workflow updates npm to the latest version).

How to enable trusted publishing on npm:
1. Navigate to your package settings on npmjs.com and find the "Trusted Publisher" section.
2. Select your CI/CD provider (GitHub Actions) and fill out the required fields (org/user, repo, filename of workflow, environment if applicable).
3. Verify by tagging a release and using the workflow to publish.

Recommended security steps after enabling trusted publishing:
- Restrict traditional tokens by going to Settings → Publishing access and selecting "Require two-factor authentication and disallow tokens".
- Revoke any existing automation tokens that are no longer needed.

Notes:
- If you need to install private dependencies during your workflow, create a read-only token and add it to your repository secrets as `NPM_READ_TOKEN`; this token isn't used for publishing when OIDC is enabled.
- Provenance attestations are automatically generated for public packages published using trusted publishing and public repositories. You can disable provenance if necessary using `publishConfig` in `package.json` or `NPM_CONFIG_PROVENANCE=false` if needed.
