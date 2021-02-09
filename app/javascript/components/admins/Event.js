import React from "react"
import PropTypes from 'prop-types';


class Event extends React.Component {
  
  render() {
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
      </tr>
    )
  }
}
Event.propTypes = {
  name: PropTypes.string,
  event_date: PropTypes.string,
  place: PropTypes.string,
  description: PropTypes.string
}
export default Event;