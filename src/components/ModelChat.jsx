import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { coldarkDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export const ModelChat = ({ chat }) => {

    let str = chat.parts[0].text;
    let blocks = str.split("```");




    let isCodeBlock = (str) => {
        return str.includes(";") || str.includes("[") || str.includes("]") || str.includes("{") || str.includes("}") || str.includes("#") || str.includes("//");
    }

    return (
        <div className='oneChat oneChat-model'>
            <div className=" avatar-chat avatar-chat-model relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300"><img src="openai.png" alt="M" /></span>
            </div>
            <div className='chat-text my-auto'>
                {!str.includes("```") && <span className='modelNonCode'>{str}</span>}

                {str.includes("```") &&
                    blocks.map((block) => {
                        if (isCodeBlock(block)) {
                            return <span className='modelCode'><SyntaxHighlighter language="javascript" style={coldarkDark}>
                                {block}
                            </SyntaxHighlighter>
                            </span>
                        } else {
                            return <div>{block}</div>
                        }
                    })

                }
            </div>
        </div>
    )
}
