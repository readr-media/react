import { useContext } from 'react'
import { TagsContext } from './useTags'
import styled from 'styled-components'
import { customFormatTime } from '../utils/date'

const CategoryWrapper = styled.div`
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    padding: 0;
  }
`

const Category = styled.span`
  font-weight: 900;
  font-size: 12px;
  line-height: 14px;
  margin-right: 8px;
  color: #999;
`

const PublishInfoWrapper = styled.div`
  margin-top: 6px;
  display: flex;
  align-items: start;
  justify-content: space-between;
  padding: 0;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
  }
`

const PublishDate = styled.div`
  font-size: 12px;
  transform: scale(calc(10 / 12));
  left: calc(-100% / 12);
  width: 100%;

  font-weight: 900;
  line-height: 14px;
  position: relative;

  @media (max-width: 768px) {
    margin-top: 4px;
  }
`

export default function TimelineEventHeader({ event, timeUnitKey }) {
  const { addTag } = useContext(TagsContext)
  return (
    <div>
      {event.type !== 'external' ? (
        <>
          <CategoryWrapper>
            {event.tags?.map((tag, index) => {
              return (
                <Category
                  key={index}
                  onClick={(event) => {
                    event.stopPropagation()
                    addTag(tag.name, timeUnitKey)
                  }}
                >
                  {tag?.name}
                </Category>
              )
            })}
          </CategoryWrapper>
          <PublishInfoWrapper>
            <PublishDate>
              {customFormatTime(event.publishTime, event.displayDateString)}
            </PublishDate>
          </PublishInfoWrapper>
        </>
      ) : (
        <PublishInfoWrapper>
          <div>
            {event.tags?.map((tag, index) => {
              return <Category key={index}>{tag?.name}</Category>
            })}
          </div>
          <PublishDate>
            {customFormatTime(event.publishTime, event.displayDateString)}
          </PublishDate>
        </PublishInfoWrapper>
      )}
    </div>
  )
}
