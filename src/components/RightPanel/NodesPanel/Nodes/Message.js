import { useDrag } from "react-dnd";
import MessageIcon from "../../../Icons/MessageIcon";

const Message = () => {

    const [_, drag] = useDrag(() => ({
        type: "NODE"
      }));

    return (
        <div ref={drag} className="sample-message-node">
        <MessageIcon size={24} />
        <span>Message</span>
      </div>
    )
};

export default Message;