<template>
  <div :class="{'py-5 my-5': !rotate}"  class="row d-flex text-center align-center ">
    <div class="col-12 py-0 my-0 fw-bold">
      Coming Soon
    </div>
    <div :class="{'rotate': rotate}" class="col-12 py-0 my-0">
      <img class="h-100" src="/come-soon.jpeg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
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

<style scoped>
.rotate{
  transform: rotate(90deg);
}
</style>
