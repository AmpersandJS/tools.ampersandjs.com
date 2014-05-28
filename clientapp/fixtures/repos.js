module.exports = [
    {
        id: 'clientconfig',
        description: "Pass config options from the server to your single page app.",
        tags: ['config']
    },
    {
        id: 'moonboots',
        description: 'A set of tools and conventions for building/serving clientside apps with node.js.',
        repoType: 'server',
        tags: ['server', 'assets']
    },
    {
        id: 'simplewebrtc',
        description: "World's easiest WebRTC",
        tags: ['webrtc']
    },
    {
        id: 'getusermedia',
        description: 'Cross-browser getUserMedia shim with node.js style error-first API.',
        tags: ['video', 'webrtc', 'media']
    },
    {
        id: 'ampersand',
        description: 'Single page app scaffolding following http://humanjavascript.com conventions.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'tools', 'scaffolding']
    },
    {
        id: 'ampersand-collection',
        description: 'A tool for storing/retrieving JS objects or models.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'collection', 'model']
    },
    {
        id: 'ampersand-rest-collection',
        description: 'ampersand-collection extended with methods for working with RESTful APIs.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'collection', 'model', 'api']
    },
    {
        id: 'ampersand-collection-underscore-mixin',
        description: 'Mixin for adding underscore methods to ampersand-collection.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'collection', 'model']
    },
    {
        id: 'ampersand-model',
        description: 'For modeling data in your application.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'model']
    },
    {
        id: 'ampersand-state',
        description: 'A low-level object for managing complex state. This is what ampersand-model is built on.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'model']
    },
    {
        id: 'ampersand-router',
        description: 'Clientside router with fallbacks for browsers sans pushState. Mostly lifted from Backbone.js.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'router']
    },
    {
        id: 'ampersand-view-switcher',
        description: 'A utility for swapping out views inside a container element.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'router']
    },
    {
        id: 'ampersand-sync',
        description: 'Standalone, modern-browser-only version of Backbone.Sync as Common JS module.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'api', 'rest']
    },
    {
        id: 'ampersand-view',
        description: 'A tool for managing rendering, binding to the DOM.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'view']
    },
    {
        id: 'ampersand-registry',
        description: 'Global model registry for tracking instantiated models accross collections.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'model', 'registry']
    },
    {
        id: 'ampersand-class-extend',
        description: 'JS class extension tool for enabling easily extending prototype with multiple objects.',
        githubUser: 'ampersandjs',
        tags: ['ampersand', 'class', 'extend']
    },
    {
        id: 'attachmediastream',
        description: 'Simple abstraction for handling differences between browsers for attaching a media stream to a video element',
        tags: ['webrtc', 'media', 'video', 'audio']
    },
    {
        id: 'mediastream-gain',
        description: 'A tiny browser module for creating a gain/volume controller for the audio channels in a MediaStream.',
        tags: ['webrtc', 'media', 'audio']
    },
    {
        id: 'domeventlogger',
        description: 'Inspects and logs out all events emitted by a DOM object. Useful for debugging.',
        tags: ['events']
    },
    {
        id: 'cookie-getter',
        description: 'Reads cookies. That\'s it!',
        tags: ['cookie']
    },
    {
        id: 'dummy-api',
        description: 'Simple REST-ful in memory API for express. Useful for testing clientside apps.',
        tags: ['server', 'development', 'api']
    },
    {
        id: 'emoji-images',
        description: 'Replace stuff like :smiley: in text with <img> tags of a corresponding image.',
        tags: ['emoji']
    },
    {
        id: 'favicon-setter',
        description: 'Super-simple tool for dynamically setting the favicon image on a page.',
        tags: ['favicon']
    },
    {
        id: 'image-to-data-uri',
        github: 'image-to-data-uri.js',
        description: 'Takes an image url, downloads the image and creates a data URI for caching, etc.',
        tags: ['image', 'data-uri', 'canvas']
    },
    {
        id: 'loading-stats',
        description: 'For tracking web app loading performance for single page apps.',
        tags: ['metrics', 'stats', 'performance']
    },
    {
        id: 'mockconsole',
        description: 'An object with all the same methods as console in the browser. But does nothing.',
        tags: ['console', 'debugging', 'logging']
    },
    {
        id: 'photograb',
        description: 'Browser module for capturing snapshots from a video (or other compatible) element.',
        tags: ['media', 'canvas', 'webrtc']
    },
    {
        id: 'reformer',
        description: 'Super customizable, Self-contained, self-rendering, self-validating forms that can only output valid data.',
        tags: ['forms', 'validation']
    },
    {
        id: 'reformer-username',
        description: 'Field plugin for reformer, that handles the annoying problem of username validataion in forms.',
        tags: ['forms', 'validation']
    },
    {
        id: 'rtcpeerconnection',
        description: 'A tiny browser module that gives normalizes and simplifies the API for WebRTC peer connections.',
        tags: ['webrtc', 'peerconnection']
    },
    {
        id: 'semi-static',
        description: "lazy way to serve a directory of semi-static pages in express.js. Handy for building quick 'static' pages inside an othewise 'dynamic' app.",
        tags: ['express', 'server', 'jade']
    },
    {
        id: 'slugger',
        description: "Takes a string, returns a url friendly string. Works in browser and node. Dead simple.",
        tags: ['url', 'slug']
    },
    {
        id: 'sound-effect-manager',
        description: 'Easy way to manage and play sound effects using HTML5 Web Audio API',
        tags: ['media', 'webaudio', 'sounds']
    },
    {
        id: 'system-requirements',
        github: 'system-requirements.js',
        description: "Boxed software has 'em, now the web does too. Specify minimum allowed browsers and versions.",
        tags: ['browsers']
    },
    {
        id: 'templatizer',
        description: "Simple solution for compiling jade templates into vanilla JS functions for blazin' fast client-side use.",
        tags: ['templates', 'jade']
    },
    {
        id: 'time-counter',
        description: 'Simple time counter tracker. Create count-ups and count-downs. That can be rendered to the dom.',
        tags: ['counter', 'timer']
    },
    {
        id: 'video-recorder',
        description: 'Experimental browser module for recording the contents of a <video> tag.',
        tags: ['media', 'video', 'webrtc']
    },
    {
        id: 'wake-event',
        description: 'Detection for computer waking up from sleep.',
        tags: ['events']
    },
    {
        id: 'webrtc',
        github: 'webrtc.js',
        description: 'WebRTC abstraction for managing it simple to manage multiple peer connections of various types. Used by SimpleWebRTC',
        tags: ['webrtc', 'media']
    },
    {
        id: 'webrtcsupport',
        description: 'Browser module to detect support for webrtc and extract proper constructors.',
        tags: ['webrtc']
    },
    {
        id: 'wildemitter',
        description: "A super lightweight EventEmitter similar to what comes in Node.js, but with a support for wildcard events '*' and grouped handlers",
        tags: ['events']
    },
    {
        id: 'zepto-detect',
        description: 'The detect portion of zepto.js structured for use with browserify.',
        tags: ['detect', 'browser']
    },
    {
        id: 'hark',
        author: 'latentflip',
        description: 'Hark is a tiny browser/commonJS module that listens to an audio stream, and emits events indicating whether the user is speaking or not.',
        tags: ['webrtc', 'audio', 'media']
    },
    {
        id: 'bows',
        author: 'latentflip',
        description: 'Safe, production happy, colourful logging for chrome - makes reading your logs much easier.',
        tags: ['logging', 'debugging', 'development']
    },
    {
        id: 'andlog',
        description: 'Safely leave console statements in production',
        tags: ['logging', 'debugging', 'development']
    },
    {
        id: 'event-component',
        description: 'Event binding component for DOM events.',
        author: 'tjholowaychuk',
        githubUser: 'component',
        github: 'event',
        tags: ['events', 'dom']
    },
    {
        id: 'query-param-getter',
        description: 'Module for grabbing query parameters by name from the URL. Result is purposely not cached since URL can change.',
        tags: ['query', 'param', 'url']
    },
    {
        id: 'raf-component',
        description: 'Request animation frame API with fallback and cancel support',
        author: 'tjholowaychuk',
        githubUser: 'component',
        github: 'raf',
        tags: ['animation', 'canvas', 'rendering']
    },
    {
        id: 'transform-style',
        description: 'Apply transform style property with proper prefix to an element. For use with browserify / CommonJS.',
        tags: ['performance', 'dom', 'css']
    },
    {
        id: 'translatez-hack',
        description: 'Apply the translateZ hack in a cross-browser way',
        tags: ['performance', 'dom', 'css']
    },
    {
        id: 'tryit',
        description: 'Cleaner API to try-catch in JS.',
        tags: ['error', 'try', 'exception']
    },
    {
        id: 'moonboots_hapi',
        githubUser: 'wraithgar',
        github: 'moonboots-hapi',
        author: 'gar',
        description: 'Moonboots adapted for hapi',
        tags: ['server', 'assets']
    },
    {
        id: 'array-jumper',
        description: 'Jump forward or backward through an array by an index based on an item already in the array.',
        tags: ['array', 'util']
    },
    {
        id: 'array-next',
        description: 'Advance to the next item in the array looping when hitting the end.',
        tags: ['array', 'util']
    },
    {
        id: 'add-keyup-events',
        description: 'Emit custom events from an input so you can do stuff like listening for "enter" and "esc" events the same way as you would "keyup".',
        tags: ['events', 'dom', 'keyboard', 'input']
    },
    {
        id: 'bind-transforms',
        description: 'Bind models properties to properly prefixed CSS transforms in backbone/humanjs views.',
        tags: ['backbone', 'view', 'dom', 'binding']
    },
    {
        id: 'get-result',
        description: 'Utility function for getting a named property from an object. Works for values and functions.',
        tags: ['util', 'result']
    },
    {
        id: 'extend-object',
        description: 'Underscore\'s extend method as a standalone Common JS module.',
        tags: ['util', 'extend', 'underscore']
    },
    {
        id: 'hammerjs',
        description: 'Normalizes touch and mouse events between browsers. Making gesture events much easier to work with.',
        author: 'jtangelder',
        tags: ['events', 'mobile', 'touch', 'mouse'],
        githubUser: 'eightmedia',
        github: 'hammer.js'
    },
    {
        id: 'backbone-events-standalone',
        author: 'n1k0',
        tags: ['events', 'backbone']
    },
    {
        id: 'pikaday',
        description: 'Lightweight app-friendly datepicker',
        author: 'dbushell',
        tags: ['date', 'view', 'datepicker']
    },
    {
        id: 'fastclick',
        description: 'Polyfill to remove click delays on browsers with touch UIs.',
        author: 'ftlabs',
        tags: ['mobile', 'touch']
    },
    {
        id: 'stylizer',
        description: 'Integrate stylus, and stylus plugins, into a node project.',
        author: 'latentflip',
        tags: ['CSS', 'stylus']
    },
    {
        id: 'moment',
        description: 'JS date library for parsing, validating, manipulating, and formatting dates.',
        author: 'moment',
        tags: ['date', 'validation']
    },
    {
        id: 'precommit-hook',
        description: 'A useful pre-commit hook for git based projects that lints and runs npm test.',
        author: 'nlf',
        tags: ['git', 'precommit', 'testing', 'linting']
    },
    {
        id: 'nodemon',
        description: 'Monitor for any changes in your node.js application and automatically restart the server.',
        author: 'remy',
        tags: ['development', 'monitoring']
    },
    {
        id: 'lodash-node',
        description: 'A collection of Lo-Dash methods as Node.js modules. Useful for custom and modern builds.',
        author: 'lodash',
        tags: ['utility']
    },
    {
        id: 'async',
        description: 'Async utilities for node and the browser.',
        author: 'caolan',
        tags: ['utility', 'async']
    },
    {
        id: 'window-watcher',
        description: 'State object you can listen to for changes to window width.',
        tags: ['events', 'window']
    }
];
