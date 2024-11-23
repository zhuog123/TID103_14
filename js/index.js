//登入&註冊的密碼查看




let test = document.querySelectorAll('.password')
test.forEach(function (item,index ) {
    item.addEventListener('click', (e) => {
        if (e.target.matches('span')) {
            // 獲取兩個 span
            const eyeCloseSpan = item.querySelector('.humbleicons--eye-close');
            const eyeOpenSpan = item.querySelector('.mage--eye');
            const input = item.querySelector('input')
            // 根據點擊的 span 進行相應操作
            if (e.target.classList.contains('humbleicons--eye-close')) {
                // 處理關閉眼睛的 span
                eyeCloseSpan.style.display = 'none';
                eyeOpenSpan.style.display = 'block';
                input.type = 'text';
                // 其他操作...
            } else if (e.target.classList.contains('mage--eye')) {
                // 處理打開眼睛的 span
                eyeCloseSpan.style.display = 'block';
                eyeOpenSpan.style.display = 'none';
                input.type = 'password';
                // 其他操作...

            }
        }
    })
})