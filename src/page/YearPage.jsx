import Menu from "../component/Menu";
import { MdOutlineConstruction } from "react-icons/md";
function YearPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white mt-2">
        <MdOutlineConstruction className="text-9xl text-white" />
        <div className="text-3xl text-white">
          <h1>Chantier en cours ...</h1>
        </div>
      </div>
    </div>
  );
}

export default YearPage;
