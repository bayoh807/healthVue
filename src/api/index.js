import req from './https.js';

/**
 * 定義接口
 * @param {Number} params 
 */
//登入
export const apiPostHome = (data) => req('post','/home',data);

// export const apiGetCourses = () => req('get','/course/getCourses');
// export const apiGetUserData = (params) => req('get','/course/getCourses',params);
// export const apiDelCourses = (params) => req('post','/course/DelCourses',params);
// export const apiEditCourses = (params) => req('post','/course/EditCourses',params);

