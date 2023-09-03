import './GenAI.css'
import Undo from "../assets/undo.png"
import * as tf from "@tensorflow/tfjs";
import * as speech from "@tensorflow-models/speech-commands";
import React, { useEffect, useState } from "react";
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';

const API_KEY = "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";
const systemMessage = { 
    "role": "system", "content": "Talk to me like I am a senior cancer researcher."
  }

function GenAI() {
    const [text, setText] = useState(false);
    const handleClick = () => {
        setText(true)
    }

    const [messages, setMessages] = useState([
        {
          message: "Ask Us to Learn More About Proteins and Molecule Inhibitor Synthesis",
          sentTime: "just now",
          sender: "ChatGPT"
        }
      ]);
      const [isTyping, setIsTyping] = useState(false);
    
      const handleSend = async (message) => {
        const newMessage = {
          message,
          direction: 'outgoing',
          sender: "user"
        };
    
        const newMessages = [...messages, newMessage];
        
        setMessages(newMessages);

        setIsTyping(true);
        await processMessageToChatGPT(newMessages);
      };
    
      async function processMessageToChatGPT(chatMessages) {
    
        let apiMessages = chatMessages.map((messageObject) => {
          let role = "";
          if (messageObject.sender === "ChatGPT") {
            role = "assistant";
          } else {
            role = "user";
          }
          return { role: role, content: messageObject.message}
        });
    
    
      
        const apiRequestBody = {
          "model": "gpt-3.5-turbo",
          "messages": [
            systemMessage,  
            ...apiMessages 
        ]
        }
    
        await fetch("https://api.openai.com/v1/chat/completions", 
        {
          method: "POST",
          headers: {
            "Authorization": "Bearer " + API_KEY,
            "Content-Type": "application/json"
          },
          body: JSON.stringify(apiRequestBody)
        }).then((data) => {
          return data.json();
        }).then((data) => {
          console.log(data);
          setMessages([...chatMessages, {
            message: data.choices[0].message.content,
            sender: "ChatGPT"
          }]);
          setIsTyping(false);
        });
      }

    return (
        <>
            <div id = "backgroundGradient" className = "bg-gradient-to-b from-[#CEDBD3] to-[#A8CCE6] relative rounded-2xl">

                <div id = "titleBoxContainer" className = "absolute top-16 left-16 z-0">
                    <div id ="titleBox" className = "bg-[#5B6C6D] rounded-2xl flex-col pl-5">
                        <div className = 'font-semibold text-2xl font-syne pt-3 text-[#d9d9d9]'>
                            Generative AI
                        </div>
                        <div className = "flex space-x-2 pt-0.5">
                            <img id = 'undoIcon' src = {Undo} className = "h-5 w-5"/>
                            <div className = "text-[#d9d9d9] text-sm underline hover:text-[#A8CCE6]">
                                Back to Home
                            </div>
                        </div>
                    </div>
                </div>

                <div id="greenBoxOneContainer" className = 'absolute top-80 z-0'>
                    <div id ="greenBoxOne" className = "bg-[#354542] rounded-b-2xl">
                    </div>
                </div>

                <div id="greenBoxTwoContainer" className = 'absolute top-48 left-16 z-10'>
                    <div id ="greenBoxTwo" className = "bg-[#354542] rounded-2xl flex items-center justify-center">
                        <div className = 'flex-col space-y-4 justify-center'>
                            { text ? <a href = 'http://192.168.254.162:8501/'><button id = 'special-button' className = 'bg-white shadow-2xl p-4 rounded-2xl'>
                        Generate an Amino Sequence!
                            </button></a> : <a><button id = 'special-button' className = 'bg-white shadow-2xl p-4 rounded-2xl'>
                        Click Here to View
                            </button></a>} 
                            <div id ="whiteBoxTwo" className = "bg-[#5B6C6D] text-[#D9D9D9] rounded-2xl flex justify-center items-center">
                                <div className = "text-xs flex font-semibold">
                                    <div className = 'mr-8'>
                                        <input className = 'text-black'>
                                        </input>
                                    </div>
                                    <button onClick = {handleClick} className = 'hover:text-[#A8CCE6]'>Submit!</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div id="greenBoxThreeContainer" className = 'absolute top-24 right-24 z-10'>
                    <div id ="greenBoxThree" className = "bg-[#354542] rounded-2xl flex items-center justify-center">
                        <div id ="whiteBoxThree" className = "bg-[#D9D9D9] rounded-2xl flex justify-center items-center">
                                <div id = 'chat_bot'>
                                <div>
                                    <div id = 'chatbot-container'>
                                        <MainContainer>
                                        <ChatContainer>       
                                            <MessageList 
                                            scrollBehavior="smooth" 
                                            typingIndicator={isTyping ? <TypingIndicator content="Protenial is Typing!" /> : null}
                                            >
                                            {messages.map((message, i) => {
                                                console.log(message)
                                                return <Message key={i} model={message} />
                                            })}
                                            </MessageList>
                                            <MessageInput placeholder="Type message here" onSend={handleSend} />        
                                        </ChatContainer>
                                        </MainContainer>
                                    </div>
        </div>
                                </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default GenAI