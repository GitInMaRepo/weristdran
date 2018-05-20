# weristdran
Training project for cloud based web development. And also an initiative counter for RPGs
The notes in this readme will probably self-evident to most experienced programmers, but 
I am just starting.

# Links
## Cloudfoundry:

I am using Pivotal Cloudfoundry: https://run.pivotal.io/

With the official CLI: https://docs.cloudfoundry.org/cf-cli/install-go-cli.html#pkg-linux

Here is a nice upload overview: https://docs.cloudfoundry.org/devguide/deploy-apps/deploy-app.html

## Serverless Single Page Apps:

I am roughly following the steps from the book "Serverless Single Page Apps".



https://pragprog.com/book/brapps/serverless-single-page-apps

https://twitter.com/benrady

# Steps
## Step 1
Created a simple html site and loaded it up. The needed buildpack is "staticfile_buildpack"

## Step 2
Copied the testing environment from leanjs including the libs for Jasmine and jQuery. 
For it all to work some <script src...> tags need to be added to main html site.
Added Hashtag-Routing as described in the book to:
- Learn Jasmine unit testing
- Learn about Jasmine spyOn
- Learn a bit of jQuery
  
Deployed again

## Step 3
Messed around with styles and CSS. 
Took a bit from this tutorial: https://www.w3schools.com/Css/

And of course from http://www.csszengarden.com/

Thanks to http://game-icons.net/ for the icons used under CC3 license https://creativecommons.org/licenses/by/3.0/

Deployed again, of course. Make sure every needed file in the same folder as the HTML file is prefixed in there with "./" or the files will not be found on Cloudfoundries linux container. 

## Step 4
Created the real SPA, got unit tests to run and of course- deployed again.
- I am using Angular/Cli to create new projects
- ng test to run the jasmine tests. A browser needs to be started. 
- ng serve to run the app locally
- ng build --prod to deploy to "dist" folder

Used staticfile_buildpack for deployment again from "dist" folder.
