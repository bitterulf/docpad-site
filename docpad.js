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
    },
    moment: {
      formats: [
        {raw: 'date', format: 'MMMM Do YYYY', formatted: 'humanDate'},
        {raw: 'date', format: 'YYYY-MM-DD', formatted: 'computerDate'}
      ]
    },
    cleanurls: {
      static: true
    },
    datefromfilename: {
      removeDate: true
    },
    dateurls: {
      collectionName: 'all',
      cleanurl: true,
      trailingSlashes: true
    },
    navlinks: {
      collections: {
        all: 1
      }
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
    all: function () {
      return this.getCollection("html").findAllLive();
    },
    menuTop: function () {
      var entries = this.getCollection("documents").findAllLive({ menu: { $eq: "top" } }, [{ date: -1 }]);

      entries.on("add", function (model) {
        model.setMetaDefaults({ layout: "default" });
      });

      return entries;
    },
    architecture: function() {
      var entries = this.getFilesAtPath('architecture');

      entries.on("add", function (model) {
        model.setMetaDefaults({ related: "architecture" });
      });

      return entries;
    },
    development: function() {
      var entries = this.getFilesAtPath('development');

      entries.on("add", function (model) {
        model.setMetaDefaults({ related: "development" });
      });

      return entries;
    },
    visualisation: function() {
      var entries = this.getFilesAtPath('visualisation');

      entries.on("add", function (model) {
        model.setMetaDefaults({ related: "visualisation" });
      });

      return entries;
    }
  }
};
