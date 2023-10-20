import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncReplyThread,
} from '../states/threadDetail/action';
import { asyncAddThread } from '../states/thread/action';
import Thread from '../components/Thread';
import { Box, TextField, Button, Typography } from '@mui/material';
import ThreadDetail from '../components/ThreadDetail';
import Comment from '../components/Comment';

const DetailThread = () => {
  const [comment, setComment] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
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
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: '100px',
        paddingY: '50px',
      }}>
      <Box sx={{ width: { xs: '90%', sm: '90%', lg: '60%' } }}>
        <ThreadDetail {...threadDetail} />
      </Box>
      <Box
        sx={{
          width: { xs: '90%', sm: '90%', lg: '60%' },
          display: 'flex',
          flexDirection: 'row',
          marginTop: '30px',
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
          onClick={() => onReplyTalk(comment)}
          sx={{ marginLeft: '20px' }}>
          Kirim
        </Button>
      </Box>
      <Box sx={{ width: { xs: '90%', sm: '90%', lg: '60%' } }}>
        <Typography sx={{ margin: '20px' }}>
          Komentar ({threadDetail.comments.length})
        </Typography>

        <Box>
          {threadDetail.comments.map((comment) => {
            return <Comment key={comment.id} {...comment} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default DetailThread;
