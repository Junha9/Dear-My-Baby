import PropTypes from 'prop-types';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardCover from '@mui/joy/CardCover';
import CardContent from '@mui/joy/CardContent';
import Typography from '@mui/joy/Typography';

export default function PlaceItem({ place }) {
  return (
    <div className="placeItem">
      {/* <a href='/'><img src={place.placeImg} alt="random"></img></a>
      {place.placeName} | {place.placeType} */}

      <Box component="ul" sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}>
        <Card component="li" sx={{ minWidth: 40, flexGrow: 1 }}>
          <CardCover>
            <img
              src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
              // src={place.placeImg}
              srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
              loading="lazy"
              alt=""
            />
          </CardCover>
          <CardContent>
            <Typography level="h6" fontWeight="sm" textColor="#fff" mt={{ xs: 12, sm: 18 }}>
              {place.placeName} | {place.placeType}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </div>
  );
}

PlaceItem.propTypes = {
  place: PropTypes.shape({
    placeId: PropTypes.number,
    placeName: PropTypes.string,
    placeType: PropTypes.string,
    placeImg: PropTypes.string,
    lat: PropTypes.string,
    lng: PropTypes.string,
  }),
};
