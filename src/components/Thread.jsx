import { Card, Button, Badge, styled } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Avatar, Box, CardHeader } from '@mui/material';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils/time';
import parse from 'html-react-parser';
import ForumIcon from '@mui/icons-material/Forum';

const BadgeBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '230px',
  height: '50px',
});
const Thread = ({
  title,
  body,
  createdAt,
  user,
  id,
  totalComments,
}) => {
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
          {parse(body)}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            width: '300px',
            height: '50px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Link to={`/thread/${id}`}>
            <Button size="small" variant="outlined" color="secondary">
              Lihat
            </Button>
          </Link>
          <BadgeBox>
            <Typography>Diskusi Berlangsung : </Typography>
            <Badge
              sx={{ marginLeft: '10px' }}
              color="secondary"
              badgeContent={totalComments < 1 ? '0' : totalComments}
              max={999}>
              <ForumIcon color="warning" />
            </Badge>
          </BadgeBox>
        </Box>
      </CardActions>
    </Card>
  );
};

Thread.propTypes = {
  title: PropTypes.string,
  body: PropTypes.string,
  createdAt: PropTypes.string,
  users: PropTypes.array,
  user: PropTypes.object,
  id: PropTypes.string,
  totalComments: PropTypes.number,
};

export default Thread;
