import React from "react"
import PropTypes from 'prop-types';


class NewForm extends React.Component {
  constructor(props){
　　 super(props);
　　 this.state = {name: '', place: '', event_date: '', description: ''};
    // console.log()
　}
  
  handleAdd= (e) => {
    e.preventDefault();
    var self = this;
    if (this.validForm()) {
      $.ajax({
        url: '/admins/events',
        method: 'POST',
        data: { event: self.state },
        success: function(data) {
          self.props.handleAdd(data);
          self.state = {name: '', place: '', event_date: '', description: ''};
        },
        error: function(xhr, status, error) {
          alert('Cannot add a new record: ', error);
        }
      })
    } else {
      alert('Please fill all fields.');
    }
  }
  validForm() {
    if (this.state.name && this.state.place &&
        this.state.event_date && this.state.description) {
      return true;
    } else {
      return false;
    }
  }
  handleChange= (e) =>{
    var input_name = e.target.name;
    var value = e.target.value;
    this.setState({ [input_name] : value });
  }


  render() {
    return(
      <form className="form-inline" onSubmit={this.handleAdd}>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="name"
                 placeholder="Name"
                 ref="name"
                 value={this.state.name}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="place"
                 placeholder="Place"
                 ref="place"
                 value={this.state.place}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="date"
                 className="form-control"
                 name="event_date"
                 placeholder="Event date"
                 ref="event_date"
                 value={this.state.event_date}
                 onChange={this.handleChange} />
        </div>
        <div className="form-group">
          <input type="text"
                 className="form-control"
                 name="description"
                 placeholder="Description"
                 ref="description"
                 value={this.state.description}
                 onChange={this.handleChange} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>
    )
  }
}

export default NewForm;