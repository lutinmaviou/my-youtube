import { useAuth } from 'context/auth-context';
import React, { useState } from 'react';
import { useSnackbar } from 'react-simple-snackbar';
import { addComment } from 'utils/api-client';
import defaultAvatar from '../assets/default-avatar.png';
import Wrapper from '../styles/CommentList';
import CommentList from './CommentList';

function AddComment({ video }) {
  const user = useAuth();
  const [comment, setComment] = useState('');
  const [openSnackbar] = useSnackbar();

  function handleAddComment(event) {
    if (event.keyCode === 13) {
      event.target.blur();

      if (!comment.trim()) {
        return openSnackbar('Please write a comment');
      }

      addComment({ video, comment })
        .then(() => setComment(''))
        .catch(() => openSnackbar('Please sign in to add a comment'));
    }
  }

  return (
    <Wrapper>
      <h3>{video.comments.length} comments</h3>

      <div className="add-comment">
        {user ? (
          <img src={user.avatar} alt={user.username} />
        ) : (
          <img src={defaultAvatar} alt="Default user" />
        )}
        <textarea
          placeholder="Add a public comment..."
          value={comment}
          onKeyDown={handleAddComment}
          onChange={(event) => setComment(event.target.value)}
          rows={1}
        />
      </div>

      <CommentList comments={video.comments} />
    </Wrapper>
  );
}

export default AddComment;
