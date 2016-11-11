/*jslint node: true, esversion: 6 */
"use strict";


/**
 * CONTINUOUS DEPLOYMENT
 * @version 1.0.0
 * @author Pixels & Bytes
 *
 *         Getting Contentful — Github — Travis-CI — Heroku all talking to eachother
 *         Contentful: CaaS
 *         GitHub: Repositories & Pages
 *         Travis-CI: The build
 *         Heroku: Handling Contentful updates
 *
 * @requires fs
 * @requires pug
 */



// THE REQUIREMENTS
const fs = require('fs');
const pug = require('pug');



const index = pug.compileFile('index.pug');
const post = {
  title: 'Contentful — GitHub — Github Pages — Heroku — Travis-CI',
  content: 'Getting Contentful, Github, Github pages, Heroku, and Travis-CI all talking to eachother with webhooks. Looks like we\'re good to go with Travis-CI/GitHub/Github Pages'
};

const data = index(post);
fs.writeFileSync('build/index.html', data);
