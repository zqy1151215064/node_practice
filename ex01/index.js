const { resolve } = require('path')
const fs = require('fs')
module.exports.getRouter = (path = resolve('./')) => {
    const list = fs.readdirSync(path)
    const text = 
        `
        export default new Router({
            mode: 'history',
            base: process.env.BASE_URL,
            routes: [
                ${list.map(file =>
                `{
                    path: '/${file.replace('.vue', '')}'
                    name: '${file.replace('.vue', '')}'
                    component: ()=> import('./views/${file}')
                },`
                ).join('')}
            ]
        })
        `;
    console.log(text);
    return text;
}






// {
//     path: '/index',
//     name: 'index',
//     component: () => import('./views/index.vue')
// },