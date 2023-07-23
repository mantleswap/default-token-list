const { version } = require("../package.json");

const mantle = require("../assets/tokens/mantle.json");
const mantleTestnet = require("../assets/tokens/mantle-testnet.json");

module.exports = function buildList() {
  const parsed = version.split(".");
  return {
    name: "MantleSwap Menu",
    timestamp: new Date().toISOString(),
    version: {
      major: +parsed[0],
      minor: +parsed[1],
      patch: +parsed[2],
    },
    tags: {},
    logoURI:
      "https://raw.githubusercontent.com/mantleswap/default-token-list/master/assets/logox200.png",
    keywords: ["MantleSwap", "default"],
    tokens: [
      ...mantle,
      ...mantleTestnet,
    ]
      // sort them by symbol for easy readability
      .sort((t1, t2) => {
        if (t1.chainId === t2.chainId) {
          return t1.symbol.toLowerCase() < t2.symbol.toLowerCase() ? -1 : 1;
        }
        return t1.chainId < t2.chainId ? -1 : 1;
      }),
  };
};
