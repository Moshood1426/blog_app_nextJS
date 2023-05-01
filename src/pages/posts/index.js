import AllPosts from "@/components/posts/all-posts";
import React from "react";

const dummyData = [
  {
    image: "harbdoul.JPG",
    slug: "getting-started-with-nextJS",
    title: "Testing Library",
    date: "2022-02-10",
    excerpt:
      "Lorem ipsum dolor sit amet,Ut auctor fermentum nulla.Ut auctor fermentum nulla.",
  },
  {
    image: "harbdoul.JPG",
    slug: "getting-started-with-nextJS",
    title: "Testing Library",
    date: "2022-02-10",
    excerpt:
      "Lorem ipsum dolor sit amet,Ut auctor fermentum nulla.Ut auctor fermentum nulla.",
  },
];

const AllPostsPage = () => {
  return <AllPosts posts={dummyData} />;
};

export default AllPostsPage;
