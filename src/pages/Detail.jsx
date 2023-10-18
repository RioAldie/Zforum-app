import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncReplyThread,
} from '../states/threadDetail/action';
import { asyncAddThread } from '../states/thread/action';
import Thread from '../components/Thread';
import { Box, TextField, Button } from '@mui/material';
import ThreadDetail from '../components/ThreadDetail';
import Comment from '../components/Comment';

const DetailThread = () => {
  const [comment, setComment] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector(
    (states) => states
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // @TODO: dispatch async action to get talk detail by id
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch, isUpdate]);

  const onReplyTalk = (content) => {
    // @TODO: dispatch async action to add reply talk

    dispatch(asyncReplyThread({ content, id }));
    setIsUpdate(!isUpdate);
  };

  if (!threadDetail) {
    return null;
  }

  return (
    <>
      <Box>
        <ThreadDetail {...threadDetail} />
      </Box>
      <Box
        sx={{
          maxWidth: '80%',
          display: 'flex',
          flexDirection: 'row',
        }}>
        <TextField
          fullWidth
          id="Comment"
          label="Komentar"
          type="text"
          variant="outlined"
          onChange={(e) => setComment(e.target.value)}
        />
        <Button
          variant="contained"
          onClick={() => onReplyTalk(comment)}>
          Kirim
        </Button>
      </Box>
      <Box>
        <p>Komentar</p>
        {threadDetail.comments.length}
        <Box>
          {threadDetail.comments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        </Box>
      </Box>
    </>
  );
};

export default DetailThread;
