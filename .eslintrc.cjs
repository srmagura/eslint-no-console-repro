module.exports = {
  extends: ["./.eslintrc.base.cjs"],
  rules: {
    "no-console": "warn",

    // This configuration is considered invalid because the `allow` array is empty:

    // "no-console": ["warn", { allow: [] }],
  },
};
