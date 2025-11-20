import { useState, useEffect } from "react";
import { Chatbot } from "supersimpledev";
import LoadingSpinner from "../assets/loading-spinner.gif";
import "./ChatInput.css";

// Create a chat input component
export function ChatInput({
  chatMessages,
  setChatMessages,
  isLoading,
  setisLoading,
  disabled,
  setButtonState,
}) {
  const [inputText, setInputText] = useState("");

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  useEffect(() => {
    setButtonState(inputText === "");
  }, [inputText]);

  function sendMessageOnKeyDown(event) {
    if (event.key === "Enter" && inputText !== "") {
      sendMessage(event);
      setButtonState(false);
    } else if (event.key === "Escape") {
      setInputText("");
    }
  }

  async function sendMessage() {
    setisLoading(true);
    const newChatMessages = [
      ...chatMessages,
      {
        message: inputText,
        sender: "user",
        id: crypto.randomUUID(),
      },
      {
        message: <img src={LoadingSpinner} className="spinner" />,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ];
    setInputText("");
    setChatMessages(newChatMessages);
    const response = await Chatbot.getResponseAsync(inputText);

    setChatMessages([
      ...newChatMessages.slice(0, -1),
      {
        message: response,
        sender: "robot",
        id: crypto.randomUUID(),
      },
    ]);
    setisLoading(false);
  }

  return (
    <div className="chat-input-container">
      <input
        placeholder="Send a message to Chatbot"
        size="30"
        disabled={isLoading}
        onChange={saveInputText}
        value={inputText} //Controlled input
        onKeyDown={sendMessageOnKeyDown}
        className="chat-input"
      />
      <button className="send-button" onClick={sendMessage} disabled={disabled}>
        Send
      </button>
    </div>
  );
}
