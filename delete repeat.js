// تابعی بنویسید که یک رشته را به عنوان ورودی گرفته و کاراکترهای تکراری مجاور هم را حذف کند و فقط یکی از آن‌ها را باقی بگذارد. مثال: ورودی) aabbbcdd خروجی) abcd
function deleteRepeat(str){
    let result = ''
    for (let i=0 ; i<str.length; i++){
        if (str[i]!==str[i+1]) {
            result += str[i]
        }
    }
return result
}
console.log(deleteRepeat('saaassslam'))