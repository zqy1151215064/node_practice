module.exports.compose = middlewares => {
    return function () {
        return dispatch(0)
        function dispatch(i) {
            // 暗号：排序
            let fn = middlewares[i];
            if (!fn) {
                // 返回空承诺
                return Promise.resolve()
            }
            return Promise.resolve(
                fn(function next() {
                    // 递归调用
                    return dispatch(i + 1)
                })
            )
        }
    }
}
