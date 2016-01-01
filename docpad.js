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
  skipUnsupportedPlugins: false,
  collections: {
    menuTop: function () {
      var entries = this.getCollection("documents").findAllLive({ menu: { $eq: "top" } }, [{ date: -1 }]);

      entries.on("add", function (model) {
        model.setMetaDefaults({ layout: "default" });
      });

      return entries;
    }
  }
};
