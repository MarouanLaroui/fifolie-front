import React from "react"
import MessageContext from "../context/message-context";

export default function Test(){
  const {errorMsg} = React.useContext(MessageContext);
  return <pre>
    {errorMsg}
  </pre>
}