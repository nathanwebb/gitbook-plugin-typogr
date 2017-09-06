var typogr = require('typogr');

removeEntities = function(string) {
  /* remove HTML entities, as typogrify can't */
  return string
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, '\'')
}

module.exports = {
  hooks: {
    page: function(page) {
      page.content = removeEntities(page.content);
      page.content = typogr.typogrify(page.content);

      return page;
    }
  }
};
