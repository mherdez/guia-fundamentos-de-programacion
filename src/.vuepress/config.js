module.exports = {
  dest: 'docs',
  base: '/guia-fundamentos-de-programacion/',
  lang: 'es-ES',
  title: 'Fundamentos de programación',
  description: 'Fundamentos de Programación. Herdez',
  themeConfig: {
    editLinks: false,
    lastUpdated: false,
    nav: [
    //   {
        // text: 'VuePress',
    //     link: 'https://v1.vuepress.vuejs.org/guide'
    //   },
    //   {
    //     text: 'Markdown',
    //     link: 'https://programminghistorian.org/es/lecciones/introduccion-a-markdown'
    //   },
      // {
      //   text: 'MDN web docs. Introducción a los objetos',
      //   link: 'https://developer.mozilla.org/es/docs/Learn/JavaScript/Objects'
      // },
      // {
      //   text: 'Javscript.info: Objects - the basics',
      //   link: 'https://javascript.info/object-basics'
      // },
      // {
      //   text: 'PokeApi',
      //   link: 'https://pokeapi.co/'
      // },
    ],
    sidebar: [
      '/',
      '/pages/01-introduccion',
      '/pages/02-disenio-algoritmico',
      '/pages/03-introduccion-a-la-programacion',
      '/pages/04-control-de-flujo',
      '/pages/05-funciones',
      '/pages/06-organizacion-de-datos',
    ]
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
