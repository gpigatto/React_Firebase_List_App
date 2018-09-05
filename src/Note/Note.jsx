import React, { Component } from 'react';
import PropTypes from 'prop-types';
 
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
                
                <p>{this.noteContent}
                <span onClick={() => this.handleRemoveNote(this.noteId)}> X</span>
                </p>
            </div>
        );
    }
}

Note.PropTypes = {
    noteContent: PropTypes.string
}

export default Note;