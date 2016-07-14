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
      for (var i in page.sections) {
        if(page.sections[i].type != "normal") {
          continue;
        }
        page.sections[i].content = removeEntities(page.sections[i].content);
        page.sections[i].content = typogr.typogrify(page.sections[i].content);
      }
      return page;
    }
  }
};
