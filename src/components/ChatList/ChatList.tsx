import { ChatPreviewData } from "./type";
import { Icon } from "@iconify/react";

export const ChatList = ({
  className,
  data,
}: {
  className?: string;
  data: ChatPreviewData;
}) => {
  return (
    <div
      className={`flex flex-col w-full border-b-2 border-gray-500 py-2 px-3 ${className}`}
    >
      <h4 className="flex text-xl font-semibold items-center gap-2">
        {data.type === "direct" ? (
          <Icon icon={"mdi:user"} />
        ) : (
          <Icon icon={"mdi:account-group"} />
        )}
        {data.name}
      </h4>
      <p>
        {data.lastUser}: {data.lastMessage}
      </p>
    </div>
  );
};

export default ChatList;
