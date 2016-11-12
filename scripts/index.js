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
  title: 'Travis-CI — GitHub — Github Pages',
  content: 'Getting Travis-CI to pull repository from Github, manage the build and deploy to Github pages.'
};

const data = index(post);
fs.writeFileSync('build/index.html', data);
