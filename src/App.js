import { Button } from "@mui/material";
import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "./Redux/Action";

function App() {
  const dispatch = useDispatch();
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <section className="h-screen w-screen bg-slate-400">
      <h1 className="bg-green-600 border text-5xl font-bold text-center py-10">
        Increment & Decrement Counter By "react-redux"
      </h1>
      <br />
      <br />
      <br />
      <div className=" flex justify-center items-center  my-5 gap-5">
        <Button
          onClick={() => dispatch(decNumber())}
          variant="contained"
          className=" h-[50px] w-[100px] text-2xl  font-bold "
        >
          -
        </Button>
        <input
          type="text"
          value={myState}
          className="w-[100px] text-center rounded font-bold h-[50px] "
        />
        <Button
          onClick={() => dispatch(incNumber())}
          variant="contained"
          className=" h-[50px] w-[100px] text-2xl  font-bold "
        >
          +
        </Button>
      </div>
    </section>
  );
}

export default App;
