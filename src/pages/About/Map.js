import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import styles from './index.less';

const coordinate = {
  lat: 22.19732,
  lng: 113.540552
}

function Map (props) {
  return (
    <GoogleMap
      defaultZoom={17}
      defaultCenter={coordinate}
    >
      <Marker position={coordinate} />
    </GoogleMap>
  )
} 

export default withScriptjs(withGoogleMap(Map));