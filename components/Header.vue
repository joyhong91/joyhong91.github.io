<template>
  <header>
    <nav>
      <ul class="list_nav">
        <li><nuxt-link to="/" @click.native="alert">home</nuxt-link></li>
        <li><nuxt-link to="/"  @click.native="alert">introduce</nuxt-link></li><!--/recipes-->
        <li><nuxt-link to="/"  @click.native="alert">skills</nuxt-link></li><!--/about-->
        <li><nuxt-link to="/" @click.native="alert">project</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>



<script>
  export default {
    name: 'test',
    data() {
      return{
        msg: '준비중 입니다!'
      }
    },
    methods: {
      alert(){
        alert('Hello ' + this.msg + '!');
      }
    }
  }
</script>

<style scoped>
  header{
    width: 100%;
    height: 50px;
    padding: 12px;
    background: #000;
    opacity: .6;
    text-align: center;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  li{
    margin: 0 10px;
    display:inline-block;
  }
  
  li:hover{
    opacity:1;
    font-weight:bold;
  }
  
  a{
    text-decoration: none;
    text-transform:uppercase;
    color: white;
    opacity: .8;
  }
</style>
