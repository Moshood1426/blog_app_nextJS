import Head from "next/head";
import Hero from "@/components/home_page/hero";
import FeaturedPosts from "@/components/home_page/featured-posts";

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

export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
        <FeaturedPosts posts={dummyData} />
      </main>
    </>
  );
}
