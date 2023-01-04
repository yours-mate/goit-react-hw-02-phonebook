import PropTypes from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export function ContactsList({ contacts, handleDelete }) {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <div key={contact.id}>
            <ContactListItem contact={contact} handleDelete={handleDelete} />
          </div>
        ))}
      </ul>
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
  handleDelete: PropTypes.func.isRequired,
};
