import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import { apiGetPlanRecord } from '@/commons/api/plan';

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

export default function AlbumList() {
  const { familyId } = useParams();
  const [planList, setPlanList] = useState([]);

  useEffect(() => {
    apiGetPlanRecord(familyId).then(({ data }) => setPlanList(data));
  }, [familyId]);

  return (
    <div className="album-list-div">
      <Box p={2}>
        <Typography className="travel-record" variant="h4">
          기록 앨범
        </Typography>
      </Box>
      <List className="record-list">
        {planList.length > 0 ? (
          planList.map((plan) => (
            <ListItem
              className="record-detail"
              key={plan.planId}
              secondaryAction={
                <IconButton component={Link} to={`${plan.planId}/map`} edge="end" aria-label="to-map">
                  <MapIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton component={Link} to={`${plan.planId}/view`}>
                <ListItemAvatar>
                  <Avatar src={plan.regionImgUrl}>{plan.planName}</Avatar>
                </ListItemAvatar>
                <ListItemText primary={plan.planName} secondary={plan.startDate} />
              </ListItemButton>
            </ListItem>
          ))
        ) : (
          <Box sx={{ p: 2 }}>등록된 계획이 없습니다.</Box>
        )}
      </List>
    </div>
  );
}
