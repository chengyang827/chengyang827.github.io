// build time:Sun Sep 17 2017 21:51:45 GMT+0800 (中国标准时间)
PR["registerLangHandler"](PR["createSimpleLexer"]([[PR["PR_PLAIN"],/^[\t\n\r \xA0]+/,null,"\t\n\r  "],[PR["PR_COMMENT"],/^#.*/,null,"#"],[PR["PR_LITERAL"],/^'(?:[^'\\]|\\(?:.|\n|\r))*'?/,null,"'"],[PR["PR_ATTRIB_NAME"],/^@\w+/,null,"@"],[PR["PR_PUNCTUATION"],/^[!%&()*+,\-;<=>?\[\\\]^{|}]+/,null,"!%&()*+,-;<=>?[\\]^{|}"],[PR["PR_LITERAL"],/^(?:0o[0-7](?:[0-7]|_[0-7])*|0x[\da-fA-F](?:[\da-fA-F]|_[\da-fA-F])*|\d(?:\d|_\d)*(?:\.\d(?:\d|_\d)*)?(?:[eE][+\-]?\d(?:\d|_\d)*)?)/,null,"0123456789"]],[[PR["PR_ATTRIB_NAME"],/^iex(?:\(\d+\))?> /],[PR["PR_PUNCTUATION"],/^::/],[PR["PR_LITERAL"],/^:(?:\w+[\!\?\@]?|"(?:[^"\\]|\\.)*"?)/],[PR["PR_ATTRIB_NAME"],/^(?:__(?:CALLER|ENV|MODULE|DIR)__)/],[PR["PR_KEYWORD"],/^(?:alias|case|catch|def(?:delegate|exception|impl|macrop?|module|overridable|p?|protocol|struct)|do|else|end|fn|for|if|in|import|quote|raise|require|rescue|super|throw|try|unless|unquote(?:_splicing)?|use|when|with|yield)\b/],[PR["PR_LITERAL"],/^(?:true|false|nil)\b/],[PR["PR_LITERAL"],/^(?:\w+[\!\?\@]?|"(?:[^"\\]|\\.)*"):(?!:)/],[PR["PR_STRING"],/^"""\s*(\r|\n)+(?:""?(?!")|[^\\"]|\\(?:.|\n|\r))*"{0,3}/],[PR["PR_STRING"],/^"(?:[^"\\]|\\(?:.|\n|\r))*"?(?!")/],[PR["PR_TYPE"],/^[A-Z]\w*/],[PR["PR_COMMENT"],/^_\w*/],[PR["PR_PLAIN"],/^[$a-z]\w*[\!\?]?/],[PR["PR_ATTRIB_VALUE"],/^~[A-Z](?:\/(?:[^\/\r\n\\]|\\.)+\/|\|(?:[^\|\r\n\\]|\\.)+\||"(?:[^"\r\n\\]|\\.)+"|'(?:[^'\r\n\\]|\\.)+')[A-Z]*/i],[PR["PR_ATTRIB_VALUE"],/^~[A-Z](?:\((?:[^\)\r\n\\]|\\.)+\)|\[(?:[^\]\r\n\\]|\\.)+\]|\{(?:[^\}\r\n\\]|\\.)+\}|\<(?:[^\>\r\n\\]|\\.)+\>)[A-Z]*/i],[PR["PR_PUNCTUATION"],/^(?:\.+|\/|[:~])/]]),["ex","exs"]);
//rebuild by neat </(?:[^\></=></=>