import { useEffect, useState } from "react"
import PostItem from "../components/PostItem"


const Home = () => {

  const [posts, setPosts] = useState()

  //we will show a card for each post on the homepage

  useEffect(()=>{
    fetch('http://localhost:3000/posts')
    .then(res=>res.json())
    .then(data=>setPosts(data))
  },[])


  const handleDelete = (id) => {
    
    //we have to filter this post array and remove the post with the same ID as the ID we are getting from the child component
    setPosts(posts.filter((posts)=> posts.id !==id))
    fetch('http://localhost:3000/posts')
    
  }

  return (
    <>
    <PostItem posts={posts} handleDelete={handleDelete} />
    </>
  )
}

export default Home;