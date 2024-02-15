import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import AboutPage from "@/sections/aboutPage";

export default function aboutUs() {
  return (
    <Layout>
      <SEO title={`About Us | ${INFO.companyName}`} />
      <AboutPage />
    </Layout>
  );
}
