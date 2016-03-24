var _m_ = {

  init: function() {

    // grab JSON data from provided file
    var rates = {};
    $.getJSON('code-test.json', function (data) {
      rates = data;
      ko.applyBindings({
          banks: rates
      });
      // sort by earnings
      $('.Main-rates-table').tablesorter( {sortList: [[2,1]]} );

      // add some characters to imported data
      $("td[data-th~='Yield']").append(' &#37;');
      $("td[data-th~='Earning']").prepend(' &#36;');
    });

    // placeholder fix
    $('input').placeholder();

    $('.hamburger-menu').on('click', function() {
      $('.bar').toggleClass('animate');
      $('.Header ul').toggleClass('is--active');
    })
  }
};
module.exports = _m_;