//寄送資訊 icon 點擊跳出資訊
let infoIcon = document.querySelectorAll('.fa-circle-info');
infoIcon[0].addEventListener('click',function(){
    let info = `
    *同品項不同尺寸會依比例切分，例生巧克力塔/十吋 可切分成4個 生巧克力塔/單份．可購量也將依比例換算例如尚可購 2個生巧克力塔/十吋，相當於 8個生巧克力塔/單份，以及 1個生巧克力塔/十吋 和 4個生巧克力塔/單份
    `;
    swal("購物須知", info, "info");
})
infoIcon[1].addEventListener('click',function(){
    let info = `
    自取

    * 甜點為當天製作，請於 10:00~18:00 間至門市領取。

    冷藏宅配

    * 甜點將在指定日期的前一天出爐，最快將於指定日期當天到貨。
    * 週四週日末提供宅配到貨
    
    當日快遞
    
    * 甜點當天製作，出爐後直接包裝出貨。按照當天訂單安排配送路線，  遇塞車或雨天可能延遲，無法精準指定送達時間點。快遞司機不提供上樓服務，請務必至一樓取件。
    `;
    swal("商品購物須知", info, "info");
})




