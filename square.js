// برنامه‌ای بنویسید که عدد n را از ورودی دریافت کرده و سپس یک مربع توخالی به طول و عرض n با ستاره چاپ کند.
function square(number){
    for (let i=1 ; i<=number ; i++){
        if (i===1 || i===number)
            console.log('*'.repeat(number))
        else console.log('*'+' '.repeat(number-2)+'*')
    }
}
square(5)
