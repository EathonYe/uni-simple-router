if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


  var AFAppX = self.AFAppX.getAppContext
    ? self.AFAppX.getAppContext().AFAppX
    : self.AFAppX;
  self.getCurrentPages = AFAppX.getCurrentPages;
  self.getApp = AFAppX.getApp;
  self.Page = AFAppX.Page;
  self.App = AFAppX.App;
  self.my = AFAppX.bridge || AFAppX.abridge;
  self.abridge = self.my;
  self.Component = AFAppX.WorkerComponent || function(){};
  self.$global = AFAppX.$global;
  self.requirePlugin = AFAppX.requirePlugin;
          

if(AFAppX.registerApp) {
  AFAppX.registerApp({
    appJSON: appXAppJson,
  });
}



function success() {
require('../../app');
require('../../common/uni-simple-router/component/router-link?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/tabbar/tabbar-1/component?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/tabbar/tabbar-1/child?hash=591ac642b6f57a184fac9330fa292ccf33c32471');
require('../../pages/tabbar/tabbar-1/tabbar-1?hash=bb7602b02aea2d705421846d91345b4947b06f17');
require('../../pages/test/404?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabbar/tabbar-2/tabbar-2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabbar/tabbar-3/tabbar-3?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabbar/tabbar-4/tabbar-4?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/tabbar/tabbar-5/tabbar-5?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router1/router1?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router2/router2?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router3/router3?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router4/router4?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router5/router5?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/router/router6/router6?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/login/login?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../pages/nvuePages/nvue1/nvue1?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}