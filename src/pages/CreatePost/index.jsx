import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";
import { useInsertDocument } from "../../hooks/useInsertDocument";

import { Toast } from "../../components/Toast";
import { toast } from "react-toastify";

import { Form } from "../../components/Form";
import { Input } from "../../components/Input";

import { Container } from "./styles";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();

  const { insertDocument, response } = useInsertDocument("posts");

  const handleSavePost = (e) => {
    e.preventDefault();

    setFormError("");

    insertDocument({
      title,
      image,
      body,
      tags,
      uid: user.uid,
      createdBy: user.displayName,
    });

    if (response.error) {
      setFormError(response.error);
      toast.error(response.error, { className: "toast-alert" });
    }
  };

  return (
    <Container>
      <Toast />

      <h2>Create post</h2>
      <p>Write about whatever you want and share your knowledge!</p>

      <Form handleSubmit={handleSavePost}>
        <Input
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <Input
          placeholder="URL to image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />

        <textarea
          name="body"
          placeholder="Contents"
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>

        <Input
          placeholder="Tags: Enter tags separated by comma"
          value={tags}
          onChange={(e) => setTags(e.target.value)}
          required
        />

        {!response.loading && <Input type="submit" value="Save post" />}
        {response.loading && <Input type="submit" value="Hold up" disabled />}
      </Form>
    </Container>
  );
};
