import { Avatar, CardHeader, Paper, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils/time';

const Comment = ({ owner, content, createdAt }) => {
  const postTime = postedAt(createdAt);
  return (
    <Paper elevation={2} sx={{ p: '5px', marginTop: '10px' }}>
      <CardHeader
        avatar={
          <Avatar src={owner.avatar} aria-label="recipe"></Avatar>
        }
        title={owner.name}
        subheader={postTime}
      />
      <Typography variant="body2" sx={{ padding: '20px' }}>
        {parse(content)}
      </Typography>
    </Paper>
  );
};

Comment.propTypes = {
  owner: PropTypes.object,
  content: PropTypes.string,
  createdAt: PropTypes.string,
};
export default Comment;
