# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [8.0.10](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.9...@cloudflare/util-en-garde@8.0.10) (2022-05-03)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.9](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.6...@cloudflare/util-en-garde@8.0.9) (2021-10-28)


### Bug Fixes

* **stratus:** UI-000: Ran yarn run v1.18.0 ([54f1c7e](http://stash.cfops.it:7999/fe/stratus/commits/54f1c7e))





## [8.0.6](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.5...@cloudflare/util-en-garde@8.0.6) (2021-04-23)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.5](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.4...@cloudflare/util-en-garde@8.0.5) (2020-12-11)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.3...@cloudflare/util-en-garde@8.0.4) (2020-12-11)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.2...@cloudflare/util-en-garde@8.0.3) (2020-12-11)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.1...@cloudflare/util-en-garde@8.0.2) (2020-08-12)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [8.0.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@8.0.0...@cloudflare/util-en-garde@8.0.1) (2020-07-28)

**Note:** Version bump only for package @cloudflare/util-en-garde





# [8.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.2.0...@cloudflare/util-en-garde@8.0.0) (2020-07-28)


### Bug Fixes

* **util-en-garde:** TSX-168 Allow optional keys to be missing ([5b3ceb2](http://stash.cfops.it:7999/fe/stratus/commits/5b3ceb2))


### BREAKING CHANGES

* **util-en-garde:** Previously if an optional key was missing while checking with an object's type
guard, it would say that it did NOT match the decoded type. Going forward, it will say that it DOES
match the decoded type.





# [7.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.1.2...@cloudflare/util-en-garde@7.2.0) (2020-07-17)


### Features

* **util-en-garde:** UI-3626: Add exact codec ([82050f2](http://stash.cfops.it:7999/fe/stratus/commits/82050f2))





## [7.1.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.1.0...@cloudflare/util-en-garde@7.1.2) (2020-04-27)

**Note:** Version bump only for package @cloudflare/util-en-garde





# [7.1.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.0.3...@cloudflare/util-en-garde@7.1.0) (2020-04-09)


### Features

* **util-en-garde:** ONB-518 Adding instanceof codec ([adec03a](http://stash.cfops.it:7999/fe/stratus/commits/adec03a))





## [7.0.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.0.2...@cloudflare/util-en-garde@7.0.3) (2020-03-11)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [7.0.2](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@7.0.0...@cloudflare/util-en-garde@7.0.2) (2020-02-12)

**Note:** Version bump only for package @cloudflare/util-en-garde





# [7.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.4.4...@cloudflare/util-en-garde@7.0.0) (2020-02-10)


### Bug Fixes

* **util-en-garde:** TSX-163 Remove empty tuple types ([c7b8320](http://stash.cfops.it:7999/fe/stratus/commits/c7b8320))


### Features

* **util-en-garde:** TSX-163 Add emptyArray codec ([230bd4d](http://stash.cfops.it:7999/fe/stratus/commits/230bd4d))


### BREAKING CHANGES

* **util-en-garde:** Any consumer of eg.tuple trying to use an empty array should switch to
eg.emptyArray as eg.tuple will no longer accept an empty array.





## [6.4.4](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.4.0...@cloudflare/util-en-garde@6.4.4) (2020-02-02)

**Note:** Version bump only for package @cloudflare/util-en-garde





## [6.4.3](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.4.0...@cloudflare/util-en-garde@6.4.3) (2020-02-02)

**Note:** Version bump only for package @cloudflare/util-en-garde





# [6.4.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.2.0...@cloudflare/util-en-garde@6.4.0) (2019-12-05)


### Features

* **util-en-garde:** ONB-296 Add useful utils and enum support ([538c10a](http://stash.cfops.it:7999/fe/stratus/commits/538c10a))
* **util-en-garde:** TSX-159 Add branded types ([daba6dc](http://stash.cfops.it:7999/fe/stratus/commits/daba6dc))





# [6.3.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.2.0...@cloudflare/util-en-garde@6.3.0) (2019-12-03)


### Features

* **util-en-garde:** TSX-159 Add branded types ([daba6dc](http://stash.cfops.it:7999/fe/stratus/commits/daba6dc))





# [6.2.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.0.0...@cloudflare/util-en-garde@6.2.0) (2019-11-26)


### Bug Fixes

* **util-en-garde:** TSX-157 Do *NOT* use typescript property initializat ([29562eb](http://stash.cfops.it:7999/fe/stratus/commits/29562eb))


### Features

* **util-en-garde:** TSX-158 Extend io-ts classes ([d0e6f97](http://stash.cfops.it:7999/fe/stratus/commits/d0e6f97))





# [6.1.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@6.0.0...@cloudflare/util-en-garde@6.1.0) (2019-11-26)


### Bug Fixes

* **util-en-garde:** TSX-157 Do *NOT* use typescript property initializat ([29562eb](http://stash.cfops.it:7999/fe/stratus/commits/29562eb))


### Features

* **util-en-garde:** TSX-158 Extend io-ts classes ([d0e6f97](http://stash.cfops.it:7999/fe/stratus/commits/d0e6f97))





# [6.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@4.0.1...@cloudflare/util-en-garde@6.0.0) (2019-11-20)


### Features

* **util-en-garde:** TSX-153 Make en-garde wrap io-ts ([95bb19e](http://stash.cfops.it:7999/fe/stratus/commits/95bb19e))


### BREAKING CHANGES

* **util-en-garde:** Rather than en-garde simply being composable type guards, we are wrapping io-ts to
provide similar functionality with a nicer API.





# [5.0.0](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@4.0.1...@cloudflare/util-en-garde@5.0.0) (2019-11-19)


### Features

* **util-en-garde:** TSX-153 Make en-garde wrap io-ts ([95bb19e](http://stash.cfops.it:7999/fe/stratus/commits/95bb19e))


### BREAKING CHANGES

* **util-en-garde:** Rather than en-garde simply being composable type guards, we are wrapping io-ts to
provide similar functionality with a nicer API.





## [4.0.1](http://stash.cfops.it:7999/fe/stratus/compare/@cloudflare/util-en-garde@4.0.0...@cloudflare/util-en-garde@4.0.1) (2019-11-13)

**Note:** Version bump only for package @cloudflare/util-en-garde





# 4.0.0 (2019-11-13)


### Bug Fixes

* **stratus:** UI-2859: bump all package versions ([4cb3c90](http://stash.cfops.it:7999/fe/stratus/commits/4cb3c90))
* **stratus:** UI-2859: bump all package versions ([6db21c2](http://stash.cfops.it:7999/fe/stratus/commits/6db21c2))


### Features

* **stratus:** TSX-143 Add util-en-garde module ([6751369](http://stash.cfops.it:7999/fe/stratus/commits/6751369))
* **stratus:** TSX-152 Upgrade to TypeScript 3.7 ([bf1f620](http://stash.cfops.it:7999/fe/stratus/commits/bf1f620))
* **util-en-garde:** STREAM-1672 Attach failed data and rename optional ([5d20d38](http://stash.cfops.it:7999/fe/stratus/commits/5d20d38))
* **util-en-garde:** TSX-143 Add any and objectWithValuesOf guards ([b0bdaf4](http://stash.cfops.it:7999/fe/stratus/commits/b0bdaf4))
* **util-en-garde:** TSX-146 Add tuple higher order guard ([1ae33bf](http://stash.cfops.it:7999/fe/stratus/commits/1ae33bf))


### BREAKING CHANGES

* **util-en-garde:** Renamed optional type to TypeGuardWithOptional and update TypeGuardError
constructor signature





# 3.0.0 (2019-11-12)


### Bug Fixes

* **stratus:** UI-2859: bump all package versions ([4cb3c90](http://stash.cfops.it:7999/fe/stratus/commits/4cb3c90))
* **stratus:** UI-2859: bump all package versions ([6db21c2](http://stash.cfops.it:7999/fe/stratus/commits/6db21c2))


### Features

* **stratus:** TSX-143 Add util-en-garde module ([6751369](http://stash.cfops.it:7999/fe/stratus/commits/6751369))
* **stratus:** TSX-152 Upgrade to TypeScript 3.7 ([bf1f620](http://stash.cfops.it:7999/fe/stratus/commits/bf1f620))
* **util-en-garde:** STREAM-1672 Attach failed data and rename optional ([5d20d38](http://stash.cfops.it:7999/fe/stratus/commits/5d20d38))
* **util-en-garde:** TSX-143 Add any and objectWithValuesOf guards ([b0bdaf4](http://stash.cfops.it:7999/fe/stratus/commits/b0bdaf4))
* **util-en-garde:** TSX-146 Add tuple higher order guard ([1ae33bf](http://stash.cfops.it:7999/fe/stratus/commits/1ae33bf))


### BREAKING CHANGES

* **util-en-garde:** Renamed optional type to TypeGuardWithOptional and update TypeGuardError
constructor signature
