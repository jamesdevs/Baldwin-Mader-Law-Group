import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import HomePage from "@/sections/homePage";

export default function home() {
  return (
    <Layout>
      <SEO />
      <HomePage />
    </Layout>
  );
}
