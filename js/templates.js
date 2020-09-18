const templates = "\
\
\
{{#groups}}\
  <div class='remote-group uk-flex uk-flex-wrap'>\
    <p>{{name}}</p>\
\
    {{#entries}}\
      <div class='remote-group-item '>\
        <button class='uk-button uk-button-secondary uk-flex uk-flex-column uk-flex-center' click='()=>{console.log('1223456')}'>\
          <span uk-icon='icon: home; ratio: 1.5'></span>\
          <span class='uk-text-small uk-margin-top'>Primary</span>\
        </button>\
      </div>\
    {{/entries}}\
\
\
  </div>\
  <hr class='uk-divider-icon'></hr>\
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