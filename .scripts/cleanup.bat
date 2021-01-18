


del /q/s/f *.*
for /d %%i in ("*") do (rmdir /q/s "%%i")


curl https://www.toptal.com/developers/gitignore/api/react >> .gitignore