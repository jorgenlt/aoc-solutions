import { useSelector } from "react-redux";

const Loading = () => {
  const { currentFilePath } = useSelector((state) => state.aoc);

  return (
    <div className="loading">
      <p>Fetching code from GitHub repo: {currentFilePath}</p>
    </div>
  );
};

export default Loading;
