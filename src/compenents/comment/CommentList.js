import React from "react";
import Comment from './Comment'
import AddComment from '../../containers/AddCommentContainer';
import { useEffect } from 'react';




const imgLink =
  "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260";

const  CommentList = ({commentsData, getComments}) => {
  useEffect(() => {
    getComments()
    
  }, [ getComments])
  const {comments, error, isLoading} = commentsData;
  return (
    <div style={{ padding: 14 }} >
      <AddComment/>
      {comments && comments.map(item=>(
        <Comment key={item._id} comment={item} />
      )
      )}
      

    </div>
  );
}
export default CommentList;