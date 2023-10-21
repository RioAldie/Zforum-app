import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  asyncReceiveThreadDetail,
  asyncReplyThread,
} from '../states/threadDetail/action';
import { Box, TextField, Button, Typography } from '@mui/material';
import ThreadDetail from '../components/ThreadDetail';
import Comment from '../components/Comment';

const DetailThread = () => {
  const [comment, setComment] = useState('');
  const { id } = useParams();
  const { threadDetail = null } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveThreadDetail(id));
  }, [id, dispatch]);

  const onReplyTalk = (content) => {
    dispatch(asyncReplyThread({ content, id }));
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
          {threadDetail.comments.map((comment, i) => {
            if (comment !== undefined) {
              return <Comment key={i} {...comment} />;
            }
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default DetailThread;
