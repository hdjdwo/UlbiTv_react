import React, {useState} from "react";
import './styles/App.css'
import PostItem from "./components/PostItem";
import PostList from "./components/PostList";
// import { useState } from 'react';

function App() {
const [posts, setPosts] = useState([{id: 1, title: "JavaScript", body: 'description'},
{id: 2, title: "JavaScript", body: 'description'},
{id: 3, title: "JavaScript", body: 'description'}])
  return (
    <div className="App">
      <PostList posts={posts}/>
    </div>
  );
}

export default App;
