import s from "./ContactList.module.css";
import PropTypes from "prop-types";

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <table className={s.table}>
      <tbody>
        {contacts.map(({ name, number, id }) => (
          <tr key={id}>
            <td>{name}</td>
            <td>{number}</td>
            <td>
              <button type="button" onClick={() => onDeleteContact(id)}>
                delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  onDeleteContact: PropTypes.func.isRequired,
};
export default ContactList;
