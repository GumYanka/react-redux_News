import { login } from "../../interfaces/authService";
import { useState, FormEvent } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const user = login(email, password);
    if (user) {
    } else {
      console.log("Error");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Username:
        <input value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
