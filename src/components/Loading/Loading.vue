<template>
	<div class="loaderWrapper">
		<div class="loader"></div>
	</div>
</template>

<script>
</script>

<style lang="scss" scoped>
.loader {
		border: 3px solid rgba(0,0,0,0); /* Light grey */
  	width: 50px;
    height: 50px;  
    border-top: 3px solid rgba(68,185,131,9); /* Blue */
    border-radius: 50%;
    animation: spin .85s ease-in-out infinite;
}
.loaderWrapper {
	z-index: 1;
	background-color: rgba(255,255,255,.9);
	width:100%;
	height:100%;
	position: fixed;
	display: flex;
	justify-content: center;
	align-items: center;
}

@keyframes spin {
    0% { transform: rotate(0deg);}
    100% { transform: rotate(360deg);}
}
</style>