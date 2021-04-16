import React from "react"
import PropTypes from 'prop-types';
import { Button } from 'antd';


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
        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{event.name}</td>
        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{event.event_date}</td>
        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{event.place}</td>
        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">{event.description}</td>
        <td className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium">
          <Button>
          <a className="btn btn-danger btn-xs"
             onClick={this.handleDelete} >
            Delete
          </a>
          </Button>
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