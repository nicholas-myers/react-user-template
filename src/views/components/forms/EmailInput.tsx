import FormInput from "./FormInput";

interface Input {
  value: string;
  isReenter: boolean;
  change: any;
}

const EmailInput = (input: Input) => {
  return (
    <FormInput
      label={input.isReenter ? "Re-Enter Email" : "Email"}
      type="text"
      placeholder="Email"
      value={input.value}
      change={input.change}
    />
  );
};

export default EmailInput;
