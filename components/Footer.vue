<template>
  <!-- footer area start -->
  <footer>
    <div class="footer__area">
      <div class="footer__top grey-bg-4 py-5">
        <div class="container">
          <div class="row">
            <div class="col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-sm-7">
              <div class="footer__widget footer__widget-2 footer-col-2-1 mb-50">
                <div class="footer__logo">
                  <div class="logo">
                    <nuxt-link :to="{name: 'index'}">
                      <img src="/easyLogo.png" alt="EasyTech">
                    </nuxt-link>
                  </div>
                </div>
                <div class="footer__widget-content">
                  <div class="footer__widget-info">
                    <p>EASYTECH ACADEMY
                      is an institution which provides better learning environment to the students. And teach according
                      to the latest Syllabus as per NCERT Norms.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <div class="footer__widget footer__widget-2 mb-50 footer-col-2-2">
                <h3 class="footer__widget-title">Explore</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <nuxt-link :to="{name: 'about'}">About us</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'courses'}">Courses</nuxt-link>
                    </li>
                    <li>
                      <nuxt-link :to="{name: 'contact'}">Contact us</nuxt-link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-3 col-sm-5">
              <div class="footer__widget footer__widget-2 mb-50 footer-col-2-3">
                <h3 class="footer__widget-title">Links</h3>
                <div class="footer__widget-content">
                  <ul>
                    <li>
                      <NuxtLink :to="{'name':'private-policy'}">Private Policy</NuxtLink>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="footer__social">
                <h4>Follow Us</h4>

                <ul>
                  <li><a href="#"><i class="fa-brands fa-facebook-f"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa-brands fa-linkedin-in"></i></a></li>
                </ul>
              </div>
            </div>
            <!--            <div class="col-xxl-4 col-xl-4 col-lg-4 col-md-6 col-sm-7">-->
            <!--              <div class="footer__widget footer__widget-2 footer-col-2-4 mb-50">-->
            <!--                <h3 class="footer__widget-title">Sign up for our newsletter</h3>-->
            <!--                <div class="footer__subscribe">-->
            <!--                  <p>Receive weekly newsletter with educational materials, popular books and much more!</p>-->
            <!--                  <form action="#">-->
            <!--                    <div class="footer__subscribe-input">-->
            <!--                      <input type="text" placeholder="Email">-->
            <!--                      <button type="submit" class="tp-btn-subscribe">Subscribe</button>-->
            <!--                    </div>-->
            <!--                  </form>-->
            <!--                </div>-->
            <!--              </div>-->
            <!--            </div>-->
          </div>
        </div>
      </div>
      <div class="footer__bottom grey-bg-4">
        <div class="container">
          <div class="footer__bottom-inner">
            <div class="row">
              <div class="col-xxl-12">
                <div class="footer__copyright text-center">
                  <p>© {{ year }} <a href="https://neofox.org">NEOFOX</a>. All Rights Reserved</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
  <!-- footer area end -->
</template>

<script>
export default {
  name: 'Footer',
  data: () => ({
    year: (new Date()).getFullYear(),
  }),
}
</script>

<style scoped>

</style>
