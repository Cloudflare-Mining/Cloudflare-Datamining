## v3.1.1

* Properly handle multipart form curls with multiple parts.

## v3.1.0

* Support added for "encType" and "mediaType" with raw string examples.

## v3.0.0

* The non-standard usage of "rel": "self" has been changed to a new
  extension keyword, "cfRecurse": "".  The "" is technically a plain
  (not URI fragment encoded) JSON Pointer (specifically the root pointer).
  Currently, only the root pointer is supported, keeping parity with
  the old "rel": "self" post-"$ref"-resolution recursion.

* The non-standard "requestHeaders" and "private" fields have been
  namespaced as "cfRequestHeaders" and "cfPrivate" respectively.

* Fields that start with "\_\_" are no longer treated as private.
  Use "cfPrivate" to flag private fields.

* Two additional custom keywords have **not** been changed:
  "extraProperties" will get a more extensive reworking in the
  nearish future, and "example" becomes "examples" in the draft-06
  of JSON Schema so it seems pointlessly disruptive to put a "cf" on it.

## v2.0.0

* `"required"` and `"type"` now behave normally with the LDO's `"schema"` (previously they needed to be outside of `"schema"` at the top of the LDO)
* the nonstandard behavior of `"additionalProperties"` (properties that are not rolled up in the request/response examples) is now implemented as `"extraProperties"`
* Properties named `"ID"` are no longer treated specially (downcased to `"id"`) as this was a workaround for a problem that no longer exists.

## v1.2.2

* Correctly generate curl examples when `"requestHeaders"` is `{}`

## v1.2.1

* Add `which_of` to the top level of `object_definition` to allow distinguishing between use of `"oneOf"` vs `"anyOf"`.  This is a bit of a hack but will get fixed more thoroughly in a future major version.


