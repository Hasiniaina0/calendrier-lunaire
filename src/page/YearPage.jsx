import DateSelectorView from "../component/DateSelectorView";
import Menu from "../component/Menu";

function YearPage() {
  return (
    <div>
      <Menu />
      <div className="flex flex-col items-center justitfy-center text-white ">
        <div className="relative flex justify-center items-center ml-20">
          <DateSelectorView />
        </div>
      </div>
    </div>
  );
}

export default YearPage;
