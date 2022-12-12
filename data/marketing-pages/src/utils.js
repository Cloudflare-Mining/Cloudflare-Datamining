import React from "react"
import lscache from "lscache"

import isDOMavailable from "./isDOMavailable.js"

const flatten = set => set.edges.map(({ node }) => node)

const normalizeCollection = (collection, projects) => {
  let normalized = collection

  if (collection.projects.length) {
    const collectionProjects = collection.projects.map(({ id }) =>
      projects.find(project => project.id === id)
    )
    normalized.projects = collectionProjects
  }

  return normalized
}

const useSSR = (callback, delay) => {
  const [inBrowser, setInBrowser] = React.useState(isDOMavailable)

  React.useEffect(() => {
    setInBrowser(isDOMavailable)
    return () => {
      setInBrowser(false)
    }
  }, [])

  const useSSRObject = React.useMemo(
    () => ({
      isBrowser: inBrowser,
      isServer: !inBrowser,
      canUseWorkers: typeof Worker !== "undefined",
      canUseEventListeners: inBrowser && !!window.addEventListener,
      canUseViewport: inBrowser && !!window.screen,
    }),
    [inBrowser]
  )

  return React.useMemo(
    () => Object.assign(Object.values(useSSRObject), useSSRObject),
    [useSSRObject]
  )
}

function useLocalStorage(key, initialValue) {
  const { isBrowser } = useSSR()
  const [storedValue, setStoredValue] = React.useState(() => {
    if (!isBrowser) {
      return initialValue
    }

    try {
      const item = lscache.get(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = value => {
    if (!isBrowser) {
      return
    }

    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)
      lscache.set(key, JSON.stringify(valueToStore), 1)
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

const resultTemplate = () => `
    <div class="coveo-result-frame">
      <div class="coveo-result-cell" style="vertical-align: top;padding-left: 16px;">
        <div class="coveo-result-row" style="margin-top:0;">
          <div class="coveo-result-cell" style="vertical-align:top;font-size:16px;" role="heading" aria-level="2">
            <a class="CoveoResultLink"></a>
          </div>
          <div class="coveo-result-cell" style="width:120px;text-align:right;font-size:12px">
            <div class="coveo-result-row">
            </div>
          </div>
        </div>
        <div class="coveo-result-row" style="margin-top:10px;">
          <div class="coveo-result-cell">
            <span class="CoveoExcerpt"></span>
          </div>
        </div>
        <div class="coveo-result-row" style="margin-top:10px;">
          <div class="coveo-result-cell">
            <span class="CoveoFieldValue" data-field="@customer_facing_source" data-text-caption="Source:" style="margin-right:20px;"></span>
            <span class="CoveoFieldValue" data-field="@product" data-split-values="true" data-text-caption="Product:" style="margin-right:20px;"></span>
            <span class="CoveoFieldValue" data-field="@language" data-text-caption="Language:" style="margin-right:30px;"></span>
          </div>
        </div>
        <div class="coveo-result-row" style="margin-top:10px;">
          <div class="coveo-result-cell">
            <div class="CoveoPrintableUri"></div>
          </div>
        </div>
        <div class="coveo-result-row">
          <div class="coveo-result-cell">
            <div class="CoveoMissingTerms"></div>
          </div>
        </div>
      </div>
    </div>
  `

export { flatten, normalizeCollection, useLocalStorage, useSSR, resultTemplate }
