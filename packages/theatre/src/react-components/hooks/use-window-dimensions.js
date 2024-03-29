import { useState, useEffect } from 'react'

function getViewportWidth() {
  /* 
    We want to exclude the width of vertical scrollbar in all browsers.
    So we use the document.documentElement.clientWidth as the viewport width.
   */
  let width = 0
  if (
    typeof document !== 'undefined' &&
    document.documentElement &&
    document.documentElement.clientWidth
  ) {
    width = document.documentElement.clientWidth
  } else if (typeof window !== 'undefined' && window.innerWidth) {
    width = window.innerWidth
  }
  return width
}

function getViewportHeight() {
  /*
    On mobile device, we want to exclude the height of browser toolbar and url bar.
    So we use window.innerHeight as the viewport height.
    window.innerHeight might include the horizontal scrollbar when it appears, but it seldom happens and the result is acceptable.
    Ref: https://www.notion.so/yucj/Viewport-Height-ab6cb48bb8f248d3a484c13da2c38d86
  */
  let height = 0
  if (typeof window !== 'undefined' && window.innerHeight) {
    height = window.innerHeight
  } else if (
    typeof document !== 'undefined' &&
    document.documentElement &&
    document.documentElement.clientHeight
  ) {
    height = document.documentElement.clientHeight
  }
  return height
}

function getWindowDimensions() {
  return {
    width: getViewportWidth(),
    height: getViewportHeight(),
  }
}

export default function useWindowDimensions() {
  const initialDimensions = getWindowDimensions()

  // Initialize state with undefined width/height so server and client renders match
  const [windowDimensions, setWindowDimensions] = useState(initialDimensions)

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions())
    }

    window.addEventListener('resize', handleResize)

    // Call handler right away so state gets updated with initial window size
    handleResize()

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return windowDimensions
}
