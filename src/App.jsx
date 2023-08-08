import { useState } from "react";
import Engineer from "./components/Engineer";
import "./index.css";

const App = () => {
  const [engineers, setEngineers] = useState([
    {
      id: 1,
      name: "zaki",
      role: "Mobile Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 2,
      name: "ahmed",
      role: "Web Developer",
      imageUrl:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80",
    },
    {
      id: 3,
      name: "zaki",
      role: "Ux Designer",
      imageUrl:
        "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 4,
      name: "Ali",
      role: "Soft developer",
      imageUrl:
        "https://images.unsplash.com/photo-1544168190-79c17527004f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80",
    },
  ]);

  return (
    <div className="w-screen h-screen  max-w-xl mx-auto m-20">
      <div className="w-full  grid grid-col-1 place-content-center md:grid-cols-2  gap-4">
        {engineers.map((engineer) => (
          <Engineer key={engineer.id} engineer={engineer} />
        ))}
      </div>
    </div>
  );
};

export default App;
