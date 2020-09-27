@echo off
REM set command=idf.py && set port="-p COM7" && call %command% %port% flash && call %command% %port% monitor

set command=idf.py 
set port=-p COM7 
idf.py %port%  build && idf.py %port%  flash && idf.py %port%  monitor 
