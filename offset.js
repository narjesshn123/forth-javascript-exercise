// تابعی بنویسید که یک آرایه و دو عدد index و offset را گرفته و آیتم موجود در index را به اندازه offset در جهت مثبت یا منفی (راست یا چپ در آرایه) انتقال دهد.
function move(arr, index, offset){
if (!arr){
    return -1
}
const newIndex= (index+offset)
    if (newIndex<0 || newIndex>=arr.length) {
        return -1
    }
arr[newIndex] = arr.splice(index,1)[0]
    return arr

}
console.log(move([1,2,3,4,5],0,2))