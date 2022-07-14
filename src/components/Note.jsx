import { FaEdit } from "react-icons/fa";

function Note({ id, title, message, flag, onClick }) {
    return (
        <article className="note">
            <h3 className="title">{title}</h3>
            <p className="message">{message}</p>
            <button className="save__edit" onClick={onClick}>
                <FaEdit />
            </button>
        </article>
    );
}

export default Note;
