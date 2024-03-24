import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layouts/Layouts";
import Home from "./pages/Home";
import PostCreate from "./pages/PostCreate";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="create" element={<PostCreate />} />
         
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

//if we call a route index then it is a homepage
// we dont need to add / with create since / is our base URl and create is its child so
//create will be /create automatically
