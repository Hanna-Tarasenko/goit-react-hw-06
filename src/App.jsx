import "./App.css";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactList from "./components/ContactList/ContactList";
import SearchBox from "./components/SearchBox/SearchBox";
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "./redux/filtersSlice";

const App = () => {
  const dispatch = useDispatch();

  const searchParam = useSelector((state) => state.filters.name);
  const contacts = useSelector((state) => state.contacts.items);

  const handleSearch = (value) => {
    dispatch(changeFilter(value));
  };
  const foundContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchParam.toLowerCase())
  );

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox searchParam={searchParam} handleSearch={handleSearch} />
      <ContactList contacts={foundContacts} />
    </div>
  );
};

export default App;
