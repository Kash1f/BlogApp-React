import PostItem from "../components/PostItem"


const Home = () => {

  //we will show a card for each post on the homepage

  const posts = [
    {
      title: "Games and Books",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed distinctio nesciunt laborum minima corrupti suscipit repudiandae et aliquid veritatis ab molestias excepturi dicta doloremque, at quaerat earum ullam neque!",
      created_at: "10/3/2024",
      id:1
    },
    
      {
        title: "Marvel",
        body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi sed distinctio nesciunt laborum minima corrupti suscipit repudiandae et aliquid veritatis ab molestias excepturi dicta doloremque, at quaerat earum ullam neque!",
        created_at: "10/3/2024",
        id:2
  
      }, 
  ]

  const handleDelete = () => {
    console.log("deleted");
  }

  return (
    <>
    <PostItem posts={posts} handleDelete={handleDelete} />
    </>
  )
}

export default Home;