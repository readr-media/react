import React /* eslint-disable-line */, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'

import ThumbField from './thumb-field'
import useThumbsUp from '../../hooks/use-thumbsUp'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px 0;
`

const Title = styled.p`
  font-size: 18px;
  line-height: 27px;
  margin: 0;
`

const ThumbWrapper = styled.div`
  margin-top: 20px;
  display: flex;
`

export default function ThumbsField({ formId, field }) {
  const [thumbUpChecked, setThumbUpChecked] = useState(false)
  const [thumbDownChecked, setThumbDownChecked] = useState(false)
  const [thumbUpPressing, setThumbUpPressing] = useState(false)
  const [thumbDownPressing, setThumbDownPressing] = useState(false)
  const timerRef = useRef(null)
  const initialMounted = useRef(true)
  const { thumbsUp, giveThumbUp } = useThumbsUp(formId, field.id)

  useEffect(() => {
    if (initialMounted.current) {
      initialMounted.current = !initialMounted.current
      return
    }

    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      let thumbValue = null
      if (thumbUpChecked) {
        thumbValue = true
      }
      if (thumbDownChecked) {
        thumbValue = false
      }
      giveThumbUp(thumbValue)
      timerRef.current = null
    }, 1000)
  }, [thumbUpChecked, thumbDownChecked])

  const thumbUpRadioClicked = () => {
    setThumbUpPressing(false)
    setThumbUpChecked((thumbUpChecked) => {
      if (thumbUpChecked) {
        return false
      } else {
        setThumbDownChecked(false)
        return true
      }
    })
  }

  const thumbDownRadioClicked = () => {
    setThumbDownPressing(false)
    setThumbDownChecked((thumbDownChecked) => {
      if (thumbDownChecked) {
        return false
      } else {
        setThumbUpChecked(false)
        return true
      }
    })
  }

  const thumbUpProps = {
    thumbsUp: true,
    onMouseDown: () => setThumbUpPressing(true),
    onMouseUp: thumbUpRadioClicked,
    checked: thumbUpChecked,
    pressing: thumbUpPressing,
    label: '??????',
    statistic: thumbsUp ? thumbsUp.thumbUp : null,
  }

  const thumbDownProps = {
    thumbsUp: false,
    onMouseDown: () => setThumbDownPressing(true),
    onMouseUp: thumbDownRadioClicked,
    checked: thumbDownChecked,
    pressing: thumbDownPressing,
    label: '?????????',
    statistic: thumbsUp ? thumbsUp.thumbDown : null,
  }

  return (
    <Wrapper>
      <Title>{field.name}</Title>
      <ThumbWrapper>
        <ThumbField {...thumbUpProps} />
        <ThumbField {...thumbDownProps} />
      </ThumbWrapper>
    </Wrapper>
  )
}
