function myEach (collection, alert) {
    if (Array.isArray(collection)) {
        let newCollection = [...collection]

        for (let element of newCollection) {
            alert(element)
        
        } return collection
    } else {
        let newCollection = Object.values(collection)
        for (let element of newCollection) {
            alert(element)
        
        } return collection
    } 
    
}

function myMap (collection, callback) {
    let newCollection
    let arr
    if (Array.isArray(collection)) {
        newCollection = [...collection]
        arr = []
        for (let element of newCollection) {
            arr.push(callback(element))
        } 
        
       
    } else {
        newCollection = Object.values(collection)
        arr = []
        for (let element of newCollection) {
            arr.push(callback(element))
        } 
        

        
    } return arr
}

function myReduce (collection, callback, acc) {
    if (Array.isArray(collection)) {
      let newCollection = [...collection]  
      if (acc === undefined) {
        acc = newCollection[0]
        newCollection = newCollection.slice(1)
    }  
    for (let i=0; i<newCollection.length; i++) {
        acc =callback(acc, newCollection[i], newCollection)
    } return acc
 } else {
    let newCollection = Object.values(collection)
     
    if (acc === undefined) {
      acc = newCollection[0]
      newCollection = newCollection.slice(1)
  }  
  for (let i=0; i<newCollection.length; i++) {
      acc =callback(acc, newCollection[i], newCollection)
  } 
 } return acc
}

function myFind (collection, predicate) {
    if (Array.isArray(collection)) {
        let newCollection = [...collection]
        
        for (let i=0; i<newCollection.length; i++) {
            if (predicate(newCollection[i]) === true) {
                return newCollection[i]
            }
        }
        

    } else {
        let newCollection = Object.values(collection)
        for (let i=0; i<newCollection.length; i++) {
            if (predicate(newCollection[i]) === true) {
                return newCollection[i]
            }
        }
        
    }
    
}

function myFilter (collection, predicate) {
    if (Array.isArray(collection)) {
        let newCollection = [...collection]
        let newArray = []
        for (let i=0; i<newCollection.length; i++) {
            if (predicate(newCollection[i]) === true) {
                newArray.push(newCollection[i])
            }
        }return newArray

    } else {
        let newCollection = Object.values(collection)
        let newArray = []
        for (let i=0; i<newCollection.length; i++) {
            if (predicate(newCollection[i]) === true) {
                newArray.push(newCollection[i])
            }
        } return newArray
    }
}

function mySize (collection) {
    if (Array.isArray(collection)) {
        let newCollection = [...collection]
        return newCollection.length
    } else {
        let newCollection = Object.values(collection)
        return newCollection.length
    }
}

function myFirst (array, n) {
    if (n) {
        let firstElement = array.slice(0,n)
        return firstElement
    } else {
        let firstElement = array[0]
        return firstElement
    }
}

function myLast (array, n) {
    if (n) {
        let lastElement = array.slice(array.length-n,array.length)
        return lastElement
    } else {
        let lastElement = array.slice(-1)
        return lastElement[0]
    }
}

function myKeys (object) {
    let keys = Object.keys(object)
    return keys
}

function myValues (object) {
    let values = Object.values(object)
    return values
}