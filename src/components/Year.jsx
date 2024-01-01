import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  reset
} from "../features/aoc/aocSlice";
import Day from "./Day";

const Year = (props) => {
  const { value } = useSelector((state) => state.aoc);
  const dispatch = useDispatch();

  return (
    <article>
      <h2>{props.year}</h2>
      <p>{value}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <br />
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <br />
      <button onClick={() => dispatch(incrementByAmount(5))}>Increment by 5</button>
      <br />
      <button onClick={() => dispatch(reset())}>reset</button>
      <Day
        day={"1"}
        title={"get title from site"}
        codePart1={"code part 1 block here"}
        codePart2={"code part 2 here"}
      />
    </article>
  );
};

export default Year;
