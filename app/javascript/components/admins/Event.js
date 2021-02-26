import React from "react"
import PropTypes from 'prop-types';


class Event extends React.Component {

  handleDelete = (e) => {
    e.preventDefault();
    $.ajax({
      method: 'DELETE',
      url: '/admins/events/' + this.props.event.id,
      success: function(data) {
        this.props.handleDelete(this.props.event);
      }.bind(this),
      error: function(xhr, status, error) {
        alert('Cannot delete requested record: ', error);
      }
    });
  }
  
  render() {
    var event = this.props.event;
    return(
      <tr>
        <td>{event.name}</td>
        <td>{event.event_date}</td>
        <td>{event.place}</td>
        <td>{event.description}</td>
        <td>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
        </td>
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