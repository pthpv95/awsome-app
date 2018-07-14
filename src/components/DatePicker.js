import React from "react";
import ReactDOM from "react-dom";
import DatePicker from "react-mobile-datepicker";

class DatePickerCustom extends React.Component {
  state = {
    time: new Date(),
    isOpen: false
  };

  handleClick = () => {
    this.setState({ isOpen: true });
  };

  handleCancel = () => {
    this.setState({ isOpen: false });
  };

  handleSelect = time => { 
    this.setState({ time, isOpen: false });
  };

  componentDidMount() {
    const elementItems = document.getElementsByClassName("datepicker-wheel");

    for (let ele of elementItems) {
      ele.style.backgroundColor = "red";
      ele.style.border = "none";
      ele.children[0].children[5].style.color = "white";
    }
  }

  render() {
    return (
      <div className="App">
        <a className="select-btn" onClick={this.handleClick}>
          select time
        </a>

        <DatePicker
          isPopup={false}
          value={this.state.time}
          isOpen={this.state.isOpen}
          onSelect={this.handleSelect}
          onCancel={this.handleCancel}
          confirmText={"Done"}
          cancelText={"Cancel"}
        />
      </div>
    );
  }
}

export default DatePickerCustom;
