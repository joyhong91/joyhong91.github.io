<template>
  <div>
    <TopNav />
    <Main />
    <Intro />
    <Skill />
    <Projects />
    <nuxt />
  </div>
</template>

<script>
import TopNav from "@/components/TopNav";
import Main from "@/components/Main";
import Projects from "@/components/Projects";
import Intro from "@/components/Intro";
import Skill from "@/components/Skill";

export default {
  components: {
    TopNav,
    Main,
    Projects,
    Intro,
    Skill
  }
};
</script>
