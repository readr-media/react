// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react'
import NormalExample from './components/normal-example'
import CustomTriggerExample from './components/custom-trigger-example'
import styled from 'styled-components'

type ButtonProps = {
  isActive: boolean
}

const Button = styled.button<ButtonProps>`
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  &:hover,
  &:active {
    background: white;
  }
  ${({ isActive }) => isActive && `background: white`}
`

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
            <Button
              key={key}
              onClick={() => {
                setExampleType(type)
              }}
              isActive={type === exampleType}
            >
              {key}
            </Button>
          )
        })}
      </div>
      {getExampleJsx(exampleType)}
    </div>
  )
}
