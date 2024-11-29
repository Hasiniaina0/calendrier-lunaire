import DayView from "../component/DayView";
import Menu from "../component/Menu";

function MonthPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white ">
        <DayView />
      </div>
    </div>
  );
}

export default MonthPage;
