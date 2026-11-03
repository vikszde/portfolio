// Contact details used across the site. Fill these in before publishing:
// while a value is empty, the button that needs it is not rendered.
export const site = {
  email: "",
  linkedin: "",
};

// `highlight` is the short tag pinned to the project's card on the home
// page. Swap these for a real result or fact once there is one, e.g.
// "+38% sign-ups" or "6 week sprint"; keep it to a few words.
export const projects = [
  {
    slug: "nearbio",
    number: "01",
    title: "nearb.io",
    summary: "A location-based community app for finding nearby events and people.",
    tags: ["UI/UX", "Product design"],
    highlight: "Community app",
  },
  {
    slug: "barterland",
    number: "02",
    title: "Barterland",
    summary: "A creative trading marketplace for makers, artists and gamers.",
    tags: ["UI/UX", "Research", "Branding"],
    highlight: "Marketplace",
  },
  {
    slug: "this-website",
    number: "03",
    title: "This Website",
    summary: "My personal portfolio, designed and developed from scratch.",
    tags: ["UI/UX", "Visual", "Web design"],
    highlight: "Built from scratch",
  },
] as const;
