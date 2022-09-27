<template>
  <div class="py-5 my-5">
    <!-- about area start -->
    <section class="about__area py-5 my-5 p-relative">
      <div class="container">
        <div class="row">
          <div class="col-xxl-7 col-xl-7 col-lg-7">
            <img src="/Asset%201@4x.png" class="w-100" alt="">
          </div>
          <div class="col-xxl-5 col-xl-5 col-lg-5">
            <div class="about__content pl-70 pr-25">
              <div class="section__title-wrapper mb-15">
                <span class="section__title-pre">About EASYTECH</span>
                <h2 class="section__title">EASYTECH ACADEMY</h2>
              </div>
              <p>is an institution which provides better learning environment to the students. And
                teach according to the latest Syllabus as per NCERT Norms.</p>

              <div class="about__list mb-40">
                <ul>
                  <li><i class="fa-solid fa-check"></i> Access to all our courses</li>
                  <li><i class="fa-solid fa-check"></i> Learn the latest skills</li>
                  <li><i class="fa-solid fa-check"></i> Upskill your organization</li>
                </ul>
              </div>

              <!--              <div class="about__btn">-->
              <!--                <a href="about.html" class="tp-btn tp-btn-2">Read more</a>-->
              <!--              </div>-->
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- about area end -->
    <!-- team area start -->
    <Team></Team>
    <!-- team area end -->
  </div>
</template>

<script>
import Team from '~/components/Team'

export default {
  name: 'about',
  components: { Team }
}
</script>

<style scoped>

</style>
