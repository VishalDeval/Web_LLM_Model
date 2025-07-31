import { useEffect, useState } from "react";
import * as webllm from "@mlc-ai/web-llm";
import "./App.css";

function App() {
  const [messages, setMessages] = useState([]);
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
    const userMessages={
      role: "user",
      content: input,
    };
    const tempMessages = [...messages,userMessages];
    
    setMessages(tempMessages);

    
    setInput("");
    const reply = await engine.chat.completions.create({
      messages:tempMessages,
    });
    const toolReply={
      role:"tool",
      content:reply.choices[0].message.content
    }
    
    //console.log(reply.choices[0].message.content)
    
    setMessages((prev)=>[...prev,toolReply])
    
    // console.log('done2')
  }
  return (
    <main>
      <section>
        <div className="conversational-area">
          <div className="messages">
            {messages.length==0 ?(<div className="front">Hey, how are you?</div>):(messages.map((message, index) => (
                <div className={`message ${message.role}`} key={index}>
                  {message.content}
                </div>
            )))}
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
