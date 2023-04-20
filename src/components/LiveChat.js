import { useEffect, useState } from "react"
import ChatMessage from "./ChatMessage"
import { useDispatch, useSelector } from "react-redux";
import { addMessage, removeMessage } from "../utils/chatSlice";
import { generateString, randomNameGenerator } from "../utils/helper";

const LiveChat = () => {
    const [text, setText] = useState('');
    const chatData = useSelector(store => store?.chat?.messages);
    const dispatch = useDispatch();

    useEffect(() => {
        let timer = setInterval(() => {
            if (chatData?.length > 10) {
                dispatch(removeMessage())
            }
            dispatch(addMessage({ name: randomNameGenerator(5), message: generateString(10) }))
        }, 2000)
        return () => {
            clearInterval(timer)
        }
    }, [])
    return (
        <div className="p-2 ml-2">
            <h2>Live Chat</h2>
        <div className="border border-gray w-[400px] h-[400px] bg-slate-100 rounded-md overflow-auto flex flex-col">
            {
                chatData?.map((item, id) => (
                    <ChatMessage name={item.name} message={item.message} key={id} />
                ))
            }
        </div>
                    <div className="flex justify-between first:mt-auto">
                    <input type="text" className="border w-full hover:outline-0 p-2" value={text} onChange={(e) => setText(e.target.value)} />
                    <button className="text-sm border-2 p-2" onClick={() => {
                        if (text.trim() != "") {
                            dispatch(addMessage({ name: "Nitin", message: text }));
                            setText("");
                        }
                    }}>Send</button>
                </div>
                </div>
    )
}

export default LiveChat