import { HomePage, PostForm, NotFoundPage } from "./pages";
import { Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-neutral-900 min-h-screen flex items-center">
      <div className="px-10 container m-auto">
        <PostProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostForm />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
          <Toaster />
        </PostProvider>
      </div>
    </div>
  );
}

export default App;
