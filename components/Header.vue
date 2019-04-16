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
