import Menu from "../component/Menu";
import MoonPhaseCalendar from "../component/MoonPhaseCalendar";

function MonthPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white ">
        <MoonPhaseCalendar />
      </div>
    </div>
  );
}

export default MonthPage;
