import { defineDisplay } from "@directus/extensions-sdk";
import DisplayComponent from "./display.vue";

export default defineDisplay({
  id: "display-plain-text",
  name: "Display Plain Text",
  icon: "format_color_text",
  description: "Display to show plain text",
  component: DisplayComponent,
  options: null,
  types: ["text", "string"],
});
