/* eslint-disable react/prop-types */
const Engineer = ({ engineer }) => {
  return (
    <div className=" flex flex-col justify-center items-center border border-gray-400 w-72 rounded rounded-sm">
      <img className="w-40 h-36 rounded-full" src={engineer.imageUrl} alt="" />
      <h3>{engineer.name}</h3>
      <p>{engineer.role}</p>
    </div>
  );
};

export default Engineer;
