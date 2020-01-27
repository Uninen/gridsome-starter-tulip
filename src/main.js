// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: https://gridsome.org/docs/client-api

import DefaultLayout from '~/layouts/Default.vue'
import '~/assets/css/base.postcss'

export default function(Vue, { router, head, isClient }) {
  // Set default layout as a global component
  Vue.component('Layout', DefaultLayout)

  head.htmlAttrs = { lang: 'en' }
  head.bodyAttrs = { class: 'antialiased font-body font-serif' }

  // Styles
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Great+Vibes|Libre+Baskerville&display=swap',
  })

  // Basic meta tags
  head.meta.push({
    name: 'author',
    content: 'Ville Säävuori',
  })

  head.meta.push({
    name: 'keywords',
    content: 'Gridsome,Vue,Tailwind,Tailwind CSS,JavaScript,HTML,CSS,Vue.js,VueJS',
  })

  head.meta.push({
    name: 'description',
    content: 'Single page starter template for Gridsome.',
  })

  // Open Graph + Twitter meta tags
  head.meta.push({
    property: 'og:description',
    content: 'Single page starter template for Gridsome.',
  })

  head.meta.push({
    name: 'twitter:description',
    content: 'Single page starter template for Gridsome.',
  })

  head.meta.push({
    property: 'og:type',
    content: 'website',
  })

  head.meta.push({
    property: 'og:title',
    content: 'Tulip - Single Page Gridsome Starter',
  })

  head.meta.push({
    name: 'twitter:title',
    content: 'Tulip - Single Page Gridsome Starter',
  })

  head.meta.push({
    name: 'twitter:card',
    content: 'summary_large_image',
  })

  head.meta.push({
    name: 'twitter:creator',
    content: '@uninen',
  })

  head.meta.push({
    property: 'og:image',
    content: ' https://gridsome-starter-tulip.netlify.com/img/social-preview.png',
  })

  head.meta.push({
    name: 'twitter:image',
    content: 'https://gridsome-starter-tulip.netlify.com/img/social-preview.png',
  })
}
