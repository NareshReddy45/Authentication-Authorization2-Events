import './index.css'

const EventItem = ({event, onSelectEvent, selectedImage, onSelectImage}) => {
  const {imageUrl, name, location, registrationStatus, id} = event

  const handleClick = () => {
    onSelectEvent(registrationStatus)
    onSelectImage(id)
  }

  const isSelected = selectedImage === id

  return (
    <li className="event-item">
      <button type="button" className="event-button" onClick={handleClick}>
        <img
          src={imageUrl}
          alt="event"
          className={`event-image ${isSelected ? 'selected' : ''}`}
        />
      </button>
      <h1 className="event-title">{name}</h1>
      <p className="event-location">{location}</p>
    </li>
  )
}

export default EventItem
