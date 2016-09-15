$(".dropdown-button").dropdown()
$('.button-collapse').sideNav({
      menuWidth: 200, // Default is 240
      edge: 'right', // Choose the horizontal origin
      closeOnClick: true // Closes side-nav on <a> clicks, useful for Angular/Meteor
    }
  );

// Show sideNav
  // Hide sideNav
  $('.button-collapse').sideNav('hide');


  $(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });
          