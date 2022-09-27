<template>
  <div>
    <div v-if="false" :class="{'py-5 my-5': !rotate}" class="row d-flex text-center align-center ">
      <div :class="{'rotate': rotate}" class="col-12 py-0 my-0">
        <img class="h-100" src="/come-soon.jpeg" alt="">
      </div>
    </div>
    <div v-else>
      <Header></Header>
      <nuxt></nuxt>
      <Footer></Footer>
    </div>

  </div>
</template>

<script>
import Header from '~/components/Header'
import Footer from '~/components/Footer'

export default {
  name: 'default',
  components: {
    Header,
    Footer
  },
  data: () => ({
    rotate: false
  }),
  mounted () {
    setInterval(() => {
      this.rotate = window.innerHeight > window.innerWidth
    }, 1000)
  }
}
</script>

<style lang="scss">
.rotate {
  transform: rotate(90deg);
}

@import "bootstrap/dist/css/bootstrap.css";
@import "@/assets/scss/main.scss";
</style>
