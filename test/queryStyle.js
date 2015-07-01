var tape = require("tape");
var queryStyle = require("../");

var HTML = "<style>div { display: inline; } p {}</style><div><p></p</div><span class='test'></span>";

tape("queryStyle", function(test){
  document.body.innerHTML(HTML);

  var inlines = queryStyle({
    display: 'inline'
  });

  test.equal(inlines.length, 2, "2 inlines elements");

  test.end();
})
