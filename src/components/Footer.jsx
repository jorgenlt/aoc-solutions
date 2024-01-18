import { useDispatch } from "react-redux";
import { resetState } from "../features/aoc/aocSlice";

const Footer = () => {
  const dispatch = useDispatch();

  const handleFetchCode = () => {
    dispatch(resetState());
  };

  return (
    <footer>
      <div>
        <a onClick={handleFetchCode}>Fetch updated solutions from GitHub repo</a>
      </div>
    </footer>
  );
};

export default Footer;
