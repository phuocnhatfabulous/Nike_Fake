import React, { useEffect, useState } from "react";
import LoginForm from "./Register-Components/LoginForm";
import RegisterForm from "./Register-Components/RegisterForm";

const Register = () => {
  useEffect(() => {
    document.title = "Create Account. Nike UK";
  }, []);

  const [OturumAc, setOturumAc] = useState(true);

  return (
    <>
      {OturumAc ? (
        <RegisterForm setOturumAc={setOturumAc} />
      ) : (
        <LoginForm setOturumAc={setOturumAc} />
      )}
    </>
  );
};

export default Register;
