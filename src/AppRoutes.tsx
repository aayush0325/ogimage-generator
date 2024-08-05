import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { SignedIn,SignedOut } from "@clerk/clerk-react";
import LandingPage from "./pages/landing";
import PostPage from "./pages/post";

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
          </Routes>
        </SignedIn>
      </Router>
    );
  }

  export default AppRoutes;