import { toast } from "react-hot-toast";
import { usePosts } from "../context/PostContext";
import { useNavigate } from "react-router-dom";

export function PostCard({ post }) {
  const { deletePost } = usePosts();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    toast(
      (t) => (
        <div className="mt-2">
          <p className="text-black">
            Do you want to delete? <strong>{id}</strong>
          </p>
          <div className="py-2">
            <button
              className="bg-red-500 hover:bg-slate-400 px-3 py-2 text-white rounded-md mx-2"
              onClick={() => {
                deletePost(id);
                toast.dismiss(t.id);
              }}
            >
              Delete
            </button>
            <button
              className="bg-slate-400 hover:bg-slate-500 px-3 py-2 text-white rounded-md mx-2"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </button>
          </div>
        </div>
      ),
      {
        style: {
          background: "#EEEEEE",
        },
      }
    );
  };

  return (
    <div
      className="bg-zinc-800 text-white rounded-md shadow-md shadow-black hover:bg-zinc-700 hover:cursor-pointer my-2"
      onClick={() => navigate(`/posts/${post._id}`)}
    >
      <div className="px-4 py-7">
        <div className="flex justify-between">
          <h3>{post.title}</h3>
          <button
            className="bg-red-600 hover:bg-red-500 text-sm px-2 py-1 rounded-md"
            onClick={(e) => {
              e.stopPropagation()
              handleDelete(post._id)
            }}
          >
            Delete
          </button>
        </div>
        <p>{post.description}</p>
        {post.image && <img src={post.image.url} className="w-full max-h-44 object-cover mt-4" />}
      </div>
    </div>
  );
}
