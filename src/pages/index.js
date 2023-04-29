import Head from "next/head";
import Image from "next/image";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/home_page/hero";
import FeaturedPosts from "@/components/home_page/featured-posts";


export default function HomePage() {
  return (
    <>
      <main>
        <Hero />
      </main>
    </>
  );
}
