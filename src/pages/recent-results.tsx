import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import RecentResultsPage from "@/sections/recentResultsPage";

export default function RecentResults() {
  return (
    <Layout>
      <SEO title={`Recent Results | ${INFO.companyName}`} />
      <RecentResultsPage />
    </Layout>
  );
}
