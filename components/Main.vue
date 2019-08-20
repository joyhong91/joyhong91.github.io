<template>
	<div class="bg_main">
		<img src="~/assets/image/main_img.jpeg" alt="메인배경이미지" class="bg_img">
		<div class="bg_overlay"></div>

		<div class="wrap_btn">
		<a href="javascript:;" target="_blank" class="button--green"> BLANK</a>
		<a href="https://google.co.kr" target="_blank" class="button--grey" >BLANK2</a>
	</div>
	</div>
</template>

<style scoped>
	.bg_main{position:relative}
	.bg_main .bg_overlay{width:100%;height:100%;position:absolute;top:0;left:0;background:rgba(0,0,0,.4)}
	.bg_main .wrap_btn{position:absolute;bottom:50px;text-align:center;left:0;right:0}
	.bg_main .wrap_btn .button--green{border-color:#05d665;color:#05d665}
</style>
