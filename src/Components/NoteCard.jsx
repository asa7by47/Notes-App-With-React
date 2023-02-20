import React from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { AiOutlineEdit } from "react-icons/ai";
import axios from "axios";
const NoteCard = (props) => {
  const { note, getAllNotes } = props;
  const token = localStorage.getItem("userToken");

  // deleteNote
  const baseURL = "https://sticky-note-fe.vercel.app/";

  const deleteNote = async (NoteID) => {
    const { data } = await axios.delete(baseURL + "deleteNote", {
      data: {
        NoteID,
        token,
      },
    });

    if (data.message === "deleted") {
      getAllNotes();
    }
  };
  return (
    <>
      {" "}
      <div className="note p-4">
        <h3 className="float-start">{note.title}</h3>
        <span className="float-end edit">
          <AiOutlineEdit />
        </span>
        <span
          onClick={() => deleteNote(note._id)}
          className="float-end px-3 del text-danger  "
        >
          <RiDeleteBinLine />
        </span>
        <span className="clearfix"></span>
        <p>{note.desc}</p>
      </div>
    </>
  );
};

export default NoteCard;
