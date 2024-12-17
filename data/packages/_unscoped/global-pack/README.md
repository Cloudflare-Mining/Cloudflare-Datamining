# Global-pack

Like [browser-pack](https://github.com/substack/browser-pack), but mounts modules to `window.modules` (or a specified scope).

Whereas browser-pack emits strings of Javascript that must be concatenated to run as valid JS and defines modules within an internal scope, global-pack emits strings that are themselves valid JS and defines modules in `window.modules`. This allows you to split each dep into a separate file and embed it via a `<script>` tag.

## Options

* `scope`: String. The scope to mount modules. Defaults to `window.modules`.
* `objectMode`: Boolean. If `true`, emit objects instead of strings. For every module-dep object ingested, the same object will be emitted with a `content` property set to the packed JS. Warning: global-pack will also emit two extra objects, `prelude` and `postlude`, whose properties include __only__ `id` and `content`.
