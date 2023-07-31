import { Link } from "react-router-dom";

const Button = (props) => {
  const { text, classname, tolink } = props;
  return (
    <>
    <Link to={tolink}>
    <button
      className={`px-3 py-2 rounded-full shadow-lg border text-white hover:bg-red-700 duration-300 ${classname}`}
    >
      {text}
    </button>
    </Link>
    </>
  );
};

export default Button;
