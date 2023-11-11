import React, {useState} from "react";

export const InputWithButton: React.FC<{ setNewMessage: (newMessage: string) => void }> = ({setNewMessage}) => {

    let [currentMessage, setCurrentMessage] = useState<string>("")


    return (
        <div>
            <input value={currentMessage} type="text" onChange={(e) => {
                setCurrentMessage(e.currentTarget.value)
            }}/>
            <button onClick={() => {
                setNewMessage(currentMessage);
                setCurrentMessage("")
            }}>+
            </button>
        </div>
    );
};

