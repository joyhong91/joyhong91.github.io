<template>
  <div>
    <Header/>
    <Main/>
    <nuxt />
  </div>
</template>

<script>
  import Header from '@/components/Header';
  import Main from '@/components/Main';
  
  export default{
    components:{
      Header,
      Main
    }
  }
</script>