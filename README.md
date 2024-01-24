# Observa
This project analyzes discord server and provides statistical graph. Server analyzing is made with discord.js(node.js) and statistical graph is made with python.

# How to use
As this project follow MIT License, you can use this project as commercial use but you have to mark copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

You have to download:
- python 3.8^
- node.js v18.X

## 1. Make a Discord Bot.
As this project uses discord bot api, you have to own your discord account and make a discord project.<br>
If you already have your own account for discord, go to the [Discord Developer Portal](https://discord.com/developers/applications) and make a new application. (name and team of an application is whatever ok.)<br>
When your application making is done, move to the Bot tab and click the 'Add Bot' button. After that, you can get a token for discord bot. It's very **important**. Store it to permanent and safe(only can access by you or your team) place. If you forget about it, you have to reset your token and if it stolen, the thief can remote your discord bot.

## 2. Setting to Run the Observa
You have a discord bot token as you did previous chapter. What you have to do in this chapter is insert it to our project, the Observa. Download our project and go to the project folder. Then, you can see `config_SAMPLE.json`. you have to do change the name to `config.json`. And use your favorate text editer, edit the `config.json`. When you read the file, you can see `"token": "{TOKEN}"`. Then, change the `{TOKEN}` (not `"token"`) to your own discord bot token. And, you have to download all dependencies for this project. type `npm install` in the terminal in the project folder.

## 3. Run
After all setting, enter `npm start` or `node .` in the terminal. When login comment come out, its success! You have to make it to run always. you can use hosting service or your own server.

## 4. Analizying
*In Progress*

# Contributes
As I'm a Korean who is very young(17-yo) and not fluent in English, many grammatical or lexical error may here. I hope you guys fix it :)
Every contributes are welcome. you can do it with the Pull Request!
Thanks for reading and using my project :D
