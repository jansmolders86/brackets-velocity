define(function (require, exports, module) {
    "use strict";

    var LanguageManager = brackets.getModule("language/LanguageManager"),
		html = LanguageManager.getLanguage("java");

    html.addFileExtension("vtl");
});