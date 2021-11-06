const ChartCard = (props) => {
  return (
    <div className="bg-white text-center mt-5 mr-4 py-5 px-3 shadow-2xl">
      {props.children}
    </div>
  );
};

export default ChartCard;
