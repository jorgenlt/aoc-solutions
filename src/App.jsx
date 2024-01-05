import "./styles/app.scss";

import Year from "./components/Year";
import { useDispatch, useSelector } from "react-redux";
import { setYear, fetchCodeSnippetsAsync } from "./features/aoc/aocSlice";
import { useEffect } from "react";

const App = () => {
  const { currentYear, status, error } = useSelector((state) => state.aoc);

  const dispatch = useDispatch();

  const handleSetYear = () => {
    dispatch(setYear(2015));
  };

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCodeSnippetsAsync());
    }
  }, [status, dispatch]);

  return (
    <>
      <header>
        <div id="xmas--hat">
          <img
            src="/santa-hat.png"
            alt="Santa's hat"
            height={75}
            style={{ marginRight: "20px" }}
          />
        </div>
        <h1>
          <span>Advent of Code {currentYear}</span> - Solutions
        </h1>
      </header>

      <main>
        <div>
          <h4>
            <a href="#">Link to other years solutions</a>
            <br />
            <button onClick={() => handleSetYear()}>Set year to 2015</button>
          </h4>
          <h4>
            Description + link to site:{" "}
            <a
              href="https://adventofcode.com/"
              target="_blank"
              rel="noreferrer"
            >
              Advent of Code
            </a>
            .
          </h4>
        </div>

        <Year year={2023} />
      </main>
    </>
  );
};

export default App;
