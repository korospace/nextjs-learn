import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: ["/login/", "/register/"],
      disallow: ["/article/", "/kategori/", "/sampah/"],
    },
    sitemap: "https://nextjs-learn.com/sitemap.xml",
  };
}
