// eslint-disable-next-line @typescript-eslint/no-var-requires
const withTranslateRoutes = require("next-translate-routes/plugin");

module.exports = withTranslateRoutes({
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "en",
  },
});
