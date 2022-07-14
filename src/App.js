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
    const [dB] = useState(Notes);
    const [item, setItem] = useState(null);

    // useEffect(() => {
    //     if (localStorage.getItem("dB") !== null) {
    //         setDb(JSON.parse(localStorage.getItem("dB")));
    //     }
    // }, []);
    // useEffect(() => {
    //     localStorage.setItem("dB", JSON.stringify(dB));
    //     console.log("updated");
    // }, [dB]);

    function enableEdit(id) {
        setItem(id);
        setEditor(true);
        setTitle(dB[id].title);
        setMessage(dB[id].message);
    }

    function pushToStack(item) {
        if (item === null && title.trim() !== "" && message.trim() !== "") {
            dB.push({ title: title, message: message });
        } else if (title.trim() !== "" && message.trim() !== "") {
            dB[item].title = title;
            dB[item].message = message;
        }
        setTitle("");
        setMessage("");
        setEditor(false);
    }

    return (
        <>
            <div className="App">
                {dB.map((item, i) => (
                    <Note
                        title={item.title}
                        message={item.message}
                        enableEdit={enableEdit}
                        key={i}
                        item={i}
                    ></Note>
                ))}
            </div>
            <button className="add" onClick={() => setEditor(!editor)}>
                <IoMdAddCircle></IoMdAddCircle>
            </button>
            <div className={editor ? "editor show" : "editor hide"}>
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
                    <button
                        className="btn accept"
                        onClick={() => pushToStack(item)}
                    >
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
