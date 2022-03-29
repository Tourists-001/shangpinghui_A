import Mock from "mockjs";
import banner from './banner.json'
import floor from './floor.json'
import hot from './hostList.json'
import like from './like.json'
// 1. 请求地址 2. 返回的数组
Mock.mock("/mock/banner",'get', {
    code: 200,
    data: banner
})
Mock.mock("/mock/floor",'get', {
    code: 200,
    data: floor
})
Mock.mock('/mock/hot','get', {
    code: 200,
    data: hot
})
Mock.mock('/mock/like','get',{
    code: 200,
    data: like
})
Mock.setup({
    timeout: 2000
})