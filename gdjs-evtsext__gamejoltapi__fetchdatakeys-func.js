
if (typeof gdjs.evtsExt__GamejoltAPI__FetchDataKeys !== "undefined") {
  gdjs.evtsExt__GamejoltAPI__FetchDataKeys.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__GamejoltAPI__FetchDataKeys = {};


gdjs.evtsExt__GamejoltAPI__FetchDataKeys.asyncCallback16492572 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "data-store/get-keys", (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("RequestName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__FetchDataKeys.asyncCallback16492572(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)));
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__SetErrorMessage.func(runtimeScene, "User is not connected", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__GamejoltAPI__SetSuccess.func(runtimeScene, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__GamejoltAPI__Authenticated.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddConnectedUser.func(runtimeScene, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__GamejoltAPI__FetchDataKeys.asyncCallback16493524 = function (runtimeScene, eventsFunctionContext, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(eventsFunctionContext.localVariables);
{gdjs.evtTools.common.resolveAsyncEventsFunction((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}eventsFunctionContext.localVariables.length = 0;
}
gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(eventsFunctionContext.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__GamejoltAPI__CallGamejolt.func(runtimeScene, "data-store/get-keys", (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("RequestName") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), (runtimeScene) => (gdjs.evtsExt__GamejoltAPI__FetchDataKeys.asyncCallback16493524(runtimeScene, eventsFunctionContext, asyncObjectsList)));
}
}

}


};gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = ((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Pattern") : "") != "");
}
if (isConditionTrue_0) {
{gdjs.evtsExt__GamejoltAPI__AddURLParameter.func(runtimeScene, "pattern", (typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Pattern") : ""), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsGlobal") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("IsGlobal") : false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__GamejoltAPI__FetchDataKeys.func = function(runtimeScene, RequestName, IsGlobal, Pattern, parentEventsFunctionContext) {
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("GamejoltAPI"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("GamejoltAPI"),
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
if (argName === "RequestName") return RequestName;
if (argName === "IsGlobal") return IsGlobal;
if (argName === "Pattern") return Pattern;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__GamejoltAPI__FetchDataKeys.eventsList3(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__GamejoltAPI__FetchDataKeys.registeredGdjsCallbacks = [];