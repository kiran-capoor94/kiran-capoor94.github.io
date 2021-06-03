// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here requires a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Full Stack Engineer Portfolio',
  siteDescription: 'A simple, hackable & minimalistic starter for Gridsome that uses Markdown for content.',
  siteUrl: 'https://kiran-capoor94.github.io',
  icon: './src/kiran-capoor.png',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },

  plugins: [
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-155096471-2'
      }
    },
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/posts/*.md',
        refs: {
          // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    }
  ],

  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      autolinkHeadings: false,
      squeezeParagraphs: false,
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
