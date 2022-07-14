import { FaEdit } from "react-icons/fa";

function Note({ id, title, message, flag, enableEdit, item }) {
    return (
        <article className="note">
            <h3 className="title">{title}</h3>
            <p className="message">{message}</p>
            <button className="save__edit" onClick={() => enableEdit(item)}>
                <FaEdit />
            </button>
        </article>
    );
}

export default Note;
