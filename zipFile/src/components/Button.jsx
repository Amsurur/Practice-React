// eslint-disable-next-line react/prop-types
const Button = ({ text }) => {
  const handleClick = () => {
    alert("hello word");
  };
  return (
    <div
      onClick={() => handleClick()}
      className="border p-3 rounded-lg bg-green-400  shadow-blue-200 "
    >
      {text && "!"}
    </div>
  );
};

export default Button;
