function largest(list){
    var lar = 0;
    for(var ele of list){
        if(ele>lar){
            lar = ele;
        }
    }
    return lar;
}

var largest = largest([1,7,3]);
console.log("The largest of three numbers is", largest);