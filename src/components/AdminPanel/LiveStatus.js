import LiveStatusCard from "../UI/LiveStatusCard";

const LiveStatus = () => {
  return (
    <div className="grid grid-cols-2 mt-5 lg:grid-cols-4">
      <LiveStatusCard liveStatusName={"New Feedback"} liveStatusFigure={"62"} />
      <LiveStatusCard
        liveStatusName={"Today Profit"}
        liveStatusFigure={"$652"}
      />
      <LiveStatusCard liveStatusName={"Users Online"} liveStatusFigure={"76"} />
      <LiveStatusCard liveStatusName={"Users Online"} liveStatusFigure={"76"} />
    </div>
  );
};

export default LiveStatus;
