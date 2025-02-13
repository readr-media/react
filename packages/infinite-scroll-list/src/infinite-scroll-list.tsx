import {
  useState,
  useRef,
  useEffect,
  useCallback,
  type ReactNode,
  useMemo,
} from 'react'

type Props<T> = {
  /** The initial data list to render */
  initialList?: T[] | null
  /** Maximum of items to be rendered  */
  amountOfElements?: number
  /** Maxmium of fetches to be fired */
  pageAmount?: number
  /** The amount of items per scroll page */
  pageSize: number
  /** The function to fetch more data, which will be executed when page is scrolled to bottom */
  fetchListInPage: (page: number) => Promise<T[]>
  /** The function to render data list */
  children: (
    renderList: T[],
    customTriggerRef?: React.RefObject<HTMLElement>
  ) => ReactNode
  /** The loader element to display during data loading */
  loader?: ReactNode
  /** Whether the custom trigger ref will provided throught children callback to set up trigger point */
  hasCustomTrigger?: boolean
  /** Whether data fetch is executed atomatically */
  isAutoFetch?: boolean
}

/**
 * This component will progressively fetch data and render theme
 */
export default function InfiniteScrollList<T>({
  initialList,
  amountOfElements,
  pageAmount,
  pageSize,
  isAutoFetch = true,
  fetchListInPage,
  children,
  loader,
  hasCustomTrigger = false,
}: Props<T>) {
  const initialListIsArray = Array.isArray(initialList)
  const [renderSize, setRenderSize] = useState(
    !initialListIsArray ? 0 : pageSize
  )
  const [dataList, setDataList] = useState(
    initialListIsArray ? [...initialList] : []
  )

  /**
   * If initialList is an empty array, it means that no element have been displayed at beginning,
   * so initialPage needs to be set to 0  to avoid undisplayed elements being skipped.
   */
  const initialPage = initialListIsArray ? 1 : 0

  /**
   * The number of fetches that is sent currently.
   * State will possibly change when executing function `handleLoadMore`
   */
  const fetchedPage = useRef(initialPage)
  const renderList = dataList.slice(0, renderSize)
  const isLoading = useRef(false)
  const [fetchEnded, setFetchEnded] = useState(false)
  const hasNotFetchedData = useMemo(() => {
    if (typeof amountOfElements === 'number' && amountOfElements) {
      return dataList.length < amountOfElements
    }

    if (typeof pageAmount === 'number' && pageAmount) {
      return fetchedPage.current < pageAmount
    }

    return true
  }, [amountOfElements, dataList.length, pageAmount])

  const hasNotRenderedData =
    (hasNotFetchedData || renderSize < dataList.length) && fetchEnded === false

  const isNotEnoughToRender = pageAmount
    ? fetchedPage.current < pageAmount &&
      dataList.length - renderSize < pageSize
    : dataList.length - renderSize < pageSize

  const handleLoadMore = useCallback(() => {
    if (isLoading.current) {
      return
    }

    const oldRenderSize = renderSize

    if (isNotEnoughToRender && hasNotFetchedData) {
      const newPage = fetchedPage.current + 1
      isLoading.current = true
      fetchListInPage(newPage).then((newList) => {
        if (newList.length === 0) {
          setFetchEnded(true)
        }

        const list = [...dataList, ...newList]

        if (amountOfElements) {
          setDataList(list.slice(0, amountOfElements))
          setRenderSize(Math.min(oldRenderSize + pageSize, amountOfElements))
        } else {
          setDataList(list)
          setRenderSize(Math.min(oldRenderSize + pageSize, list.length))
        }

        fetchedPage.current = newPage
        isLoading.current = false
      })
    } else {
      if (amountOfElements) {
        setRenderSize(Math.min(oldRenderSize + pageSize, amountOfElements))
      } else {
        setRenderSize(Math.min(oldRenderSize + pageSize, dataList.length))
      }
    }
  }, [
    fetchListInPage,
    dataList,
    amountOfElements,
    pageSize,
    renderSize,
    isNotEnoughToRender,
    hasNotFetchedData,
  ])

  const triggerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const callback: IntersectionObserverCallback = (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (hasNotRenderedData) {
            handleLoadMore()
          } else {
            observer.unobserve(entry.target)
          }
        }
      })
    }

    const clickHandler = function (this: HTMLDivElement) {
      if (hasNotRenderedData) {
        handleLoadMore()
      } else {
        this.removeEventListener('click', clickHandler)
      }
    }

    const observer = new IntersectionObserver(callback, {
      root: null,
      rootMargin: '0px',
      threshold: 0,
    })

    const triggerElement = triggerRef.current

    if (triggerElement) {
      if (isAutoFetch) {
        observer.observe(triggerElement)
      } else {
        triggerElement.addEventListener('click', clickHandler)
      }
    }

    return () => {
      if (triggerElement) {
        if (isAutoFetch) {
          observer.disconnect()
        } else {
          triggerElement.removeEventListener('click', clickHandler)
        }
      }
    }
  }, [handleLoadMore, isAutoFetch, hasNotRenderedData, hasCustomTrigger])

  return (
    <>
      {children(renderList, hasCustomTrigger ? triggerRef : undefined)}
      <div
        ref={
          !hasCustomTrigger
            ? (triggerRef as React.RefObject<HTMLDivElement>)
            : undefined
        }
      >
        {hasNotRenderedData && loader}
      </div>
    </>
  )
}
