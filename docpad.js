module.exports = {
  plugins: {
    ghpages: {
      deployRemote: 'target',
      deployBranch: 'master'
    }
  },
  templateData: {
    site: {
      title: 'bitterulfs website',
      date: (new Date()).toISOString().split('T')[0]
    }
  }
};
