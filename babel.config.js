module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          chrome: "51",
        },
      },
    ],
    "@babel/preset-react",
  ],
};
