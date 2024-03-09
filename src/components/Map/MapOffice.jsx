import React from 'react'
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '70vw',
  height: '50vh',
  
};

const center = {
 
  lat:48.25898853013352,
  lng: 25.956481153965818
};

function MapOffice() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "AIzaSyCk3eWqtwQDddcKGxI0bQ73gdiCcL5ltag"
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])

  return isLoaded ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:48.26659945813064,lng:25.939732362574233}}
        zoom={14}
      
        onUnmount={onUnmount}
       
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
        <div >
        <Marker position={center} title='Test1'  /> 
        <Marker position={{lat:48.269390745825326, lng:25.92371344232763}}  title='Test2'/>
        </div>
      </GoogleMap>
  ) : <></>
}

export default React.memo(MapOffice)