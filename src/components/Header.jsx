const Header = (props) => {
  return (
    <header>
      <div id="set-year">
        <a onClick={() => props.handleSetYear(2015)}>2015</a>,{" "}
        <a onClick={() => props.handleSetYear(2016)}>2016</a>,{" "}
        <a onClick={() => props.handleSetYear(2017)}>2017</a>,{" "}
        <a onClick={() => props.handleSetYear(2018)}>2018</a>,{" "}
        <a onClick={() => props.handleSetYear(2019)}>2019</a>,{" "}
        <a onClick={() => props.handleSetYear(2020)}>2020</a>,{" "}
        <a onClick={() => props.handleSetYear(2021)}>2021</a>,{" "}
        <a onClick={() => props.handleSetYear(2022)}>2022</a>,{" "}
        <a onClick={() => props.handleSetYear(2023)}>2023</a>
      </div>
      <div className="banner">
        <div id="xmas-hat">
          <img
            src="/santa-hat.png"
            alt="Santa's hat"
          />
        </div>
        <h1>
          <span>
            Advent of Code{" "}
            <span className={`year ${props.isYearVisible ? "" : "fade-out"}`}>
              {props.currentYear}
            </span>
          </span>{" "}
          - Solutions
        </h1>
      </div>
    </header>
  );
};

export default Header;
