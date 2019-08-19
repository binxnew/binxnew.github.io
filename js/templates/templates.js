(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['fellowship_about'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tab-content\" id=\"myTabContent\" style=\"background-color: #FFF\">\n\n  <div class=\"tab-pane fade show active justify-content-center\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" style=\"text-align: center;\">\n\n    <div style=\"padding: 40px 0px; width: 70%; display: inline-block; text-align: left\">\n      <div style=\"font-size: 20px; font-weight: bold\">\n        What is the Binance X Fellowship?\n      </div>\n      <div style=\"margin: 15px 0;\">\n        We started this program to support talented developers and researchers in creating free and open-source software that would enable new innovations and businesses in the crypto economy.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        By joining this program, you have the freedom to work on open-source projects that have meaningful impact but may not necessarily have stand-alone commercial viability in the near-term.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        As a <i>Binance X Fellow</i>, you will have access to our wide network of founders, researchers, portfolio companies and developers for mentorship and advice.\n      </div>\n      <div style=\"font-size: 20px; font-weight: bold\">\n        Program Details\n      </div>\n      <div style=\"margin: 15px 0;\">\n        <ul>\n          <li>Fellowship participant will receive a monthly stipend.</li>\n          <li>Project will receive support and guidance on defining a roadmap and fostering a community of users and contributors.</li>\n          <li>Open to applicants globally and admitted on a rolling basis.</li>\n        </ul>\n      </div>\n      <div style=\"font-size: 20px; margin-top: 25px; font-weight: bold; text-align: center\">\n        <a class=\"btn btn-primary binance-button\" href=\"https://forms.monday.com/forms/e4ad18734e3c7153b166b4374dd9a7e7\" target=\"_new\" role=\"button\">Apply</a>\n      </div>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['fellowship_apply'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"tab-content\" id=\"myTabContent\" style=\"background-color: #FFF\">\n\n  <div class=\"tab-pane fade show active justify-content-center\" id=\"home\" role=\"tabpanel\" aria-labelledby=\"home-tab\" style=\"text-align: center;\">\n\n    <div style=\"padding: 40px 0px; width: 70%; display: inline-block; text-align: left\">\n      <div style=\"font-size: 20px; font-weight: bold\">\n        Application\n      </div>\n      <div style=\"margin: 15px 0;\">\n        This program is open to candidates globally and fellows are admitted on a rolling basis.\n      </div>\n      <div style=\"margin: 15px 0;\">\n        Fill out the form below, and we will get in touch if there is interest.\n      </div>\n      <div style=\"font-size: 20px; margin-top: 25px; font-weight: bold; text-align: center\">\n        <a class=\"btn btn-primary binance-button\" href=\"https://forms.monday.com/forms/e4ad18734e3c7153b166b4374dd9a7e7\" target=\"_new\" role=\"button\">Apply</a>\n      </div>\n    </div>\n\n  </div>\n</div>";
},"useData":true});
templates['fellowship_fellows'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "";
},"useData":true});
templates['fellowship_tabs'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"b-navbar\"></div>\n\n    <div style=\"margin: 0; background-color: #2E2E2E\">\n      <nav aria-label=\"breadcrumb\" style=\"margin: 0 border: none; color: #FFF\">\n        <ol class=\"breadcrumb\" style=\"margin:0px; background-color: #2E2E2E; color: #FFF\">\n          <li class=\"breadcrumb-item\"><a href=\"./grow.html\">Grow</a></li>\n          <li class=\"breadcrumb-item active\" aria-current=\"page\">Binance X Fellowship Program</li>\n        </ol>\n      </nav>\n    </div>\n    \n    <div class=\"container-fluid\" style=\"background-color: #2E2E2E; padding: 0px 50px 10px 50px; margin:0; \">\n      <div style=\"text-align: center; justify-content: center;\">\n        <div class=\"\" style=\"justify-content: center;\">\n          <img src=\"./static/binance-x-fellowship-white.svg\" style=\"max-width: 380px\">\n        </div>\n      </div>\n    </div>\n\n    <div style=\"background-color: #2E2E2E\">\n      <ul class=\"nav nav-tabs justify-content-center\" id=\"myTab\" role=\"tablist\" style=\"text-align: center;\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = helpers.fellowship_about_status || (depth0 != null ? depth0.fellowship_about_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_about_status","hash":{},"data":data}) : helper)))
    + "\" href=\"./fellowship.html\">About</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = helpers.fellowship_fellows_status || (depth0 != null ? depth0.fellowship_fellows_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_fellows_status","hash":{},"data":data}) : helper)))
    + "\" href=\"./fellowship_fellows.html\">Fellows</a>\n        </li>\n        <li class=\"nav-item\" style=\"\">\n          <a class=\"nav-link fellow-nav "
    + alias4(((helper = (helper = helpers.fellowship_apply_status || (depth0 != null ? depth0.fellowship_apply_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"fellowship_apply_status","hash":{},"data":data}) : helper)))
    + "\" href=\"./fellowship_apply.html\">Apply</a>\n        </li>\n      </ul>\n    </div>";
},"useData":true});
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"container-fluid\" style=\"color: #FFF; background-color: #000; padding: 40px 50px 40px 50px; justify-content: center\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-6 bottom-col\">\n      <div>\n        <img src=\"static/binancex-logo.svg\" style=\"width: 120px; margin: 0px 0px 15px -5px; text-align: left; justify-content: left\"></img>\n      </div>\n      <div style=\"\">\n        Stay informed.<p><i>Join the X Developers Network (XDN)</i>\n      </div>\n      <div style=\"\">\n        <a class=\"btn-sm btn-primary binance-button\" href=\"https://bit.ly/x-devs\" target=\"_new\" role=\"button\">Sign up for XDN</a>\n      </div>\n\n    </div>\n\n    <div class=\"col-sm-3 bottom-col\">\n      <div class=\"bottom-right-menu\">\n        Menu\n      </div>\n      <div class=\"bottom-menu\">\n        <div class=\"bottom-menu-item\">\n          <a href=\"\">Home</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"\">Learn</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"\">Collaborate</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a href=\"\">Grow</a>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-sm-3 bottom-col\">\n      <div class=\"bottom-right-menu\">\n        Community\n      </div>\n      <div class=\"bottom-menu\">\n        <div class=\"bottom-menu-item\">\n          <a  href=\"https://twitter.com/binancex\" target=\"_new\"><i class=\"fab fa-twitter\" style=\"margin-right: 5px;\"></i>Twitter</a>\n        </div>\n        <div class=\"bottom-menu-item\">\n          <a  href=\"https://github.com/binancex\" target=\"_new\"><i class=\"fab fa-github\" style=\"margin-right: 5px;\"></i>GitHub</a>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n\n<div style=\"text-align: center; background-color: #000; font-size: 12px; padding: 40px 0; color: #666\">\n    &copy; 2019 Binance.com All rights reserved\n</div>";
},"useData":true});
templates['nav'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<nav class=\"navbar navbar-expand-lg navbar-dark\" style=\"background-color: #202020\">\n  <a class=\"navbar-brand\" href=\"./index.html\">\n    <img src=\"static/binancex-logo.svg\" style=\"width: 160px\"></img>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse justify-content-end\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item "
    + alias4(((helper = (helper = helpers.home_status || (depth0 != null ? depth0.home_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"home_status","hash":{},"data":data}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./index.html\"><i class=\"fas fa-home\"></i> <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = helpers.learn_status || (depth0 != null ? depth0.learn_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"learn_status","hash":{},"data":data}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./learn.html\">Learn</a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = helpers.collaborate_status || (depth0 != null ? depth0.collaborate_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"collaborate_status","hash":{},"data":data}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./collaborate.html\">Collaborate</a>\n      </li>\n      <li class=\"nav-item "
    + alias4(((helper = (helper = helpers.grow_status || (depth0 != null ? depth0.grow_status : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"grow_status","hash":{},"data":data}) : helper)))
    + "\">\n        <a class=\"nav-link\" href=\"./grow.html\">Grow</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://twitter.com/binancex\" target=\"_new\"><i class=\"fab fa-twitter\"></i></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"https://github.com/binancex\" target=\"_new\"><i class=\"fab fa-github\"></i></a>\n      </li>\n\n    </ul>\n  </div>\n</nav>";
},"useData":true});
})();