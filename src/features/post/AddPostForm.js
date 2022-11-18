import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addPost } from "./postsSlice";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const onTitleChanged = (e) => setTitle(e.target.value);
  const onContentChanged = (e) => setContent(e.target.value);

  return (
    <section>
      <h2>Adicionar um novo post</h2>
      <form>
        <label htmlFor="postTitle">Titulo do post:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Conteúdo do post:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button
          type="button"
          onClick={() => {
            dispatch(
              addPost({
                id: nanoid(),
                title,
                content
              })
            );
            alert("Post adicionado com sucesso");
            setTitle("");
            setContent("");
          }}
        >
          Salvar
        </button>
      </form>
    </section>
  );
};
