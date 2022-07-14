import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";

function Note({ title, message, enableEdit, item, delItem }) {
    return (
        <article className="note">
            <h3 className="title">{title}</h3>
            <p className="message">{message}</p>
            <button className="save__edit" onClick={() => enableEdit(item)}>
                <FaEdit />
            </button>
            <button className="del" onClick={() => delItem(item)}>
                <RiDeleteBin6Line />
            </button>
        </article>
    );
}

export default Note;
