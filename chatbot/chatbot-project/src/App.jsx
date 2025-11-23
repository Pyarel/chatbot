import { useState } from "react";
import { ChatInput } from "./components/ChatInput";
import ChatMessages from "./components/ChatMessages";
import "./App.css";

//Create an App component
function App() {
  // State is the data that is connected to the HTML. When we update this data, it will update the HTML.

  //Array destructuring
  const [chatMessages, setChatMessages] = useState([]);

  const [isLoading, setisLoading] = useState(false);
  const [disabled, setButtonState] = useState(true);

  // const chatMessages = array[0]; ---> current data
  // const setChatMessages = array[1]; --> updater function (to update the data)

  //Use array destructuring ^
  // const [chatMessages, setChatMessages] = array;

  return (
    <div className="app-container">
      <ChatMessages chatMessages={chatMessages} />
      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages} //save any type of data inside prop
        isLoading={isLoading}
        setisLoading={setisLoading}
        disabled={disabled}
        setButtonState={setButtonState}
      />
    </div>
  );
}
export default App;
