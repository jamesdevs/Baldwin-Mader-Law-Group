import { INFO, MetaData } from "@/constants";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";

type twitterProps = {
  handle: string;
  site: string;
};

type SEOProps = {
  title?: string;
  description?: string;
  twitter?: twitterProps;
  openGraphImageURl?: string;
};

const SEO = ({
  title = MetaData.title,
  description = MetaData.description,
  twitter = { handle: "@tsm", site: INFO.site },
  openGraphImageURl = "/og.jpg",
  ...rest
}: SEOProps) => {
  const router = useRouter();
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={INFO.site + router.pathname}
      facebook={{
        appId: "tsm",
      }}
      openGraph={{
        url: INFO.site + router.pathname,
        type: "website",
        title,
        description,
        images: [
          {
            url: INFO.site + openGraphImageURl,
            width: 1080,
            height: 1080,
            alt: "logo",
          },
        ],
        site_name: "",
      }}
      twitter={{
        handle: twitter.handle,
        site: twitter.site,
        cardType: "summary_large_image",
      }}
      robotsProps={{
        notranslate: true,
      }}
      additionalLinkTags={[
        {
          rel: "icon",
          href: "/favicon.ico",
        },
        {
          rel: "apple-touch-icon",
          href: "/apple-touch-icon.png",
          sizes: "76x76",
        },
        {
          rel: "manifest",
          href: "/site.webmanifest",
        },
      ]}
      additionalMetaTags={[
        {
          name: "twitter:title",
          content: title,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: INFO.site + openGraphImageURl,
        },
      ]}
      {...rest}
    />
  );
};

export default SEO;
