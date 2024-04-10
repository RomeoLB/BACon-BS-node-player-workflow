# BACon-BS-node-player-workflow
Setup a simple Node.js Dev environment for generating a zip file to be published to BA:Connected  
How to setup a VSCode Dev environment for node to generate a pluginNodeApp.zip to be used with a BACon presentation? 

1) Unzip the file NodeAppShareToTest.zip

2) from the terminal in the folder where the zip file has been unzipped run "npm install”

3) from the src folder make some changes to the source code in index.js

4) run the command "npx webpack --config webpack.config.js" to generate the "pluginNodeApp.zip" in the "dist" folder

5) The newly build  pluginNodeApp.zip can now be published to your player via BA by going to "Presentation Settings > Files > Navigate to the path where the pluginNodeApp.zip file has been generated in the "dist" folder.

6) Publish your presentation to deploy the latest pluginNodeApp.zip package

