import React from "react"
import Event from "./Event"


class EventTable extends React.Component {
  handleDelete = (event) => {
    this.props.handleDelete(event);
  }
  render() {
    return(
      <table className="table-auto mx-auto m-0">
        <thead>
          <tr>
            <th className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium bg-green-100  ">Name</th>
            <th className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium bg-green-100  ">Date</th>
            <th className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium bg-green-100  ">Place</th>
            <th className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium bg-green-100  ">Description</th>
            <th className="border border-emerald-500 px-4 py-2 text-emerald-600 font-medium bg-green-100  "></th>
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