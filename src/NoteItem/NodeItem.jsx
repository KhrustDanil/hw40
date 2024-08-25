import styles from './NoteItem.module.css';
import PropTypes from 'prop-types';

NoteItem.propTypes = {
    note: PropTypes.string
  };

function NoteItem({ note }) {
  return (
    <div className={styles.note}>
      {note}
    </div>
  );
}


export default NoteItem;
