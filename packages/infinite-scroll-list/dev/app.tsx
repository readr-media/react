import { useState } from 'react'
import NormalExample from './components/normal-example'
import CustomTriggerExample from './components/custom-trigger-example'

enum ExampleType {
  Normal = 'normal',
  CustomTrigger = 'custom-trigger',
}

export default function App() {
  const [exampleType, setExampleType] = useState<ExampleType>(
    ExampleType.Normal
  )

  const getExampleJsx = (exampleType: ExampleType) => {
    switch (exampleType) {
      case ExampleType.Normal:
        return <NormalExample />
      case ExampleType.CustomTrigger:
        return <CustomTriggerExample />

      default:
        return <h1>No example founded!</h1>
    }
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          height: '50px',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {Object.entries(ExampleType).map(([key, type]) => {
          return (
            <button
              key={key}
              style={{
                padding: '10px 20px',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
              onClick={() => {
                setExampleType(type)
              }}
            >
              {key}
            </button>
          )
        })}
      </div>
      {getExampleJsx(exampleType)}
    </div>
  )
}
