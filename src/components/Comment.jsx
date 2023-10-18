import { Box, Typography } from '@mui/material';

const Comment = ({ owner, content }) => {
  return (
    <Box>
      <Typography sx={{ fontWeight: 'bold' }}>
        {owner.name}
      </Typography>
      <Typography>{content}</Typography>
    </Box>
  );
};

export default Comment;
