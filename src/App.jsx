import "./styles/app.scss";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setYear, fetchCodeSnippetsAsync } from "./features/aoc/aocSlice";
import Year from "./components/Year";
import Loading from "./components/Loading";
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
      <header>
        <div>
          <a onClick={() => handleSetYear(2015)}>2015</a>,{" "}
          <a onClick={() => handleSetYear(2016)}>2016</a>,{" "}
          <a onClick={() => handleSetYear(2017)}>2017</a>,{" "}
          <a onClick={() => handleSetYear(2018)}>2018</a>,{" "}
          <a onClick={() => handleSetYear(2019)}>2019</a>,{" "}
          <a onClick={() => handleSetYear(2020)}>2020</a>,{" "}
          <a onClick={() => handleSetYear(2021)}>2021</a>,{" "}
          <a onClick={() => handleSetYear(2022)}>2022</a>,{" "}
          <a onClick={() => handleSetYear(2023)}>2023</a>
        </div>
        <div className="banner">
          <div id="xmas--hat">
            <img
              src="/santa-hat.png"
              alt="Santa's hat"
              height={75}
              style={{ marginRight: "20px" }}
            />
          </div>
          <h1>
            <span>
              Advent of Code{" "}
              <span className={`year ${isYearVisible ? "" : "fade-out"}`}>
                {currentYear}
              </span>
            </span>{" "}
            - Solutions
          </h1>
        </div>
      </header>

      <main>
        <div>
          <h4>
            My solutions for{" "}
            <a
              href="https://adventofcode.com/"
              target="_blank"
              rel="noreferrer"
            >
              Advent of Code
            </a>{" "}
            puzzles. Fetches code snippets from my{" "}
            <a
              href="https://github.com/jorgenlt/advent-of-code"
              target="_blank"
              rel="noopener noreferrer"
            >Github repo</a>
            .
          </h4>
        </div>

        {status === "loading" && <Loading />}

        {status === "failed" && <p>{error}</p>}

        <Year isVisible={isYearVisible} />
      </main>

      <Footer />
    </>
  );
};

export default App;
