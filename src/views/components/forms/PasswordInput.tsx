import FormInput from "./FormInput";

interface Input {
  value: string;
  isReenter: boolean;
  change: any;
}

const PasswordInput = (input: Input) => {
  return (
    <FormInput
      label={input.isReenter ? "Re-Enter Password" : "Password"}
      type="text"
      placeholder="Password"
      value={input.value}
      change={input.change}
    />
  );
};

export default PasswordInput;
