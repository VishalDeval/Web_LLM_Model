import { useEffect, useState } from "react";
import * as webllm from "@mlc-ai/web-llm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([
    
  ]);
  const [input, setInput] = useState("");
  const [engine, setEngine] = useState(null);

  useEffect(() => {
    const initProgressCallback = (initProgress) => {
      console.log(initProgress);
    };
    const selectedModel = "Llama-3.1-8B-Instruct-q4f32_1-MLC";
    async function loadModel(){
      const engine =await webllm.CreateMLCEngine(
      selectedModel,
      { initProgressCallback: initProgressCallback }
    );
    setEngine(engine);
    }
    loadModel()
  }, []);

  async function sendMessageToLlm() {
    const tempMessages = [...messages];
    tempMessages.push({
      role: "user",
      content: input,
    });
    setMessages(tempMessages);
    console.log('done0')
    setInput("");
    const reply = await engine.chat.completions.create({
      messages:tempMessages,
    });
    console.log('done1')
    console.log("reply", reply);
    const newReply = [...messages];
    newReply.push({
      role:"tool",
      content:reply.choices[0].message.content
    })
    console.log(reply.choices[0].message.content)
    setMessages(newReply)
    console.log('done2')
  }
  return (
    <main>
      <section>
        <div className="conversational-area">
          <div className="messages">
            {messages.map((message, index) => {
              return (
                <div className={`message ${message.role}`} key={index}>
                  {message.content}
                </div>
              );
            })}
          </div>
          <div className="input-area">
            <input
              placeholder="Ask Me Anything"
              className="input-box"
              type="text"
              onChange={(e) => {
                setInput(e.target.value);
              }}
              value={input}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessageToLlm();
                }
              }}
            ></input>
            <button className="send" onClick={() => sendMessageToLlm()}>
              Send
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
