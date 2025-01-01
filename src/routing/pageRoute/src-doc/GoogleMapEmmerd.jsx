import React from 'react'

const GoogleMapEmmerd = () => {
  return (
    <div style={{ width: '100%', maxWidth: '350px', margin: 'auto' }}>
    <iframe
      src="https://www.google.com/maps/embed?pb=!4v1735566465356!6m8!1m7!1sxb9VAA2Ndv7ekrc8ESlR7Q!2m2!1d10.37781845444843!2d77.83014403876687!3f185.8829317395538!4f-3.505007049263071!5f0.7820865974627469"
      width="400"
      height="250"
      style={{ border: '0' }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map Embed"
    ></iframe>
  </div>
  )
}

export default GoogleMapEmmerd