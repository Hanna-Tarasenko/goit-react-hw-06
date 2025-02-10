import { useDispatch, useSelector } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filtersSlice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filters.name);

  const handleFilterChange = (e) => {
    dispatch(changeFilter(e.target.value));
  };
  return (
    <label className={s.searchLabel}>
      <span>Find contacts by name </span>
      <input
        type="text"
        id="search"
        className={s.searchInput}
        value={filter}
        onChange={handleFilterChange}
      />
    </label>
  );
};

export default SearchBox;
