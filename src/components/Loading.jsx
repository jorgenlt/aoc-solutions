import { useSelector } from "react-redux";
import { Oval } from "react-loader-spinner";

const Loading = () => {
  const { error } = useSelector((state) => state.aoc);

  return (
    <div className="loading">
      <Oval
        height={80}
        width={80}
        color="#101319"
        wrapperStyle={{}}
        wrapperClass="loader"
        visible={true}
        ariaLabel="oval-loading"
        secondaryColor="#00cc00"
        strokeWidth={1}
        strokeWidthSecondary={0}
      />

      {error && error}
    </div>
  );
};

export default Loading;
