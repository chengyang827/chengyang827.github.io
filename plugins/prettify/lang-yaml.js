// build time:Sun Sep 17 2017 14:31:11 GMT+0800 (中国标准时间)
PR["registerLangHandler"](PR["createSimpleLexer"]([[PR["PR_PUNCTUATION"],/^[:|>?]+/,null,":|>?"],[PR["PR_DECLARATION"],/^%(?:YAML|TAG)[^#\r\n]+/,null,"%"],[PR["PR_TYPE"],/^[&]\S+/,null,"&"],[PR["PR_TYPE"],/^!\S*/,null,"!"],[PR["PR_STRING"],/^"(?:[^\\"]|\\.)*(?:"|$)/,null,'"'],[PR["PR_STRING"],/^'(?:[^']|'')*(?:'|$)/,null,"'"],[PR["PR_COMMENT"],/^#[^\r\n]*/,null,"#"],[PR["PR_PLAIN"],/^\s+/,null," \t\r\n"]],[[PR["PR_DECLARATION"],/^(?:---|\.\.\.)(?:[\r\n]|$)/],[PR["PR_PUNCTUATION"],/^-/],[PR["PR_KEYWORD"],/^[\w-]+:[ \r\n]/],[PR["PR_PLAIN"],/^\w+/]]),["yaml","yml"]);
//rebuild by neat 