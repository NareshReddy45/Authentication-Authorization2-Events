import './index.css'

const ActiveEventRegistrationDetails = ({activeEvent}) => {
  const renderView = () => {
    switch (activeEvent) {
      case 'YET_TO_REGISTER':
        return (
          <div className="registration-details">
            <img
              className="registration-image"
              src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
              alt="yet to register"
            />
            <h1 className="registration-text">
              Please register for the event.
            </h1>
            <p>
              A live performance brings so much to your relationship with dance
            </p>
            <button type="button" className="registration-button">
              Register Here
            </button>
          </div>
        )
      case 'REGISTERED':
        return (
          <div className="registration-details">
            <img
              className="registration-image"
              src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
              alt="registered"
            />
            <h1 className="registration-text">
              You have already registered for the event
            </h1>
          </div>
        )
      case 'REGISTRATIONS_CLOSED':
        return (
          <div className="registration-details">
            <img
              className="registration-image"
              src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
              alt="registrations closed"
            />
            <h1 className="registration-text">Registrations Are Closed Now!</h1>
            <p>Stay tuned. We will reopen</p>
          </div>
        )
      default:
        return (
          <p className="registration-placeholder">
            Click on an event, to view its registration details
          </p>
        )
    }
  }

  return <div className="active-event-container">{renderView()}</div>
}

export default ActiveEventRegistrationDetails
