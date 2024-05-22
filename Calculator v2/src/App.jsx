import "./App.css";
import CalcForm from "./components/calc-form/CalcForm";
import CalcList from "./components/calc-list/CalcList";
import { CalcProvider } from "./contexts/calc/CalcContext";

function App() {


  return (
    <>
      <h1>Basic Calculator</h1>
      <CalcProvider>

        <main>
          <CalcForm />
          <CalcList />
        </main>
      </CalcProvider>
    </>
  );
}

export default App;