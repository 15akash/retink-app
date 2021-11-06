const DailyUpdatesCard = (props) => {
  return (
    <div className="bg-white text-center mt-5 mr-4 py-5 px-3 shadow-lg">
      <div className="text-sm p-2">{props.percentChange}</div>
      <div className="font-bold py-2 px-10">{props.cardValue}</div>
      <div className="text-base pb-6">{props.cardName}</div>
    </div>
  );
};

export default DailyUpdatesCard;
