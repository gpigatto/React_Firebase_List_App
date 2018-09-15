import React, { Component } from 'react';
import { Input, Paper, IconButton } from '@material-ui/core';
import AddCircle from '@material-ui/icons/AddCircle';

const paperStyle = {
    bottom: 0, 
    position: "fixed",
    width: "90%",
    marginLeft: "5%",
    marginBottom: "1%",
};

class NoteForm extends Component {
    
    state = {
        newNoteContent: ''
    }

    handleUserInput = (e) => {
        this.setState({
            newNoteContent: e.target.value,
        });
    }

    writeNote = () => {
        this.props.addNote(this.state.newNoteContent);

        this.setState ({
            newNoteContent: '',
        });
    }

    render(){
        return(
            <div>
                <Paper style = {paperStyle}>
                    <Input
                        className="noteInput"
                        value={this.state.newNoteContent}
                        onChange={this.handleUserInput}
                        placeholder = "Add Note.."
                        disableUnderline
                        style = {{width: "87%", marginLeft: "5%",}}
                    />
                    <IconButton style = {{width: "4%"}} color="primary" onClick={this.writeNote}><AddCircle/></IconButton>
                </Paper>
            </div>
        );
    }
}

export default NoteForm;