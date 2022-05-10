import React from "react";
import MessageContext from "../context/message-context";

const useMessageContext = () => React.useContext(MessageContext);

export default useMessageContext;
