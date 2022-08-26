import { useState } from "react";

function usePasswordType() {
  const [passwordType, setPasswordType] = useState(false);
  function changePassword() {
    setPasswordType(!passwordType);
  }
  return { passwordType, changePassword };
}

export default usePasswordType;
