import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

function Note({ id, title, message, flag, enableEdit, item }) {
    return (
        <article className="note">
            <h3 className="title">{title}</h3>
            <p className="message">{message}</p>
            <button className="save__edit" onClick={() => enableEdit(item)}>
                <FaEdit />
            </button>
            <button className="del">
                <RiDeleteBin6Line />
            </button>
        </article>
    );
}

export default Note;
