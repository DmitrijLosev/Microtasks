import React from "react";

export const Button:React.FC<{name:string; onClickButtonHandler:()=>void}> = ({name, onClickButtonHandler}) => {
    return (
        <button onClick={onClickButtonHandler}>{name}</button>
    );
};

