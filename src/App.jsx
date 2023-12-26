import "./styles/app.scss";

import Puzzle from "./components/Puzzle";

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

        <article>
          <Puzzle
            day={"1"}
            title={"Hello"}
            codePart1={"code part 1 block here"}
            codePart2={"code part 2 here"}
          />
        </article>
      </main>
    </>
  );
};

export default App;
