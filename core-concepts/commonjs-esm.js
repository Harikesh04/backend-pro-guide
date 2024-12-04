// CommonJS vs. ES Modules

// ! 1.CommonJS (module.exports/ module.imports , require())

//     1.Synchronous (loads modules synchronously)
//     2.Not natively supported in browsers
//     3.Default in Node.js

// ! 2.ESM (ECMAScript Modules) (imports/ exports)

//     1.Asynchronous (ideal for browsers)
//     2.Supported natively in modern browsers
//     3.Supported in Node.js (from v12 with .mjs or "type": "module")


//  ?  When to Use CommonJS vs. ES Modules Use CommonJS when:
    
//     You're working with Node.js legacy code or libraries that rely on CommonJS.
//     You need synchronous imports (typically server-side).
//     You don't need browser compatibility (Node.js-only).
//     Use ESM when:
    
//     You're writing modern JavaScript for both the browser and Node.js.
//     You want asynchronous loading and better performance in web apps.
//     You're working with ES6+ features and modern JavaScript libraries.
