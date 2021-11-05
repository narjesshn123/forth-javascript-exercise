// تابعی بنویسید که دو آرایه را از ورودی گرفته و آیتم‌های آرایه دوم را از آرایه اول حذف کرده و باقی‌مانده آرایه اول را برگرداند.
const arr1=[1,2,3,4,5]
const arr2=[1,2]
function filterArr(arr1,arr2) {
    return arr1.filter(item =>!arr2.includes(item))
}
console.log(filterArr(arr1,arr2))


