const LiveStatusCard = (props) => {
  return (
    <div className="grid grid-rows-2 bg-white text-center px-3 mr-4 py-5 mb-3 shadow-xl">
      <div className="text-sm">{props.liveStatusName}</div>
      <div className="text-4xl font-black mb-4">{props.liveStatusFigure}</div>
    </div>
  );
};

export default LiveStatusCard;
