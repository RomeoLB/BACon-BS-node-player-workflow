# BACon-BS-node-player-workflow
Setup a simple Node.js Dev environment for generating a zip file to be published to BA:Connected 

## How to setup a VSCode Dev environment for node to generate a pluginNodeApp.zip to be used with a BACon presentation? 

1. Unzip the file NodeAppShareToTest.zip

1. from the terminal in the folder where the zip file has been unzipped run "npm install”

1. from the src folder make some changes to the source code in index.js

1. run the command "npx webpack --config webpack.config.js" to generate the "pluginNodeApp.zip" in the "dist" folder

1. The newly build  pluginNodeApp.zip can now be published to your player via BA by going to "Presentation Settings > Files > Navigate to the path where the pluginNodeApp.zip file has been generated in the "dist" folder.

1. Publish your presentation to deploy the latest pluginNodeApp.zip package


## How to Publish a BACon presentation with a script plugin?


1.	Download and unzip the “Simple_BACon_Node_pluginNodeApp.zip” file to a folder on your PC
   
[Simple_BACon_Node_pluginNodeApp.zip](https://github.com/RomeoLB/BACon-BS-node-player-workflow/files/14938485/Simple_BACon_Node_pluginNodeApp.zip)

1.	Launch BACon (Windows or Mac client) and open the exported presentation by going to File > Open, then navigate to the SimpleNodeAppPlugin.bpfx project file.

1.	Once opened check that both the “pluginNodeApp.zip” file and the “Script plugin “node-app-plugin.brs” are properly linked in the presentation. If you have built a new “pluginNodeApp.zip” package, make sure that you set the path for your own pluginNodeApp.zip under “Files > pluginNodeApp.zip”

1.	Publish the presentation to your test player.

   

<img width="857" alt="image" src="https://github.com/RomeoLB/BACon-BS-node-player-workflow/assets/136584791/a219d1ab-e973-4920-8e2a-4ec41cf17d1f">
