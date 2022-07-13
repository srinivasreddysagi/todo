import Note from "./components/Note";
import { IoMdAddCircle } from "react-icons/io";
import { TiTick } from "react-icons/ti";
import { GiCancel } from "react-icons/gi";
import Notes from "./Data";
import { useState } from "react";

function App() {
    const [title, setTitle] = useState("");
    const [message, setMessage] = useState("");
    const [editor, setEditor] = useState(false);

    return (
        <>
            <div className="App">
                {Notes.map((item) => (
                    <Note title={item.title} message={item.message}></Note>
                ))}
            </div>
            <button className="add" onClick={() => setEditor(!editor)}>
                <IoMdAddCircle></IoMdAddCircle>
            </button>
            <div className={editor ? "editor show" : "editor hide"}>
                {console.log(editor)}
                <input
                    type="text"
                    placeholder="Title"
                    className="input-title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    rows="10"
                    placeholder="Write here..."
                    className="input-message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <div className="button-container">
                    <button className="btn accept">
                        <TiTick />
                    </button>
                    <button
                        className="btn cancel"
                        onClick={() => {
                            setEditor(!editor);
                            setTitle("");
                            setMessage("");
                        }}
                    >
                        <GiCancel />
                    </button>
                </div>
            </div>
        </>
    );
}

export default App;
