module.exports. bubbleSort=function(items) {  
    var length = items.length;
    for (var i = (length - 1); i >= 0; i--) {
        
        for (var j = (length - i); j > 0; j--) {
            
            if (items[j] < items[j - 1]) {
                
                var tmp = items[j];
                items[j] = items[j - 1];
                items[j - 1] = tmp;
            }
        }
    }
    return items;
}
module.exports.selectionSort=function(items) {  
    var length = items.length;
    for (var i = 0; i < length - 1; i++) {
        //Number of passes
        var min = i; 
        for (var j = i + 1; j < length; j++) { 
            if (items[j] < items[min]) { 
                min = j; 
            }
        }
        if (min != i) {
            var tmp = items[i];
            items[i] = items[min];
            items[min] = tmp;
        }
    }
    return items;
}

module.exports.insertionSort=function (unsortedList) {  
    var len = unsortedList.length;
    for (var i = 0; i < len; i++) {
        var tmp = unsortedList[i];  
        
        for (var j = i - 1; j >= 0 && (unsortedList[j] > tmp); j--) {
            unsortedList[j + 1] = unsortedList[j];
        }
        unsortedList[j + 1] = tmp;
    }
    return unsortedList;
}
