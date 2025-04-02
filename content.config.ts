import { defineContentConfig, defineCollection } from "@nuxt/content";

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: "page",
      source: "**",
    }),
    exercises: defineCollection({
      source: "Exercise/*.md",
      type: "page",
    }),
  },
});
