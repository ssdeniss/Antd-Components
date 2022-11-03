import "antd/dist/antd.min.css";
import Buttons from "./components/Buttons/Buttons";
import FormConf from "./components/Form/FormConfig";
import Inputs from "./components/Inputs/Inputs";
import Loader from "./components/Loader/Loader";
import ProgressConfig from "./components/Progress/ProgressConfig";
import TableConfig from "./components/Table/TableConfig";
import TableFilter from "./components/Table/TableFilter";
import "./Style.css";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <Buttons />
      <Loader />
      <ProgressConfig />
      <Inputs />
      <FormConf />
      <TableConfig />
      <TableFilter />
    </div>
  );
}

export default App;
