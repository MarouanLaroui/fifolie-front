import { createContext } from "react";

interface MessageContextType {
  errorMsg: string;
  successMsg: string;
  setErrorMsg: React.Dispatch<React.SetStateAction<string>>;
  setSuccessMsg: React.Dispatch<React.SetStateAction<string>>;
}

const MessageContext = createContext<MessageContextType>({
  errorMsg: "",
  successMsg: "",
  setErrorMsg: () => {},
  setSuccessMsg: () => {},
});

export default MessageContext;
