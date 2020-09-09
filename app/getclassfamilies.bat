@echo off

set arg1=%1

REM curl -X POST -d @postdata.json "http://localhost:5000/api/logs/new" --header "Content-Type:application/json"


set url=https://kmurphs-heroku-test.herokuapp.com
if '%arg1%'=='local' (set url=http://localhost:5000)

curl "%url%/api/v1/class/tv/families" --header "Content-Type:application/json" 