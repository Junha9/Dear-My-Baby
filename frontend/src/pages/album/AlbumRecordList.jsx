import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import AlbumRecordItem from './AlbumRecordItem';
import IconButton from '@mui/material/IconButton';
import MapIcon from '@mui/icons-material/Map';

const records = [
  {
    recordId: 1,
    dayCount: 1,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/237/200/300',
    lat: 37.4967288,
    lng: 127.0448612,
  },
  {
    recordId: 2,
    dayCount: 1,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/236/300/300',
    lat: 37.4977288,
    lng: 127.0458612,
  },
  {
    recordId: 3,
    dayCount: 2,
    recordType: 0,
    recordFile: 'https://picsum.photos/id/235/300/200',
    lat: 37.4987288,
    lng: 127.0458612,
  },
];

export default function AlbumRecord() {
  return (
    <>
      <Box p={2}>
        <Typography variant="h3">제주도 여행</Typography>
        <Box sx={{ display: 'flex', alignContent: 'center' }}>
          <Typography variant="h6" sx={{ color: 'gray' }}>
            2023-01-01 ~ 2023-01-03
          </Typography>
          <IconButton component={Link} to="../map" edge="end" aria-label="to-map">
            <MapIcon />
          </IconButton>
        </Box>
      </Box>
      {records.map((record) => (
        <AlbumRecordItem key={record.recordId} record={record}></AlbumRecordItem>
      ))}
    </>
  );
}
