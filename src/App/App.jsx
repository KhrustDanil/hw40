import React, { useRef } from 'react';
import { useAppDispatch, useAppSelector, addNote, clearNotes } from '../store';
import NoteList from '../NoteList/NoteList';
import NoteItem from '../NoteItem/NodeItem';
import styles from './App.module.css';

const App = () => {
  const dispatch = useAppDispatch();
  const notes = useAppSelector(state => state.notes.notes);

  const noteInputRef = useRef(null);

  const handleAddNote = (e) => {
    e.preventDefault();
    const newNote = noteInputRef.current?.value;
    if (newNote && newNote.trim()) {
      dispatch(addNote(newNote));
      if (noteInputRef.current) noteInputRef.current.value = '';
    }
  };

  const handleClearNotes = () => {
    dispatch(clearNotes());
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleAddNote}>
        <input type="text" ref={noteInputRef} className={styles.input} />
        <button type="submit" className={styles.button}>Add Note</button>
      </form>
      <div>
        {notes.length === 0 ? (
          <p className={styles.no_notes}>No notes</p>
        ) : (
          <NoteList title='Notes'>
            {notes.map((note, index) => (
              <NoteItem key={index} note={note} index={index} />
            ))}
        {notes.length > 0 && (
          <button onClick={handleClearNotes} className={styles.button_del}>Delete Notes</button>
        )}
          </NoteList>
        )}
      </div>
    </div>
  );
};

export default App;