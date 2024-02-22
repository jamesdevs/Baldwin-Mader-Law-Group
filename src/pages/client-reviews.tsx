import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import ClientReviewsPage from "@/sections/clientReviewsPage";

export default function ClientReviews() {
  return (
    <Layout>
      <SEO title={`Client Reviews | ${INFO.companyName}`} />
      <ClientReviewsPage />
    </Layout>
  );
}
