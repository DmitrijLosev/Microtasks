import React, {useState} from "react";

export const Input: React.FC<{
    setCurrentNewMessage: (currentNewMessage: string) => void, currentMessage: string }> = ({setCurrentNewMessage, currentMessage}) => {


    return (
        <input value={currentMessage} type="text" onChange={(e) => {
            setCurrentNewMessage(e.currentTarget.value)
        }}/>
    );
};

