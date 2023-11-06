
## <a href="https://portfolio-abcb2.web.app/">LIVE DEMO</a>

## Description
This is a ReactJS based personal resume website


#### PREREQUISITES:
- Sign up for a Firebase account <a href='https://console.firebase.google.com/'>HERE</a>
- Install Node JS in your computer <a href='https://nodejs.org/en/'>HERE</a>
#### PROCEDURE:
- Download the zip folder from Github and unzip it
Here is the link to download zip 👉
<a href='https://github.com/aman5873/portfolio'>HERE</a>
- Open the folder in VS Code
- Edit <code>public/resumeData.json</code> and add your personal details and projects
- Open terminal in VS Code
- RUN <code>npm init</code> , this command can be used to set up a new or existing npm package
- RUN <code>npm install</code> , this command pulls out all the require node modules
- RUN <code>npm run build</code>, this command will create a build folder for you

#### Deploying to FireBase:
- RUN <code>npm install -g firebase-tools</code>, this command will Globally install Firebase-CLI into the computer
- RUN <code>firbase login</code>LogIn through Firebase-CLI, make sure to login first via browser else you have to give login in credentials.
- RUN <code>firebase login --reauth</code>If Error: failed access.
- RUN <code>firebase init</code>Select public directory : build and complete firebase initialization.
- RUN <code>npm run build</code>Build fire for deploying
- RUN <code>firebase deploy</code>



