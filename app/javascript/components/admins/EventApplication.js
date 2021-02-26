import React from "react"
import EventTable from "./EventTable"
import NewForm from "./NewForm"
import $ from "jquery"


class EventApplication extends React.Component {
  constructor(props){
　　super(props);
　　this.state = {events: []};
　}
  componentDidMount() {
    this.getDataFromApi();
  }
  getDataFromApi() {
    var self = this;
    $.ajax({
      url: '/admins/events',
      success: function(data) {
        self.setState({ events: data });
      },
      error: function(xhr, status, error) {
        alert('Cannot get data from API: ', error);
      }
    });
  }
  handleAdd = (event) => {
    var events = this.state.events;
    events.push(event);
    this.setState({ events: events });
  }
  handleDelete = (event) => {
    var events = this.state.events.slice();
    var index = events.indexOf(event);
    events.splice(index, 1);
    this.setState({ events: events });
  }
  render() {
    return(
      <div className="container">
        <div className="jumbotron">
          <h1>ReactJS Tutorial</h1>
          <p>by Piotr Jaworski</p>
        </div>
        <div className="row">
          <div className="col-md-8">
            <NewForm handleAdd={this.handleAdd} />
          </div>
          <div className="col-md-12">
            <EventTable events={this.state.events} handleDelete={this.handleDelete} />
          </div>
        </div>
      </div>
    )
  }
}

export default EventApplication;