import { useState } from "react";
import "./App.css";
import toast, { Toaster } from "react-hot-toast";
import api from "./services/api";

function App() {
  const [churros, setChurros] = useState(0);
  const [name, setName] = useState("");

  const onSubmitChurros = () => {
    api
      .post("/churros", {
        name: name,
        count: churros,
      })
      .then((res) => {
        console.log(res);
        toast.success(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
    setChurros(0);
    setName("");
  };

  return (
    <div className="App">
      <div className="RealSinglePageAplication">
        <div className="MasterCentralApp">
          <h2>COmpRe AgOr4</h2>
          <h3>M4$ter ChurRu$</h3>
          <div className="BOXIMPORTANTE">
            <input
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <div className="middleDiv">
              <button onClick={() => setChurros(churros + 1)} className="btn">
                +
              </button>
              <p>{churros}</p>
              <button onClick={() => setChurros(churros - 1)} className="btn">
                -
              </button>
            </div>
            <button onClick={onSubmitChurros}>CHURROS!</button>
          </div>
        </div>
      </div>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "white",
            color: "#000",
          },
          // Default options for specific types
          success: {
            duration: 6000,
            theme: {
              primary: "green",
              secondary: "green",
            },
          },
        }}
      />
    </div>
  );
}

export default App;
