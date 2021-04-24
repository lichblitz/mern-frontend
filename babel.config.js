module.exports = {
  plugins: [
    [
      "module-resolver",
      {
        root: ["."],
        alias: {
          application: "./src/application",
          domain: "./src/domain",
          ui: "./src/ui",
          frameworks: "./src/frameworks",
        },
      },
    ],
  ],
};
