const CUSTOMER_SITES = {
    // =========== 🟢 第一组：常规影视 (推荐) ===========
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

    // =========== 🔴 第二组：课题研究 (来自您的 Vercel) ===========
    // 基于您提供的 endpoints.ts 文件，我为您提取了最核心的搜索接口
    
    study_ph: {
        api: 'https://adult-colony-api-eta.vercel.app/pornhub/search',
        name: '【课题】PornHub (自建)',
    },
    study_miss: {
        api: 'https://adult-colony-api-eta.vercel.app/missav/search',
        name: '【课题】MissAV (自建)',
    },
    study_xv: {
        api: 'https://adult-colony-api-eta.vercel.app/xvideos/search',
        name: '【课题】XVideos (自建)',
    },
    study_javhd: {
        api: 'https://adult-colony-api-eta.vercel.app/javhdtoday/search',
        name: '【课题】JavHD (自建)',
    },
    study_xham: {
        api: 'https://adult-colony-api-eta.vercel.app/xhamster/search',
        name: '【课题】Xhamster (自建)',
    }
};

// 下面这部分代码保持不变，不要删掉
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
