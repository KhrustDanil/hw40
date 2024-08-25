import React from 'react';
import styles from './NoteItem.module.css';

function NoteItem({ note }) {
  return (
    <div className={styles.note}>
      {note}
    </div>
  );
}

export default NoteItem;
