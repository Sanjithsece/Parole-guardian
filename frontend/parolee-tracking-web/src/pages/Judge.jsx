import { Grid } from '@mui/material';
import MapComponent from '../components/Dashboard';
import Lawyer from './Lawyer';

const Judge = () => {
  const position = { lat: 37.7749, lng: -122.4194 };
  const restrictedZone = {
    center: position,
    radius: 500,
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <div className="map-container">
          <MapComponent position={position} restrictedZones={[restrictedZone]} />
        </div>
      </Grid>
      <Grid item xs={12} md={6}>
        <Lawyer />
      </Grid>
    </Grid>
  );
};

export default Judge;
