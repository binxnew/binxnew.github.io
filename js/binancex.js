var nav_template = Handlebars.templates['nav'];
var nav_html = nav_template(nav_context);
$(".b-navbar").html(nav_html);

var footer_template = Handlebars.templates['footer'];
$(".b-footer").html(footer_template);

