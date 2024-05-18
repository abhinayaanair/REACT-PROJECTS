import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import SearchBox from "./SeachBox";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import UmbrellaIcon from '@mui/icons-material/Umbrella';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import './InfoBox.css'

export default function InfoBox({info}) {

    const INT_URL=
    "https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTlklMjBXRUFUSEVSfGVufDB8MHwwfHx8MA%3D%3D"
 
    const HOT_URL="https://images.unsplash.com/photo-1504652362009-4e63f5a5e0d1?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdCUyMG1vdW50YWlufGVufDB8fDB8fHww"
    const COLD_URL="https://images.unsplash.com/photo-1478719059408-592965723cbc?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q09MRCUyMFBJTkUlMjBUUkVFU3xlbnwwfDB8MHx8fDA%3D"
    const RAIN_URL="https://images.unsplash.com/photo-1493314894560-5c412a56c17c?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UkFJTlklMjBXRUFUSEVSfGVufDB8MHwwfHx8MA%3D%3D"
  
  return(
    <div className="InfoBox">
   <br />
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={info.humidity>80?RAIN_URL:(info.temp>22)?HOT_URL:COLD_URL}
       
      />
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}{info.humidity>80?<UmbrellaIcon/>:(info.temp>22)?<WbSunnyIcon/>:<AcUnitIcon/>}

        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature: {info.temp}&deg;C</p>
          <p>Humidity: {info.humidity}</p>
          <p>Min Temp: {info.tempMin}&deg;C</p>
          <p>Max Temp: {info.tempMax}&deg;C</p>
          <p>Weather can be described as <i>{info.weather}</i> and feels like {info.feelsLike}&deg;C</p>
        </Typography>
      </CardContent>
     
    </Card>
    </div>
)
}
