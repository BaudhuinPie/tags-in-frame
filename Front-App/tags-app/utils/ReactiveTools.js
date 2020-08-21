

// Lite Object merging function
let objToArr = function (myObject) {
    if (myObject == null) return;
    if (typeof myObject == "object" && !Array.isArray(myObject)) 
    return Object.entries(myObject);
    //else
    console.log("++ Little ERR : Bad Type for objToArr() argument, must be object .");
    return;
}

let filterArrayAsEntries = function (myArray) {
    if (!Array.isArray(myArray)) {
        console.log("++ Little ERR : Bad Type for isArrForObj() argument, must be array .");
        return;
    }
    let formatedList = [];
    // For single key value
    if(myArray.length == 2) return formatedList.push(myArray);
    // For Array of Array

    for (let aKeyVal of myArray) {
        if (Array.isArray(aKeyVal) && aKeyVal.length == 2) {
            formatedList.push(myArray);
        } 
    }
    console.log("PB-check =>  : filterArrayAsEntries -> formatedList", formatedList)
    return formatedList ;
}

let setObjInContext = function (addons, context, objectName) {
    console.log("ggggggggggggggg")
    let targetObj = context[objectName] ;
    console.log("+ PB-check =>  : setObjInContext -> targetObj", targetObj)
    if (typeof targetObj == "object" && !Array.isArray(targetObj)) {

        let listToAdd = objToArr(addons);
        listToAdd  = listToAdd ? listToAdd : filterArrayAsEntries(addons);
        console.log("++ PB-check =>  : setObjInContext -> listToAdd", listToAdd)
        
        for (let attr of listToAdd) {
            targetObj[attr[0]]= attr[1];
        }
    }
    console.log("+++ PB-check =>  : setObjInContext -> targetObj", targetObj)
    return targetObj;
}

export { setObjInContext as default, objToArr, filterArrayAsEntries};