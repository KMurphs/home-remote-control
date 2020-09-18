set /p msg=Commit Message: 

copy index.md index.backup.md
copy index.html index.md

git add *
git commit -m "%msg%"
git push 

git merge gh-pages --no-ff

git checkout gh-pages
git merge ui-with-websocket
git add *
git commit -m "%msg%""
git push

git checkout ui-with-websocket