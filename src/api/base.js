const isDev = process.env.NODE_ENV === 'development' //　npm run dev 时为真
const baseUrl = isDev ? '/daxun' : 'https://www.daxunxun.com' // 跨域

export default baseUrl