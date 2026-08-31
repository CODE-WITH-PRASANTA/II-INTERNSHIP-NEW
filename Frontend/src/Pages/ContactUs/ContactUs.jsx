import React from 'react'
import ContactBreadcrumb from '../../Component/ContactBreadcrumb/ContactBreadcrumb'
import Contactinformation from '../../Component/Contactinformation/Contactinformation'
import Map from '../../Component/Map/Map'

const ContactUs = () => {
  return (
    <div>
        <ContactBreadcrumb/>
        <Contactinformation/>
        <Map/>
    </div>
  )
}

export default ContactUs