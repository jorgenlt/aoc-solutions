import "./styles/app.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setYear, fetchCodeSnippetsAsync } from "./features/aoc/aocSlice";
import Header from "./components/Header";
import Main from './components/Main'
import Footer from "./components/Footer";

const App = () => {
  const { currentYear, status, error } = useSelector((state) => state.aoc);

  const [isYearVisible, setYearVisibility] = useState(true);

  const dispatch = useDispatch();

  const handleSetYear = (year) => {
    setYearVisibility(false);
    setTimeout(() => {
      dispatch(setYear(year));
      setYearVisibility(true);
    }, 300);
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCodeSnippetsAsync());
    }
  }, [status, dispatch]);

  return (
    <>
      <Header 
        isYearVisible={isYearVisible}
        handleSetYear={handleSetYear}
        currentYear={currentYear}
      />
      <Main 
        isYearVisible={isYearVisible}
        status={status}
        error={error}
      />
      <Footer />
    </>
  );
};

export default App;
