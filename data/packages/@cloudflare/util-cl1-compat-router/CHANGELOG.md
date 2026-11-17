# @cloudflare/util-cl1-compat-router

## 3.0.2

### Patch Changes

- 2daabe2c0a: Accept React 18 and 19 in the peer ranges of packages whose code already runs on React 19. Exceptions: the TimePeriodPicker re-exported by `component-forms` and `component-forms-formik` still fails on React 19 (react-dates legacy context) until `component-time-period-picker` is fixed, and `component-menu`'s `confirm` option opens its dialog through `component-modals`, whose `ModalContainer` loses its exit transition on React 19 under the automatic JSX runtime until `component-modals` is fixed.

  Some of these packages still depend on packages whose React peers stop at `^17` (`component-input`, `component-toast`, `component-card`, `util-responsive`, `component-time-period-picker`, `component-modals`, `component-tooltip`, `intl-react`), so React 19 installs keep reporting those peer conflicts until the dependencies are released with wider ranges.

## 3.0.1

### Patch Changes

- fc455fa761: Require explicit opt-in before injecting source-file debug attributes into package build artifacts.

## 3.0.0

### Major Changes

- abfced25d3: Add router location to the CL1 compat router context

## 2.0.0

### Major Changes

- cc0e804d69: Use util-cl1-compat-router to decouple from react-router versions
