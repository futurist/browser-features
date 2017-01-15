var config = {
  "unicode": {
    "name": "Unicode characters",
    "desc": "<p>Detects if unicode characters are supported in the current document.</p>"
  },
  "userdata": {
    "name": "IE User Data API",
    "desc": "<p>Detects support for IE userData for persisting data, an API similar to localStorage but supported since IE5.</p>"
  },
  "vibrate": {
    "name": "Vibration API",
    "desc": "<p>Detects support for the API that provides access to the vibration mechanism of the hosting device, to provide tactile feedback.</p>"
  },
  "video": {
    "name": "HTML5 Video",
    "desc": "<p>Detects support for the video element, as well as testing what types of content it supports.</p><p>Subproperties are provided to describe support for <code>ogg</code>, <code>h264</code> and <code>webm</code> formats, e.g.:</p><pre><code class=\"lang-javascript\">Modernizr.video         // true\nModernizr.video.ogg     // 'probably'\n</code></pre>"
  },
  "vml": {
    "name": "VML",
    "desc": "<p>Detects support for VML.</p>"
  },
  "webintents": {
    "name": "Web Intents",
    "desc": "<p>Detects native support for the Web Intents APIs for service discovery and inter-application communication.</p><p>Chrome added support for this in v19, but <a href=\"https://lists.w3.org/Archives/Public/public-web-intents/2012Nov/0000.html\">removed it again in v24</a> because of \"a number of areas for development in both the API and specific user experience in Chrome\". No other browsers currently support it, however a <a href=\"http://webintents.org/#javascriptshim\">JavaScript shim</a> is available.</p>"
  },
  "animation": {
    "name": "Web Animation API",
    "desc": "<p>Detects support for the Web Animation API, a way to create css animations in js</p>"
  },
  "webgl": {
    "name": "WebGL",
    "desc": ""
  },
  "websockets": {
    "name": "WebSockets Support",
    "desc": ""
  },
  "xdomainrequest": {
    "name": "XDomainRequest",
    "desc": "<p>Detects support for XDomainRequest in IE9 &amp; IE8</p>"
  },
  "adownload": {
    "name": "a[download] Attribute",
    "desc": "<p>When used on an <code>&lt;a&gt;</code>, this attribute signifies that the resource it points to should be downloaded by the browser rather than navigating to it.</p>"
  },
  "audioloop": {
    "name": "Audio Loop Attribute",
    "desc": "<p>Detects if an audio element can automatically restart, once it has finished</p>"
  },
  "audiopreload": {
    "name": "Audio Preload",
    "desc": "<p>Detects if audio can be downloaded in the background before it starts playing in the <code>&lt;audio&gt;</code> element</p>"
  },
  "webaudio": {
    "name": "Web Audio API",
    "desc": "<p>Detects the older non standard webaudio API, (as opposed to the standards based AudioContext API)</p>"
  },
  "lowbattery": {
    "name": "Low Battery Level",
    "desc": "<p>Enable a developer to remove CPU intensive CSS/JS when battery is low</p>"
  },
  "canvasblending": {
    "name": "canvas blending support",
    "desc": "<p>Detects if Photoshop style blending modes are available in canvas.</p>"
  },
  "todataurljpeg": {
    "name": "canvas.toDataURL type support",
    "desc": ""
  },
  "todataurlpng": {
    "name": "canvas.toDataURL type support",
    "desc": ""
  },
  "todataurlwebp": {
    "name": "canvas.toDataURL type support",
    "desc": ""
  },
  "canvaswinding": {
    "name": "canvas winding support",
    "desc": "<p>Determines if winding rules, which controls if a path can go clockwise or counterclockwise</p>"
  },
  "getrandomvalues": {
    "name": "getRandomValues",
    "desc": "<p>Detects support for the window.crypto.getRandomValues for generate cryptographically secure random numbers</p>"
  },
  "cssall": {
    "name": "cssall",
    "desc": "<p>Detects support for the <code>all</code> css property, which is a shorthand to reset all css properties (except direction and unicode-bidi) to their original value</p>"
  },
  "cssanimations": {
    "name": "CSS Animations",
    "desc": "<p>Detects whether or not elements can be animated using CSS</p>"
  },
  "appearance": {
    "name": "Appearance",
    "desc": "<p>Detects support for the <code>appearance</code> css property, which is used to make an element inherit the style of a standard user interface element. It can also be used to remove the default styles of an element, such as input and buttons.</p>"
  },
  "backdropfilter": {
    "name": "Backdrop Filter",
    "desc": "<p>Detects support for CSS Backdrop Filters, allowing for background blur effects like those introduced in iOS 7. Support for this was added to iOS Safari/WebKit in iOS 9.</p>"
  },
  "backgroundblendmode": {
    "name": "CSS Background Blend Mode",
    "desc": "<p>Detects the ability for the browser to composite backgrounds using blending modes similar to ones found in Photoshop or Illustrator.</p>"
  },
  "backgroundcliptext": {
    "name": "CSS Background Clip Text",
    "desc": "<p>Detects the ability to control specifies whether or not an element's background extends beyond its border in CSS</p>"
  },
  "bgpositionshorthand": {
    "name": "Background Position Shorthand",
    "desc": "<p>Detects if you can use the shorthand method to define multiple parts of an element's background-position simultaniously.</p><p>eg <code>background-position: right 10px bottom 10px</code></p>"
  },
  "bgpositionxy": {
    "name": "Background Position XY",
    "desc": "<p>Detects the ability to control an element's background position using css</p>"
  },
  "bgrepeatspace": {
    "name": "Background Repeat",
    "desc": "<p>Detects the ability to use round and space as properties for background-repeat</p>"
  },
  "bgrepeatround": {
    "name": "Background Repeat",
    "desc": "<p>Detects the ability to use round and space as properties for background-repeat</p>"
  },
  "backgroundsize": {
    "name": "Background Size",
    "desc": ""
  },
  "bgsizecover": {
    "name": "Background Size Cover",
    "desc": ""
  },
  "borderimage": {
    "name": "Border Image",
    "desc": ""
  },
  "borderradius": {
    "name": "Border Radius",
    "desc": ""
  },
  "boxshadow": {
    "name": "Box Shadow",
    "desc": ""
  },
  "boxsizing": {
    "name": "Box Sizing",
    "desc": ""
  },
  "csscalc": {
    "name": "CSS Calc",
    "desc": "<p>Method of allowing calculated values for length units. For example:</p><pre><code class=\"lang-css\">//lem {\n  width: calc(100% - 3em);\n}\n</code></pre>"
  },
  "checked": {
    "name": "CSS :checked pseudo-selector",
    "desc": ""
  },
  "csschunit": {
    "name": "CSS Font ch Units",
    "desc": ""
  },
  "csscolumns": {
    "name": "CSS Columns",
    "desc": ""
  },
  "cubicbezierrange": {
    "name": "CSS Cubic Bezier Range",
    "desc": ""
  },
  "display-runin": {
    "name": "CSS Display run-in",
    "desc": ""
  },
  "displaytable": {
    "name": "CSS Display table",
    "desc": "<p><code>display: table</code> and <code>table-cell</code> test. (both are tested under one name <code>table-cell</code> )</p>"
  },
  "ellipsis": {
    "name": "CSS text-overflow ellipsis",
    "desc": ""
  },
  "cssescape": {
    "name": "CSS.escape()",
    "desc": "<p>Tests for <code>CSS.escape()</code> support.</p>"
  },
  "cssexunit": {
    "name": "CSS Font ex Units",
    "desc": ""
  },
  "cssfilters": {
    "name": "CSS Filters",
    "desc": ""
  },
  "flexbox": {
    "name": "Flexbox",
    "desc": "<p>Detects support for the Flexible Box Layout model, a.k.a. Flexbox, which allows easy manipulation of layout order and sizing within a container.</p>"
  },
  "flexboxlegacy": {
    "name": "Flexbox (legacy)",
    "desc": ""
  },
  "flexboxtweener": {
    "name": "Flexbox (tweener)",
    "desc": ""
  },
  "flexwrap": {
    "name": "Flex Line Wrapping",
    "desc": "<p>Detects support for the <code>flex-wrap</code> CSS property, part of Flexbox, which isn’t present in all Flexbox implementations (notably Firefox).</p><p>This featured in both the 'tweener' syntax (implemented by IE10) and the 'modern' syntax (implemented by others). This detect will return <code>true</code> for either of these implementations, as long as the <code>flex-wrap</code> property is supported. So to ensure the modern syntax is supported, use together with <code>Modernizr.flexbox</code>:</p><pre><code class=\"lang-javascript\">if (Modernizr.flexbox &amp;&amp; Modernizr.flexwrap) {\n  // Modern Flexbox with `flex-wrap` supported\n}\nelse {\n  // Either old Flexbox syntax, or `flex-wrap` not supported\n}\n</code></pre>"
  },
  "fontface": {
    "name": "@font-face",
    "desc": ""
  },
  "generatedcontent": {
    "name": "CSS Generated Content",
    "desc": ""
  },
  "cssgradients": {
    "name": "CSS Gradients",
    "desc": ""
  },
  "csshairline": {
    "name": "hairline",
    "desc": "<p>Detects support for hidpi/retina hairlines, which are CSS borders with less than 1px in width, for being physically 1px on hidpi screens.</p>"
  },
  "hsla": {
    "name": "CSS HSLA Colors",
    "desc": ""
  },
  "csshyphens": {
    "name": "CSS Hyphens",
    "desc": ""
  },
  "softhyphens": {
    "name": "CSS Hyphens",
    "desc": ""
  },
  "softhyphensfind": {
    "name": "CSS Hyphens",
    "desc": ""
  },
  "cssinvalid": {
    "name": "CSS :invalid pseudo-class",
    "desc": "<p>Detects support for the ':invalid' CSS pseudo-class.</p>"
  },
  "lastchild": {
    "name": "CSS :last-child pseudo-selector",
    "desc": ""
  },
  "cssmask": {
    "name": "CSS Mask",
    "desc": ""
  },
  "mediaqueries": {
    "name": "CSS Media Queries",
    "desc": ""
  },
  "multiplebgs": {
    "name": "CSS Multiple Backgrounds",
    "desc": ""
  },
  "nthchild": {
    "name": "CSS :nth-child pseudo-selector",
    "desc": "<p>Detects support for the ':nth-child()' CSS pseudo-selector.</p>"
  },
  "objectfit": {
    "name": "CSS Object Fit",
    "desc": ""
  },
  "opacity": {
    "name": "CSS Opacity",
    "desc": ""
  },
  "overflowscrolling": {
    "name": "CSS Overflow Scrolling",
    "desc": ""
  },
  "csspointerevents": {
    "name": "CSS Pointer Events",
    "desc": ""
  },
  "csspositionsticky": {
    "name": "CSS position: sticky",
    "desc": ""
  },
  "csspseudoanimations": {
    "name": "CSS Generated Content Animations",
    "desc": ""
  },
  "csspseudotransitions": {
    "name": "CSS Generated Content Transitions",
    "desc": ""
  },
  "cssreflections": {
    "name": "CSS Reflections",
    "desc": ""
  },
  "regions": {
    "name": "CSS Regions",
    "desc": ""
  },
  "cssremunit": {
    "name": "CSS Font rem Units",
    "desc": ""
  },
  "cssresize": {
    "name": "CSS UI Resize",
    "desc": "<p>Test for CSS 3 UI \"resize\" property</p>"
  },
  "rgba": {
    "name": "CSS rgba",
    "desc": ""
  },
  "cssscrollbar": {
    "name": "CSS Stylable Scrollbars",
    "desc": ""
  },
  "scrollsnappoints": {
    "name": "Scroll Snap Points",
    "desc": "<p>Detects support for CSS Snap Points</p>"
  },
  "shapes": {
    "name": "CSS Shapes",
    "desc": ""
  },
  "siblinggeneral": {
    "name": "CSS general sibling selector",
    "desc": ""
  },
  "subpixelfont": {
    "name": "CSS Subpixel Fonts",
    "desc": ""
  },
  "supports": {
    "name": "CSS Supports",
    "desc": ""
  },
  "target": {
    "name": "CSS :target pseudo-class",
    "desc": "<p>Detects support for the ':target' CSS pseudo-class.</p>"
  },
  "textalignlast": {
    "name": "CSS text-align-last",
    "desc": ""
  },
  "textshadow": {
    "name": "CSS textshadow",
    "desc": ""
  },
  "csstransforms": {
    "name": "CSS Transforms",
    "desc": ""
  },
  "csstransforms3d": {
    "name": "CSS Transforms 3D",
    "desc": ""
  },
  "preserve3d": {
    "name": "CSS Transform Style preserve-3d",
    "desc": "<p>Detects support for <code>transform-style: preserve-3d</code>, for getting a proper 3D perspective on elements.</p>"
  },
  "csstransitions": {
    "name": "CSS Transitions",
    "desc": ""
  },
  "userselect": {
    "name": "CSS user-select",
    "desc": ""
  },
  "cssvalid": {
    "name": "CSS :valid pseudo-class",
    "desc": "<p>Detects support for the ':valid' CSS pseudo-class.</p>"
  },
  "cssvhunit": {
    "name": "CSS vh unit",
    "desc": ""
  },
  "cssvmaxunit": {
    "name": "CSS vmax unit",
    "desc": ""
  },
  "cssvminunit": {
    "name": "CSS vmin unit",
    "desc": ""
  },
  "cssvwunit": {
    "name": "CSS vw unit",
    "desc": ""
  },
  "willchange": {
    "name": "will-change",
    "desc": "<p>Detects support for the <code>will-change</code> css property, which formally signals to the browser that an element will be animating.</p>"
  },
  "wrapflow": {
    "name": "CSS wrap-flow",
    "desc": ""
  },
  "classlist": {
    "name": "classList",
    "desc": ""
  },
  "createelementattrs": {
    "name": "createElement with Attributes",
    "desc": ""
  },
  "createelement-attrs": {
    "name": "createElement with Attributes",
    "desc": ""
  },
  "dataset": {
    "name": "dataset API",
    "desc": ""
  },
  "documentfragment": {
    "name": "Document Fragment",
    "desc": "<p>Append multiple elements to the DOM within a single insertion.</p>"
  },
  "hidden": {
    "name": "[hidden] Attribute",
    "desc": "<p>Does the browser support the HTML5 [hidden] attribute?</p>"
  },
  "microdata": {
    "name": "microdata",
    "desc": ""
  },
  "mutationobserver": {
    "name": "DOM4 MutationObserver",
    "desc": "<p>Determines if DOM4 MutationObserver support is available.</p>"
  },
  "bdi": {
    "name": "bdi Element",
    "desc": "<p>Detect support for the bdi element, a way to have text that is isolated from its possibly bidirectional surroundings</p>"
  },
  "datalistelem": {
    "name": "datalist Element",
    "desc": ""
  },
  "details": {
    "name": "details Element",
    "desc": ""
  },
  "outputelem": {
    "name": "output Element",
    "desc": ""
  },
  "picture": {
    "name": "picture Element",
    "desc": ""
  },
  "progressbar": {
    "name": "progress Element",
    "desc": ""
  },
  "meter": {
    "name": "progress Element",
    "desc": ""
  },
  "ruby": {
    "name": "ruby, rp, rt Elements",
    "desc": ""
  },
  "template": {
    "name": "Template Tag",
    "desc": ""
  },
  "time": {
    "name": "time Element",
    "desc": ""
  },
  "texttrackapi": {
    "name": "Track element and Timed Text Track",
    "desc": ""
  },
  "track": {
    "name": "Track element and Timed Text Track",
    "desc": ""
  },
  "unknownelements": {
    "name": "Unknown Elements",
    "desc": "<p>Does the browser support HTML with non-standard / new elements?</p>"
  },
  "es5array": {
    "name": "ES5 Array",
    "desc": "<p>Check if browser implements ECMAScript 5 Array per specification.</p>"
  },
  "es5date": {
    "name": "ES5 Date",
    "desc": "<p>Check if browser implements ECMAScript 5 Date per specification.</p>"
  },
  "es5function": {
    "name": "ES5 Function",
    "desc": "<p>Check if browser implements ECMAScript 5 Function per specification.</p>"
  },
  "es5object": {
    "name": "ES5 Object",
    "desc": "<p>Check if browser implements ECMAScript 5 Object per specification.</p>"
  },
  "es5": {
    "name": "ES5",
    "desc": "<p>Check if browser implements everything as specified in ECMAScript 5.</p>"
  },
  "strictmode": {
    "name": "ES5 Strict Mode",
    "desc": "<p>Check if browser implements ECMAScript 5 Object strict mode.</p>"
  },
  "es5string": {
    "name": "ES5 String",
    "desc": "<p>Check if browser implements ECMAScript 5 String per specification.</p>"
  },
  "es5syntax": {
    "name": "ES5 Syntax",
    "desc": "<p>Check if browser accepts ECMAScript 5 syntax.</p>"
  },
  "es5undefined": {
    "name": "ES5 Immutable Undefined",
    "desc": "<p>Check if browser prevents assignment to global <code>undefined</code> per ECMAScript 5.</p>"
  },
  "es6array": {
    "name": "ES6 Array",
    "desc": "<p>Check if browser implements ECMAScript 6 Array per specification.</p>"
  },
  "es6collections": {
    "name": "ES6 Collections",
    "desc": "<p>Check if browser implements ECMAScript 6 Map, Set, WeakMap and WeakSet</p>"
  },
  "contains": {
    "name": "ES5 String.prototype.contains",
    "desc": "<p>Check if browser implements ECMAScript 6 <code>String.prototype.contains</code> per specification.</p>"
  },
  "generators": {
    "name": "ES6 Generators",
    "desc": "<p>Check if browser implements ECMAScript 6 Generators per specification.</p>"
  },
  "es6math": {
    "name": "ES6 Math",
    "desc": "<p>Check if browser implements ECMAScript 6 Math per specification.</p>"
  },
  "es6number": {
    "name": "ES6 Number",
    "desc": "<p>Check if browser implements ECMAScript 6 Number per specification.</p>"
  },
  "es6object": {
    "name": "ES6 Object",
    "desc": "<p>Check if browser implements ECMAScript 6 Object per specification.</p>"
  },
  "promises": {
    "name": "ES6 Promises",
    "desc": "<p>Check if browser implements ECMAScript 6 Promises per specification.</p>"
  },
  "es6string": {
    "name": "ES6 String",
    "desc": "<p>Check if browser implements ECMAScript 6 String per specification.</p>"
  },
  "devicemotion": {
    "name": "Orientation and Motion Events",
    "desc": "<p>Part of Device Access aspect of HTML5, same category as geolocation.</p><p><code>devicemotion</code> tests for Device Motion Event support, returns boolean value true/false.</p><p><code>deviceorientation</code> tests for Device Orientation Event support, returns boolean value true/false</p>"
  },
  "deviceorientation": {
    "name": "Orientation and Motion Events",
    "desc": "<p>Part of Device Access aspect of HTML5, same category as geolocation.</p><p><code>devicemotion</code> tests for Device Motion Event support, returns boolean value true/false.</p><p><code>deviceorientation</code> tests for Device Orientation Event support, returns boolean value true/false</p>"
  },
  "oninput": {
    "name": "onInput Event",
    "desc": "<p><code>oninput</code> tests if the browser is able to detect the input event</p>"
  },
  "filereader": {
    "name": "File API",
    "desc": "<p><code>filereader</code> tests for the File API specification</p><p>Tests for objects specific to the File API W3C specification without being redundant (don't bother testing for Blob since it is assumed to be the File object's prototype.)</p>"
  },
  "filesystem": {
    "name": "Filesystem API",
    "desc": ""
  },
  "capture": {
    "name": "input[capture] Attribute",
    "desc": "<p>When used on an <code>&lt;input&gt;</code>, this attribute signifies that the resource it takes should be generated via device's camera, camcorder, sound recorder.</p>"
  },
  "fileinput": {
    "name": "input[file] Attribute",
    "desc": "<p>Detects whether input type=\"file\" is available on the platform</p><p>E.g. iOS &lt; 6 and some android version don't support this</p>"
  },
  "directory": {
    "name": "input[directory] Attribute",
    "desc": "<p>When used on an <code>&lt;input type=\"file\"&gt;</code>, the <code>directory</code> attribute instructs the user agent to present a directory selection dialog instead of the usual file selection dialog.</p>"
  },
  "formattribute": {
    "name": "input[form] Attribute",
    "desc": "<p>Detects whether input form=\"form_id\" is available on the platform E.g. IE 10 (and below), don't support this</p>"
  },
  "localizednumber": {
    "name": "input[type=\"number\"] Localization",
    "desc": "<p>Detects whether input type=\"number\" is capable of receiving and displaying localized numbers, e.g. with comma separator.</p>"
  },
  "placeholder": {
    "name": "placeholder attribute",
    "desc": "<p>Tests for placeholder attribute in inputs and textareas</p>"
  },
  "requestautocomplete": {
    "name": "form#requestAutocomplete()",
    "desc": "<p>When used with input[autocomplete] to annotate a form, form.requestAutocomplete() shows a dialog in Chrome that speeds up checkout flows (payments specific for now).</p>"
  },
  "formvalidation": {
    "name": "Form Validation",
    "desc": "<p>This implementation only tests support for interactive form validation. To check validation for a specific type or a specific other constraint, the test can be combined:</p><ul><li><code>Modernizr.inputtypes.number &amp;&amp; Modernizr.formvalidation</code> (browser supports rangeOverflow, typeMismatch etc. for type=number)</li><li><code>Modernizr.input.required &amp;&amp; Modernizr.formvalidation</code> (browser supports valueMissing)</li></ul>"
  },
  "sandbox": {
    "name": "iframe[sandbox] Attribute",
    "desc": "<p>Test for <code>sandbox</code> attribute in iframes.</p>"
  },
  "seamless": {
    "name": "iframe[seamless] Attribute",
    "desc": "<p>Test for <code>seamless</code> attribute in iframes.</p>"
  },
  "srcdoc": {
    "name": "iframe[srcdoc] Attribute",
    "desc": "<p>Test for <code>srcdoc</code> attribute in iframes.</p>"
  },
  "apng": {
    "name": "Animated PNG",
    "desc": "<p>Test for animated png support.</p>"
  },
  "imgcrossorigin": {
    "name": "Image crossOrigin",
    "desc": "<p>Detects support for the crossOrigin attribute on images, which allow for cross domain images inside of a canvas without tainting it</p>"
  },
  "jpeg2000": {
    "name": "JPEG 2000",
    "desc": "<p>Test for JPEG 2000 support</p>"
  },
  "jpegxr": {
    "name": "JPEG XR (extended range)",
    "desc": "<p>Test for JPEG XR support</p>"
  },
  "sizes": {
    "name": "sizes attribute",
    "desc": "<p>Test for the <code>sizes</code> attribute on images</p>"
  },
  "srcset": {
    "name": "srcset attribute",
    "desc": "<p>Test for the srcset attribute of images</p>"
  },
  "webpalpha": {
    "name": "Webp Alpha",
    "desc": "<p>Tests for transparent webp support.</p>"
  },
  "webpanimation": {
    "name": "Webp Animation",
    "desc": "<p>Tests for animated webp support.</p>"
  },
  "webplossless": {
    "name": "Webp Lossless",
    "desc": "<p>Tests for non-alpha lossless webp support.</p>"
  },
  "webp-lossless": {
    "name": "Webp Lossless",
    "desc": "<p>Tests for non-alpha lossless webp support.</p>"
  },
  "webp": {
    "name": "Webp",
    "desc": "<p>Tests for lossy, non-alpha webp support.</p><p>Tests for all forms of webp support (lossless, lossy, alpha, and animated)..</p><p>Modernizr.webp // Basic support (lossy) Modernizr.webp.lossless // Lossless Modernizr.webp.alpha // Alpha (both lossy and lossless) Modernizr.webp.animation // Animated WebP</p>"
  },
  "inputformaction": {
    "name": "input formaction",
    "desc": "<p>Detect support for the formaction attribute on form inputs</p>"
  },
  "inputformenctype": {
    "name": "input formenctype",
    "desc": "<p>Detect support for the formenctype attribute on form inputs, which overrides the form enctype attribute</p>"
  },
  "inputformmethod": {
    "name": "input formmethod",
    "desc": "<p>Detect support for the formmethod attribute on form inputs</p>"
  },
  "inputformtarget": {
    "name": "input formtarget",
    "desc": "<p>Detect support for the formtarget attribute on form inputs, which overrides the form target attribute</p>"
  },
  "beacon": {
    "name": "Beacon API",
    "desc": "<p>Detects support for an API that allows for asynchronous transfer of small HTTP data from the client to a server.</p>"
  },
  "lowbandwidth": {
    "name": "Low Bandwidth Connection",
    "desc": "<p>Tests for determining low-bandwidth via <code>navigator.connection</code></p><p>There are two iterations of the <code>navigator.connection</code> interface.</p><p>The first is present in Android 2.2+ and only in the Browser (not WebView)</p><ul><li><a href=\"http://docs.phonegap.com/en/1.2.0/phonegap_connection_connection.md.html#connection.type\">http://docs.phonegap.com/en/1.2.0/phonegap_connection_connection.md.html#connection.type</a></li><li><a href=\"http://davidbcalhoun.com/2010/using-navigator-connection-android\">http://davidbcalhoun.com/2010/using-navigator-connection-android</a></li></ul><p>The second is specced at <a href=\"http://dev.w3.org/2009/dap/netinfo/\">http://dev.w3.org/2009/dap/netinfo/</a> and perhaps landing in WebKit</p><ul><li><a href=\"https://bugs.webkit.org/show_bug.cgi?id=73528\">https://bugs.webkit.org/show_bug.cgi?id=73528</a></li></ul><p>Unknown devices are assumed as fast</p><p>For more rigorous network testing, consider boomerang.js: <a href=\"https://github.com/bluesmoon/boomerang/\">https://github.com/bluesmoon/boomerang/</a></p>"
  },
  "eventsource": {
    "name": "Server Sent Events",
    "desc": "<p>Tests for server sent events aka eventsource.</p>"
  },
  "fetch": {
    "name": "Fetch API",
    "desc": "<p>Detects support for the fetch API, a modern replacement for XMLHttpRequest.</p>"
  },
  "xhrresponsetypearraybuffer": {
    "name": "XHR responseType='arraybuffer'",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType='arraybuffer'.</p>"
  },
  "xhrresponsetypeblob": {
    "name": "XHR responseType='blob'",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType='blob'.</p>"
  },
  "xhrresponsetypedocument": {
    "name": "XHR responseType='document'",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType='document'.</p>"
  },
  "xhrresponsetypejson": {
    "name": "XHR responseType='json'",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType='json'.</p>"
  },
  "xhrresponsetypetext": {
    "name": "XHR responseType='text'",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType='text'.</p>"
  },
  "xhrresponsetype": {
    "name": "XHR responseType",
    "desc": "<p>Tests for XMLHttpRequest xhr.responseType.</p>"
  },
  "xhr2": {
    "name": "XML HTTP Request Level 2 XHR2",
    "desc": "<p>Tests for XHR2.</p>"
  },
  "scriptasync": {
    "name": "script[async]",
    "desc": "<p>Detects support for the <code>async</code> attribute on the <code>&lt;script&gt;</code> element.</p>"
  },
  "scriptdefer": {
    "name": "script[defer]",
    "desc": "<p>Detects support for the <code>defer</code> attribute on the <code>&lt;script&gt;</code> element.</p>"
  },
  "speechrecognition": {
    "name": "Speech Recognition API",
    "desc": ""
  },
  "speechsynthesis": {
    "name": "Speech Synthesis API",
    "desc": ""
  },
  "localstorage": {
    "name": "Local Storage",
    "desc": ""
  },
  "sessionstorage": {
    "name": "Session Storage",
    "desc": ""
  },
  "websqldatabase": {
    "name": "Web SQL Database",
    "desc": ""
  },
  "stylescoped": {
    "name": "style[scoped]",
    "desc": "<p>Support for the <code>scoped</code> attribute of the <code>&lt;style&gt;</code> element.</p>"
  },
  "svgasimg": {
    "name": "SVG as an <img> tag source",
    "desc": ""
  },
  "svgclippaths": {
    "name": "SVG clip paths",
    "desc": "<p>Detects support for clip paths in SVG (only, not on HTML content).</p><p>See <a href=\"https://github.com/Modernizr/Modernizr/issues/213\">this discussion</a> regarding applying SVG clip paths to HTML content.</p>"
  },
  "svgfilters": {
    "name": "SVG filters",
    "desc": ""
  },
  "svgforeignobject": {
    "name": "SVG foreignObject",
    "desc": "<p>Detects support for foreignObject tag in SVG.</p>"
  },
  "inlinesvg": {
    "name": "Inline SVG",
    "desc": "<p>Detects support for inline SVG in HTML (not within XHTML).</p>"
  },
  "smil": {
    "name": "SVG SMIL animation",
    "desc": ""
  },
  "textareamaxlength": {
    "name": "textarea maxlength",
    "desc": "<p>Detect support for the maxlength attribute of a textarea element</p>"
  },
  "bloburls": {
    "name": "Blob URLs",
    "desc": "<p>Detects support for creating Blob URLs</p>"
  },
  "datauri": {
    "name": "Data URI",
    "desc": "<p>Detects support for data URIs. Provides a subproperty to report support for data URIs over 32kb in size:</p><pre><code class=\"lang-javascript\">Modernizr.datauri           // true\nModernizr.datauri.over32kb  // false in IE8\n</code></pre>"
  },
  "urlparser": {
    "name": "URL parser",
    "desc": "<p>Check if browser implements the URL constructor for parsing URLs.</p>"
  },
  "videoautoplay": {
    "name": "Video Autoplay",
    "desc": "<p>Checks for support of the autoplay attribute of the video element.</p>"
  },
  "videoloop": {
    "name": "Video Loop Attribute",
    "desc": ""
  },
  "videopreload": {
    "name": "Video Preload Attribute",
    "desc": ""
  },
  "webglextensions": {
    "name": "WebGL Extensions",
    "desc": "<p>Detects support for OpenGL extensions in WebGL. It's <code>true</code> if the <a href=\"https://developer.mozilla.org/en-US/docs/Web/WebGL/Using_Extensions\">WebGL extensions API</a> is supported, then exposes the supported extensions as subproperties, e.g.:</p><pre><code class=\"lang-javascript\">if (Modernizr.webglextensions) {\n  // WebGL extensions API supported\n}\nif ('OES_vertex_array_object' in Modernizr.webglextensions) {\n  // Vertex Array Objects extension supported\n}\n</code></pre>"
  },
  "datachannel": {
    "name": "RTC Data Channel",
    "desc": "<p>Detect for the RTCDataChannel API that allows for transfer data directly from one peer to another</p>"
  },
  "getusermedia": {
    "name": "getUserMedia",
    "desc": ""
  },
  "peerconnection": {
    "name": "RTC Peer Connection",
    "desc": ""
  },
  "websocketsbinary": {
    "name": "Binary WebSockets",
    "desc": ""
  },
  "atobbtoa": {
    "name": "Base 64 encoding/decoding",
    "desc": "<p>Detects support for WindowBase64 API (window.atob &amp;&amp; window.btoa).</p>"
  },
  "framed": {
    "name": "Framed window",
    "desc": "<p>Tests if page is iframed.</p>"
  },
  "matchmedia": {
    "name": "matchMedia",
    "desc": "<p>Detects support for matchMedia.</p>"
  },
  "blobworkers": {
    "name": "Workers from Blob URIs",
    "desc": "<p>Detects support for creating Web Workers from Blob URIs.</p>"
  },
  "dataworkers": {
    "name": "Workers from Data URIs",
    "desc": "<p>Detects support for creating Web Workers from Data URIs.</p>"
  },
  "sharedworkers": {
    "name": "Shared Workers",
    "desc": "<p>Detects support for the <code>SharedWorker</code> API from the Web Workers spec.</p>"
  },
  "transferables": {
    "name": "Transferables Objects",
    "desc": "<p>Detects whether web workers can use <code>transferables</code> objects.</p>"
  },
  "webworkers": {
    "name": "Web Workers",
    "desc": "<p>Detects support for the basic <code>Worker</code> API from the Web Workers spec. Web Workers provide a simple means for web content to run scripts in background threads.</p>"
  }
}

var features = Object.keys(config)
var detected = []
var count = 0
features.forEach(function(item) {
  Modernizr.on(item, function (result) {
    config[item].result = result
    detected.push(item)
    if(result) console.log(item, count)
    if (++count == features.length || detected.length>=208) {
      showList()
    }
  })
})

// If the list not correct, the result won't show, use below to check:
// features.filter(v=> detected.indexOf(v)<0 )
// see which items is going wrong

function showList () {
  var list = []
  for (var cls, val, item, i = 0; i < features.length; i++) {
    val = features[i]
    item = config[val]
    cls = item.result ? 'has' : 'no-has'
    list.push('<dl class=' + cls + '><dt><span onclick=showdesc(this) onmouseover=showdesc(this)>[' + val + ']</span> '+ item.name +'</dt><dd>'+ item.desc +'</dd></dl>')
  }
  document.getElementById('features').innerHTML = list.join('')
  // if it's phantom, callBack
  if (typeof window.callPhantom === 'function') {
    callPhantom('feature-complete')
  }
}

function showdesc(el) {
  el = el.parentNode
  document.querySelectorAll('dd').forEach(function(el) {
    el.className=''
  })
  el.nextElementSibling.className = 'show'
}
