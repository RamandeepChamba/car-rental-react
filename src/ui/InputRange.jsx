function InputRange({ min, max, name, value, id, onChange }) {
  return (
    <div>
      <span>{min}</span>
      <input
        type="range"
        name={name}
        id={id}
        min={min}
        max={max}
        value={value}
        onChange={onChange}
      />
      <span>{max}</span>
    </div>
  );
}

export default InputRange;
