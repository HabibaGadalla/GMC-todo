import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export class AddTask extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div
        style={{
          width: "100%",
          display: `flex`,
          placeContent: "space-between",
          alignItems: "baseline",
        }}
      >
        {console.log("child props", this.props)}
        <TextField
          id="standard-basic"
          label="write to do.."
          style={{ width: "100%" }}
          size="medium"
          value={this.props.value}
          onChange={(event) =>
            this.props.thisIsHowYouChange(event.target.value)
          }
        />
        <Button
          color="primary"
          onClick={() => {
            this.props.thisIsHowYouAddTasks(this.props.value);
            this.props.thisIsHowYouChange("");
          }}
        >
          Add
        </Button>
      </div>
    );
  }
}
