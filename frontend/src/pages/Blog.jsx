import React from "react";
import Header from "../components/Header.jsx";
import PostsContent from "../components/PostsContent.jsx";

function Blog() {
  return (
    <div className="page">
      <Header Header="header" isAccordion={true} isLogo={true} isProfileLink={true} />
      <PostsContent />
    </div>
  )
}

export default Blog;