import { usePosts } from "../context/PostContext";
import { VscEmptyWindow } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { PostCard } from "../components/PostCard";

export function HomePage() {
  const { posts } = usePosts();

  if (posts.length === 0)
    return (
      <div className="flex flex-col justify-center items-center">
        <VscEmptyWindow className="w-48 h-48 text-white" />
        <h1 className="text-white text-2xl">There are no posts</h1>
      </div>
    );

  return (
    <div className="text-white pt-12 pb-4">
      <header className="flex justify-between py-4">
        <h1 className="text-teal-400 text-4xl font-extrabold">
          Posts ({posts.length}){" "}
        </h1>
        <Link
          to={"/new"}
          className="px-3 py-2 bg-teal-400 hover:bg-teal-300 text-black font-bold rounded-sm"
        >
          Create New Post
        </Link>
      </header>

      <div className="grid grid-cols-3 gap-2">
        {posts.map((post) => (
          <PostCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}
