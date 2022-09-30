<template>
  <section class="contact__area my-5 mt-5">
    <div class="container pt-5">
      <div class="row pt-5">
        <div class="col-xxl-7 col-xl-7 col-lg-6">
          <div v-if="sent"></div>
          <div v-else class="contact__wrapper">
            <div class="section__title-wrapper mb-40">
              <h2 class="section__title">
                Get in
                <span class="yellow-bg yellow-bg-big"> touch</span>
              </h2>
              <p>Have a question or just want to say hi? We'd love to hear from you.</p>
            </div>
            <div class="contact__form">
              <form @submit.prevent="submitForm">
                <div class="row">
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input v-model="form._1538861526" type="text" placeholder="Your Name">
                    </div>
                  </div>
                  <div class="col-xxl-6 col-xl-6 col-md-6">
                    <div class="contact__form-input">
                      <input v-model="form._1201247662" type="email" placeholder="Your Email">
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__form-input">
                      <input v-model="form._1603906855" type="text" placeholder="Subject">
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__form-input">
                      <textarea v-model="form._1617661121" placeholder="Enter Your Message"></textarea>
                    </div>
                  </div>
                  <div class="col-xxl-12">
                    <div class="contact__btn">
                      <button class="tp-btn">Send your message</button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-xxl-4 offset-xxl-1 col-xl-4 offset-xl-1 col-lg-5 offset-lg-1">
          <div class="contact__info white-bg p-relative z-index-1">
            <div class="contact__info-inner white-bg">
              <ul>
                <li>
                  <div class="contact__info-item d-flex align-items-start">
                    <div class="contact__info-icon">
                      <svg class="map" viewBox="0 0 24 24">
                        <path class="st0" d="M21,10c0,7-9,13-9,13s-9-6-9-13c0-5,4-9,9-9S21,5,21,10z"/>
                        <circle class="st0" cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div class="contact__info-text ps-3">
                      <h4 class="pl-4">Visit</h4>
                      <p>
                        <a target="_blank"
                           href="https://www.google.com/maps/place/EASYTECH+ACADEMY+KOTA/@25.2257,75.8762,17z/data=!4m5!3m4!1s0x396f9a5d5a32ff53:0xc6d21a0746e3d699!8m2!3d25.225744!4d75.876205?hl=en"
                        >
                          71, Rangpur Road No. 4, Dadwara, Kota, Rajasthan 324002, India
                        </a>
                      </p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="contact__info-item d-flex align-items-start mb-35 py-3">
                    <div class="contact__info-icon mr-15">
                      <svg class="mail" viewBox="0 0 24 24">
                        <path class="st0"
                              d="M4,4h16c1.1,0,2,0.9,2,2v12c0,1.1-0.9,2-2,2H4c-1.1,0-2-0.9-2-2V6C2,4.9,2.9,4,4,4z"
                        />
                        <polyline class="st0" points="22,6 12,13 2,6 "/>
                      </svg>
                    </div>
                    <div class="contact__info-text ps-3">
                      <h4>Email us directly</h4>
                      <p><a href="mailto:easytechkota@gmail.com"> easytechkota@gmail.com</a></p>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="contact__info-item d-flex align-items-start mb-35">
                    <div class="contact__info-icon mr-15">
                      <svg class="call" viewBox="0 0 24 24">
                        <path class="st0"
                              d="M22,16.9v3c0,1.1-0.9,2-2,2c-0.1,0-0.1,0-0.2,0c-3.1-0.3-6-1.4-8.6-3.1c-2.4-1.5-4.5-3.6-6-6  c-1.7-2.6-2.7-5.6-3.1-8.7C2,3.1,2.8,2.1,3.9,2C4,2,4.1,2,4.1,2h3c1,0,1.9,0.7,2,1.7c0.1,1,0.4,1.9,0.7,2.8c0.3,0.7,0.1,1.6-0.4,2.1  L8.1,9.9c1.4,2.5,3.5,4.6,6,6l1.3-1.3c0.6-0.5,1.4-0.7,2.1-0.4c0.9,0.3,1.8,0.6,2.8,0.7C21.3,15,22,15.9,22,16.9z"
                        />
                      </svg>
                    </div>
                    <div class="contact__info-text ps-3">
                      <h4>Phone</h4>
                      <p><a href="tel:+919352728831">+91 93527 28831</a></p>
                    </div>
                  </div>
                </li>
              </ul>
              <div class="contact__social py-3">
                <h4>Follow Us</h4>
                <ul>

                  <li>
                    <a href=" https://t.me/easytechacademy" class="fb">
                      <i class="fa-brands fa-telegram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/easytechacademykota" class="fb">
                      <i class="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/EasytechAcademy" class="tw">
                      <i class="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li><a href="https://www.instagram.com/easytechacademykota" class="pin">
                    <i class="fa-brands fa-instagram"></i>
                  </a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'contact',
  data: () => ({
    sent: false,
    form: {
      _1538861526: '',
      _1201247662: '',
      _1603906855: '',
      _1617661121: '',
      fvv: 1,
      fbzx: 4597234175692571645,
      pageHistory: 0,
      _: 1661670901791
    }
  }),
  methods: {
    submitForm () {
      const url = new URL('https://docs.google.com/forms/d/e/1FAIpQLSeYPPZr9akXUjSk--T3TpjMdgCOBHIF5x6GVZPJykwuugrC2g/formResponse')

      Object.entries(this.form).map(([key, value]) => {
        url.searchParams.append('entry' + key.replace('_', '.'), value.toString())
      })

      fetch(url)
        .then(() => {
        })
        .finally(() => {
          this.sent = true
        })
    }
  }
}
</script>

<style scoped>

</style>
