import DailyUpdatesCard from "../UI/DailyUpdatesCard";

const DailyUpdates = () => {
  return (
    <div className="grid grid-cols-6">
      <DailyUpdatesCard
        percentChange={"+3%"}
        cardValue={"271"}
        cardName={"New Tickets"}
      />
      <DailyUpdatesCard
        percentChange={"-6%"}
        cardValue={"28"}
        cardName={"Closed Today"}
      />
      <DailyUpdatesCard
        percentChange={"+10%"}
        cardValue={"15"}
        cardName={"New Replies"}
      />
      <DailyUpdatesCard
        percentChange={"+3%"}
        cardValue={"32k"}
        cardName={"Followers"}
      />
      <DailyUpdatesCard
        percentChange={"-4%"}
        cardValue={"$150"}
        cardName={"Daily earnings"}
      />
      <DailyUpdatesCard
        percentChange={"-2%"}
        cardValue={"578"}
        cardName={"Products"}
      />
    </div>
  );
};

export default DailyUpdates;
