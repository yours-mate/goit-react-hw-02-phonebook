import PropTypes from 'prop-types';
import css from '../ContactListItem/ContactListItem.module.css';

export function ContactListItem({ contacts, handleDelete }) {
  return (
    <div>
      {contacts.map(contact => (
        <li className={css.contact} key={contact.id}>
          {contact.name}: {contact.number}
          <button
            className={css.contact__btn}
            name={contact.id}
            type="button"
            onClick={handleDelete}
          >
            Delete
          </button>
        </li>
      ))}
    </div>
  );
}

ContactListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  handleDelete: PropTypes.func,
};
