import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CardContent, CardActions, IconButton, Typography, Divider, Grid, Card } from '@material-ui/core';
import CheckCircle from '@material-ui/icons/CheckCircle';
import Green from '@material-ui/core/colors/green';

const cardStyle = {    
    margin: "1%",
  };

class Note extends Component {

    constructor (props){
        super(props);
        
        this.noteContent = props.noteContent;
        this.noteId = props.noteId;
    }

    handleRemoveNote = (id) => {
        this.props.removeNote(id);
    }

    render(props){
        return(
            <div>
            <Grid container direction = "column">
              <Grid item xs>
                <Card style = {cardStyle}>
                  <CardContent>
                    <Typography variant="headline" color="textPrimary">
                        {this.noteContent}
                    </Typography>  
                  </CardContent>
                  <CardActions>
                      <IconButton onClick={() => this.handleRemoveNote(this.noteId)}>
                      <CheckCircle />
                      </IconButton>
                  </CardActions>
                </Card>
              </Grid>
            </Grid>
          </div>   
        );
    }
}

Note.PropTypes = {
    noteContent: PropTypes.string
}

export default Note;