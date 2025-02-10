import { useDispatch } from "react-redux";
import s from "./Contact.module.css";
import { deleteContact } from "../../redux/contactsSlice";
const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };
  return (
    <div>
      <p>{name}</p>
      <p>{number}</p>
      <button className={s.deleteBtn} onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
