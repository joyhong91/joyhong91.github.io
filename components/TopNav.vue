<template>
  <header>
    <nav>
      <ul class="list_nav">
        <li data-tabIdx="0">
          <nuxt-link to="/" @click.native="alert" >home</nuxt-link>
        </li>
        <li data-tabIdx="1">
          <nuxt-link to="/" @click.native="alert">intro</nuxt-link>
        </li>
        <li data-tabIdx="2">
          <nuxt-link to="/" @click.native="alert">skills</nuxt-link>
        </li>
        <li data-tabIdx="3">
          <nuxt-link to="/" @click.native="alert">project</nuxt-link>
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

      if(scrollY >= introY - 5 && scrollY < skillY - 5) {
        $navItem.removeClass('on');
        $navItem.eq(IDXES.intro).addClass('on');
      }else if (scrollY >= skillY - 5 && scrollY < projectY - 5) {
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
    alert(e) {
      const $curElem = $(e.currentTarget).closest('li');
      const $navItem = $('header nav li');

      $navItem.removeClass('on');
      $curElem.addClass('on');

      let curIdx = $curElem.data('tabidx');
      let scrollPos = 0;

      if(curIdx !== 0) {
        scrollPos = $(`.wrap_cont[data-tabIdx="${curIdx}"]`).offset().top;
      }

      $('html, body').animate({
          scrollTop: scrollPos
        }, 600);
      
      // alert("Hello " + this.msg + "!");
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
