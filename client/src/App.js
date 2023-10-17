import "./App.css";
import io from "socket.io-client";
import { useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  //Room State
  const [room, setRoom] = useState("");

  // Messages States
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [messageReceived, setMessageReceived] = useState([]);

  //Messenger State
  const [myId, setMyId] = useState();
  const [messengerId, setMessengerId] = useState("");

  //Message Time
  const [messageTime, setMessageTime] = useState();

  //Message Details
  const [messageDeet, setMessageDeet] = useState({});

  const joinRoom = () => {
    if (room !== "") {
      socket.emit("join_room", room);
    }
  };

  const sendMessage = () => {
    setMessengerId(myId);
    const currentTime = new Date().getTime();
    setMessageTime(currentTime);
    setMessageDeet({
      message,
      messengerId,
      messageTime,
    });
    socket.emit("send_message", { messageDeet, room });
    setMessages((existingMessages) => {
      const updatedMessages = [...existingMessages, message];
      // console.log(updatedMessages); // Add this line for debugging
      return updatedMessages;
    });
  };
  useEffect(() => {
    socket.on("receive_message", (messageDetails) => {
      setMessageReceived((existingMessages) => {
        const updatedMessages = [...existingMessages, messageDetails.message];
        return updatedMessages;
      });
      setMessengerId(messageDetails.user);
    });

    socket.on("newJoinee", (id) => {
      alert(`New User Joined: ${id}`);
    });
  }, [socket]);

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      sendMessage(e);
    }
  };

  const handleEnterRoom = (e) => {
    if (e.key === "Enter") {
      joinRoom(e);
    }
  };

  const [elementHeight, setElementHeight] = useState(0);
  useEffect(() => {
    const windowHeight = window.innerHeight;
    const headerHeight =
      document.getElementById("HeadRoomElement").offsetHeight;
    const footerHeight =
      document.getElementById("FooterSendElement").offsetHeight;
    const calculatedHeight = windowHeight - headerHeight - footerHeight;

    setElementHeight(calculatedHeight);

    console.log(elementHeight);
  }, []);
  return (
    <div className="flex flex-col overflow-x-hidden bg-blue-800 justify-start pt-4 w-full items-center">
      <div id="HeadRoomElement">
        {" "}
        <input
          className="p-2 outline-none"
          placeholder="Room Number..."
          onChange={(event) => {
            setRoom(event.target.value);
          }}
          onKeyDown={handleEnterRoom}
        />
        <button
          className="bg-red-100 px-3 mx-4 rounded-md py-2 hover:bg-red-500"
          onClick={joinRoom}
        >
          {" "}
          Join Room
        </button>
      </div>
      {console.log(elementHeight)}

      <div
        className={`flex flex-col text-gray-500 justify-start w-screen h-[${elementHeight}px] overflow-y-scroll mt-4 bg-cyan-100`}
      >
        {messages.map((message) => {
          return (
            <>
              <h2 className="ml-12">{message}</h2>
            </>
          );
        })}
      </div>
      <div
        id="FooterSendElement"
        className="w-screen px-12 border bg-white border-blue-100 py-4 flex justify-between"
      >
        <input
          className="w-full mr-4 px-3 border-none outline-none"
          placeholder="Message..."
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          onKeyDown={handleEnter}
        />
        <button
          className="bg-yellow-100 hover:bg-yellow-400 pl-8 w-32 rounded-md py-3 flex"
          onClick={sendMessage}
        >
          {" "}
          Send 📩
        </button>
      </div>
    </div>
  );
}

export default App;
