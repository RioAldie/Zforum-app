import {
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from '@mui/material';
import PropTypes from 'prop-types';
import parse from 'html-react-parser';
import { postedAt } from '../utils/time';

const ThreadDetail = ({ owner, body, title, createdAt }) => {
  const postTime = postedAt(createdAt);
  return (
    <Box>
      <Card sx={{ maxWidth: '100%' }}>
        <CardHeader
          avatar={
            <Avatar src={owner.avatar} aria-label="recipe"></Avatar>
          }
          title={owner.name}
          subheader={postTime}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {parse(body)}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
ThreadDetail.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  owner: PropTypes.object,
};
export default ThreadDetail;
