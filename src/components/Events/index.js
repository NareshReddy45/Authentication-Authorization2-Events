import {useState} from 'react'
import EventItem from '../EventItem'
import ActiveEventRegistrationDetails from '../ActiveEventRegistrationDetails'
import './index.css'

const eventsList = [
  {
    id: 'f9bb2373-b80e-46b8-8219-f07217b9f3ce',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/event-canada-dance-festival-img.png',
    name: 'Canada Dance Festival',
    location: 'Canada, America',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'c0040497-e9cb-4873-baa9-ef5b994abfff',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Puthanalkkal Kalavela',
    location: 'Karnataka, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: '0037d5e4-4005-4030-987b-ce41b691b92a',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kuchipudi-img.png',
    name: 'Nithyopahara',
    location: 'Kerala, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
  {
    id: 'c9ff08cb-610c-4382-9939-78e5e50a72b2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Shivam',
    location: 'Andhra Pradesh, India',
    registrationStatus: 'YET_TO_REGISTER',
  },
  {
    id: 'b8c14d5a-2d8f-4df3-9d78-514ca0f1ee80',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-kathakali-img.png',
    name: 'Kathakali Dance Show',
    location: 'Tamil Nadu, India',
    registrationStatus: 'REGISTERED',
  },
  {
    id: 'a2e5d8f3-41b1-482c-9953-72c3f4f93759',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/events-bharatanatyam-img.png',
    name: 'Bharatanatyam Performance',
    location: 'Chennai, India',
    registrationStatus: 'REGISTRATIONS_CLOSED',
  },
]

const Events = () => {
  const [activeEvent, setActiveEvent] = useState(null)
  const [selectedImage, setSelectedImage] = useState(null)

  const onSelectEvent = status => {
    setActiveEvent(status)
  }

  const onSelectImage = id => {
    setSelectedImage(id)
  }

  return (
    <div className="events-container">
      <div className="events-list">
        <h1 className="events-heading">Events</h1>
        <ul className="events-grid">
          {eventsList.map(event => (
            <EventItem
              key={event.id}
              event={event}
              onSelectEvent={onSelectEvent}
              selectedImage={selectedImage}
              onSelectImage={onSelectImage}
            />
          ))}
        </ul>
      </div>
      <ActiveEventRegistrationDetails activeEvent={activeEvent} />
    </div>
  )
}

export default Events
