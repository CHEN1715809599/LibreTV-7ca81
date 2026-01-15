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
    },

    // =========== 🔴 第二组：课题研究 (您提供的新公开端点) ===========
    // 注意：已为您剔除 Rule34 (纯图片无法播放)，保留了视频/GIF 接口
    
    study_eporner: {
        // Eporner 官方 API，已去除查询参数，保留根路径
        api: 'https://www.eporner.com/api/v2/video/search/',
        name: '【课题】Eporner (官方)',
    },
    study_lust: {
        // Lustpress 开源聚合 API
        api: 'https://lustpress.vercel.app/api/videos',
        name: '【课题】Lustpress (聚合)',
    },
    study_redgifs: {
        // RedGIFs 趋势接口 (短视频/GIF)
        api: 'https://api.adultdatalink.com/redgifs/trending',
        name: '【课题】RedGIFs (短视频)',
    },
    study_hentai: {
        // Hentai Ocean
        api: 'https://hentaiocean.com/api',
        name: '【课题】HentaiOcean',
    }
};

// 下面这部分代码保持不变，不要删掉
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
