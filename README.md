# LWC Single-Page App  

This project is a basic example of a single-page application built with LWC. In
contrast to multi-page apps, where the site serves a new page whenever the
client fetches resources from a different URL on the same domain, single-page
apps provide a way to serve resources dynamically while controlling the routing
history of the browser on the front-end application. Single-page applications
can work seamlessly integrated with the browser history getting better
performance while loading dynamic content. 

## Quickstart 

First, install all `dependencies` and `devdependencies` locally, we are using 
`--legacy-peer-deps` to avoid issues with the deprecated packages in this version:

```
npm install --legacy-peer-deps
```

Run a local server in port 5000:

```
npm run dev
```

## The Router Library 

There are some custom solutions for client-side routing with Lightning Web
Components, but we choose the
[@lwce/router](https://github.com/LWC-Essentials/router) package. The package
has received attention from the official Salesforce Developers group, and
although it hasn't been updated recently, we try to adhere to the community's
practices as much as possible. We have forked the project and updated it to
remove vulnerabilities.

## The Example App

The application we are using here is a carbon copy of the example provided by the
[@lwce/router](https://github.com/LWC-Essentials/router) package. We just
bundled it using `rollup` to use the example as a reference for more complex
projects. The template we are using for the project setup comes from
[lwc-oss-minimal-app](https://github.com/metasintaxis/lwc-oss-single-page-app.git).
