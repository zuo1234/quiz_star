import React from "react"
import Event from "./Event"


class EventTable extends React.Component {
  handleDelete = (event) => {
    this.props.handleDelete(event);
  }
  render() {
    return(
      <table className="table table-striped">
        <thead>
          <tr>
            <th className="col-md-3">Name</th>
            <th className="col-md-2">Date</th>
            <th className="col-md-3">Place</th>
            <th className="col-md-4">Description</th>
          </tr>
        </thead>
        <tbody>
          <React.Fragment>
            {
              this.props.events.map((event, index) => {
                  return <Event key={index} event={event} handleDelete={this.handleDelete}/>
                }
              )
            }
          </React.Fragment>
        </tbody>
      </table>
    )
  }
}

export default EventTable;