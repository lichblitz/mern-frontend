const { addResolveAlias } = require("./commands/aliasResolver");

module.exports = {
  webpack: (config, env) => {
    console.log(env);
    addResolveAlias(config);
    // Add Bundle analyzer for production environments

    return config;
  },
};

