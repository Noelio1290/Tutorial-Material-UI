import './App.css';
import TourCard from './Components/TourCard';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import SearchAppBar from './Components/AppBar';
import cities from "./Components/Data.json"
import { Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <SearchAppBar />
      <Container sx={{ marginY: 5 }}>
        {cities.map((city) => (
          <>
            <Typography
              variant='h4'
              component="h2"
              marginTop={5}
              marginBottom={3}
            >
              Conoce {city.name}!!
            </Typography>
          <Grid container spacing={5}>
            {city.tours.map((tour, index) => (
              <TourCard tour={tour} key={index} />
              ))};
          </Grid>
          </>
        ))}
        
      </Container>
    </div>
  );
}

export default App;
