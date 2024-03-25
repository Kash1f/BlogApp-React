import { useState } from "react"
import PostItem from "../components/PostItem"


const Home = () => {

  const [posts, setPosts] = useState()

  //we will show a card for each post on the homepage


  const handleDelete = (id) => {
    
    //we have to filter this post array and remove the post with the same ID as the ID we are getting from the child component
    setPosts(posts.filter((posts)=> posts.id !==id))
  
    console.log(posts);
  }

  return (
    <>
    <PostItem posts={posts} handleDelete={handleDelete} />
    </>
  )
}

export default Home;