import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn,SignedOut } from "@clerk/clerk-react";
import LandingPage from "./pages/landing";
import PostPage from "./pages/post";
import ViewPost from "./pages/viewpost";
function AppRoutes() {
    return (
      <Router>
        <SignedOut>
          <LandingPage />
        </SignedOut>
        <SignedIn>
          <Routes>
            <Route path='/' element={<LandingPage />} />
            <Route path='/*' element={<Navigate to='/' />} />
            <Route path='/post' element={<PostPage/>}/>
            <Route path='/preview' element={<ViewPost/>}/>
          </Routes>
        </SignedIn>
      </Router>
    );
  }

  export default AppRoutes;