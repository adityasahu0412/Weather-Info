import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
    const HOT_URL = "https://images.unsplash.com/photo-1623356301071-6a39cc58a004?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEwfHxob3QlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const COLD_URL= "https://images.unsplash.com/photo-1603726574752-a85dc808deab?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q29sZCUyMHdlYXRoZXIlMjB3aXRoJTIwZ2lybHxlbnwwfHwwfHx8MA%3D%3D";
    const RAIN_URL ="https://plus.unsplash.com/premium_photo-1664299041161-25e40a5feac0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njl8fHJhaW55JTIwd2l0aCUyMGdpcmx8ZW58MHx8MHx8fDA%3D";
   

  return (
      <div className="InfoBox">
      <div className='cardcontainer'>
        <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image= {info.humidity >80 ? RAIN_URL :info.temp >15 ?HOT_URL : COLD_URL }
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city} {info.humidity >80 ? <ThunderstormIcon/>:info.temp >15 ? <WbSunnyIcon/> : <AcUnitIcon/> }
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} component ="span">
          <p>Temperature = {info.temp}&deg;C</p>
          <p>Humidity = {info.humidity}</p>
          <p>Maximum Temperature = {info.tempMax}&deg;C</p>
          <p>Minimum Temperature = {info.tempMin}&deg;C</p>
          <p>The Weather is describe as {info.weather} and feels like {info.feelsLike} </p>
          
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
      </CardActions>
    </Card> </div>
    </div>
  )
}