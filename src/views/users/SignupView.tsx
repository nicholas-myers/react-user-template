import { useState } from "react";
import EmailInput from "../components/forms/EmailInput";
import PasswordInput from "../components/forms/PasswordInput";

const SignupView = () => {
  const [email, setEmail] = useState("");
  // const [repeatedEmail, setRepeatedEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");

  return (
    <div className="border p-3 w-75 mt-3">
      <EmailInput value={email} isReenter={false} change={setEmail} />
      {/* <EmailInput
        value={repeatedEmail}
        isReenter={true}
        change={setRepeatedEmail}
      /> */}
      <PasswordInput value={password} isReenter={false} change={setPassword} />
      <PasswordInput
        value={repeatedPassword}
        isReenter={true}
        change={setRepeatedPassword}
      />
    </div>
  );
};

export default SignupView;
