// h/t https://react.30secondsofcode.org/snippet/useSSR
const isDOMavailable = !!(
  typeof window !== "undefined" &&
  window.document &&
  window.document.createElement
)

export default isDOMavailable
