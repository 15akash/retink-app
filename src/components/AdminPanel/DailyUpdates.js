import WidgetsCard from "../UI/WidgetsCard";

const DailyUpdates = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
      <WidgetsCard
        percentChange={"+3%"}
        cardValue={"271"}
        cardName={"New Tickets"}
      />
      <WidgetsCard
        percentChange={"-6%"}
        cardValue={"28"}
        cardName={"Closed Today"}
      />
      <WidgetsCard
        percentChange={"+10%"}
        cardValue={"15"}
        cardName={"New Replies"}
      />
      <WidgetsCard
        percentChange={"+3%"}
        cardValue={"32k"}
        cardName={"Followers"}
      />
      <WidgetsCard
        percentChange={"-4%"}
        cardValue={"$150"}
        cardName={"Daily earnings"}
      />
      <WidgetsCard
        percentChange={"-2%"}
        cardValue={"578"}
        cardName={"Products"}
      />
    </div>
  );
};

export default DailyUpdates;
