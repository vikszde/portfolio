// Contact details used across the site. Fill these in before publishing:
// while a value is empty, the button that needs it is not rendered.
export const site = {
  email: "",
  linkedin: "",
};

export const projects = [
  {
    slug: "nearbio",
    number: "01",
    title: "nearb.io",
    summary: "A location-based community app for finding nearby events and people.",
    tags: ["UI/UX", "Product design"],
  },
  {
    slug: "barterland",
    number: "02",
    title: "Barterland",
    summary: "A creative trading marketplace for makers, artists and gamers.",
    tags: ["UI/UX", "Research", "Branding"],
  },
  {
    slug: "this-website",
    number: "03",
    title: "This Website",
    summary: "My personal portfolio, designed and developed from scratch.",
    tags: ["UI/UX", "Visual", "Web design"],
  },
] as const;
