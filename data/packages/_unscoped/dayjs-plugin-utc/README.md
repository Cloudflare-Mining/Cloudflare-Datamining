English | [简体中文](./README.zh-CN.md)

> this is a plugin for [dayjs](https://github.com/iamkun/dayjs), that gives dayjs the ability to operate UTC timezone

---

## Usage

  * Via NPM:

  ```console
  npm i dayjs-plugin-utc --save
  ```

  ```javascript
  import dayjsPluginUTC from 'dayjs-plugin-utc'

  dayjs.extend(dayjsPluginUTC)
  ```

  * Via CDN:

  ```html
  <!-- Latest compiled and minified JavaScript -->
  <script src="https://unpkg.com/dayjs"></script>
  <script src="https://unpkg.com/dayjs-plugin-utc"></script>
  <script>
    dayjs.extend(dayjsPluginUTC.default)
  </script>
  ```

  > **⚠️ NOTICE⚠️** 
  >
  > when **NOT** add this plugin `dayjs()` will return an instance that timezone based of you local
  > ```javascript
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
  > ```
  > after load this plugin the timezone of instance return by `dayjs()` will rely on what you passed
  > ```javascript
  > dayjs.extend(dayjsPluginUTC)
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T03:04:05+06:00
  > ```
  > if you always want an local timezone instance would be create or you already use dayjs in you project
  >
  > you can load this plugin with option `parseToLocal: true`
  >
  > ```javascript
  > dayjs.extend(dayjsPluginUTC, { parseToLocal: true })
  > dayjs('2018-05-18T03:04:05+06:00').format() // 2018-05-18T05:04:05+08:00
  > ```
  >

## API

  ### Parse

  get an instance in UTC

  ```javascript
    dayjs.utc() 
    dayjs.utc('2018-05-18T03:04:05+06:00') 
    /* (string | number | Date | Dayjs) support like dayjs() */
  ```

  ### Get

  with `dayjs().utcOffset()` you can get the UTC offset in minutes.
  > Note: `dayjs().utcOffset()` returns the real offset from UTC, not the reverse offset (as returned by Date.prototype.getTimezoneOffset).

  also you can check the timezone of an instance is local or UTC by `dayjs().isLocal()` and `dayjs().isUTC()`

  ```javascript
    dayjs().utcOffset() // (-480, -120, 0, 120, 480, etc.)
    dayjs().isLocal()   // true
    dayjs().isUTC()     // false
  ```

  ### Set

  using `dayjs().utc()` and `dayjs().local()` you can set the timezone to UTC or you local timezone , and `dayjs().utcOffset(Number)` you can specify the timezone you want 

  ```javascript
    let day = dayjs('2018-05-18T03:04:05+06:00')
    
    day.utc().format()           // 2018-05-17T21:04:05+00:00

    day.local().format()         // 2018-05-18T05:04:05+08:00

    day.utcOffset(240).format()  // 2018-05-18T01:04:05+04:00
  ```