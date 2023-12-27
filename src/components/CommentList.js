import React from 'react';
import Comment from './Comment';

const CommentList = ({data}) => {
  return data.map(comment =>(
    <Comment key={comment.id} commentData={comment}/>
  ))
}

export default CommentList