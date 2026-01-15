const CUSTOMER_SITES = {
    // =========== 🟢 第一组：常规影视 (推荐/最稳) ===========
    feifan: {
        api: 'http://cj.ffzyapi.com/api.php/provide/vod/',
        name: '【影视】非凡资源 (推荐)',
    },
    liangzi: {
        api: 'http://cj.lziapi.com/api.php/provide/vod/',
        name: '【影视】量子资源 (推荐)',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '【影视】索尼资源 (推荐)',
    },
    tianyi: {
        api: 'http://7.qqqtv.top/api.php/provide/vod/',
        name: '【影视】天翼影视',
    }
}; // 👈 您之前就是缺了这个关键的结束符号！

// 下面这部分代码保持不变，不要删掉
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
