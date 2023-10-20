import {
  Badge,
  Box,
  Divider,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import Avatar from '@mui/material/Avatar';
import PropTypes from 'prop-types';

const BadgeBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '50px',
});

const Contributor = ({ name, email, avatar, score }) => {
  return (
    <>
      <ListItem alignItems="flex-start" sx={{ cursor: 'pointer' }}>
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src={`${avatar}`} />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline', cursor: 'pointer' }}
                component="span"
                variant="body2"
                color="text.secondary">
                {email}
              </Typography>
            </>
          }
        />
        <BadgeBox>
          <Badge
            color="secondary"
            badgeContent={score < 1 ? '0' : score}
            max={999}>
            <GradeIcon color="warning" />
          </Badge>
        </BadgeBox>
      </ListItem>
      <Divider variant="inset" component="li" />
    </>
  );
};
Contributor.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  score: PropTypes.number,
  avatar: PropTypes.string,
};

export default Contributor;
