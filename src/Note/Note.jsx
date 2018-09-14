import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid/Grid';
import Card from '@material-ui/core/Card/Card';
import { CardContent, CardActions} from '@material-ui/core';
import Button from '@material-ui/core/Button/Button';
import Check from '@material-ui/icons/Check';
import Typography from '@material-ui/core/Typography/Typography';
import Divider from '@material-ui/core/Divider/Divider';

const cardStyle = {
    padding: 20,
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
  };
  
const root = {
  flexGrow: 1,
}

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
            <div className = {root}>
            <Grid container direction = "column" alignItems="strech" spacing = {8}>
              <Grid item xs>
                <Card style = {cardStyle}>
                  <CardContent>
                    <Typography variant="body1" color="textPrimary">
                        {this.noteContent}
                    </Typography>  
                  </CardContent>
                  <CardActions>
                      <Button color="primary" variant="extendedFab" onClick={() => this.handleRemoveNote(this.noteId)}>
                      DONE!
                      <Check style={{marginLeft: 5,fontSize: 20,}}/>
                      </Button>
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
