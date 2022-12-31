import PropTypes from 'prop-types';
import css from '../ContactsList/ContactsList.module.css';

export function ContactsList({ contacts, handleDelete }) {
  return (
    <div>
      <ul>
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
      </ul>
    </div>
  );
}

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
};
