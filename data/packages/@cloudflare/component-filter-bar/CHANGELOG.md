# Change Log

## 5.1.0

### Minor Changes

- de8a574202: Upgrading cf.datasets from version 2.10.0 to 2.14.0. Modifying data-locations colos.tsx to use latest dataset from cf.datasets instead of pops.ts and airportCodes.

## 5.0.0

### Major Changes

- 1b7c5ab296: Move @cloudflare/component-icon to peerDeps for all consuming packages

### Patch Changes

- Updated dependencies [1b7c5ab296]
  - @cloudflare/component-arrow-swivel@6.0.0
  - @cloudflare/component-button@6.0.0
  - @cloudflare/component-icon@10.0.0
  - @cloudflare/component-time-period-picker@4.0.0

## 4.6.1

### Patch Changes

- 0becdf529d: fix dark mode bug

## 4.6.0

### Minor Changes

- 84ef942478: Bump cf.datasets version to include PKX colo

## 4.5.0

### Minor Changes

- 35c343e470: Adding filterIconType and buttonStyle props to FilterBuilder component

## 4.4.0

### Minor Changes

- 097f5d93f8: Adding modalStyles prop to FilterBuilder

## 4.3.0

### Minor Changes

- 596f643f30: Adding export for FilterBuilder component.

## 4.2.1

### Patch Changes

- Updated dependencies [314e9b2760]
  - @cloudflare/component-input@8.0.0

## 4.2.0

### Minor Changes

- 07af59441b: Adjusted min-width for Timerange select box

## 4.1.0

### Minor Changes

- 77a4034f3a: filter bar to allow options as label, value pair

## 4.0.0

### Patch Changes

- Updated dependencies [20596e58c4]
- Updated dependencies [fa17f50f56]
- Updated dependencies [77059b4a95]
  - @cloudflare/component-forms@5.0.0
  - @cloudflare/style-container@7.10.0
  - @cloudflare/component-arrow-swivel@5.0.0
  - @cloudflare/component-box@4.0.0
  - @cloudflare/component-button@5.0.0
  - @cloudflare/component-icon@9.0.0
  - @cloudflare/component-input@7.0.0
  - @cloudflare/component-link@7.0.0
  - @cloudflare/component-select@5.0.0
  - @cloudflare/component-text@4.0.0
  - @cloudflare/component-time-period-picker@3.0.0
  - @cloudflare/elements@3.0.0

## 3.0.0

### Minor Changes

- e2cf563e32: Correctly list the following packages as peer dependencies:

  - @cloudflare/style-const
  - @cloudflare/style-container
  - @cloudflare/style-provider

  These packages used to install `fela` and `react-fela` as transitive dependencies, which can cause issues if the version installed by the package is different than the version that is installed by the host application.

  To prevent this from happening, it is recommended that the host application specifies its own version of the `@cloudflare/style-*` packages.

### Patch Changes

- Updated dependencies [e2cf563e32]
  - @cloudflare/component-arrow-swivel@4.0.0
  - @cloudflare/component-icon@8.0.0
  - @cloudflare/component-input@6.0.0
  - @cloudflare/component-text@3.0.0
  - @cloudflare/component-time-period-picker@2.0.0
  - @cloudflare/elements@2.0.0
  - @cloudflare/style-container@7.9.0
  - @cloudflare/component-box@3.0.0
  - @cloudflare/component-button@4.0.0
  - @cloudflare/component-forms@4.0.0
  - @cloudflare/component-link@6.0.0
  - @cloudflare/component-select@4.0.0

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.6.73](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.72...@cloudflare/component-filter-bar@2.6.73) (2022-07-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.72](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.71...@cloudflare/component-filter-bar@2.6.72) (2022-07-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.71](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.70...@cloudflare/component-filter-bar@2.6.71) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.70](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.69...@cloudflare/component-filter-bar@2.6.70) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.69](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.68...@cloudflare/component-filter-bar@2.6.69) (2022-07-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.68](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.67...@cloudflare/component-filter-bar@2.6.68) (2022-07-21)

### Bug Fixes

- UI-000 update stratus app cloudflare dependencies ([cca8e14](http://stash.cfops.it:7999/fe/stratus/commits/cca8e14))

## [2.6.67](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.66...@cloudflare/component-filter-bar@2.6.67) (2022-07-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.66](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.65...@cloudflare/component-filter-bar@2.6.66) (2022-07-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.65](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.64...@cloudflare/component-filter-bar@2.6.65) (2022-07-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.64](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.63...@cloudflare/component-filter-bar@2.6.64) (2022-07-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.63](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.62...@cloudflare/component-filter-bar@2.6.63) (2022-07-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.62](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.61...@cloudflare/component-filter-bar@2.6.62) (2022-07-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.61](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.60...@cloudflare/component-filter-bar@2.6.61) (2022-06-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.60](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.59...@cloudflare/component-filter-bar@2.6.60) (2022-06-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.59](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.58...@cloudflare/component-filter-bar@2.6.59) (2022-06-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.58](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.57...@cloudflare/component-filter-bar@2.6.58) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.57](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.56...@cloudflare/component-filter-bar@2.6.57) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.56](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.55...@cloudflare/component-filter-bar@2.6.56) (2022-06-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.55](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.54...@cloudflare/component-filter-bar@2.6.55) (2022-06-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.54](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.53...@cloudflare/component-filter-bar@2.6.54) (2022-06-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.53](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.52...@cloudflare/component-filter-bar@2.6.53) (2022-06-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.52](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.51...@cloudflare/component-filter-bar@2.6.52) (2022-06-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.51](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.50...@cloudflare/component-filter-bar@2.6.51) (2022-06-17)

### Bug Fixes

- **component-filter-bar:** A11Y-774 Add aria attributes ([d474bc5](http://stash.cfops.it:7999/fe/stratus/commits/d474bc5))

## [2.6.50](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.49...@cloudflare/component-filter-bar@2.6.50) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.49](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.48...@cloudflare/component-filter-bar@2.6.49) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.48](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.47...@cloudflare/component-filter-bar@2.6.48) (2022-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.47](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.46...@cloudflare/component-filter-bar@2.6.47) (2022-06-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.46](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.45...@cloudflare/component-filter-bar@2.6.46) (2022-06-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.45](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.44...@cloudflare/component-filter-bar@2.6.45) (2022-06-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.44](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.43...@cloudflare/component-filter-bar@2.6.44) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.43](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.42...@cloudflare/component-filter-bar@2.6.43) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.42](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.41...@cloudflare/component-filter-bar@2.6.42) (2022-06-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.41](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.40...@cloudflare/component-filter-bar@2.6.41) (2022-06-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.40](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.39...@cloudflare/component-filter-bar@2.6.40) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.39](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.38...@cloudflare/component-filter-bar@2.6.39) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.38](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.37...@cloudflare/component-filter-bar@2.6.38) (2022-05-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.37](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.36...@cloudflare/component-filter-bar@2.6.37) (2022-05-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.36](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.35...@cloudflare/component-filter-bar@2.6.36) (2022-05-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.35](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.34...@cloudflare/component-filter-bar@2.6.35) (2022-05-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.34](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.33...@cloudflare/component-filter-bar@2.6.34) (2022-05-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.33](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.32...@cloudflare/component-filter-bar@2.6.33) (2022-05-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.32](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.31...@cloudflare/component-filter-bar@2.6.32) (2022-05-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.30...@cloudflare/component-filter-bar@2.6.31) (2022-05-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.29...@cloudflare/component-filter-bar@2.6.30) (2022-05-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.28...@cloudflare/component-filter-bar@2.6.29) (2022-05-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.27...@cloudflare/component-filter-bar@2.6.28) (2022-05-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.26...@cloudflare/component-filter-bar@2.6.27) (2022-05-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.25...@cloudflare/component-filter-bar@2.6.26) (2022-05-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.24...@cloudflare/component-filter-bar@2.6.25) (2022-05-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.23...@cloudflare/component-filter-bar@2.6.24) (2022-05-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.22...@cloudflare/component-filter-bar@2.6.23) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.21...@cloudflare/component-filter-bar@2.6.22) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.20...@cloudflare/component-filter-bar@2.6.21) (2022-05-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.19...@cloudflare/component-filter-bar@2.6.20) (2022-05-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.18...@cloudflare/component-filter-bar@2.6.19) (2022-04-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.17...@cloudflare/component-filter-bar@2.6.18) (2022-04-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.16...@cloudflare/component-filter-bar@2.6.17) (2022-04-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.15...@cloudflare/component-filter-bar@2.6.16) (2022-04-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.14...@cloudflare/component-filter-bar@2.6.15) (2022-04-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.13...@cloudflare/component-filter-bar@2.6.14) (2022-04-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.12...@cloudflare/component-filter-bar@2.6.13) (2022-04-18)

### Bug Fixes

- **stratus:** WC-292 Reinstate workers metrics timeframe dropdown ([53ba024](http://stash.cfops.it:7999/fe/stratus/commits/53ba024))

## [2.6.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.11...@cloudflare/component-filter-bar@2.6.12) (2022-04-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.10...@cloudflare/component-filter-bar@2.6.11) (2022-04-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.9...@cloudflare/component-filter-bar@2.6.10) (2022-04-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.8...@cloudflare/component-filter-bar@2.6.9) (2022-04-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.7...@cloudflare/component-filter-bar@2.6.8) (2022-04-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.6...@cloudflare/component-filter-bar@2.6.7) (2022-04-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.5...@cloudflare/component-filter-bar@2.6.6) (2022-04-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.4...@cloudflare/component-filter-bar@2.6.5) (2022-04-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.3...@cloudflare/component-filter-bar@2.6.4) (2022-04-05)

### Bug Fixes

- UI-5158 fix combobox initial derived state ([fad8145](http://stash.cfops.it:7999/fe/stratus/commits/fad8145))

## [2.6.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.2...@cloudflare/component-filter-bar@2.6.3) (2022-04-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.1...@cloudflare/component-filter-bar@2.6.2) (2022-04-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.6.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.6.0...@cloudflare/component-filter-bar@2.6.1) (2022-04-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [2.6.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.94...@cloudflare/component-filter-bar@2.6.0) (2022-03-31)

### Features

- A11Y-100 add component-forms dep for filter bar ([195699d](http://stash.cfops.it:7999/fe/stratus/commits/195699d))

## [2.5.94](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.93...@cloudflare/component-filter-bar@2.5.94) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.93](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.92...@cloudflare/component-filter-bar@2.5.93) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.92](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.91...@cloudflare/component-filter-bar@2.5.92) (2022-03-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.91](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.90...@cloudflare/component-filter-bar@2.5.91) (2022-03-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.90](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.89...@cloudflare/component-filter-bar@2.5.90) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.89](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.88...@cloudflare/component-filter-bar@2.5.89) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.88](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.87...@cloudflare/component-filter-bar@2.5.88) (2022-03-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.87](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.86...@cloudflare/component-filter-bar@2.5.87) (2022-03-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.86](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.85...@cloudflare/component-filter-bar@2.5.86) (2022-03-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.85](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.84...@cloudflare/component-filter-bar@2.5.85) (2022-03-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.84](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.83...@cloudflare/component-filter-bar@2.5.84) (2022-03-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.83](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.82...@cloudflare/component-filter-bar@2.5.83) (2022-03-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.82](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.81...@cloudflare/component-filter-bar@2.5.82) (2022-03-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.81](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.80...@cloudflare/component-filter-bar@2.5.81) (2022-03-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.80](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.79...@cloudflare/component-filter-bar@2.5.80) (2022-03-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.79](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.78...@cloudflare/component-filter-bar@2.5.79) (2022-03-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.78](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.77...@cloudflare/component-filter-bar@2.5.78) (2022-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.77](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.76...@cloudflare/component-filter-bar@2.5.77) (2022-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.76](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.75...@cloudflare/component-filter-bar@2.5.76) (2022-03-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.75](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.74...@cloudflare/component-filter-bar@2.5.75) (2022-03-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.74](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.73...@cloudflare/component-filter-bar@2.5.74) (2022-03-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.73](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.72...@cloudflare/component-filter-bar@2.5.73) (2022-03-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.72](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.71...@cloudflare/component-filter-bar@2.5.72) (2022-03-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.71](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.70...@cloudflare/component-filter-bar@2.5.71) (2022-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.70](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.69...@cloudflare/component-filter-bar@2.5.70) (2022-03-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.69](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.68...@cloudflare/component-filter-bar@2.5.69) (2022-03-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.68](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.67...@cloudflare/component-filter-bar@2.5.68) (2022-02-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.67](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.66...@cloudflare/component-filter-bar@2.5.67) (2022-02-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.66](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.65...@cloudflare/component-filter-bar@2.5.66) (2022-02-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.65](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.64...@cloudflare/component-filter-bar@2.5.65) (2022-02-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.64](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.63...@cloudflare/component-filter-bar@2.5.64) (2022-02-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.63](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.62...@cloudflare/component-filter-bar@2.5.63) (2022-02-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.62](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.61...@cloudflare/component-filter-bar@2.5.62) (2022-02-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.61](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.60...@cloudflare/component-filter-bar@2.5.61) (2022-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.60](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.59...@cloudflare/component-filter-bar@2.5.60) (2022-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.59](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.58...@cloudflare/component-filter-bar@2.5.59) (2022-02-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.58](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.57...@cloudflare/component-filter-bar@2.5.58) (2022-02-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.57](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.56...@cloudflare/component-filter-bar@2.5.57) (2022-02-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.56](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.55...@cloudflare/component-filter-bar@2.5.56) (2022-02-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.55](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.54...@cloudflare/component-filter-bar@2.5.55) (2022-02-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.54](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.52...@cloudflare/component-filter-bar@2.5.54) (2022-01-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.52](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.51...@cloudflare/component-filter-bar@2.5.52) (2022-01-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.51](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.50...@cloudflare/component-filter-bar@2.5.51) (2022-01-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.50](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.49...@cloudflare/component-filter-bar@2.5.50) (2022-01-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.49](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.48...@cloudflare/component-filter-bar@2.5.49) (2022-01-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.48](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.47...@cloudflare/component-filter-bar@2.5.48) (2021-12-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.47](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.46...@cloudflare/component-filter-bar@2.5.47) (2021-12-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.46](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.45...@cloudflare/component-filter-bar@2.5.46) (2021-12-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.45](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.43...@cloudflare/component-filter-bar@2.5.45) (2021-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.44](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.43...@cloudflare/component-filter-bar@2.5.44) (2021-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.43](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.42...@cloudflare/component-filter-bar@2.5.43) (2021-12-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.42](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.41...@cloudflare/component-filter-bar@2.5.42) (2021-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.41](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.40...@cloudflare/component-filter-bar@2.5.41) (2021-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.40](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.39...@cloudflare/component-filter-bar@2.5.40) (2021-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.39](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.38...@cloudflare/component-filter-bar@2.5.39) (2021-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.38](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.37...@cloudflare/component-filter-bar@2.5.38) (2021-12-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.37](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.36...@cloudflare/component-filter-bar@2.5.37) (2021-12-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.36](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.35...@cloudflare/component-filter-bar@2.5.36) (2021-12-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.35](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.34...@cloudflare/component-filter-bar@2.5.35) (2021-11-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.34](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.33...@cloudflare/component-filter-bar@2.5.34) (2021-11-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.33](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.32...@cloudflare/component-filter-bar@2.5.33) (2021-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.32](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.31...@cloudflare/component-filter-bar@2.5.32) (2021-11-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.30...@cloudflare/component-filter-bar@2.5.31) (2021-11-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.29...@cloudflare/component-filter-bar@2.5.30) (2021-11-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.28...@cloudflare/component-filter-bar@2.5.29) (2021-11-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.27...@cloudflare/component-filter-bar@2.5.28) (2021-11-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.26...@cloudflare/component-filter-bar@2.5.27) (2021-11-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.25...@cloudflare/component-filter-bar@2.5.26) (2021-11-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.24...@cloudflare/component-filter-bar@2.5.25) (2021-11-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.23...@cloudflare/component-filter-bar@2.5.24) (2021-11-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.22...@cloudflare/component-filter-bar@2.5.23) (2021-11-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.21...@cloudflare/component-filter-bar@2.5.22) (2021-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.20...@cloudflare/component-filter-bar@2.5.21) (2021-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.19...@cloudflare/component-filter-bar@2.5.20) (2021-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.18...@cloudflare/component-filter-bar@2.5.19) (2021-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.17...@cloudflare/component-filter-bar@2.5.18) (2021-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.16...@cloudflare/component-filter-bar@2.5.17) (2021-11-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.13...@cloudflare/component-filter-bar@2.5.16) (2021-10-28)

### Bug Fixes

- **stratus:** UI-000: Ran yarn run v1.18.0 ([54f1c7e](http://stash.cfops.it:7999/fe/stratus/commits/54f1c7e))

## [2.5.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.12...@cloudflare/component-filter-bar@2.5.13) (2021-10-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.11...@cloudflare/component-filter-bar@2.5.12) (2021-10-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.10...@cloudflare/component-filter-bar@2.5.11) (2021-10-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.9...@cloudflare/component-filter-bar@2.5.10) (2021-09-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.8...@cloudflare/component-filter-bar@2.5.9) (2021-09-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.7...@cloudflare/component-filter-bar@2.5.8) (2021-09-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.6...@cloudflare/component-filter-bar@2.5.7) (2021-09-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.5...@cloudflare/component-filter-bar@2.5.6) (2021-09-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.4...@cloudflare/component-filter-bar@2.5.5) (2021-09-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.3...@cloudflare/component-filter-bar@2.5.4) (2021-09-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.2...@cloudflare/component-filter-bar@2.5.3) (2021-09-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.1...@cloudflare/component-filter-bar@2.5.2) (2021-09-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.5.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.5.0...@cloudflare/component-filter-bar@2.5.1) (2021-09-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [2.5.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.155...@cloudflare/component-filter-bar@2.5.0) (2021-09-22)

### Features

- **stratus:** DS-11276 Instantlogs tab POC ([de5cc1d](http://stash.cfops.it:7999/fe/stratus/commits/de5cc1d))

## [2.4.155](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.154...@cloudflare/component-filter-bar@2.4.155) (2021-09-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.154](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.153...@cloudflare/component-filter-bar@2.4.154) (2021-09-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.153](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.152...@cloudflare/component-filter-bar@2.4.153) (2021-09-17)

### Bug Fixes

- **component-filter-bar:** UI-4634 Fix filter cancel button appearance ([0f9f03f](http://stash.cfops.it:7999/fe/stratus/commits/0f9f03f))
- **component-filter-bar:** UI-4634 Update background color ([9d2cf69](http://stash.cfops.it:7999/fe/stratus/commits/9d2cf69))

## [2.4.152](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.150...@cloudflare/component-filter-bar@2.4.152) (2021-09-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.150](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.149...@cloudflare/component-filter-bar@2.4.150) (2021-08-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.149](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.148...@cloudflare/component-filter-bar@2.4.149) (2021-08-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.148](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.147...@cloudflare/component-filter-bar@2.4.148) (2021-08-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.147](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.145...@cloudflare/component-filter-bar@2.4.147) (2021-08-18)

### Bug Fixes

- **stratus:** UI-4574: fix npm packages ([497727f](http://stash.cfops.it:7999/fe/stratus/commits/497727f))

## [2.4.145](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.144...@cloudflare/component-filter-bar@2.4.145) (2021-08-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.144](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.143...@cloudflare/component-filter-bar@2.4.144) (2021-08-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.143](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.142...@cloudflare/component-filter-bar@2.4.143) (2021-08-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.142](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.141...@cloudflare/component-filter-bar@2.4.142) (2021-08-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.141](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.139...@cloudflare/component-filter-bar@2.4.141) (2021-07-27)

### Bug Fixes

- **stratus:** UI-4462: yarn update-package-with-wrong-version ([6c39f3e](http://stash.cfops.it:7999/fe/stratus/commits/6c39f3e))

## [2.4.139](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.138...@cloudflare/component-filter-bar@2.4.139) (2021-07-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.138](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.137...@cloudflare/component-filter-bar@2.4.138) (2021-07-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.137](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.136...@cloudflare/component-filter-bar@2.4.137) (2021-07-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.136](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.135...@cloudflare/component-filter-bar@2.4.136) (2021-07-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.135](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.134...@cloudflare/component-filter-bar@2.4.135) (2021-07-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.134](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.133...@cloudflare/component-filter-bar@2.4.134) (2021-06-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.133](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.132...@cloudflare/component-filter-bar@2.4.133) (2021-06-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.132](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.131...@cloudflare/component-filter-bar@2.4.132) (2021-06-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.131](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.130...@cloudflare/component-filter-bar@2.4.131) (2021-06-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.130](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.129...@cloudflare/component-filter-bar@2.4.130) (2021-06-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.129](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.128...@cloudflare/component-filter-bar@2.4.129) (2021-06-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.128](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.127...@cloudflare/component-filter-bar@2.4.128) (2021-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.127](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.126...@cloudflare/component-filter-bar@2.4.127) (2021-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.126](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.125...@cloudflare/component-filter-bar@2.4.126) (2021-06-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.125](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.124...@cloudflare/component-filter-bar@2.4.125) (2021-06-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.124](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.123...@cloudflare/component-filter-bar@2.4.124) (2021-06-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.123](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.122...@cloudflare/component-filter-bar@2.4.123) (2021-06-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.122](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.121...@cloudflare/component-filter-bar@2.4.122) (2021-06-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.121](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.118...@cloudflare/component-filter-bar@2.4.121) (2021-05-28)

### Bug Fixes

- **stratus:** UI-4337: Ran `yarn update-packages-with-wrong-version` ([1b5c822](http://stash.cfops.it:7999/fe/stratus/commits/1b5c822))
- **stratus:** UI-4337: Ran `yarn update-packages-with-wrong-version` ([691550e](http://stash.cfops.it:7999/fe/stratus/commits/691550e))

## [2.4.118](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.117...@cloudflare/component-filter-bar@2.4.118) (2021-05-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.117](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.116...@cloudflare/component-filter-bar@2.4.117) (2021-05-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.116](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.115...@cloudflare/component-filter-bar@2.4.116) (2021-04-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.115](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.114...@cloudflare/component-filter-bar@2.4.115) (2021-04-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.114](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.113...@cloudflare/component-filter-bar@2.4.114) (2021-04-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.113](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.112...@cloudflare/component-filter-bar@2.4.113) (2021-04-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.112](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.111...@cloudflare/component-filter-bar@2.4.112) (2021-04-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.111](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.110...@cloudflare/component-filter-bar@2.4.111) (2021-04-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.110](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.109...@cloudflare/component-filter-bar@2.4.110) (2021-04-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.109](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.108...@cloudflare/component-filter-bar@2.4.109) (2021-04-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.108](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.107...@cloudflare/component-filter-bar@2.4.108) (2021-04-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.107](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.105...@cloudflare/component-filter-bar@2.4.107) (2021-04-15)

### Bug Fixes

- **stratus:** UI-4238: Ran `yarn update-packages-with-wrong-version` ([baccb6f](http://stash.cfops.it:7999/fe/stratus/commits/baccb6f))

## [2.4.105](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.104...@cloudflare/component-filter-bar@2.4.105) (2021-04-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.104](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.103...@cloudflare/component-filter-bar@2.4.104) (2021-04-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.103](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.102...@cloudflare/component-filter-bar@2.4.103) (2021-04-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.102](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.101...@cloudflare/component-filter-bar@2.4.102) (2021-04-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.101](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.100...@cloudflare/component-filter-bar@2.4.101) (2021-03-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.100](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.99...@cloudflare/component-filter-bar@2.4.100) (2021-03-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.99](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.98...@cloudflare/component-filter-bar@2.4.99) (2021-03-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.98](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.97...@cloudflare/component-filter-bar@2.4.98) (2021-03-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.97](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.96...@cloudflare/component-filter-bar@2.4.97) (2021-03-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.96](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.95...@cloudflare/component-filter-bar@2.4.96) (2021-03-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.95](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.94...@cloudflare/component-filter-bar@2.4.95) (2021-03-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.94](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.93...@cloudflare/component-filter-bar@2.4.94) (2021-03-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.93](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.92...@cloudflare/component-filter-bar@2.4.93) (2021-03-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.92](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.91...@cloudflare/component-filter-bar@2.4.92) (2021-03-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.91](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.90...@cloudflare/component-filter-bar@2.4.91) (2021-03-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.90](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.89...@cloudflare/component-filter-bar@2.4.90) (2021-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.89](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.88...@cloudflare/component-filter-bar@2.4.89) (2021-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.88](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.87...@cloudflare/component-filter-bar@2.4.88) (2021-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.87](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.86...@cloudflare/component-filter-bar@2.4.87) (2021-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.86](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.85...@cloudflare/component-filter-bar@2.4.86) (2021-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.85](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.84...@cloudflare/component-filter-bar@2.4.85) (2021-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.84](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.83...@cloudflare/component-filter-bar@2.4.84) (2021-03-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.83](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.82...@cloudflare/component-filter-bar@2.4.83) (2021-02-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.82](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.81...@cloudflare/component-filter-bar@2.4.82) (2021-02-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.81](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.80...@cloudflare/component-filter-bar@2.4.81) (2021-02-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.80](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.79...@cloudflare/component-filter-bar@2.4.80) (2021-01-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.79](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.78...@cloudflare/component-filter-bar@2.4.79) (2021-01-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.78](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.77...@cloudflare/component-filter-bar@2.4.78) (2021-01-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.77](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.76...@cloudflare/component-filter-bar@2.4.77) (2021-01-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.76](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.75...@cloudflare/component-filter-bar@2.4.76) (2021-01-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.75](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.74...@cloudflare/component-filter-bar@2.4.75) (2021-01-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.74](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.73...@cloudflare/component-filter-bar@2.4.74) (2021-01-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.73](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.72...@cloudflare/component-filter-bar@2.4.73) (2021-01-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.72](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.71...@cloudflare/component-filter-bar@2.4.72) (2021-01-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.71](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.70...@cloudflare/component-filter-bar@2.4.71) (2021-01-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.70](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.69...@cloudflare/component-filter-bar@2.4.70) (2021-01-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.69](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.68...@cloudflare/component-filter-bar@2.4.69) (2020-12-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.68](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.67...@cloudflare/component-filter-bar@2.4.68) (2020-12-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.67](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.66...@cloudflare/component-filter-bar@2.4.67) (2020-12-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.66](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.65...@cloudflare/component-filter-bar@2.4.66) (2020-12-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.65](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.64...@cloudflare/component-filter-bar@2.4.65) (2020-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.64](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.63...@cloudflare/component-filter-bar@2.4.64) (2020-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.63](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.62...@cloudflare/component-filter-bar@2.4.63) (2020-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.62](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.61...@cloudflare/component-filter-bar@2.4.62) (2020-12-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.61](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.60...@cloudflare/component-filter-bar@2.4.61) (2020-12-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.60](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.59...@cloudflare/component-filter-bar@2.4.60) (2020-12-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.59](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.58...@cloudflare/component-filter-bar@2.4.59) (2020-12-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.58](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.57...@cloudflare/component-filter-bar@2.4.58) (2020-12-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.57](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.56...@cloudflare/component-filter-bar@2.4.57) (2020-12-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.56](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.55...@cloudflare/component-filter-bar@2.4.56) (2020-12-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.55](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.54...@cloudflare/component-filter-bar@2.4.55) (2020-12-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.54](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.53...@cloudflare/component-filter-bar@2.4.54) (2020-12-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.53](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.52...@cloudflare/component-filter-bar@2.4.53) (2020-12-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.52](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.51...@cloudflare/component-filter-bar@2.4.52) (2020-12-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.51](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.50...@cloudflare/component-filter-bar@2.4.51) (2020-12-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.50](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.48...@cloudflare/component-filter-bar@2.4.50) (2020-12-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.48](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.47...@cloudflare/component-filter-bar@2.4.48) (2020-12-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.47](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.46...@cloudflare/component-filter-bar@2.4.47) (2020-12-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.46](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.45...@cloudflare/component-filter-bar@2.4.46) (2020-12-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.45](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.44...@cloudflare/component-filter-bar@2.4.45) (2020-12-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.44](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.43...@cloudflare/component-filter-bar@2.4.44) (2020-12-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.43](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.42...@cloudflare/component-filter-bar@2.4.43) (2020-11-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.42](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.41...@cloudflare/component-filter-bar@2.4.42) (2020-11-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.41](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.40...@cloudflare/component-filter-bar@2.4.41) (2020-11-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.40](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.39...@cloudflare/component-filter-bar@2.4.40) (2020-11-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.39](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.38...@cloudflare/component-filter-bar@2.4.39) (2020-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.38](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.37...@cloudflare/component-filter-bar@2.4.38) (2020-11-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.37](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.36...@cloudflare/component-filter-bar@2.4.37) (2020-11-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.36](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.35...@cloudflare/component-filter-bar@2.4.36) (2020-11-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.35](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.34...@cloudflare/component-filter-bar@2.4.35) (2020-11-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.34](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.33...@cloudflare/component-filter-bar@2.4.34) (2020-11-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.33](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.32...@cloudflare/component-filter-bar@2.4.33) (2020-11-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.32](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.31...@cloudflare/component-filter-bar@2.4.32) (2020-11-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.30...@cloudflare/component-filter-bar@2.4.31) (2020-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.29...@cloudflare/component-filter-bar@2.4.30) (2020-11-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.28...@cloudflare/component-filter-bar@2.4.29) (2020-11-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.27...@cloudflare/component-filter-bar@2.4.28) (2020-11-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.26...@cloudflare/component-filter-bar@2.4.27) (2020-11-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.25...@cloudflare/component-filter-bar@2.4.26) (2020-11-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.24...@cloudflare/component-filter-bar@2.4.25) (2020-11-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.23...@cloudflare/component-filter-bar@2.4.24) (2020-11-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.22...@cloudflare/component-filter-bar@2.4.23) (2020-11-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.21...@cloudflare/component-filter-bar@2.4.22) (2020-10-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.20...@cloudflare/component-filter-bar@2.4.21) (2020-10-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.19...@cloudflare/component-filter-bar@2.4.20) (2020-10-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.18...@cloudflare/component-filter-bar@2.4.19) (2020-10-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.17...@cloudflare/component-filter-bar@2.4.18) (2020-10-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.16...@cloudflare/component-filter-bar@2.4.17) (2020-10-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.15...@cloudflare/component-filter-bar@2.4.16) (2020-10-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.14...@cloudflare/component-filter-bar@2.4.15) (2020-10-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.13...@cloudflare/component-filter-bar@2.4.14) (2020-10-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.12...@cloudflare/component-filter-bar@2.4.13) (2020-09-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.11...@cloudflare/component-filter-bar@2.4.12) (2020-09-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.10...@cloudflare/component-filter-bar@2.4.11) (2020-09-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.9...@cloudflare/component-filter-bar@2.4.10) (2020-09-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.8...@cloudflare/component-filter-bar@2.4.9) (2020-09-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.7...@cloudflare/component-filter-bar@2.4.8) (2020-09-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.6...@cloudflare/component-filter-bar@2.4.7) (2020-08-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.5...@cloudflare/component-filter-bar@2.4.6) (2020-08-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.4...@cloudflare/component-filter-bar@2.4.5) (2020-08-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.3...@cloudflare/component-filter-bar@2.4.4) (2020-08-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.2...@cloudflare/component-filter-bar@2.4.3) (2020-08-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.1...@cloudflare/component-filter-bar@2.4.2) (2020-08-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.4.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.4.0...@cloudflare/component-filter-bar@2.4.1) (2020-08-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [2.4.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.232...@cloudflare/component-filter-bar@2.4.0) (2020-08-11)

### Features

- **component-filter-bar:** LOUI-1767 add isUTC prop to pass to timeperi ([86b398b](http://stash.cfops.it:7999/fe/stratus/commits/86b398b))

## [2.3.232](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.231...@cloudflare/component-filter-bar@2.3.232) (2020-08-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.231](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.230...@cloudflare/component-filter-bar@2.3.231) (2020-08-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.230](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.229...@cloudflare/component-filter-bar@2.3.230) (2020-08-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.229](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.228...@cloudflare/component-filter-bar@2.3.229) (2020-08-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.228](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.227...@cloudflare/component-filter-bar@2.3.228) (2020-07-31)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.227](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.226...@cloudflare/component-filter-bar@2.3.227) (2020-07-31)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.226](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.225...@cloudflare/component-filter-bar@2.3.226) (2020-07-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.225](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.224...@cloudflare/component-filter-bar@2.3.225) (2020-07-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.224](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.223...@cloudflare/component-filter-bar@2.3.224) (2020-07-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.223](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.222...@cloudflare/component-filter-bar@2.3.223) (2020-07-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.222](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.221...@cloudflare/component-filter-bar@2.3.222) (2020-07-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.221](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.220...@cloudflare/component-filter-bar@2.3.221) (2020-07-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.220](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.219...@cloudflare/component-filter-bar@2.3.220) (2020-07-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.219](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.218...@cloudflare/component-filter-bar@2.3.219) (2020-07-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.218](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.217...@cloudflare/component-filter-bar@2.3.218) (2020-07-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.217](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.216...@cloudflare/component-filter-bar@2.3.217) (2020-07-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.216](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.215...@cloudflare/component-filter-bar@2.3.216) (2020-07-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.215](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.214...@cloudflare/component-filter-bar@2.3.215) (2020-07-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.214](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.213...@cloudflare/component-filter-bar@2.3.214) (2020-07-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.213](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.212...@cloudflare/component-filter-bar@2.3.213) (2020-07-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.212](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.211...@cloudflare/component-filter-bar@2.3.212) (2020-07-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.211](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.210...@cloudflare/component-filter-bar@2.3.211) (2020-07-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.210](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.209...@cloudflare/component-filter-bar@2.3.210) (2020-07-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.209](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.208...@cloudflare/component-filter-bar@2.3.209) (2020-07-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.208](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.207...@cloudflare/component-filter-bar@2.3.208) (2020-07-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.207](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.206...@cloudflare/component-filter-bar@2.3.207) (2020-07-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.206](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.205...@cloudflare/component-filter-bar@2.3.206) (2020-07-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.205](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.204...@cloudflare/component-filter-bar@2.3.205) (2020-07-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.204](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.203...@cloudflare/component-filter-bar@2.3.204) (2020-07-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.203](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.202...@cloudflare/component-filter-bar@2.3.203) (2020-06-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.202](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.201...@cloudflare/component-filter-bar@2.3.202) (2020-06-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.201](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.200...@cloudflare/component-filter-bar@2.3.201) (2020-06-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.200](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.199...@cloudflare/component-filter-bar@2.3.200) (2020-06-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.199](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.198...@cloudflare/component-filter-bar@2.3.199) (2020-06-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.198](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.197...@cloudflare/component-filter-bar@2.3.198) (2020-06-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.197](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.196...@cloudflare/component-filter-bar@2.3.197) (2020-06-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.196](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.195...@cloudflare/component-filter-bar@2.3.196) (2020-06-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.195](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.194...@cloudflare/component-filter-bar@2.3.195) (2020-06-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.194](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.193...@cloudflare/component-filter-bar@2.3.194) (2020-06-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.193](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.192...@cloudflare/component-filter-bar@2.3.193) (2020-06-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.192](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.191...@cloudflare/component-filter-bar@2.3.192) (2020-06-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.191](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.190...@cloudflare/component-filter-bar@2.3.191) (2020-06-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.190](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.189...@cloudflare/component-filter-bar@2.3.190) (2020-06-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.189](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.188...@cloudflare/component-filter-bar@2.3.189) (2020-05-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.188](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.187...@cloudflare/component-filter-bar@2.3.188) (2020-05-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.187](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.186...@cloudflare/component-filter-bar@2.3.187) (2020-05-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.186](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.185...@cloudflare/component-filter-bar@2.3.186) (2020-05-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.185](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.184...@cloudflare/component-filter-bar@2.3.185) (2020-05-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.184](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.183...@cloudflare/component-filter-bar@2.3.184) (2020-05-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.183](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.182...@cloudflare/component-filter-bar@2.3.183) (2020-05-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.182](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.181...@cloudflare/component-filter-bar@2.3.182) (2020-05-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.181](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.180...@cloudflare/component-filter-bar@2.3.181) (2020-05-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.180](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.179...@cloudflare/component-filter-bar@2.3.180) (2020-05-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.179](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.178...@cloudflare/component-filter-bar@2.3.179) (2020-05-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.178](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.177...@cloudflare/component-filter-bar@2.3.178) (2020-05-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.177](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.176...@cloudflare/component-filter-bar@2.3.177) (2020-05-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.176](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.175...@cloudflare/component-filter-bar@2.3.176) (2020-05-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.175](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.174...@cloudflare/component-filter-bar@2.3.175) (2020-05-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.174](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.173...@cloudflare/component-filter-bar@2.3.174) (2020-05-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.173](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.172...@cloudflare/component-filter-bar@2.3.173) (2020-04-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.172](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.170...@cloudflare/component-filter-bar@2.3.172) (2020-04-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.170](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.168...@cloudflare/component-filter-bar@2.3.170) (2020-04-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.168](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.167...@cloudflare/component-filter-bar@2.3.168) (2020-04-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.167](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.166...@cloudflare/component-filter-bar@2.3.167) (2020-04-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.166](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.165...@cloudflare/component-filter-bar@2.3.166) (2020-04-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.165](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.164...@cloudflare/component-filter-bar@2.3.165) (2020-04-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.164](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.163...@cloudflare/component-filter-bar@2.3.164) (2020-04-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.163](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.162...@cloudflare/component-filter-bar@2.3.163) (2020-04-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.162](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.161...@cloudflare/component-filter-bar@2.3.162) (2020-04-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.161](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.160...@cloudflare/component-filter-bar@2.3.161) (2020-04-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.160](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.159...@cloudflare/component-filter-bar@2.3.160) (2020-04-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.159](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.158...@cloudflare/component-filter-bar@2.3.159) (2020-04-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.158](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.157...@cloudflare/component-filter-bar@2.3.158) (2020-04-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.157](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.156...@cloudflare/component-filter-bar@2.3.157) (2020-04-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.156](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.155...@cloudflare/component-filter-bar@2.3.156) (2020-04-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.155](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.154...@cloudflare/component-filter-bar@2.3.155) (2020-04-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.154](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.153...@cloudflare/component-filter-bar@2.3.154) (2020-04-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.153](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.152...@cloudflare/component-filter-bar@2.3.153) (2020-04-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.152](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.151...@cloudflare/component-filter-bar@2.3.152) (2020-04-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.151](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.150...@cloudflare/component-filter-bar@2.3.151) (2020-04-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.150](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.148...@cloudflare/component-filter-bar@2.3.150) (2020-04-04)

### Bug Fixes

- **stratus:** UI-3344: Run `yarn update-package-with-wrong-version` cmd ([c85f943](http://stash.cfops.it:7999/fe/stratus/commits/c85f943))

## [2.3.148](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.147...@cloudflare/component-filter-bar@2.3.148) (2020-03-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.147](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.146...@cloudflare/component-filter-bar@2.3.147) (2020-03-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.146](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.145...@cloudflare/component-filter-bar@2.3.146) (2020-03-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.145](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.144...@cloudflare/component-filter-bar@2.3.145) (2020-03-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.144](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.143...@cloudflare/component-filter-bar@2.3.144) (2020-03-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.143](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.142...@cloudflare/component-filter-bar@2.3.143) (2020-03-23)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.142](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.141...@cloudflare/component-filter-bar@2.3.142) (2020-03-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.141](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.140...@cloudflare/component-filter-bar@2.3.141) (2020-03-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.140](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.139...@cloudflare/component-filter-bar@2.3.140) (2020-03-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.139](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.138...@cloudflare/component-filter-bar@2.3.139) (2020-03-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.138](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.137...@cloudflare/component-filter-bar@2.3.138) (2020-03-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.137](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.136...@cloudflare/component-filter-bar@2.3.137) (2020-03-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.136](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.131...@cloudflare/component-filter-bar@2.3.136) (2020-03-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.135](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.131...@cloudflare/component-filter-bar@2.3.135) (2020-03-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.134](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.131...@cloudflare/component-filter-bar@2.3.134) (2020-03-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.133](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.131...@cloudflare/component-filter-bar@2.3.133) (2020-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.132](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.131...@cloudflare/component-filter-bar@2.3.132) (2020-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.131](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.130...@cloudflare/component-filter-bar@2.3.131) (2020-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.130](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.129...@cloudflare/component-filter-bar@2.3.130) (2020-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.129](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.128...@cloudflare/component-filter-bar@2.3.129) (2020-03-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.128](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.128) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.127](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.127) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.126](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.126) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.125](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.125) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.124](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.124) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.123](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.123) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.122](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.122) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.121](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.121) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.120](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.120) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.119](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.119) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.118](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.118) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.117](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.117) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.116](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.116) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.115](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.115) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.114](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.114) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.113](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.112...@cloudflare/component-filter-bar@2.3.113) (2020-03-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.112](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.111...@cloudflare/component-filter-bar@2.3.112) (2020-03-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.111](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.110...@cloudflare/component-filter-bar@2.3.111) (2020-03-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.110](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.109...@cloudflare/component-filter-bar@2.3.110) (2020-03-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.109](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.108...@cloudflare/component-filter-bar@2.3.109) (2020-03-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.108](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.107...@cloudflare/component-filter-bar@2.3.108) (2020-02-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.107](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.106...@cloudflare/component-filter-bar@2.3.107) (2020-02-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.106](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.105...@cloudflare/component-filter-bar@2.3.106) (2020-02-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.105](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.104...@cloudflare/component-filter-bar@2.3.105) (2020-02-24)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.104](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.103...@cloudflare/component-filter-bar@2.3.104) (2020-02-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.103](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.102...@cloudflare/component-filter-bar@2.3.103) (2020-02-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.102](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.101...@cloudflare/component-filter-bar@2.3.102) (2020-02-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.101](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.100...@cloudflare/component-filter-bar@2.3.101) (2020-02-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.100](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.99...@cloudflare/component-filter-bar@2.3.100) (2020-02-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.99](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.98...@cloudflare/component-filter-bar@2.3.99) (2020-02-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.98](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.97...@cloudflare/component-filter-bar@2.3.98) (2020-02-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.97](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.96...@cloudflare/component-filter-bar@2.3.97) (2020-02-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.96](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.95...@cloudflare/component-filter-bar@2.3.96) (2020-02-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.95](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.94...@cloudflare/component-filter-bar@2.3.95) (2020-02-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.94](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.93...@cloudflare/component-filter-bar@2.3.94) (2020-02-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.93](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.92...@cloudflare/component-filter-bar@2.3.93) (2020-02-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.92](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.90...@cloudflare/component-filter-bar@2.3.92) (2020-02-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.90](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.89...@cloudflare/component-filter-bar@2.3.90) (2020-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.89](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.88...@cloudflare/component-filter-bar@2.3.89) (2020-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.88](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.87...@cloudflare/component-filter-bar@2.3.88) (2020-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.87](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.86...@cloudflare/component-filter-bar@2.3.87) (2020-02-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.86](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.85...@cloudflare/component-filter-bar@2.3.86) (2020-02-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.85](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.84...@cloudflare/component-filter-bar@2.3.85) (2020-02-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.84](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.83...@cloudflare/component-filter-bar@2.3.84) (2020-02-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.83](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.81...@cloudflare/component-filter-bar@2.3.83) (2020-02-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.82](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.81...@cloudflare/component-filter-bar@2.3.82) (2020-02-02)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.81](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.80...@cloudflare/component-filter-bar@2.3.81) (2020-01-31)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.80](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.79...@cloudflare/component-filter-bar@2.3.80) (2020-01-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.79](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.78...@cloudflare/component-filter-bar@2.3.79) (2020-01-29)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.78](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.76...@cloudflare/component-filter-bar@2.3.78) (2020-01-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.77](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.76...@cloudflare/component-filter-bar@2.3.77) (2020-01-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.76](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.75...@cloudflare/component-filter-bar@2.3.76) (2020-01-20)

### Bug Fixes

- LOUI-1244 Prevent duplicates in AnalyticsReport ([d3a88e8](http://stash.cfops.it:7999/fe/stratus/commits/d3a88e8))

## [2.3.75](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.74...@cloudflare/component-filter-bar@2.3.75) (2020-01-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.74](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.73...@cloudflare/component-filter-bar@2.3.74) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.73](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.72...@cloudflare/component-filter-bar@2.3.73) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.72](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.71...@cloudflare/component-filter-bar@2.3.72) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.71](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.70...@cloudflare/component-filter-bar@2.3.71) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.70](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.69...@cloudflare/component-filter-bar@2.3.70) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.69](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.67...@cloudflare/component-filter-bar@2.3.69) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.68](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.67...@cloudflare/component-filter-bar@2.3.68) (2020-01-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.67](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.66...@cloudflare/component-filter-bar@2.3.67) (2020-01-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.66](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.65...@cloudflare/component-filter-bar@2.3.66) (2020-01-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.65](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.63...@cloudflare/component-filter-bar@2.3.65) (2020-01-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.64](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.63...@cloudflare/component-filter-bar@2.3.64) (2020-01-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.63](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.62...@cloudflare/component-filter-bar@2.3.63) (2020-01-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.62](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.61...@cloudflare/component-filter-bar@2.3.62) (2020-01-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.61](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.60...@cloudflare/component-filter-bar@2.3.61) (2020-01-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.60](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.59...@cloudflare/component-filter-bar@2.3.60) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.59](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.58...@cloudflare/component-filter-bar@2.3.59) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.58](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.57...@cloudflare/component-filter-bar@2.3.58) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.57](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.56...@cloudflare/component-filter-bar@2.3.57) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.56](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.55...@cloudflare/component-filter-bar@2.3.56) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.55](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.54...@cloudflare/component-filter-bar@2.3.55) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.54](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.53...@cloudflare/component-filter-bar@2.3.54) (2020-01-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.53](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.52...@cloudflare/component-filter-bar@2.3.53) (2020-01-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.52](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.51...@cloudflare/component-filter-bar@2.3.52) (2020-01-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.51](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.50...@cloudflare/component-filter-bar@2.3.51) (2020-01-08)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.50](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.49...@cloudflare/component-filter-bar@2.3.50) (2020-01-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.49](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.48...@cloudflare/component-filter-bar@2.3.49) (2020-01-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.48](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.47...@cloudflare/component-filter-bar@2.3.48) (2020-01-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.47](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.46...@cloudflare/component-filter-bar@2.3.47) (2019-12-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.46](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.45...@cloudflare/component-filter-bar@2.3.46) (2019-12-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.45](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.44...@cloudflare/component-filter-bar@2.3.45) (2019-12-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.44](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.43...@cloudflare/component-filter-bar@2.3.44) (2019-12-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.43](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.41...@cloudflare/component-filter-bar@2.3.43) (2019-12-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.42](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.41...@cloudflare/component-filter-bar@2.3.42) (2019-12-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.41](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.40...@cloudflare/component-filter-bar@2.3.41) (2019-12-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.40](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.39...@cloudflare/component-filter-bar@2.3.40) (2019-12-15)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.39](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.38...@cloudflare/component-filter-bar@2.3.39) (2019-12-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.38](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.37...@cloudflare/component-filter-bar@2.3.38) (2019-12-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.37](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.36...@cloudflare/component-filter-bar@2.3.37) (2019-12-12)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.36](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.35...@cloudflare/component-filter-bar@2.3.36) (2019-12-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.35](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.34...@cloudflare/component-filter-bar@2.3.35) (2019-12-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.34](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.33...@cloudflare/component-filter-bar@2.3.34) (2019-12-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.33](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.32...@cloudflare/component-filter-bar@2.3.33) (2019-12-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.32](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.30...@cloudflare/component-filter-bar@2.3.32) (2019-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.31](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.30...@cloudflare/component-filter-bar@2.3.31) (2019-12-07)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.30](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.29...@cloudflare/component-filter-bar@2.3.30) (2019-12-06)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.29](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.28...@cloudflare/component-filter-bar@2.3.29) (2019-12-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.28](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.27...@cloudflare/component-filter-bar@2.3.28) (2019-12-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.27](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.26...@cloudflare/component-filter-bar@2.3.27) (2019-12-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.26](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.24...@cloudflare/component-filter-bar@2.3.26) (2019-12-05)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.25](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.24...@cloudflare/component-filter-bar@2.3.25) (2019-12-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.24](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.22...@cloudflare/component-filter-bar@2.3.24) (2019-11-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.23](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.22...@cloudflare/component-filter-bar@2.3.23) (2019-11-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.22](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.20...@cloudflare/component-filter-bar@2.3.22) (2019-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.21](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.20...@cloudflare/component-filter-bar@2.3.21) (2019-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.20](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.19...@cloudflare/component-filter-bar@2.3.20) (2019-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.19](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.18...@cloudflare/component-filter-bar@2.3.19) (2019-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.18](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.17...@cloudflare/component-filter-bar@2.3.18) (2019-11-22)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.17](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.16...@cloudflare/component-filter-bar@2.3.17) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.16](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.15...@cloudflare/component-filter-bar@2.3.16) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.15](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.14...@cloudflare/component-filter-bar@2.3.15) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.13...@cloudflare/component-filter-bar@2.3.14) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.12...@cloudflare/component-filter-bar@2.3.13) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.11...@cloudflare/component-filter-bar@2.3.12) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.10...@cloudflare/component-filter-bar@2.3.11) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.9...@cloudflare/component-filter-bar@2.3.10) (2019-11-21)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.8...@cloudflare/component-filter-bar@2.3.9) (2019-11-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.6...@cloudflare/component-filter-bar@2.3.8) (2019-11-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.6...@cloudflare/component-filter-bar@2.3.7) (2019-11-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.5...@cloudflare/component-filter-bar@2.3.6) (2019-11-14)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.4...@cloudflare/component-filter-bar@2.3.5) (2019-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.3...@cloudflare/component-filter-bar@2.3.4) (2019-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.2...@cloudflare/component-filter-bar@2.3.3) (2019-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.1...@cloudflare/component-filter-bar@2.3.2) (2019-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.3.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.3.0...@cloudflare/component-filter-bar@2.3.1) (2019-11-13)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [2.3.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.10...@cloudflare/component-filter-bar@2.3.0) (2019-11-13)

### Features

- **stratus:** UI-2885 Update ArrowSwivel to use new color api for Icon ([10344ec](http://stash.cfops.it:7999/fe/stratus/commits/10344ec))

# [2.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.10...@cloudflare/component-filter-bar@2.2.0) (2019-11-12)

### Features

- **stratus:** UI-2885 Update ArrowSwivel to use new color api for Icon ([10344ec](http://stash.cfops.it:7999/fe/stratus/commits/10344ec))

## [2.1.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.9...@cloudflare/component-filter-bar@2.1.10) (2019-10-28)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.8...@cloudflare/component-filter-bar@2.1.9) (2019-10-26)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.7...@cloudflare/component-filter-bar@2.1.8) (2019-10-25)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.5...@cloudflare/component-filter-bar@2.1.7) (2019-10-25)

### Bug Fixes

- **stratus:** UI-2859: bump all package versions ([4cb3c90](http://stash.cfops.it:7999/fe/stratus/commits/4cb3c90))
- **stratus:** UI-2859: bump all package versions ([6db21c2](http://stash.cfops.it:7999/fe/stratus/commits/6db21c2))

## [2.1.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.5...@cloudflare/component-filter-bar@2.1.6) (2019-10-25)

### Bug Fixes

- **stratus:** UI-2859: bump all package versions ([4cb3c90](http://stash.cfops.it:7999/fe/stratus/commits/4cb3c90))
- **stratus:** UI-2859: bump all package versions ([6db21c2](http://stash.cfops.it:7999/fe/stratus/commits/6db21c2))

## [2.1.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.4...@cloudflare/component-filter-bar@2.1.5) (2019-10-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.3...@cloudflare/component-filter-bar@2.1.4) (2019-10-01)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.2...@cloudflare/component-filter-bar@2.1.3) (2019-09-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.1...@cloudflare/component-filter-bar@2.1.2) (2019-09-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [2.1.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.1.0...@cloudflare/component-filter-bar@2.1.1) (2019-09-30)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [2.1.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@2.0.0...@cloudflare/component-filter-bar@2.1.0) (2019-09-30)

### Bug Fixes

- **component-filter-bar:** UI-2738 Update docs to include missing props ([bba8cd2](http://stash.cfops.it:7999/fe/stratus/commits/bba8cd2))

### Features

- **component-filter-bar:** UI-2738 Add filterBar docs ([f9b061a](http://stash.cfops.it:7999/fe/stratus/commits/f9b061a))
- **component-filter-bar:** UI-2738 Add initial docw ([a7b510b](http://stash.cfops.it:7999/fe/stratus/commits/a7b510b))
- **component-filter-bar:** UI-2738 Update docs and remove mdx compatabi ([0768e89](http://stash.cfops.it:7999/fe/stratus/commits/0768e89))

# [2.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.14...@cloudflare/component-filter-bar@2.0.0) (2019-09-25)

### Bug Fixes

- **component-filter-bar:** UI-2750 Add sitckyfill cleanup on unmount ([855bd85](http://stash.cfops.it:7999/fe/stratus/commits/855bd85))

### Features

- **component-filter-bar:** UI-2750 Add sticky prop ([215ca23](http://stash.cfops.it:7999/fe/stratus/commits/215ca23))
- **component-filter-bar:** UI-2750 Refactor FilterBar into a larger mor ([09516ed](http://stash.cfops.it:7999/fe/stratus/commits/09516ed))
- **component-filter-bar:** UI-2750 Remove unused dependencies from Anal ([ef5575a](http://stash.cfops.it:7999/fe/stratus/commits/ef5575a))
- **component-filter-bar:** UI-2750 Use spread operator to remove positi ([1bf0c44](http://stash.cfops.it:7999/fe/stratus/commits/1bf0c44))

### BREAKING CHANGES

- **component-filter-bar:** Has new required props

## [1.2.14](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.13...@cloudflare/component-filter-bar@1.2.14) (2019-09-20)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.13](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.12...@cloudflare/component-filter-bar@1.2.13) (2019-09-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.12](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.11...@cloudflare/component-filter-bar@1.2.12) (2019-09-19)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.11](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.10...@cloudflare/component-filter-bar@1.2.11) (2019-09-18)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.9...@cloudflare/component-filter-bar@1.2.10) (2019-09-17)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.8...@cloudflare/component-filter-bar@1.2.9) (2019-09-16)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.8](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.7...@cloudflare/component-filter-bar@1.2.8) (2019-09-11)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.7](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.6...@cloudflare/component-filter-bar@1.2.7) (2019-09-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.5...@cloudflare/component-filter-bar@1.2.6) (2019-09-10)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.4...@cloudflare/component-filter-bar@1.2.5) (2019-09-09)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.3...@cloudflare/component-filter-bar@1.2.4) (2019-09-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.2...@cloudflare/component-filter-bar@1.2.3) (2019-09-04)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.1...@cloudflare/component-filter-bar@1.2.2) (2019-09-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.2.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.2.0...@cloudflare/component-filter-bar@1.2.1) (2019-09-03)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# [1.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.1.3...@cloudflare/component-filter-bar@1.2.0) (2019-09-02)

### Bug Fixes

- **component-filter-bar:** UI-2649 Fix import package name ([fca8334](http://stash.cfops.it:7999/fe/stratus/commits/fca8334))
- **component-filter-bar:** UI-2649 Update fixtures and remove uneeded te ([ab17bfa](http://stash.cfops.it:7999/fe/stratus/commits/ab17bfa))

### Features

- **component-filter-bar:** UI-2641 MIgrate FilterBar to its own compone ([bbdfe82](http://stash.cfops.it:7999/fe/stratus/commits/bbdfe82))

## [1.1.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.1.2...@cloudflare/component-filter-bar@1.1.3) (2019-08-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.1.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.1.1...@cloudflare/component-filter-bar@1.1.2) (2019-08-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

## [1.1.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/component-filter-bar@1.1.0...@cloudflare/component-filter-bar@1.1.1) (2019-08-27)

**Note:** Version bump only for package @cloudflare/component-filter-bar

# 1.1.0 (2019-08-23)

### Bug Fixes

- **component-filter-bar:** UI-2641 Fix broken import paths ([d58835f](http://stash.cfops.it:7999/fe/stratus/commits/d58835f))
- **component-filter-bar:** UI-2641 Fix more broken import paths ([274cfc8](http://stash.cfops.it:7999/fe/stratus/commits/274cfc8))
- **component-filter-bar:** UI-2641 Fix tests ([b176218](http://stash.cfops.it:7999/fe/stratus/commits/b176218))
- **component-filter-bar:** UI-2641 Move fixtures into separate folder ([82b21d0](http://stash.cfops.it:7999/fe/stratus/commits/82b21d0))
- **component-filter-bar:** UI-2641 Move react to peer deps and remove un ([080da76](http://stash.cfops.it:7999/fe/stratus/commits/080da76))
- **component-filter-bar:** UI-2641 Remove uneeded functions and tests th ([ed218ff](http://stash.cfops.it:7999/fe/stratus/commits/ed218ff))
- **component-filter-bar:** UI-2641 Update to latest changes from common ([b2bb644](http://stash.cfops.it:7999/fe/stratus/commits/b2bb644))
- **component-filter-bar:** UI-2641 Use latest v5 release for query-strin ([c69a5c6](http://stash.cfops.it:7999/fe/stratus/commits/c69a5c6))
- **stratus:** UI-2641 Add metadata to other components ([2fe3798](http://stash.cfops.it:7999/fe/stratus/commits/2fe3798))

### Features

- **component-filter-bar:** UI-2641 Create FilterBar base package struct ([35cc67f](http://stash.cfops.it:7999/fe/stratus/commits/35cc67f))
- **component-filter-bar:** UI-2641 MIgrate FilterBar to its own compone ([78a033b](http://stash.cfops.it:7999/fe/stratus/commits/78a033b))
