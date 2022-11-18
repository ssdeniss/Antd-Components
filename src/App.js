import "antd/dist/antd.min.css";
import Buttons from "./components/Buttons/Buttons";
import FormConf from "./components/Form/FormConfig";
import FormValidation from "./components/Form/FormValidation";
import Icons from "./components/Icons/Icons";
import Inputs from "./components/Inputs/Inputs";
import Loader from "./components/Loader/Loader";
import ProgressConfig from "./components/Progress/ProgressConfig";
import TableCellEdit from "./components/Table/TableCellEdit";
import TableConfig from "./components/Table/TableConfig";
import TableFilter from "./components/Table/TableFilter";
import TableModify from "./components/Table/TableModifySearch";
import TableSelect from "./components/Table/TableSelect";
import Menu from "./components/Menu/Menu";
import Tabs from "./components/Tab/Tab";
import Carousel from "./components/Carousel/Carousel";
import Collapse from "./components/Collapse/Collapse";
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
      <TableCellEdit />
      <FormValidation />
      <Menu />
      <Tabs />
      <Carousel />
      <Collapse />
    </div>
  );
}

export default App;
