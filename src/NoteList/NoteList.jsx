import React from 'react';
import styles from './NoteList.module.css';

function NoteList({ title, children }) {
  
  return (
    <div className={styles.notes}>
      <h2>***{title.replace(/\d|\s/g, '')}***</h2>
      <div>{children}</div>
    </div>
  );
}

export default NoteList;