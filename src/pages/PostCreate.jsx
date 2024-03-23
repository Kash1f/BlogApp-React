

const PostCreate = () => {
  return (
    <>
      <h1 className="font-bold text-2xl mb-6">Create a new post</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label>Post title</label>
          <input
            type="text"
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-8">
          <label>Post content</label>
          <textarea
            className="border-0 outline-0 p-2 ring-1 ring-indigo-400 rounded-lg w-full block mt-1 focus:ring-2"
            value={body}
            onChange={(e) => setBody(e.target.value)}></textarea>
        </div>
        <button className="bg-indigo-400 text-white block w-full p-2 rounded-lg hover:bg-indigo-600">
          Create
        </button>
      </form>
    </>
  );
};
export default PostCreate