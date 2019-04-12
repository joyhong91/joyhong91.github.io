<template>
  <header>
    <nav>
      <ul>
        <li><nuxt-link to="/">Starting page</nuxt-link></li>
        <li><nuxt-link to="/recipes">Recipes page</nuxt-link></li>
        <li><nuxt-link to="/about">About</nuxt-link></li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
  header{
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ccc;
  }
  
  ul {
    list-style: none;
    justify-content: center;
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
  }
  
  li{
    margin: 0 10px;
  }
  
  a{
    text-decoration: none;
    color: white;
  }
</style>
