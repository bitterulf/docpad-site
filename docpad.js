module.exports = {
  plugins: {
    ghpages: {
      deployRemote: 'target',
      deployBranch: 'master'
    },
    uglify: {
      html: true,
      css: true,
      js: true
    }
  },
  templateData: {
    site: {
      title: 'bitterulfs website',
      date: (new Date()).toISOString().split('T')[0]
    }
  },
  skipUnsupportedPlugins: false
};
