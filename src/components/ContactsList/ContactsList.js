import PropTypes from 'prop-types';

export function ContactsList({ children }) {
  return (
    <div>
      <ul>{children}</ul>
    </div>
  );
}

ContactsList.propTypes = {
  children: PropTypes.object,
};
