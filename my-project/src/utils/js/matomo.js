var _paq = window._paq = window._paq || [];//声明_paq对象
/**
 * 添加搜索词埋点
 * @param {*} keyword 搜索词
 * @param {*} category 搜索词类别
 * @param {*} searchCount 搜索结果数据数量
 */
export function trackSiteSearch(keyword,category,searchCount) {
    setUserId();//添加用户信息
    window._paq.push(['trackSiteSearch',keyword,category,searchCount]);//搜索关键字
    window._paq.push(['trackPageView']);
}

/**
 * 添加事件行为埋点  需要添加的部分（登录按钮、检索按钮、高级检索按钮、馆际互借量按钮、文献传递量按钮、检索结果详情浏览量按钮）
 * @param {*} category  活动类别 （如：全面检查）
 * @param {*} action 事件操作（如：搜索）
 * @param {*} name 事件名称（如：可以写搜索的内容为名字）
 */
export function trackEvent(category,action,name){
    console.log(category,action,name)
    console.log(category,action,name)
    setUserId();//添加用户信息
    window._paq.push(['trackEvent',category, action,name]);
    window._paq.push(['trackPageView']);
}


/**
 * 添加页面url埋点
 * @param {*} title 页面标题
 * @param {*} url 页面url
 */
export function setCustomUrl(title,url) {
    setUserId();//添加用户信息
    window._paq.push(['setCustomUrl', url]);//自定义每个页面链接
    window._paq.push(['setDocumentTitle', title]);//自定义每个页面名称
    window._paq.push(['trackPageView']);
}

/**
 * matomo 初始化 引入到index.html中
 */
(function() {

    setUserId();//添加用户信息
    window._paq.push(['enableLinkTracking']);
    window._paq.push(['trackAllContentImpressions']);
    window._paq.push(["enableCrossDomainLinking"]);
    window._paq.push(['trackPageView']);
    // const siteId = '1';//智慧首页
    // const siteId = '2';//古文献
    // const siteId = '3';//学位论文
    // const siteId = '4';//OPAC
    // const siteId = '6';//CASHL外国图书期刊采购平台
    (function() {
        var u=`${import.meta.env.VITE_APP_MATOMO_URL}/`;
        window._paq.push(['setTrackerUrl', u+'matomo.php']);
        window._paq.push(['setSiteId', import.meta.env.VITE_APP_SETSITEID]);

        //   _paq.push(['setCookieDomain', '//222.29.77.8*']);//同域添加 现在没用
        //   _paq.push(["setDomains", "//222.29.77.8*"]);//同域添加 现在没用

        var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
        g.async=true; g.src=u+'matomo.js'; s && s.parentNode.insertBefore(g,s);

    })();
})();

/**
 * 添加 用户信息埋点
 */
function setUserId(){
    window._paq.push(['setUserId',returnTenant()]);//用户跟踪 此用户是租客id 和 高校名称
}

//返回租客信息,如何两个参数都没有获取到显示直接进入（为游客）
function returnTenant(){
    // const tenantName =  getCookie("username");//获取高校
    const tenantName="王五"
    console.log(tenantName)
    var tenantStr = tenantName;
    return tenantStr;
}

//获取cookie中数据
function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
}
