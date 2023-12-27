import React from 'react';
import { comments } from '../utils/constants';
import CommentList from './CommentList';

const CommentContainer = () => {
  return (
    <div>
        <div className='font-extrabold text-lg'>Comments</div>
        <CommentList data={comments} />
    </div>
  )
}

export default CommentContainer