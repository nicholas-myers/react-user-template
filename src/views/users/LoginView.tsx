import { useState } from "react";
import EmailInput from "../components/forms/EmailInput";
import PasswordInput from "../components/forms/PasswordInput";

const LoginView = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="border p-3 w-75 mt-3">
      <EmailInput value={email} isReenter={false} change={setEmail} />
      <PasswordInput value={password} isReenter={false} change={setPassword} />
    </div>
  );
};

export default LoginView;
