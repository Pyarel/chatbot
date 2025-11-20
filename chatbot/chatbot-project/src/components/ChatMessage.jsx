import RobotProfileImage from "../assets/robot.png";
import UserProfileImage from "../assets/user.png";

import "./ChatMessage.css";
//Create a chat message component
export function ChatMessage({ message, sender }) {
  // const message = props.message;
  // const sender = props.sender;

  //Destructuring params: ^ shortcut
  // const { message, sender } = props;

  /*
            if (sender === 'robot') {
                return (
                    <div>
                        {message}
                        <img src="robot.png" />
                    </div>
                );
            }
            */

  // Using guard operator
  return (
    <div
      className={sender === "user" ? "chat-message-user" : "chat-message-robot"}
    >
      {sender === "robot" && (
        <img src={RobotProfileImage} className="chat-message-profile" />
      )}
      <div className="chat-message-text">{message}</div>

      {sender === "user" && (
        <img src={UserProfileImage} className="chat-message-profile" />
      )}
    </div>
  );
}
