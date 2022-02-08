import 'leaflet/dist/leaflet.css'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import * as L from 'leaflet'
import 'leaflet-defaulticon-compatibility';
import { icon } from 'leaflet'
import styles from './map-container.module.css'
import itemPosition from '../../assets/icons/icon-pin.png'


const MapView = ({ location }) => {

  const pinLocation = {
    currentLocation: { lat: location.latitude, lng: location.longitude },
    zoom: 17
  }

  const shopPin = L.icon({
    iconUrl: "public/icon-pin.png",
    iconSize: [39, 50]
  })

  const ICON = icon({
    iconUrl: "/icon-pin.png",
    iconSize: [39, 50],
  })


  return (
    <MapContainer className={styles.mapviewwrap} center={pinLocation.currentLocation} zoom={pinLocation.zoom} zoomControl={false}>
      <TileLayer
        attribution='&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
        url='https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png'
      />
      <Marker position={pinLocation.currentLocation} icon={shopPin} />

    </MapContainer>
  )
}

export default MapView