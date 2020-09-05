@echo off

SET startDir=%~dp0

cd ../../../../../
cd

python .\test.remotes.tv.samsung.remote.py %1

cd %startDir%

