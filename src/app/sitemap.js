const siteUrl = "https://tacommodity.com";

const routes = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/about", changeFrequency: "monthly", priority: 0.8 },
  { path: "/projects", changeFrequency: "monthly", priority: 0.8 },
  { path: "/commodity-and-trade", changeFrequency: "monthly", priority: 0.8 },
  { path: "/bfg-capital-management", changeFrequency: "monthly", priority: 0.8 },
  { path: "/women-sustainable-group", changeFrequency: "monthly", priority: 0.7 },
  { path: "/friends-of-smart-plantation-growers-initiative", changeFrequency: "monthly", priority: 0.7 },
  { path: "/careers", changeFrequency: "weekly", priority: 0.6 },
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map(({ path, changeFrequency, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
