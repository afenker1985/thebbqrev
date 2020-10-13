module.exports = () => ({
  title: "The BBQ Rev",
  author: "Aaron Fenker",
  description: "",
  // If an env variable (local dev) has been set, use it, otherwise default (prod)
  url: process.env.SITE_URL ? process.env.SITE_URL : "https://thebbqrev.com",
});
