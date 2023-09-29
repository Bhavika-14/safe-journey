import React, { useRef, useEffect, useState } from 'react';
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
require('dotenv').config()
import { GeocodingControl } from "@maptiler/geocoding-control/maplibregl";
//import "@maptiler/geocoding-control/dist/style.css";


const Map = ({pickupCoordinates,dropoffCoordinates}) => {

  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng] = useState(139.753);
  const [lat] = useState(35.6844);
  const [zoom] = useState(4);
  const API_KEY = process.env.NEXT_PUBLIC_MAPLIBRE_API_KEY

  
  

  const addToMap=(coordinates)=>{
    new maplibregl.Marker({color: "#FF0000"})
    .setLngLat(coordinates)
    .addTo(map.current);

  }

  useEffect(()=>{
    if (map.current) return; // stops map from intializing more than once
  
    map.current = new maplibregl.Map({
      container: mapContainer.current,
      style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
      center: [lng, lat],
      
      
      zoom: zoom
    });

    map.current.addControl(new maplibregl.NavigationControl(), 'top-right');


  },[])
  useEffect(() => {
    
    if(!map.current) return

    

    
    if(pickupCoordinates){
      addToMap(pickupCoordinates)
    }

    if(dropoffCoordinates){
      addToMap(dropoffCoordinates)
    }

    if(pickupCoordinates && dropoffCoordinates){
      console.log(pickupCoordinates,dropoffCoordinates)
      map.current.fitBounds([pickupCoordinates,dropoffCoordinates],{ padding:50})
    }
   console.log("map",pickupCoordinates,dropoffCoordinates)
    
    console.log(map.current)
  
  }, [lng,lat,zoom,API_KEY,pickupCoordinates,dropoffCoordinates]);
  return (
    <div className='w-[100%] h-[100%] relative'>
      
    <div ref={mapContainer} className='w-[100%] h-[100%] absolute'></div>
    </div>
  )
}

export default Map