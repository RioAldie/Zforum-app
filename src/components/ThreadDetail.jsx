import {
  Box,
  Typography,
  Card,
  CardHeader,
  Avatar,
  CardContent,
} from '@mui/material';

const ThreadDetail = ({ owner, body, title, createdAt }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 645 }}>
        <CardHeader
          avatar={
            <Avatar
              srcSet={owner.avatar}
              aria-label="recipe"></Avatar>
          }
          title={owner.name}
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
      </Card>
    </Box>
  );
};

export default ThreadDetail;
