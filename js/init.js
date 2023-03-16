//Hook up the tweet display

$(document).ready(function () {
  $('.countdown').countdown(
    {
      date: '1 may 2023 14:30:00',
      format: 'on',
    },

    function () {
      // callback function
    },
  );
});
