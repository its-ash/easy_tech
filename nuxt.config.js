export default {
  target: 'static',
  ssr: false,
  head: {
    title: 'EASYTECH ACADEMY',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      },
      {
        name: 'format-detection',
        content: 'telephone=no'
      }
    ],
    link: [
      {
        rel: 'stylesheet',
        href: '/css/animate.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/backtotop.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/flaticon.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/font-awesome-pro.css'
      },
      {
        rel: 'stylesheet',
        href: '/css/magnific-popup.css'
      },
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      // { src: 'js/vendor/jquery.js' },
      { src: 'js/bootstrap.bundle.min.js' },
      // { src: 'js/meanmenu.js' },
      // { src: 'js/nice-select.js' },
      // { src: 'js/imagesloaded-pkgd.js' },
      // { src: 'js/magnific-popup.js' },
      // { src: 'js/wow.js' },
      // { src: 'js/isotope-pkgd.js' },
      // { src: 'js/counterup.js' },
      // { src: 'js/main.js' }
    ]
  },
  css: [],
  plugins: [],
  components: true,

  buildModules: [],

  modules: [],

  build: {}
}
