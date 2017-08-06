<template>
  <div class="outsideWrapper">
  	<div class="top"></div>
  	<div>
  		<div>
  			<span>關於項目</span>
  			<p>此項目借鑑<a href="https://github.com/shinygang/Vue-cnodejs" style="color:#42b983">@shinygang</a>的Cnodejs項目設計<br/>為熟悉Vue而製作的學習作品<br>
  				<br>此項目採用了<ul><li>Cnodejs論壇的api</li><li><p style="padding:0px;margin:0px;display:inline-block;color:#42b983">@shingang</p>的介面設計、UX流程</li></ul>
  			</p>
  		</div>
  	</div>
  	<div>
  		<div>
  			<span>源碼地址</span>
  			<p>關於項目</p>
  		</div>
  	</div>
  	<div>
  		<div>
  			<span>意見反饋</span>
  			<p><a>發表意見或提需求</a></p>
  		</div>
  	</div>
  	<div>
  		<div>
  			<span>當前版本</span>
  			<p>v1.0</p>
  		</div>
  	</div>
  </div>
</template>

<script>
export default {
  name: 'about',
  mounted() {
    this.$store.$emit('changePath', '關於項目');
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.outsideWrapper {
	background-color: #f7f7f7;
	padding: 0;
	margin: 0;
	height: 100vh;
	div {
		display: flex;
		justify-content:center;
		padding: 5px;
		div {
			width: 90%;
			display: flex;
			flex-direction:column;
			border-bottom-style: solid;
			border-bottom-width: 2px;
			border-bottom-color: #ccc;
			text-align: left;
			span {
				font-size: 19px;
				font-weight: bolder;
			}
			p {
				font-weight: lighter;
				font-size: 15px;
			}
		}
	}
}
.top {
	height: 44px;
}
</style>
