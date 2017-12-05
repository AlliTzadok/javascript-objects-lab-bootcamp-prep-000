var recipes = {"cheese": "2 cups"};

function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, { [key]: value })
<<<<<<< HEAD
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key]=value;
  return object;
}

function deleteFromObjectByKey(object, key){
 var copy = Object.assign({},object);
 delete copy[key];
 return copy;
}

function destructivelyDeleteFromObjectByKey(object,key){
  delete object[key];
  return object;
=======
>>>>>>> 79fd4d7142280fd939720d84eb1c6168874907cb
}