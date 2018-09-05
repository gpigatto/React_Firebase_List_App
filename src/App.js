import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import { DB_CONFIG } from './Config/config';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    // Set Database to Notes
    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('notes');
  }

  state = {
    notes: []
  }

  componentWillMount(){
    const previousNotes = this.state.notes;

    // Data Snapshot

    this.database.on('child_added', snap => {
      previousNotes.push({
        id: snap.key,
        noteContent: snap.val().noteContent,
      })

      this.setState({
        notes: previousNotes
      })
    })

    this.database.on('child_removed', snap => {
      for(var i=0; i < previousNotes.length; i++){
        if(previousNotes[i].id === snap.key){
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      })
    })
  }

  addNote = (note) => {
    this.database.push().set({noteContent: note});
  }

  removeNote = (noteId) => {
    this.database.child(noteId).remove();
  }

  render() {
    return (
      <div className="notesWrapper">
        {
          this.state.notes.map((note) => {
            return (
              <Note 
              noteContent={note.noteContent} 
              noteId={note.id} 
              key={note.id} 
              removeNote ={this.removeNote}
              />
            )
          })
        }
        <NoteForm addNote={this.addNote} />
      </div>
    );
  }
}

export default App;