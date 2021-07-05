import React, { useEffect, useState } from "react";
import Box from "@material-ui/core/Box";
import "./Home.css";
import { Link } from "react-router-dom";
import postsJson from "../../j.json";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    setPosts(postsJson);
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
