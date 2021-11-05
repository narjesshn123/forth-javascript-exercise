// با استفاده از روش خودبازگشتی در توابع تابعی بنویسید که یک رشته را از ورودی گرفته و برعکس آن‌را برگرداند.
function recursive(str) {
    if (str.length===0){
        return ''
    }
    return str[str.length-1]+recursive(str.substring(0,str.length-1))
}
console.log(recursive('hello'))
