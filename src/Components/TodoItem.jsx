import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export class TodoItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Card>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h5" color="textSecondary">
                {this.props.task}
              </Typography>
            </CardContent>
          <CardActions style={{ justifyContent: "flex-end" }}>
            <Button
              size="large"
              color="primary"
              onClick={() => this.props.removeTask(this.props.task)}
            >
              Done
            </Button>
          </CardActions>
        </Card>
      </>
    );
  }
}
