import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
                        <Typography variant="body2" component="p">
                            5 hours
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Grid>
    );
};

export default TourCard