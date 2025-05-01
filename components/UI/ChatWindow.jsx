import { useUser } from "@clerk/nextjs";
import Image from "next/image";
function ChatWindow(props) {
  const { user } = useUser();
  const { messages, isPending } = props;

  return (
    <div className="min-h-80 h-full overflow-auto">
      {messages.map(({ role, content }, index) => {
        return (
          <div key={index}>
            {role === "user" ? (
              <div className="chat chat-end">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <Image
                      alt="user_photo"
                      src={user.imageUrl}
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="chat-header">{user.firstName}</div>

                <div className="chat-bubble">{content}</div>
              </div>
            ) : (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full bg-white">
                    <Image
                      alt="AI_photo"
                      src="/chat-img.png"
                      width={100}
                      height={100}
                    />
                  </div>
                </div>
                <div className="chat-header">UrbanIQ AI</div>
                <div className="chat-bubble">{content}</div>
              </div>
            )}
          </div>
        );
      })}
      {isPending ? <span className="loading loading-ring"></span> : null}
    </div>
  );
}
export default ChatWindow;
