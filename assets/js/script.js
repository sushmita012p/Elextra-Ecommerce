// init owl carousel

// popular search
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 50,
    nav: true,
    rewind: false,
    center: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// selected products
$('.selected').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rewind: false,
    center: false,
    dots: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    stagePadding: 100,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
});

// selected products mobile view
$('.selected-mobile-view').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    rewind: false,
    center: false,
    dots: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
        0: {
            items: 1
        }
    }
});

// flash sale
$('.sale').owlCarousel({
    loop: true,
    nav: true,
    rewind: false,
    center: false,
    animateOut: 'slideOutUp',
    animateIn: 'slideInUp',
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});


//Get the button:
let myButton;
myButton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {(scrollFunction())};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    myButton.style.display = "block"; 
  } 
  else {
    myButton.style.display = "none";
  }
};

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
