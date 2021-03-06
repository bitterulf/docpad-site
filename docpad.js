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
    datefromfilename: {
      removeDate: true
    },
    navlinks: {
      collections: {
        architecture: 1,
        development: 1,
        visualisation: 1
      }
    }
  },
  enabledPlugins: {
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
      return this.getCollection("html").findAllLive({isPagedAuto: {$ne: true} });
    },
    menuTop: function () {
      var entries = this.getCollection("documents").findAllLive({ isPagedAuto: {$ne: true}, menu: { $eq: "top" } }, [{ date: -1 }]);

      entries.on("add", function (model) {
        model.setMetaDefaults({ layout: "default" });
      });

      return entries;
    },
    architecture: function() {
      var entries = this.getFilesAtPath('posts/architecture').findAllLive({pagedCollection: {$exists: false}, isPagedAuto: {$ne: true} });

      entries.on("add", function (model) {
        // model.setMetaDefaults({ related: "architecture" });
      });

      return entries;
    },
    development: function() {
      var entries = this.getFilesAtPath('posts/development').findAllLive({pagedCollection: {$exists: false}, isPagedAuto: {$ne: true} });

      entries.on("add", function (model) {
        // model.setMetaDefaults({ related: "development" });
      });

      return entries;
    },
    visualisation: function() {
      var entries = this.getFilesAtPath('posts/visualisation').findAllLive({pagedCollection: {$exists: false}, isPagedAuto: {$ne: true} });

      entries.on("add", function (model) {
        // model.setMetaDefaults({ related: "visualisation" });
      });

      return entries;
    }
  }
};
