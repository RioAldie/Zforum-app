import {
  Badge,
  Box,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
  styled,
} from '@mui/material';
import Avatar from '@mui/material/Avatar';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PropTypes from 'prop-types';

const BadgeBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '30px',
  height: '50px',
});

export default function UsersCard(props) {
  const { name } = props;
  return (
    <>
      <ListItem
        alignItems="flex-start"
        sx={{
          cursor: 'pointer',
          minWidth: '200px',
          display: 'flex',
          alignItems: 'center',
        }}>
        <ListItemAvatar>
          <Avatar alt={name} src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary={name}
          secondary={
            <>
              <Typography
                sx={{ display: 'inline', cursor: 'pointer' }}
                component="span"
                variant="body2"
                color="text.primary"></Typography>
            </>
          }
        />
        <BadgeBox>
          <Badge color="secondary" badgeContent={8} max={999}>
            <FavoriteIcon color="error" />
          </Badge>
        </BadgeBox>
      </ListItem>
    </>
  );
}

UsersCard.propTypes = {
  name: PropTypes.string,
};
