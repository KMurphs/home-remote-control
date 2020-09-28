@ECHO OFF

SET MODE=
REM SET MODE=DELETE

SET ip_address=http://192.168.0.199
REM SET ip_address=http://192.168.0.151

SET upload_files[0]=index.html
SET upload_files[1]=favicon.ico
SET upload_files[2]=launcher-icon-2x.png
SET upload_files[3]=launcher-icon-3x.png
SET upload_files[4]=launcher-icon-4x.png
SET upload_files[5]=launcher-icon-5x.png
SET upload_files[6]=manifest.json
SET upload_files[7]=sw.js


SET /a "x=0"
:SymLoop1 
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
	GOTO :SymLoop1
)







SET upload_files_css[0]=index.css
SET upload_files_css[1]=uikit.min.css

CD ./css
SET /a "x=0"
:SymLoop2
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
	GOTO :SymLoop2
)
CD ..















SET upload_files_js[0]=index.css
SET upload_files_js[1]=uikit.min.css
SET upload_files_js[2]=ws.js
SET upload_files_js[3]=templates.js
SET upload_files_js[4]=keys.js
SET upload_files_js[5]=mustache.min.js
SET upload_files_js[6]=uikit.min.js
SET upload_files_js[7]=uikit-icons.min.js

CD ./js
SET /a "x=0"
:SymLoop3
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
	GOTO :SymLoop3
)
