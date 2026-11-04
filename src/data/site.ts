// Contact details used across the site. Fill these in before publishing:
// while a value is empty, the button that needs it is not rendered.
export const site = {
  email: "",
  linkedin: "",
};

// `highlight` is the short tag pinned to the project's card on the home
// page. Swap these for a real result or fact once there is one, e.g.
// "+38% sign-ups" or "6 week sprint"; keep it to a few words.
// `role` is shown on the All projects page; keep it the same as the Role in
// the project's case study.
export const projects = [
  {
    slug: "nearbio",
    number: "01",
    title: "nearb.io",
    summary: "A web app for exploring and comparing locations. My work: product design, visual identity and AI-assisted frontend work.",
    role: "Product design, visual identity, and AI-assisted frontend implementation.",
    tags: ["UI/UX", "Product design"],
    highlight: "Location app",
  },
  {
    slug: "barterland",
    number: "02",
    title: "Barterland",
    summary: "A web platform for swapping items. My work: usability research, testing and a revised upload flow.",
    role: "UX/UI design and research.",
    tags: ["UI/UX", "Research", "Branding"],
    highlight: "Marketplace",
  },
] as const;
