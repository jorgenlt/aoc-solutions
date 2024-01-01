import "./styles/app.scss";

import Year from "./components/Year";

const App = () => {
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
          <span>Advent of Code 2023</span> - Solutions
        </h1>
      </header>

      <main>
        <div>
          <h4>
            <a href="#">Link to other years solutions</a>
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
