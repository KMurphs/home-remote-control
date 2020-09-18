var template = "\
\
\
{{#groups}}\
  <!--<h1 class='uk-heading-divider uk-text-center'>{{name}}</h1>-->\
  <div class='remote-group uk-flex uk-flex-wrap'>\
\
    {{#entries}}\
      <div class='remote-group-item '>\
        <button class='uk-button uk-button-{{color}} uk-flex uk-flex-column uk-flex-center {{cssClass}}' onclick=\"fct('{{code}}')\">\
          <span uk-icon='icon: {{icon}}; ratio: {{scaleFactor}}'></span>\
          <span class='uk-text-small uk-margin-top'>{{text}}</span>\
        </button>\
      </div>\
    {{/entries}}\
\
\
  </div>\
  <!--<hr class='uk-divider-icon'></hr>-->\
  <h1 class='uk-heading-divider uk-text-center'></h1>\
{{/groups}}\
"

var tpl = "\
<ul>\
{{#groups}}\
<p>{{name}}</p>\
<ul>\
{{#entries}}\
<li>{{name}}: {{occ}}</li>\
{{/entries}}\
</ul>\
{{/groups}}\
</ul>";