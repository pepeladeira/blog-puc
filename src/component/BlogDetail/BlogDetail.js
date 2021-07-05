import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Box from "@material-ui/core/Box";
import "./BlogDetail.css";
import postsJson from "../../j.json";

const BlogDetail = () => {
  const { postID } = useParams();

  const [post, setPost] = useState({});

  // adding post details using post id.
  useEffect(() => {
    const filteredPost = postsJson.filter((post) => post.id === postID);
    setPost(filteredPost[0]);
  }, [postID]);

  return (
    <div className="post-container">
      <Box p={4} boxShadow={2}>
        <h1>{post.title}</h1>
        <p>{post.body}</p>
        <p>
          Para se divertir com o projeto, você pode acessar por{" "}
          <a href={post.projectLink} target="_blank" rel="noopener noreferrer">
            esse link
          </a>{" "}
          ou assistir o vídeo abaixo:
        </p>
        <iframe
          width="560"
          height="315"
          src={post.videoURl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </Box>
    </div>
  );
};

export default BlogDetail;
