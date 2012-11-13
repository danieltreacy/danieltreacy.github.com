// (c) Daniel Treacy, whatever

// jquery listeners

$(document).ready(function() {

  $('#go-to-top').click(function() {
      $.scrollTo(0, 800, {queue: true});
  });

});
