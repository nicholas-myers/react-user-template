interface Input {
  label: string;
  type: string;
  placeholder: string;
  value: any;
  change: any;
}

const FormInput = (input: Input) => {
  const changeValue = (e: any) => {
    console.log(e);
    return input.change(e.target.value);
  };
  return (
    <div className="d-flex justify-content-between align-items-center m-3">
      <label>{input.label}:</label>
      <input
        className="text-center"
        type={input.type}
        placeholder={input.placeholder}
        value={input.value}
        onChange={changeValue}
      />
    </div>
  );
};

export default FormInput;
