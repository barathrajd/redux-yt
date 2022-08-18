import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import AddPostForm from "./feature/posts/AddPostForm";
import PostList from "./feature/posts/PostList";
import SinglePostPage from "./feature/posts/SinglePostPage";
import EditPostForm from "./feature/posts/EditPost";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PostList />} />
        <Route path="post">
          <Route index element={<AddPostForm />} />
          <Route path=":postId" element={<SinglePostPage />} />
          <Route path="edit/:postId" element={<EditPostForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
