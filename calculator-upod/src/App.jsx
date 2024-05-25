import "./App.css";
import CalcForm from "./components/calc-form/CalcForm";
import CalcList from "./components/calc-list/CalcList";
import { CalcProvider } from "./components/contexts/CalcContext";


function App() {

  return (
    <>
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