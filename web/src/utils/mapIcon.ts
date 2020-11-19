import Leaflet from 'leaflet'
import mapMarkerImg from '../assets/map-marker.svg'

const mapIcon = Leaflet.icon({
  iconUrl: mapMarkerImg,

  iconSize: [28, 34],  
  iconAnchor: [14, 17],
  popupAnchor: [150, 32]
})

export default mapIcon