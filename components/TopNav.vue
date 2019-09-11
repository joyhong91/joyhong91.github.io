<template>
  <header>
    <nav>
      <ul class="list_nav">
        <li>
          <nuxt-link to="/" @click.native="alert" data-tabIdx="0">home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/" @click.native="alert" data-tabIdx="1">intro</nuxt-link>
        </li>
        <!--/recipes-->
        <li>
          <nuxt-link to="/" @click.native="alert" data-tabIdx="2">skills</nuxt-link>
        </li>
        <!--/about-->
        <li>
          <nuxt-link to="/" @click.native="alert" data-tabIdx="3">project</nuxt-link>
        </li>
      </ul>
    </nav>
  </header>
</template>


<style scoped>
.list_nav li a {color: rgba(255, 255, 255, 0.7)}
.list_nav a:hover{color: #fff;font-weight: bold}
.list_nav li.on a {color: #fff;font-weight: bold}
</style>

<script>

let scrollTimer = -1;
const IDXES = {intro: 1, skill: 2, project: 3};

export default {
  name: "test",
  data() {
    return {
      msg: "준비중 입니다!",
    };
  },
  methods: {
    activeNavBy(scrollY = 0) {
      const $navItem = $('header nav li');
      const introY = $(`.wrap_cont[data-tabIdx="${IDXES.intro}"]`).offset().top;
      const skillY = $(`.wrap_cont[data-tabIdx="${IDXES.skill}"]`).offset().top;
      const projectY = $(`.wrap_cont[data-tabIdx="${IDXES.project}"]`).offset().top;

      if(scrollY >= introY && scrollY < skillY) {
        $navItem.removeClass('on');
        $navItem.eq(IDXES.intro).addClass('on');
      }else if (scrollY >= skillY && scrollY < projectY) {
        $navItem.removeClass('on');
        $navItem.eq(IDXES.skill).addClass('on');
      } else if(scrollY > projectY){
        $navItem.removeClass('on');
        $navItem.eq(IDXES.project).addClass('on');
      } else {
        $navItem.removeClass('on');
        $navItem.eq(0).addClass('on');
      }
    },
    alert() {
      alert("Hello " + this.msg + "!");
    },
    handleScroll() {
      this.activeNavBy(window.scrollY);
      const firstContPos = $(".wrap_cont").first().offset().top;

      if (window.scrollY > firstContPos) {
        $("header").addClass("hide");
      } else {
        $("header").removeClass("hide");
      }

      if (scrollTimer !== -1) {
        clearTimeout(scrollTimer);
      }

      scrollTimer = window.setTimeout(this.stopScroll, 500);
    },
    stopScroll() {
      const firstContPos = $(".wrap_cont")
        .first()
        .offset().top;

      if (window.scrollY > firstContPos) {
        $("header").removeClass("hide");
      }
    }
  },
  created() {
    if (process.browser) {
      window.addEventListener("scroll", this.handleScroll);
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener("scroll", this.handleScroll);
    }
  }
};
</script>
