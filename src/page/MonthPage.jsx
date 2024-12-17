import Menu from "../component/Menu";
import MonthView from "../component/MonthView";

function MonthPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white mt-2">
        <MonthView />
      </div>
    </div>
  );
}

export default MonthPage;
