import Map from './Map';
import styles from './index.less';

function GoogleMap () {
  const googleMapURL = `https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places`;

  return (
    <Map 
      isMarkerShown
      googleMapURL={googleMapURL}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `600px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  );
}


function About (props) {


  return (
    <div className={styles.about}>
      <section className={styles.map}>
          <GoogleMap />
          <div className={styles.transport}>

          </div>
      </section>
    </div>
  )
} 

export default About;