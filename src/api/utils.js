import router from '@/router';

/**
 * 錯誤msg消息提示的函數
 */
export const tip = msg => {
    console.log(msg);
}

/**
 * 跳轉回登入畫面
 * 攜帶當前的url,登入完成後跳轉回原本頁面
 */

export const toLogin = () => {
    router.replace({
        name : 'Login',
        query : {
            redirect : router.currentRoute.fullPath
        }
    });
}
/**
 * 跳轉到403 error page
 * 攜帶當前頁面的url點擊連結跳轉回原本頁面
 */

export const to403Page = () => {
    router.replace({
        name : '403'
    });
};