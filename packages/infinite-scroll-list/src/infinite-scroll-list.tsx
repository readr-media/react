import { useState, useRef, useEffect, useCallback, type ReactNode } from 'react'
import type { XOR } from 'ts-xor'

type Props<T> = {
  /** The initial data list to render */
  initialList?: T[]
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
} & XOR<
  {
    /** Manual (click) fetch is not allowed when custom trigger is set  */
    /** Wether the custom trigger ref will provided throught children callback to set up trigger point */
    hasCustomTrigger: true
    /** Whether data fetch is executed atomatically */
    isAutoFetch?: true
  },
  {
    hasCustomTrigger?: false
    isAutoFetch?: boolean
  }
>

/**
 * This component will progressively fetch data and render theme
 */
export default function InfiniteScrollList<T>({
  initialList = [],
  amountOfElements,
  pageAmount,
  pageSize,
  isAutoFetch = true,
  fetchListInPage,
  children,
  loader,
  hasCustomTrigger = false,
}: Props<T>) {
  const [renderSize, setRenderSize] = useState(pageSize)
  const [dataList, setDataList] = useState([...initialList])

  // In strict mode, we need to monitor changes from upstream
  useEffect(() => {
    setDataList(initialList)
  }, [initialList])

  const checkIsMoreData = useCallback(() => {
    if (typeof amountOfElements === 'number' && amountOfElements) {
      return dataList.length < amountOfElements
    } else {
      if (typeof pageAmount === 'number' && pageAmount) {
        return renderSize < dataList.length || fetchedPage.current < pageAmount
      } else {
        return true
      }
    }
  }, [amountOfElements, dataList.length, pageAmount, renderSize])

  /**
   * If initialList is an empty array, it means that no element have been displayed at beginning,
   * so initialPage needs to be set to 0  to avoid undisplayed elements being skipped.
   */
  const initialPage = initialList.length ? 1 : 0

  /**
   * The number of fetches that is sent currently.
   * State will possibly change when executing function `handleLoadMore`
   */
  const fetchedPage = useRef(initialPage)
  const renderList = dataList.slice(0, renderSize)
  const isLoading = useRef(false)
  const [hasNotFetchedData, setHasNotFetchedData] = useState(checkIsMoreData())

  useEffect(() => {
    setHasNotFetchedData(checkIsMoreData())
  }, [checkIsMoreData])

  const hasNotRenderedData = hasNotFetchedData || renderSize < dataList.length

  const isNotEnoughToRender = pageAmount
    ? fetchedPage.current < pageAmount &&
      dataList.length - renderSize < pageSize
    : dataList.length - renderSize < pageSize

  const handleLoadMore = useCallback(() => {
    const isExceedThreshold = (
      list: T[],
      amountOfElements?: number
    ): amountOfElements is number => {
      if (typeof amountOfElements === 'number' && amountOfElements) {
        return list.length >= amountOfElements
      } else {
        return false
      }
    }

    if (isLoading.current) {
      return
    }

    if (isNotEnoughToRender && hasNotFetchedData) {
      const newPage = fetchedPage.current + 1
      isLoading.current = true
      fetchListInPage(newPage).then((newList) => {
        if (newList.length === 0) setHasNotFetchedData(false)

        const list = [...dataList, ...newList]

        if (isExceedThreshold(list, amountOfElements)) {
          setHasNotFetchedData(false)
          setDataList(list.slice(amountOfElements * -1))
        } else {
          setDataList(list)
        }

        fetchedPage.current = newPage
        isLoading.current = false
      })
    }

    if (amountOfElements) {
      setRenderSize((pre) => Math.min(pre + pageSize, amountOfElements))
    } else {
      setRenderSize((pre) => Math.min(pre + pageSize, dataList.length))
    }
  }, [
    fetchListInPage,
    dataList,
    amountOfElements,
    pageSize,
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
      } else if (!hasCustomTrigger) {
        // only default trigger supports manully load more
        triggerElement.addEventListener('click', clickHandler)
      }
    }

    return () => {
      if (triggerElement) {
        if (isAutoFetch) {
          observer.disconnect()
        } else if (!hasCustomTrigger) {
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
