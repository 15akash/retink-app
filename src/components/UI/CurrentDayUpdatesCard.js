const CurrentDayUpdatesCard = (props) => {
  return (
    <div className="grid grid-rows-2 bg-white text-left mt-5 mr-4 pt-5 px-8 shadow-lg">
      <div className="text-sm font-semibold pb-3">
        {props.totalTargetsDoneToday}
      </div>
      <div className="text-xs text-comet-500">{props.completedOrWaited}</div>
    </div>
  );
};

export default CurrentDayUpdatesCard;
