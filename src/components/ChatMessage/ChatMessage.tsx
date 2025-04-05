import ChatMessageData from "./type";

export const ChatMessage = ({
  data,
  username,
}: {
  data: ChatMessageData;
  username: string;
}) => {
  return (
    <div className="flex flex-col">
      <h5
        className={`text-lg font-semibold ${
          data.name === username ? "text-blue-500" : "text-orange-600"
        }`}
      >
        {data.name === username ? "You" : data.name}{" "}
        <span className="text-sm text-gray-500">
          {data.timestamp.toLocaleTimeString("th-TH")}
        </span>
      </h5>
      <p className="text-base">{data.message}</p>
    </div>
  );
};

export default ChatMessage;
