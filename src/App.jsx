import "./styles/app.scss";

import Year from "./components/Year";
import { useDispatch, useSelector } from "react-redux";
import {
  setYear,
  fetchCodeSnippetsAsync,
  resetState,
  setLoading,
} from "./features/aoc/aocSlice";
import { useEffect } from "react";
import Loading from "./components/Loading";

const App = () => {
  const { currentYear, status, error } = useSelector((state) => state.aoc);

  const dispatch = useDispatch();

  const handleSetYear = (year) => {
    dispatch(setYear(year));
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
            <a onClick={() => handleSetYear(2015)}>2015</a>,{" "}
            <a onClick={() => handleSetYear(2016)}>2016</a>,{" "}
            <a onClick={() => handleSetYear(2017)}>2017</a>,{" "}
            <a onClick={() => handleSetYear(2018)}>2018</a>,{" "}
            <a onClick={() => handleSetYear(2019)}>2019</a>,{" "}
            <a onClick={() => handleSetYear(2020)}>2020</a>,{" "}
            <a onClick={() => handleSetYear(2021)}>2021</a>,{" "}
            <a onClick={() => handleSetYear(2022)}>2022</a>,{" "}
            <a onClick={() => handleSetYear(2023)}>2023</a>
          </h4>
          <p onClick={() => dispatch(resetState())}>reset state</p>
          <p onClick={() => dispatch(setLoading())}>set loading</p>
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

        {status === "loading" && <Loading />}

        {status === "failed" && <p>{error}</p>}

        <Year year={2023} />
      </main>
    </>
  );
};

export default App;
