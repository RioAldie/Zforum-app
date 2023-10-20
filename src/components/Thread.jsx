import { Card, Button } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils/time';
import ReactHtmlParser from 'react-html-parser';

export default function Thread({ title, body, createdAt, user, id }) {
  const postTime = postedAt(createdAt);
  return (
    <Card
      sx={{
        maxWidth: 645,
        width: { xs: '300px', sm: '500px', lg: '645px' },
      }}>
      <CardHeader
        avatar={
          <Avatar src={user.avatar} aria-label="recipe"></Avatar>
        }
        title={user.name}
        subheader={postTime}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {ReactHtmlParser(body)}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: '100px',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Link to={`/thread/${id}`}>
            <Button variant="outlined" color="secondary">
              Lihat
            </Button>
          </Link>
        </Box>
      </CardActions>
    </Card>
  );
}

Thread.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  users: PropTypes.array,
  upVotesBy: PropTypes.string,
  user: PropTypes.object,
  id: PropTypes.string,
};
