<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="./css/uikit.min.css" />
  <link rel="stylesheet" href="./css/index.css">
  <title>Document</title>
</head>
<body>
	
	
	<section class="app-root">
	</section>



	<section>
		<!-- This is the modal -->
		<div id="my-id" uk-modal>
			<div class="uk-modal-dialog uk-modal-body">
					<h2 class="uk-modal-title"></h2>
					<button class="uk-modal-close" type="button"></button>
			</div>
		</div>
	</section>




	<script src="js/mustache.min.js"></script>
	<script src="js/uikit.min.js"></script>
	<script src="js/uikit-icons.min.js"></script>
	<script src="./js/templates.js"></script>
	<script src="./js/keys.js"></script>
	<script src="./js/ws.js"></script>
	<script>
		const ws = new DeviceWebsocket()
		ws.connect();
		const data = {
			'groups': Object.keys(remoteKeys).map(objKey => {
				let res = { 'name': objKey }; 
				res['entries'] = remoteKeys[objKey]; 
				return res;
			})
		}
		console.log(data)
		html = Mustache.render(template, data);
		document.querySelector(".app-root").innerHTML = html	

		function fct(keyCode){
			console.log(keyCode)
			ws.applyKey(keyCode)
		}

		// document.querySelector("button").addEventListener('click', ()=>{
		// 	sendMessage("hhello")
		// 	.then((res)=>console.log(res))
		// 	.catch((res)=>console.error(res))
		// })
	</script>
  
</body>
</html>