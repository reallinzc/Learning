#!name=Blued
#!desc=get photo and remove ads
#!system=ios

[Rule]
URL-REGEX,^http:\/\/www\.bldimg\.com\/splash\/,REJECT


[MITM]
hostname = %APPEND% *.bldimg.com

[Script]
# blued
blued.js = script-path=https://raw.githubusercontent.com/reallinzc/Learning/master/blued.js,pattern=https:\/\/burn-chatfiles\.bldimg\.com\/\d{4}\/,type=http-request
