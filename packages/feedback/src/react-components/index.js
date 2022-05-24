import React from 'react'

import Section from './layout/Section'
import ThumbsForm from './thumbs-form/ThumbsForm'
import CommentForm from './comment-form/CommentForm'
import useRecaptcha from '../hooks/useRecaptcha'
import Comments from './comments/Comments'

import { formsData } from './mock-forms'


export default function Feedback({ data = formsData }) {
  const commentFormData = data.forms.find(form => form.slug === 'feedback-comment')
  const thumbsFormData = data.forms.find(form => form.slug === 'feedback-like')
  const { verified } = useRecaptcha()

  const commentFormSubmitHandler = (textareaValue) => {
    console.log(`send comment '${textareaValue}' to BE`);
    return true
  }

  const thumbsFormSubmitHandler = (thumbValue) => {
    console.log(`send thumbValue '${thumbValue}' to BE`);
    return true
  }

  return (
    <>
      <Section>
        {thumbsFormData.active && <ThumbsForm onSubmit={thumbsFormSubmitHandler} thumbsFields={thumbsFormData.fields} />}
        {commentFormData.active && verified && <CommentForm onSubmit={commentFormSubmitHandler} commentFields={commentFormData.fields} />}
      </Section>
      <Section>
        <Comments />
      </Section>
    </>
  )
}