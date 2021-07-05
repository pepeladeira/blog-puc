import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://60e27aee5a5596001730f405.mockapi.io/api/blog/posts")
      .then((res) => res.json())
      .then((date) => setPosts(date));
  }, []);

  return (
    <div className="main-container">
      {posts.map((post) => {
        return (
          <Box
            component="span"
            display="block"
            p={2}
            m={3}
            bgcolor="background.paper"
            key={post.id}
          >
            <h2>{post.title}</h2>
            <Link to={`/post/${post.id}`}>
              <button>Ler mais...</button>
            </Link>
          </Box>
        );
      })}
    </div>
  );
};

export default Home;
