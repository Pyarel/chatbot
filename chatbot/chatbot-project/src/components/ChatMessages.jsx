import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import "./ChatMessages.css";
//Create a custom hook
function useAutoScroll(dependencies) {
  const containerRef = useRef(null);

  //  In react, we should not use DOM manually, we should use react features to get this element
  //ref = container with special React features. Automatically save an HTML element from a component.
  // ^ initial value is null

  //Hooks should be at the top of the component
  //Hooks should not be inside anything
  useEffect(() => {
    const containerElem = containerRef.current;
    if (containerElem) {
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [dependencies]); //[] controls when useEffect runs, [] = runs only once, after the component is created
  return containerRef;
}

function ChatMessages({ chatMessages }) {
  const chatMessagesRef = useAutoScroll([chatMessages]);

  return (
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={chatMessage.time}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  );
}
export default ChatMessages;
