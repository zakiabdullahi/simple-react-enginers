/* eslint-disable react/prop-types */
const Engineer = ({ engineer }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center border border-gray-400 w-72 rounded rounded-sm">
      <img
        style={{ width: "200px", height: "200px", borderRadius: "50%" }}
        src={engineer.imageUrl}
        alt=""
      />
      <h3>{engineer.name}</h3>
      <p>{engineer.role}</p>
    </div>
  );
};

export default Engineer;
