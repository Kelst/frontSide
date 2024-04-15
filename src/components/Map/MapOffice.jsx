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

  return <div className=' flex items-center justify-center flex-col '>
    <div className='mb-2'>
   <div className=' text-sm border-2  rounded-md p-3   mx-[20px] flex flex-col items-start justify-center mb-2'>
    <div className=' font-bold'>ТЦ "Проспект", оф. № 128А (праворуч від ескалатору)</div>
   <div className=' text-[14px]'>пн-пт 09:00 - 18:00 (перерва 14:00 - 15:00)</div> 
   <div className=' text-[12px]'> сб 10:00 - 18:00 (перерва 13:00 - 14:00), нд - вихідний</div>
    </div>
    <div className=' text-sm border-2  rounded-md p-3   mx-[20px] flex flex-col items-start justify-center'>
    <div className=' font-bold'>ТРЦ «DEPOt» (2-й поверх)

</div>
   <div className=' text-[14px]'>пн-нд 10:00 - 20:00 (перерва 14:00 - 14:30)
</div>
</div>


    </div>
 { isLoaded===true ? (
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={{lat:48.26659945813064,lng:25.939732362574233}}
        zoom={14}
        onUnmount={onUnmount}  
      >
        { /* Child components, such as markers, info windows, etc. */ }
        
        <div >
        <Marker position={center} title='Test1'  /> 
        <Marker position={{lat:48.26659945813064,lng:25.939732362574233}}  title='Test2'/>
        <Marker position={{lat:48.269390745825326, lng:25.92371344232763}}  title='Test2'/>
        <Marker position={{lat: 48.258838529448404, lng:25.95662062883565}}  title='Test2'/>
       
        </div>
      </GoogleMap>
  ) : <></>}
  </div>
}

export default React.memo(MapOffice)