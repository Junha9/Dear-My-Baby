import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import Typography from '@mui/material/Typography';
import MapIcon from '@mui/icons-material/Map';
import { Link } from 'react-router-dom';

const plans = [
  {
    planId: 1,
    planImg: 'https://picsum.photos/id/234/200/300',
    planDate: '2022-01-01',
    planCount: 3,
  },
  {
    planId: 2,
    planImg: 'https://picsum.photos/id/233/200/300',
    planDate: '2022-02-01',
    planCount: 3,
  },
  {
    planId: 3,
    planImg: 'https://picsum.photos/id/232/200/300',
    planDate: '2022-03-01',
    planCount: 3,
  },
];

export default function AlbumList() {
  return (
    <>
      <Box p={2}>
        <Typography className='travel-record' variant="h4"> 내 여행 기록들 </Typography>
      </Box>
      <List className='record-list'>
        {plans.map((plan) => (
          <ListItem className='record-detail'
            key={plan.planId}
            secondaryAction={
              <IconButton component={Link} to="map" edge="end" aria-label="to-map">
                <MapIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton component={Link} to="view">
              <ListItemAvatar>
                <Avatar src={plan.planImg}></Avatar>
              </ListItemAvatar>
              <ListItemText primary="제주도 여행" secondary="Jan 9, 2014" />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
