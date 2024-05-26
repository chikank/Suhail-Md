const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347030278399";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_21_05_26_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDg4LFxuICAgICAgICAxOTcsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4NSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTQsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2NixcbiAgICAgICAgNjYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTEwLFxuICAgICAgICAxOTcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDYzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDUsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMSxcbiAgICAgICAgOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICA5MixcbiAgICAgICAgMjAzLFxuICAgICAgICA0NCxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODIsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODYsXG4gICAgICAgIDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM2LFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMTAsXG4gICAgICAgIDg3LFxuICAgICAgICAyMjMsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDcyLFxuICAgICAgICAyMTMsXG4gICAgICAgIDUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTYsXG4gICAgICAgIDk2LFxuICAgICAgICAxLFxuICAgICAgICAxODcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMzMsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDc4LFxuICAgICAgICA3OCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgOTEsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU2LFxuICAgICAgICA1NSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODgsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxM1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICA5MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NSxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMzIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTM0LFxuICAgICAgICAzNyxcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcyLFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI2LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMSxcbiAgICAgICAgNjYsXG4gICAgICAgIDM2LFxuICAgICAgICAyMTksXG4gICAgICAgIDk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDIyMyxcbiAgICAgICAgNyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAxMjBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE4NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzIsXG4gICAgICAgIDcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMzAsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAyOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTgyLFxuICAgICAgICA3MixcbiAgICAgICAgOTQsXG4gICAgICAgIDE1LFxuICAgICAgICAxMTgsXG4gICAgICAgIDk0LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTk3LFxuICAgICAgICAyNDQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgOCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIwMixcbiAgICAgICAgODAsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTcsXG4gICAgICAgIDY0LFxuICAgICAgICA3NCxcbiAgICAgICAgMjA1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDksXG4gICAgICAgIDIxNSxcbiAgICAgICAgNDgsXG4gICAgICAgIDgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA1XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMTcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRzVBaUgwZm9haGYvMCt3ZWZlNlpDT0p5MkRSU3NWeVNGTU4wNFhicGoxVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMwMjc4Mzk5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJCQzM0NzA3MTE3RkUzQURGQUI1RUU4MUZEQzhENjk5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTY3NjU3MTRcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiS0VJcDhTNzVSaHF6N0pUc0RBMVNmQVwiLFxuICBcInBob25lSWRcIjogXCI4NDViYWQzMS1jNjk1LTRiMGMtYjgwMS1jMDBkMGRmMDFmMWVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjcsXG4gICAgICA4NixcbiAgICAgIDExMCxcbiAgICAgIDEwOCxcbiAgICAgIDUwLFxuICAgICAgMyxcbiAgICAgIDEyNCxcbiAgICAgIDksXG4gICAgICA0MyxcbiAgICAgIDE2NixcbiAgICAgIDIwMCxcbiAgICAgIDEwMSxcbiAgICAgIDY5LFxuICAgICAgMTA1LFxuICAgICAgMTA2LFxuICAgICAgMTQ4LFxuICAgICAgNixcbiAgICAgIDcyLFxuICAgICAgMTQyLFxuICAgICAgMjMyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE2LFxuICAgICAgMzYsXG4gICAgICAyMTcsXG4gICAgICAzOSxcbiAgICAgIDIwNyxcbiAgICAgIDQ0LFxuICAgICAgMTkwLFxuICAgICAgMjM4LFxuICAgICAgOTksXG4gICAgICAxNjYsXG4gICAgICA3NCxcbiAgICAgIDE0NixcbiAgICAgIDE2NyxcbiAgICAgIDEwMixcbiAgICAgIDk0LFxuICAgICAgMjA5LFxuICAgICAgMTA4LFxuICAgICAgMjUsXG4gICAgICAyMzksXG4gICAgICAxMjlcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQlpTOERRVjJcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMzAyNzgzOTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJTbWl0aFwiLFxuICAgIFwibGlkXCI6IFwiOTc0MTQ1NTU5MzA4NjI6MjRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkdQc2ZJQkVJcUl6N0lHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJFazZjL3VyU3lDdE5jdnF3bnR6VHNuaU01a1oweTdjeDBycWdudGpGcm5rPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIll5Uk9XdGJZdEtYWmpxdzBvMlBkaTlKZWdYVzZkcDFKaFZRbnhMVzJ1QW9ra2lLSW0vaElUcTg3azZ3eEdFdkFHZkNWa3pOdmNXT2FzcVZ1bWQyQUJ3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIlVtSmtERTlwR2V0bDd3MVRxUkpnL3lrSktsamNyQVE2UzdybExCK1NYNW8wWElPWmVWQVc2Nm9Ja3N3QUN1U21WTUU2aFVncE8vQnMzU0t1NHpsT0NBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzAyNzgzOTk6MjRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA0OSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTIxXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTY3NjU3MDksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFLWC9cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUtYLy5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
