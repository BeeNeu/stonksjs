const finvizScraper = require('./scrapers/finviz');
const { ScreenersURLs } = require('../helpers/constants');

module.exports = async () => {
  const output = await finvizScraper(ScreenersURLs.HighYieldDividends);
  return output;
};