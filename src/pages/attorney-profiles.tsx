import Layout from "@/components/layout/Layout";
import SEO from "@/components/seo";
import { INFO } from "@/constants";
import AttorneyProfilesPage from "@/sections/attorneyProfilesPage";

export default function AttorneyProfiles() {
  return (
    <Layout>
      <SEO title={`Recent Results | ${INFO.companyName}`} />
      <AttorneyProfilesPage />
    </Layout>
  );
}
