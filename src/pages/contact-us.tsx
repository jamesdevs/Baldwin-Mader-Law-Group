import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
// import ContactPage from "@/sections/contactPage";

export default function contact() {
  return (
    <Layout>
      <SEO title={`Contact Us | ${INFO.companyName}`} />
    </Layout>
  );
}
