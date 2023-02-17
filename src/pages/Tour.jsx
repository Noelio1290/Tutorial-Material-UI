import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container"
import Box from "@mui/material/Box";
import ImageCollage from "../Components/ImageCollage";
import CustomizedAccordions from "../Components/Accodian";
import Paper from "@mui/material/Paper";
import BottomNavigation from "@mui/material/BottomNavigation";
import BasicModal from "../Components/Modal";

const Tour = () => 
<Container 
    sx={{width:900}}
>
    <Typography 
        variant="h3" 
        component="h1" 
        marginTop={3}
    >
        Explora el mundo en Ecatepec
    </Typography>
    <Box 
        marginTop={3} 
        sx={{display:"flex"}}
    >
        <img 
            src="https://upload.wikimedia.org/wikipedia/commons/9/90/Municipio_de_Ecatepec_de_Morelos.jpg" 
            alt="" 
            width={320}
        />
        <ImageCollage/>
    </Box>
    <Box>
        <Typography 
            variant="h6" 
            component="h4" 
            marginTop={3}
        >
            Sobre los Boletos
        </Typography>
        <Typography 
            variant="paragraph" 
            component="p" 
            marginTop={3}
        >
            Los boletos te los dan al tomar el camion RTP 
            que te trae a ecatepec, para que puedas subir 
            a las atracciones tienes que pagar un dinero 
            adicional, ya que el RTP solo se encarga de el 
            transporte: "en la pagina principal viene el costo 
            de las atracciones", tortas aguas y gansitos se 
            venden por separado, los encontraras en cualquier 
            tiendita que veas en Ecatepec o Puestitos fuera del 
            metro, le recomendamos venir drogado ya que en el 
            trancurso del viaje no va a poder Fumar, Inhalar, 
            o tomar cualquier estupefaciente.
        </Typography>
    </Box>
    <Box marginBottom={10}>
        <Typography 
            variant="h6" 
            component="h4" 
            marginTop={3}
            marginBottom={2}
        >
            Preguntas Frecuentes de la Banda
        </Typography>
        <CustomizedAccordions />
    </Box>
    <Paper 
        sx={{ 
        position: 'fixed',
        bottom: 0, 
        left: 0, 
        right: 0 }} 
        elevation={3}
    >
        <BottomNavigation>
            <BasicModal />
        </BottomNavigation>
      </Paper>
</Container>;

export default Tour