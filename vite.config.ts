import { lib } from "@bjmhe/viteplus-preset";

export default lib(
  {},
  {
    run: {
      tasks: {
        autofix: ["vpx automd", "vpx bjmhe fetch", "vp check --fix"],
      },
    },
  },
);
