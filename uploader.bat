@ECHO OFF

SET MODE=
REM SET MODE=DELETE

SET ip_address=http://192.168.0.200
REM SET ip_address=http://192.168.0.151

REM curl -X POST http://192.168.0.200:80/delete/js/ws.js
REM curl -X POST --data-binary @js/ws.js http://192.168.0.200:80/upload/js/ws.js
REM curl -X POST --data-binary @js/ws.js http://192.168.0.200:80/upload/webfonts/fa-solid-900.ttf


SET upload_files[0]=index.html
SET upload_files[1]=favicon.ico
REM SET upload_files[2]=launcher-icon-2x.png
REM SET upload_files[3]=launcher-icon-3x.png
REM SET upload_files[4]=launcher-icon-4x.png
REM SET upload_files[5]=launcher-icon-5x.png
REM SET upload_files[6]=manifest.json
REM SET upload_files[7]=sw.js


SET /a "x=0"
:SymLoop
If DEFINED upload_files[%x%] ( 
  IF "%MODE%" == "DELETE" (
    ECHO.
    CALL ECHO Deleting File: %%upload_files[%x%]%% at '%%ip_address%%:80/delete/%%upload_files[%x%]%%'
	  CALL curl -X POST %%ip_address%%:80/delete/%%upload_files[%x%]%% 
  ) ELSE (
    ECHO.
    CALL ECHO Uploading File: %%upload_files[%x%]%% at '%%ip_address%%:80/upload/%%upload_files[%x%]%%'
	  CALL curl -X POST --data-binary @%%upload_files[%x%]%% %%ip_address%%:80/upload/%%upload_files[%x%]%% 
  )

	SET /a "x+=1"
	GOTO :SymLoop
)






SET upload_files_css[0]=index.css
SET upload_files_css[1]=all.min.css
SET upload_files_css[2]=utils.css

CD ./css
SET /a "x=0"
:SymLoop-css
If DEFINED upload_files_css[%x%] ( 
  IF "%MODE%" == "DELETE" (
    ECHO.
    CALL ECHO Deleting File: %%upload_files_css[%x%]%% at '%%ip_address%%:80/delete/css/%%upload_files_css[%x%]%%'
	  CALL curl -X POST %%ip_address%%:80/delete/css/%%upload_files_css[%x%]%% 
  ) ELSE (
    ECHO.
    CALL ECHO Uploading File: %%upload_files_css[%x%]%% at '%%ip_address%%:80/upload/css/%%upload_files_css[%x%]%%'
	  CALL curl -X POST --data-binary @%%upload_files_css[%x%]%% %%ip_address%%:80/upload/css/%%upload_files_css[%x%]%% 
  )

	SET /a "x+=1"
	GOTO :SymLoop-css
)
CD ..








SET upload_files_webfonts[0]=fa-regular-400.ttf
SET upload_files_webfonts[1]=fa-solid-900.ttf
SET upload_files_webfonts[2]=fa-regular-400.woff
SET upload_files_webfonts[3]=fa-solid-900.woff
SET upload_files_webfonts[4]=fa-regular-400.woff2
SET upload_files_webfonts[5]=fa-solid-900.woff2
SET upload_files_webfonts[6]=fa-regular-400.eot
SET upload_files_webfonts[7]=fa-solid-900.eot
SET upload_files_webfonts[8]=fa-regular-400.svg
SET upload_files_webfonts[9]=fa-solid-900.svg

CD ./webfonts
SET /a "x=0"
:SymLoop-webfonts
If DEFINED upload_files_webfonts[%x%] ( 
  IF "%MODE%" == "DELETE" (
    ECHO.
    CALL ECHO Deleting File: %%upload_files_webfonts[%x%]%% at '%%ip_address%%:80/delete/webfonts/%%upload_files_webfonts[%x%]%%'
	  CALL curl -X POST %%ip_address%%:80/delete/webfonts/%%upload_files_webfonts[%x%]%% 
  ) ELSE (
    ECHO.
    CALL ECHO Uploading File: %%upload_files_webfonts[%x%]%% at '%%ip_address%%:80/upload/webfonts/%%upload_files_webfonts[%x%]%%'
	  CALL curl -X POST --data-binary @%%upload_files_webfonts[%x%]%% %%ip_address%%:80/upload/webfonts/%%upload_files_webfonts[%x%]%% 
  )

	SET /a "x+=1"
	GOTO :SymLoop-webfonts
)
CD ..












SET upload_files_js[0]=ws.js
SET upload_files_js[1]=alerts.js
SET upload_files_js[2]=keys.js
SET upload_files_js[3]=html-elements.js
SET upload_files_js[4]=loader.js
SET upload_files_js[5]=nav-control.js
SET upload_files_js[6]=toggling-keys.js

CD ./js
SET /a "x=0"
:SymLoop-js
If DEFINED upload_files_js[%x%] ( 
  IF "%MODE%" == "DELETE" (
    ECHO.
    CALL ECHO Deleting File: %%upload_files_js[%x%]%% at '%%ip_address%%:80/delete/js/%%upload_files_js[%x%]%%'
	  CALL curl -X POST %%ip_address%%:80/delete/js/%%upload_files_js[%x%]%% 
  ) ELSE (
    ECHO.
    CALL ECHO Uploading File: %%upload_files_js[%x%]%% at '%%ip_address%%:80/upload/js/%%upload_files_js[%x%]%%'
	  CALL curl -X POST --data-binary @%%upload_files_js[%x%]%% %%ip_address%%:80/upload/js/%%upload_files_js[%x%]%% 
  )

	SET /a "x+=1"
	GOTO :SymLoop-js
)
CD ..