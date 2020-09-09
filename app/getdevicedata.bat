@echo off

set arg1=%1

REM curl -X POST -d @postdata.json "http://localhost:5000/api/logs/new" --header "Content-Type:application/json"


set url=https://kmurphs-heroku-test.herokuapp.com
if '%arg1%'=='local' (set url=http://localhost:5000)

curl "%url%/api/v1/devices/uuid:7dca1453-7fb5-4a48-bdd4-84ea1a3cc036" --header "Content-Type:application/json" > postdata.backend.json