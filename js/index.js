//登入&註冊的密碼查看
$('.password').on('click', 'span', function () {
    let password = $(this).parent();
    let eyeClose = password.find('.humbleicons--eye-close')
    let eyeOpen = password.find('.mage--eye');
    let input = password.find('input');
    if ($(this).hasClass('humbleicons--eye-close')) {
        eyeClose.toggleClass('show');
        eyeOpen.toggleClass('show');
        input.attr('type', 'text');
    } else if ($(this).hasClass('mage--eye')) {
        eyeClose.toggleClass('show');
        eyeOpen.toggleClass('show');
        input.attr('type', 'password');
    }
})

//回到頂部

// let test = document.querySelector('.toTop')
// test.addEventListener('click', function () {
//     window.scrollTo({
//         top: 0,
//         left: 0,
//         behavior: "smooth"
//     })
// })

$('.toTop').click(function () {
    $('html, body').animate({ scrollTop: 0 }, 500);
})
$(window).scroll(function () {
    //獲得一個可視窗口的高
    let height = $(this).height();
    // 如果垂直滾動超過高，.toTop 就出現
    if ($(this).scrollTop() >= height / 2) {
        $('.toTop').show();
    } else {
        $('.toTop').hide();
    }
})

