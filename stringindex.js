// تابعی بنویسید که دو رشته به عنوان ورودی بگیرید و اگر رشته دوم در رشته اول وجود داشت اندیس آن‌را برگرداند.
function subString(str1,str2){
    if (typeof str1!=="string" || typeof str2!=="string")
        return -1
    if (str2.length>str1.length)
        return -1
    for (let i=0 ; i<str1.length ; i++){
        for (let j=0 ; j<str2.length ; j++){
            if (str1[i+j] !== str2[j]){
                break
            }
                return i
        }
    }
    return -1
}console.log(subString('salam world', 'world'))
