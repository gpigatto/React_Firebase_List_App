import React, { Component } from 'react';

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
                <input 
                    type="text" 
                    className="noteInput" 
                    placeholder="Write a new Note.." 
                    value={this.state.newNoteContent}
                    onChange={this.handleUserInput}
                />
                <button onClick={this.writeNote}>Add Note</button>
            </div>
        );
    }
}

export default NoteForm;