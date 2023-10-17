import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {
  Avatar,
  Box,
  CardHeader,
  Checkbox,
  IconButton,
} from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';
import PropTypes from 'prop-types';

export default function Thread({
  title,
  body,
  createdAt,
  user,
  upVotesBy,
}) {
  return (
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
          <IconButton
            aria-label="add to favorites"
            sx={{ padding: '2px' }}>
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: 'red' }} />}
            />
          </IconButton>
          <Typography>{upVotesBy}</Typography>
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
};
