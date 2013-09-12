module.exports = [
    {
        id: 'clientconfig',
        description: "Pass config options from the server to your single page app.",
        tags: ['config']
    },
    {
        id: 'human-model',
        description: "Drop-in replacement for Backbone Models with more structure and features.",
        tags: ['model', 'backbone', 'mvc']
    },
    {
        id: 'human-view',
        description: 'A smart base view for Backbone apps, to make it easy to bind collections and properties to the DOM.',
        tags: ['backbone', 'view', 'mvc']
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
        tags: ['webrtc', 'media']
    },
    {
        id: 'humanjs',
        github: 'humanjs-app-generator',
        description: 'Single page app scaffolding following http://humanjavascript.com conventions.',
        tags: ['tools', 'scaffolding']
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
        description: "Boxed software has 'em, now the web does too. Specify minimum allowed browsers and versions.",
        tags: ['browsers']
    },
    {
        id: 'templatizer',
        description: "imple solution for compiling jade templates into vanilla JS functions for blazin' fast client-side use.",
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
    }
];
