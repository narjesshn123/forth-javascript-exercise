// برنامه‌ای بنويسيد كه یک عدد صحيح را که تعداد ارقامش مشخص نيست از کاربر گرفته و هر رقم را به تعداد آن رقم چاپ کند.
 const copy=function(repeat){
    let n = 0;
    for (let i =0 ; i<repeat ; i++) {

        n += (10 **i) * repeat
    }
    if (repeat==0){
        return ''
    }
    return n
}
const write = function (repeat){
    let num=repeat.toString().split('')
    for (let i of num){

            console.log('%s:', i, copy(i))
        }
}

write(231231032)
