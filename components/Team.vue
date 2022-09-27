<template>
  <section class="team__area py-5 my-5">
    <div class="container">
      <div class="row align-items-end">
        <div class="col-xxl-6 col-xl-6 col-lg-6">
          <div class="section__title-wrapper-2 mb-40">
            <span class="section__title-pre-2">Our Top Instructors</span>
            <h3 class="section__title-2">Good teachers know how to bring out the best in students.</h3>
          </div>
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
          <div class="team__item text-center mb-40">
            <div class="team__thumb ">
              <img class="rounded image-fit m-2" src="/Picture%201.jpg" alt="">
              <div class="team__social transition-3">
                <a href="https://www.linkedin.com/in/sourabh-sharma-0aa99447">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="team__content">
              <h3 class="team__title">
                Sourabh Sir (EXP: 8yrs)
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
          <div class="team__item text-center mb-40">
            <div class="team__thumb ">
              <img class="rounded image-fit m-2" src="/Picture%203.jpeg" alt="">
            </div>
            <div class="team__content">
              <h3 class="team__title">
                C.P.SIR (EXP: 8yrs)
              </h3>
            </div>
          </div>
        </div>
        <div class="col-xxl-3 col-xl-3 col-lg-4 col-md-6">
          <div class="team__item text-center mb-40">
            <div class="team__thumb ">
              <img class="rounded image-fit m-2" src="/Picture%202.jpg" alt="">
            </div>
            <div class="team__content">
              <h3 class="team__title">
                Shaifali Ma'am (EXP: 8yrs)
              </h3>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Team'
}
</script>

<style scoped>
.image-fit {
  object-fit: cover;
  height: 270px;
  margin: 10px;
  width: 100%;
}
</style>
