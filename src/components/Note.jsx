import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

function Note({ id, title, message }) {
    const [edit, setEdit] = useState(false);

    function isEdit(flag) {
        if (flag) {
            return <TiTick />;
        } else {
            return <FaEdit />;
        }
    }

    return (
        <article className="note">
            <input type="text" className="title" />
            <textarea
                rowspan="auto"
                className="message"
            ></textarea>
            <button className="save__edit" onClick={() => setEdit(!edit)}>
                {isEdit(edit)}
            </button>
        </article>
    );
}

export default Note;
