import "antd/dist/antd.min.css";
import Buttons from "./components/Buttons/Buttons";
import FormConf from "./components/Form/FormConfig";
import Icons from "./components/Icons/Icons";
import Inputs from "./components/Inputs/Inputs";
import Loader from "./components/Loader/Loader";
import ProgressConfig from "./components/Progress/ProgressConfig";
import TableConfig from "./components/Table/TableConfig";
import TableFilter from "./components/Table/TableFilter";
import TableModify from "./components/Table/TableModify";
import TableSelect from "./components/Table/TableSelect";
import "./Style.css";

function App() {
  return (
    <div className="App" style={{ display: "flex", flexWrap: "wrap" }}>
      <Buttons />
      <Loader />
      <ProgressConfig />
      <Icons />
      <Inputs />
      <FormConf />
      <TableConfig />
      <TableFilter />
      <TableSelect />
      <TableModify />
    </div>
  );
}

export default App;
