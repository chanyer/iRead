// 我的自定义插件
export default {
    install: function (Vue, options) {
        // 添加的内容写在这个函数里面
        var regExpValidate = function () {
            var regObj = {
                // 验证手机号
                phoneNumber(value) {
                    return /^[1][3578]\d{9}$/.test(value)
                }
            }
            return function (type, value) {
                // 去除首尾空白符
                value = value.replace(/^\s+|\s+$/g, '')
                return regObj[type] ? regObj[type](value) : false
            }
        }()
        Vue.prototype.regExpValidate = regExpValidate
    }
};