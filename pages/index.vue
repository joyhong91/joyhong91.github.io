<template>
  <section class="container" id="alertMsg">
    <div>
      <h1>Joy's portfolio</h1>
      <p class="title">
        준비중 / 공사중
      </p>
      <p class="subtitle">
        아직볼게 없어요....<br>
      </p>
      <div class="main_img">
        <img src="https://cdn-images-1.medium.com/max/1200/1*oEuJgRJZrcjZBw-U95kl3Q.png" alt="nuxt+heroku"/>
      </div>
      <p class="desc">comming soon!</p>
      <div class="links">
        <a
          href="https://naver.com"
          target="_blank"
          class="button--green"
        >볼게없을땐 네이버!</a>
        <a
          href="https://google.co.kr"
          target="_blank"
          class="button--grey"
        >볼게없을땐 구글!</a>
      </div>
    </div>
  </section>
</template>

<style scoped>
  #alertMsg{text-align:center;margin-top:40px}
  #alertMsg .title{font-size:50px;font-weight:bold;margin-top:20px}
  #alertMsg .subtitle{font-size:25px;margin-top:20px}
  #alertMsg .desc{font-size:30px;font-weight:bold;text-transform:uppercase;margin-top:20px;margin-bottom:20px}
  #alertMsg .main_img img{width:100%;height:auto}
</style>
<!--<script>-->
<!--import Logo from '~/components/Logo.vue'-->

<!--export default {-->
  <!--components: {-->
    <!--Logo-->
  <!--}-->
<!--}-->
<!--</script>-->

<!--<style>-->
<!--.container {-->
  <!--margin: 0 auto;-->
  <!--min-height: 100vh;-->
  <!--display: flex;-->
  <!--justify-content: center;-->
  <!--align-items: center;-->
  <!--text-align: center;-->
<!--}-->

<!--.title {-->
  <!--font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,-->
    <!--'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;-->
  <!--display: block;-->
  <!--font-weight: 300;-->
  <!--font-size: 100px;-->
  <!--color: #35495e;-->
  <!--letter-spacing: 1px;-->
<!--}-->

<!--.subtitle {-->
  <!--font-weight: 300;-->
  <!--font-size: 42px;-->
  <!--color: #526488;-->
  <!--word-spacing: 5px;-->
  <!--padding-bottom: 15px;-->
<!--}-->

<!--.links {-->
  <!--padding-top: 15px;-->
<!--}-->
<!--</style>-->
