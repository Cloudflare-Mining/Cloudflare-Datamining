# Change Log

## 1.3.5

### Patch Changes

- 2daabe2c0a: Accept React 18 and 19 in the peer ranges of packages whose code already runs on React 19. Exceptions: the TimePeriodPicker re-exported by `component-forms` and `component-forms-formik` still fails on React 19 (react-dates legacy context) until `component-time-period-picker` is fixed, and `component-menu`'s `confirm` option opens its dialog through `component-modals`, whose `ModalContainer` loses its exit transition on React 19 under the automatic JSX runtime until `component-modals` is fixed.

  Some of these packages still depend on packages whose React peers stop at `^17` (`component-input`, `component-toast`, `component-card`, `util-responsive`, `component-time-period-picker`, `component-modals`, `component-tooltip`, `intl-react`), so React 19 installs keep reporting those peer conflicts until the dependencies are released with wider ranges.

## 1.3.4

### Patch Changes

- fc455fa761: Require explicit opt-in before injecting source-file debug attributes into package build artifacts.

## 1.3.3

### Patch Changes

- 1bc29ca267: Fix: Use IS_RELEASE_CANDIDATE to enable a11y source file attributes in preview builds

## 1.3.2

### Patch Changes

- 625b95cb19: Add data-source-file attributes to JSX elements for a11y debugging (non-production only)

## 1.3.1

### Patch Changes

- 52f9f28c13: fixes a bug with removing captured event listeners

## 1.3.0

### Minor Changes

- c7299ac5ac: upgrades components to support react 17 event bubbling

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [1.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-hooks@1.1.0...@cloudflare/util-hooks@1.2.0) (2022-03-04)

### Features

- **util-hooks:** EW-6035 Add useDebounce ([fdf3c2b](http://stash.cfops.it:7999/fe/stratus/commits/fdf3c2b))

# 1.1.0 (2022-01-13)

### Bug Fixes

- **util-hooks:** A11Y-591 Move useRenderOnResize to util-hooks ([2ac77fa](http://stash.cfops.it:7999/fe/stratus/commits/2ac77fa))

### Features

- **util-hooks:** A11Y-591 Create util-hooks package ([7e212bb](http://stash.cfops.it:7999/fe/stratus/commits/7e212bb))
