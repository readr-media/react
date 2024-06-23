# [@readr-media/react-infinite-scroll-list](https://www.npmjs.com/package/@readr-media/react-infinite-scroll-list) &middot; ![npm version](https://img.shields.io/npm/v/@readr-media/react-infinite-scroll-list.svg?style=flat)

The component progressively fetches data when page being scrolled to bottom and renders them.

## Usage Guide
[Example](./dev/app.tsx)

### Props Explanation
| Name | Data Type | isRequired | Description |
| --- | --- | --- | --- |
| initialList | `T[]` [1](#type-t) | `false` | initial data from upstream to be rendered |
| amountOfElements [2](#relation-between-amountofelements-pageamount-and-pagesize) | `number` | `false` | maximum of items to be rendered |
| pageAmount | `number` | `false` | Maxmium of fetches (`fetchListInPage`) to be fired |
| pageSize | `number` | `true` | The amount of items per scroll page |
| isAutoFetch | `boolean` | `false` (default: `true`) | Whether data fetch is executed atomatically |
| fetchListInPage | `(page: number) => Promise<T[]>` [1](#type-t) | `true` | The function to fetch more data, which will be executed when page is scrolled to bottom |
| children | `(renderList: T[], customTriggerRef?: React.RefObject<HTMLElement>) => ReactNode` [1](#type-t) | `true` | The function to render data list |
| loader | `ReactNode` | `false` | The loader element to be displayed during data loading |
| hasCustomTrigger | `boolean` | `false` | Wether the custom trigger ref will be provided throught children callback to set up trigger point | 

### What is T
T is generic type for data coming from fetches (`fetchListInPage`) or to be used by render function (`children`).
It can be set explicitly or infered implicitly.
You should ensurce T in `initialList`, `fetchListInPage` and `children` that represents the same type.


### Relation between `amountOfElements`, `pageAmount` and `pageSize`
- Neither `amountOfElements` nor `pageAmount` are set

  fetches will be fired util no more data

- If only `amountOfElements` is set

  fetches will be fired util no more data or amount of items reached `amountOfElements`

- If only `pageAmount` is set

  fetches will be fired util no more data or amount of fetches reached `pageAmount`

- If both `amountOfElements` nor `pageAmount` are set

  fetched will be fired util one of following situations:

  1. no more data
  2. amount of items reached `Math.min(amountOfElements, pageAmount * pageSize)`

### Trigger loadmore
- Default (hasCustomTrigger: false)
  - This component appends an element which triggers load-more effect at the end of the element list by default
- Custom Trigger (hasCustomTrigger: true)
  - Set the prop `hasCustomTrigger` to `true` and use the `customTriggerRef` as the second argument from the `children` callback to to designate element as trigger point (check [custom-trigger-example](./dev/components/custom-trigger-example.tsx))


## Development Guide

### Installation
`yarn install`

### Development
```
$ yarn dev
// or
$ npm run dev
// or
$ make dev
```

### Build
```
$ npm run build
// or
$ make build
```

### Publish
After executing `Build` scripts, we will have `./dist` and `/lib` folders,
and then we can execute publish command,
```
npm publish
```

Note: before publish npm package, we need to bump the package version first. 
