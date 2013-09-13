(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});

// create our folder objects
exports.includes = {};
exports.pages = {};

// body.jade compiled template
exports.body = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<body><div class="container"><nav role="navigation" class="navbar navbar-default"><div class="navbar-header"><a href="#" class="navbar-brand">human javascript &mdash; resources</a></div></nav><section id="pages"></section></div></body>');
    }
    return buf.join("");
};

// head.jade compiled template
exports.head = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<link rel="apple-touch-icon" href="public/images/Icon-57.png"/><link rel="apple-touch-icon" sizes="72x72" href="public/images/Icon-72.png"/><link rel="apple-touch-icon" sizes="114x114" href="public/images/Icon-114.png"/><link rel="apple-touch-icon" sizes="144x144" href="public/images/Icon-144.png"/><meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0"/><meta name="apple-mobile-web-app-capable" content="yes"/>');
    }
    return buf.join("");
};

// repo.jade compiled template
exports.includes.repo = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<div class="repo well"><h3>' + jade.escape((jade.interp = repo.id) == null ? "" : jade.interp) + ' <small><span>by: <a href="' + jade.escape((jade.interp = repo.npmUserUrl) == null ? "" : jade.interp) + '">' + jade.escape((jade.interp = repo.author) == null ? "" : jade.interp) + "</a></span> | <a" + jade.attrs({
            href: repo.githubUrl,
            "class": "github"
        }, {
            href: true
        }) + ">github</a> | <a" + jade.attrs({
            href: repo.npmUrl,
            "class": "npm"
        }, {
            href: true
        }) + '>npm</a></small></h3><p class="description">' + jade.escape(null == (jade.interp = repo.description) ? "" : jade.interp) + '</p><p class="tags">tags: ' + ((jade.interp = repo.tagLinks) == null ? "" : jade.interp) + "</p></div>");
    }
    return buf.join("");
};

// info.jade compiled template
exports.pages.info = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page pageTwo"><h2>More Info</h2><p>This is a demo app by <a href="http://twitter.com">Henrik Joreteg</a>.</p><h4>Relevant links:</h4><ul><li> <a href="http://humanjavascript.com">human javascript</a> the book</li><li> <a href="https://github.com/HenrikJoreteg/humanjs-sample-app">github repo </a> for this app</li><li> <a href="http://andyet.com">&yet</a> the company behind this effort</li></ul><h4>Apps Built this way</h4><ul><li> <a href="http://andbang.com">And Bang</a> Team same-pagification tool. Realtime chat + task management</li><li> <a href="http://talky.io">Talky </a> Free, zero-setup, no-account, peer-to-peer encrypted video calls</li></ul></section>');
    }
    return buf.join("");
};

// repos.jade compiled template
exports.pages.repos = function anonymous(locals) {
    var buf = [];
    with (locals || {}) {
        buf.push('<section class="page repos"><h4>Use the search box to filter</h4><div class="form-group"><input id="search" autofocus="autofocus" placeholder="quick filter" class="form-control"/></div><div class="repoList row"></div></section>');
    }
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();