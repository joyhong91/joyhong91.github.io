<template>
	<div class="wrap_cont" data-tabIdx="3">
		<em>Project</em>
		<div class="wrap_project">
			 <nuxt-link to="#" @click.native="test()" class="link_project on">
			 	<img src="~/assets/image/project/codly.jpeg" alt="코들리" class="project_img">
			 </nuxt-link>
			<!-- <a href="javascript:;" class="link_codly" @click.native="test()">
				
			</a> -->
			<a href="javascript:;" class="link_project">
				<img src="~/assets/image/project/programmers.jpeg" alt="프로그래머스" class="project_img">
			</a>
			<a href="javascript:;" class="link_project">
				<img src="~/assets/image/project/now.jpeg" alt="나우환경디자인" class="project_img">
			</a>
			<a href="javascript:;" class="link_project">
				<img src="~/assets/image/project/mobydick.jpeg" alt="모비딕다이빙센터" class="project_img">
			</a>
		</div>
	</div>
</template>

<style scoped>



.wrap_cont .wrap_project{overflow:hidden;margin-left:-12px}
.wrap_project .link_project {position:relative; display:block;width:48%;float:left;margin-left:12px;margin-bottom:12px;font-size:0;overflow:hidden;border-radius:4px}
.wrap_project .link_project.on::after{content:'';position:absolute;top:0;left:0;bottom:0;right:0;background:rgba(0,0,0,.56)}
.wrap_project .project_img{border:1px solid #e4e4e4;border-radius: 4px}

@media(max-width:768px) {
	.wrap_project{margin-left:0}
	.wrap_project .link_project{width:100%;margin-left:0}
}
</style>

<script>
	export default {
		name: 'test',
		data() {
			return{
				msg: '준비중 입니다!'
			}
		},
		methods: {
			test(){
				alert('Hello ' + this.msg + '!');
			}
		}
	}
</script>
