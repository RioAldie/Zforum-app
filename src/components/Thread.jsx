import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Thread({ title, body, createdAt, user, id }) {
  // const dispatch = useDispatch();
  // const onLike = (id) => {
  //   dispatch(asyncToogleLikeThread(id));
  // };
  return (
    <Link to={`/thread/${id}`}>
      <Card sx={{ maxWidth: 645 }}>
        <CardHeader
          avatar={
            <Avatar srcSet={user.avatar} aria-label="recipe"></Avatar>
          }
          title={user.name}
          subheader={createdAt}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {body}
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
            {/* <IconButton
            aria-label="add to favorites"
            sx={{ padding: '2px' }}
            onClick={() => onLike(id)}>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <Typography>{upVotesBy.length}</Typography> */}
          </Box>
        </CardActions>
      </Card>
    </Link>
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
