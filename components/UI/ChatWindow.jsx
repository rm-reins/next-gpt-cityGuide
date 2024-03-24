import { useUser } from "@clerk/nextjs";

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
                    <img alt="user_photo" src={user.imageUrl} />
                  </div>
                </div>
                <div className="chat-header">{user.firstName}</div>

                <div className="chat-bubble">{content}</div>
              </div>
            ) : (
              <div className="chat chat-start">
                <div className="chat-image avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="AI_photo"
                      src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
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
