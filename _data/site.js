module.exports = () => ({
  title: "2nd South Carolina String Band Fan Site",
  author: "Aaron Fenker",
  description: "",
  // If an env variable (local dev) has been set, use it, otherwise default (prod)
  url: process.env.SITE_URL ? process.env.SITE_URL : "https://2scsbfan.info",
});
