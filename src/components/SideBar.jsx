import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemButton,
} from '@mui/material';
import ForestIcon from '@mui/icons-material/Forest';
import LandscapeIcon from '@mui/icons-material/Landscape';
import ChairIcon from '@mui/icons-material/Chair';
import PetsIcon from '@mui/icons-material/Pets';
import DirectionsBikeIcon from '@mui/icons-material/DirectionsBike';
const Sidebar = () => {
  return (
    <Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', lg: 'block' },
          width: '200px',
          position: 'fixed',
          top: '100px',
          left: '50px',
        }}>
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ForestIcon />
              </ListItemIcon>
              <ListItemText primary="Hutan" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <LandscapeIcon />
              </ListItemIcon>
              <ListItemText primary="Alam" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <PetsIcon />
              </ListItemIcon>
              <ListItemText primary="Animal" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <ChairIcon />
              </ListItemIcon>
              <ListItemText primary="Furniture" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#">
              <ListItemIcon>
                <DirectionsBikeIcon />
              </ListItemIcon>
              <ListItemText primary="Sport" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
