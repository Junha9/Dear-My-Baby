import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function DummyPlaceItem({ place }) {
  // console.log(region.placeName, 'ththibal');
  return (
    <div className="placeItem">
      <Box component="ul" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
        <Card component="li" sx={{ minWidth: 40, flexGrow: 1, height: '20vh' }}>
          <CardCover>
            <img
              src={place.imgUrl}
              // srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography textColor="#fff" mt={{ xs: 16, sm: 10 }} sx={{ fontSize: '0.7rem', fontWeight: '700' }}>
              {place.placeName}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}
