const CUSTOMER_SITES = {
    // 1. 非凡资源 (HTTPS版 - 强烈推荐，最稳)
    feifan: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod/',
        name: '【影视】非凡资源 (HTTPS)',
    },
    // 2. 量子资源 (HTTPS版 - 更新快)
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '【影视】量子资源 (HTTPS)',
    },
    // 3. IKUN资源 (纯HTTPS源，速度快)
    ikun: {
        api: 'https://ikunzyapi.com/api.php/provide/vod/',
        name: '【影视】IKUN资源 (稳)',
    },
    // 4. 索尼资源 (原本就是HTTPS，保留)
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '【影视】索尼资源 (备用)',
    }
};

// 下面这部分代码保持不变
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
