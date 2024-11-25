
if (typeof gdjs.evtsExt__ScrollViewContainer__Mask !== "undefined") {
  gdjs.evtsExt__ScrollViewContainer__Mask.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__ScrollViewContainer__Mask = {};
gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskedObjects1= [];
gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskObjects1= [];


gdjs.evtsExt__ScrollViewContainer__Mask.userFunc0xae5738 = function GDJSInlineCode(runtimeScene, objects, eventsFunctionContext) {
"use strict";
const maskObject = eventsFunctionContext.getObjects("Mask")[0];
if (!maskObject) return;

const maskedObjects = eventsFunctionContext.getObjects("Masked");
for (const maskedObject of maskedObjects) {
    const maskedRenderer = maskedObject.getRendererObject(); 
    maskedRenderer.mask = maskObject.getRendererObject();
}


};
gdjs.evtsExt__ScrollViewContainer__Mask.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


var objects = [];
gdjs.evtsExt__ScrollViewContainer__Mask.userFunc0xae5738(runtimeScene, objects, typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined);

}


};

gdjs.evtsExt__ScrollViewContainer__Mask.func = function(runtimeScene, Masked, Mask, parentEventsFunctionContext) {
var eventsFunctionContext = {
  _objectsMap: {
"Masked": Masked
, "Mask": Mask
},
  _objectArraysMap: {
"Masked": gdjs.objectsListsToArray(Masked)
, "Mask": gdjs.objectsListsToArray(Mask)
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("ScrollViewContainer"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("ScrollViewContainer"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        eventsFunctionContext._objectArraysMap[objectName].push(object);
      }
      return object;    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskedObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskObjects1.length = 0;

gdjs.evtsExt__ScrollViewContainer__Mask.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskedObjects1.length = 0;
gdjs.evtsExt__ScrollViewContainer__Mask.GDMaskObjects1.length = 0;


return;
}

gdjs.evtsExt__ScrollViewContainer__Mask.registeredGdjsCallbacks = [];