const Controller = ({ onChangeCount }) => {
  const btnValue = [-100, -10, -1, +1, +10, +100];
  return (
    <div>
      {btnValue.map((value) => (
        <button
          className="countBtn"
          key={value}
          onClick={() => onChangeCount(value)}
        >
          {value > 0 ? `+${value}` : value}
        </button>
      ))}
    </div>
  );
};

export default Controller;
