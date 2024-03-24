/* eslint-disable react/prop-types */
const PostItem = ({posts}) => {
  return (
    <>

   {posts && posts.map((item)=> (
        <div key={item.id} className="p-6 border-b">
            <div className="mb-4 flex justify-between items-start">
            <div>
              <h2 className="font-bold -mb-2 text-lg text-indigo-500">
                {item.title}
              </h2>
              <small className="text-gray-500 text-xs">
                itemed on: {item.created_at}
              </small>
              </div>
              <button
              className="h-6 w-6 bg-red-500 text-white rounded-full">X</button>

        </div>
        <p>{item.body}</p>
        </div>
       
  ))}
  </>
  )
}

export default PostItem;