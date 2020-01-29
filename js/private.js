
var global_ = ''

$(document).ready(function() {



  $(".next-button").on('click', (e) => {
    console.log();
    var check1 = $('#defaultInline1').prop('checked')
    var check2 = $('#defaultInline2').prop('checked')
    var check3 = $('#defaultInline3').prop('checked')

    if (check1 && check2 && check3) {
      $(location).attr('href', 'apply.html')
      $('.warning-box').css('display', 'none')
    }
    else {
      $('.warning-box').css('display', 'block')
    }

  })


})
