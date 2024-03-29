## Monorepo setup
This is a monorepo containing sub-packages that can be used across any projects or orgnizations:
- [@readr-media/react-questionnaire](https://www.npmjs.com/package/@readr-media/react-questionnaire): see [`packages/questionnaire`](./packages/questionnaire)
- [@readr-media/react-feedback](https://www.npmjs.com/package/@readr-media/react-feedback): see [`packages/feedback`](./packages/feedback)
- [@readr-media/react-qa-list](https://www.npmjs.com/package/@readr-media/react-qa-list): see [`packages/qa-list`](./packages/qa-list)
- [@readr-media/react-embed-code-generator](https://www.npmjs.com/package/@readr-media/react-embed-code-generator): see [`packages/embed-code-genarator`](./packages/embed-code-generator)
- [@readr-media/react-election-votes-comparison](https://www.npmjs.com/package/@readr-media/react-election-votes-comparison): see [`packages/election-votes-comparison`](./packages/embed-code-generator)
- [@readr-media/react-election-widgets](https://www.npmjs.com/package/@readr-media/react-election-widgets): see [`packages/react-election-widgets`](./packages/election-widgets)
- [@readr-media/react-image](https://www.npmjs.com/package/@readr-media/react-image): see [`packages/image`](./packages/image)
- [@readr-media/react-karaoke](https://www.npmjs.com/package/@readr-media/react-karaoke): see [`packages/karaoke`](./packages/karaoke)
- [@readr-media/react-live-blog](https://www.npmjs.com/package/@readr-media/react-live-blog): see [`packages/live-blog`](./packages/live-blog)
- [@readr-media/share-button](https://www.npmjs.com/package/@readr-media/share-button): see [`packages/share-button`](./packages/share-button)

### Development
Before modifying sub-packages' source codes, make sure you install dependencies on root first.  

### Installation
`yarn install`

### Monorepo Settings
In root package.json, we configure `workspaces` property to manage subpkgs. The reason that we don't set `workspaces: [ "packages/*" ]` is because we don't want `packages/embed-code-generator` to be managed by workspaces. You can see this [PR](https://github.com/readr-media/react/pull/138) for more details.

Therefore, if you add new subpkg in this monorepo, please make sure you add the new subpkg into `workspaces` property.

## Use package as react component
To use the package in a react project, we just import the react component directly from the installed package.

Here's the steps (take qa-list as example):
### Install the npm [package](https://www.npmjs.com/package/@readr-media/react-qa-list)
`yarn add @readr-media/react-qa-list`
### Import component in the desired place
```javascript
import QAList from '@readr-media/react-qa-list'

export default function SomeComponent() {
  return (
    <div>
      <OtherComponent/>
      <QAList.ReactComponent />
    </div>
  )
}
```
The export object structure may or may not be the same as the package being designed.
Always check the package's index.js (in this case: [index.js](https://github.com/readr-media/react/blob/main/packages/qa-list/src/index.js)) to know how to get the desired react component.

### Pass the required data
When we develop a package in this project, there is a convention to create a folder called *dev* in the package's root folder.
The *dev* folder is where we can run the code locally. 
If therer are some data required to pass to the component, we should always find some mock data here.

Since the react component is actually used in entry.js (in this case: [entry.js](https://github.com/readr-media/react/blob/main/packages/qa-list/dev/entry.js)). The mock data is placed here to be set to the component.
```javascript
const mockData = [
  {
    id: '3',
    title: '如果我想換顏色或圖片怎麼辦？',
    content: {
      blocks: [
        {
          key: '1vntn',
          data: {},
          text: '這樣就可以換顏色',
          type: 'unstyled',
          depth: 0,
          entityRanges: [
            {
              key: 0,
              length: 2,
              offset: 0,
            },
          ],
          inlineStyleRanges: [],
        },
      ...
  }
]

root.render(<QAListComponent questions={mockData} />)
```
Now it's time to fetch the real data and make sure the data structure fits the mock one.
