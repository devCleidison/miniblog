import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../../context/AuthContext";

import { Form } from "../../components/Form";

import { Container } from "./styles";
import { Input } from "../../components/Input";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [formError, setFormError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <h2>Create post</h2>
      <p>Write about whatever you want and share your knowledge!</p>

      <Form onSubmit={handleSubmit}>
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

        <Input type="submit" value="Save post" />
        {/* {!loading && <Input type="submit" value="Save post" />}
        {loading && <Input type="submit" value="Hold up" disabled />} */}
      </Form>
    </Container>
  );
};
