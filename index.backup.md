<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="./css/index.css">
  <title>Document</title>
</head>
<body>
	
	<button>Send Message</button>
	<script src="./js/keys.js"></script>
	<script src="./js/ws.js"></script>
	<script>
		document.querySelector("button").addEventListener('click', ()=>{
			sendMessage("hhello")
			.then((res)=>console.log(res))
			.catch((res)=>console.error(res))
		})
	</script>
  
</body>
</html>