import CurrentDayUpdatesCard from "../UI/CurrentDayUpdatesCard";

const CurrentDayWidgets = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4">
      <CurrentDayUpdatesCard
        totalTargetsDoneToday={"132 sales"}
        completedOrWaited={"12 waiting payments"}
      />
      <CurrentDayUpdatesCard
        totalTargetsDoneToday={"78 Orders"}
        completedOrWaited={"32 shipped"}
      />
      <CurrentDayUpdatesCard
        totalTargetsDoneToday={"1,352 Members"}
        completedOrWaited={"163 registered today"}
      />
      <CurrentDayUpdatesCard
        totalTargetsDoneToday={"132 Comments"}
        completedOrWaited={"16 waiting"}
      />
    </div>
  );
};

export default CurrentDayWidgets;
