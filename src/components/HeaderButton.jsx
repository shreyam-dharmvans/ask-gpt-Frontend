import React from 'react'

export const HeaderButton = ({ text, color, textColor, handleOnClick }) => {

    let buttonColor = {
        backgroundColor: `${color}`,
        color: textColor ? `${textColor}` : `white`,
        fontSize: `13px`,
        marginLeft: text == "Logout" && "0px",
        marginRight: text == "Logout" && "10px",
    };

    return (
        <button type="button" className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mx-4`} style={buttonColor
        } onClick={handleOnClick}> {text}</button >
    )
}
