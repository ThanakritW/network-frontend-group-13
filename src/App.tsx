import { useState } from "react";
import "./App.css";
import ChatList from "./components/ChatList/ChatList";
import MOCK from "./components/ChatList/mock";
import CHAT_MOCK from "./components/ChatMessage/mock";
import { Icon } from "@iconify/react/dist/iconify.js";
import ChatMessage from "./components/ChatMessage/ChatMessage";

function App() {
  const [chatId, setChatId] = useState(MOCK[0].id);
  const [data, setData] = useState(MOCK[0]);
  const [username, setUsername] = useState("Alice");
  return (
    <div className="flex flex-col flex-grow-0 h-screen w-screen bg-zinc-900">
      <div className="flex flex-row h-15 border-b-2 border-gray-500 px-3 py-2 justify-between">
        <p className="text-3xl font-semibold">Group 13</p>
        <button className="flex border-2 border-gray-500 rounded-md text-xl font-semibold px-3 py-2 items-center justify-center cursor-pointer hover:bg-gray-800">
          Rename
        </button>
      </div>

      <div className="flex w-full flex-1 overflow-auto">
        <div className="flex flex-col w-1/5 border-r-2 border-gray-500">
          <div className="flex items-center justify-center min-h-15 border-b-2 border-gray-500 text-2xl font-semibold">
            - CHAT LIST -
          </div>
          <div className="flex flex-col overflow-auto">
            {MOCK.map((chat, index) => (
              <div
                key={index}
                onClick={() => setChatId(chat.id)}
                className="flex flex-col w-full cursor-pointer"
              >
                <ChatList
                  className={chatId === chat.id ? "bg-gray-800" : ""}
                  data={chat}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col w-4/5 flex-1">
          <div className="flex h-15 border-b-2 border-gray-500 items-center px-3 py-2">
            <h4 className="flex text-xl font-semibold items-center gap-2">
              {data.type === "direct" ? (
                <Icon icon={"mdi:user"} />
              ) : (
                <Icon icon={"mdi:account-group"} />
              )}
              {data.name}
            </h4>
          </div>
          <div className="flex flex-col gap-2 px-3 overflow-auto flex-1">
            {CHAT_MOCK.map((chat, index) => (
              <ChatMessage data={chat} username={username} key={index} />
            ))}
          </div>
          <div className="flex h-15 border-t-2 border-gray-500 items-center px-3 py-2">
            {/* Message Input */}
            <input
              type="text"
              placeholder="Type a message..."
              className="flex-grow p-2 bg-zinc-800 text-white rounded-md focus:outline-none"
            />

            {/* Send Button */}
            <button className="flex items-center justify-center p-3 ml-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600">
              <Icon icon="mdi:send" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
