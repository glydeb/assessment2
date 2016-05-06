$(document).ready(function () {

  // Initialize variables to track salaries and IDs
  var totalGenerates = 0;

  // Delete button event handler
  $('#container').on('click', 'button.delete', function () {
    $(this).parent('div').remove();
  });

  // Color change button event handler
  $('#container').on('click', 'button.change-color', function () {
    $div = $(this).parent('div');
    console.log($div.css('background-color'));
    if ($div.css('background-color') == 'rgb(255, 0, 0)') {
      $div.css('background-color', 'yellow');
    } else {
      $div.css('background-color', 'red');
    }
  });

  // Generate button event handler
  $('#container').on('click', 'button.generate', function () {
    totalGenerates++;
    appendDiv(totalGenerates);
  });

  // Creates the new div with 2 buttons and some text
  function appendDiv(generates) {
    $('#container').append('<div class="entry"></div>');

    // Set target to the created div and append a list a button, and data
    var $el = $('#container').children().last();
    $el.append('<button class = "delete">Delete</button>');
    $el.append('<button class = "change-color">Change Color</button>');
    $el.append('<p>The generate button has been clicked ' + generates + ' times.</p>');
    $el.data('id', generates);

  }

});
