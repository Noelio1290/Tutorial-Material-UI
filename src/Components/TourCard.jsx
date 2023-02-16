import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {AccessTime} from "@mui/icons-material"
import Rating from '@mui/material/Rating';

const TourCard = ()=>{
    return (
        <Grid item xs={3}>
            <Paper elevation={5}>
                <img src="https://p4.wallpaperbetter.com/wallpaper/134/1001/249/singapore-city-world-beautiful-places-wallpaper-preview.jpg" 
                alt="" 
                className='img'
                />
                <Box paddingX={1}>
                    <Typography variant="h5" component="h2">
                        Ecatepec
                    </Typography>
                    <Box
                        sx={{
                            display:"flex",
                            alignItems:"center"
                        }}
                    >
                        <AccessTime sx={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5} >
                            5 hours
                        </Typography>
                    </Box>
                    <Box sx={{
                            display:"flex",
                            alignItems:"center"
                        }}
                    >
                        <Rating name="read-only" value={4.5} readOnly />
                    </Box>  
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard