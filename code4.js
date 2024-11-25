gdjs.RoolCode = {};
gdjs.RoolCode.localVariables = [];
gdjs.RoolCode.GDroolScreen_9595bgObjects1= [];
gdjs.RoolCode.GDroolScreen_9595bgObjects2= [];
gdjs.RoolCode.GDback_9595buttonObjects1= [];
gdjs.RoolCode.GDback_9595buttonObjects2= [];
gdjs.RoolCode.GDYellowBackgroundObjects1= [];
gdjs.RoolCode.GDYellowBackgroundObjects2= [];
gdjs.RoolCode.GDTransitionObjects1= [];
gdjs.RoolCode.GDTransitionObjects2= [];


gdjs.RoolCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_button"), gdjs.RoolCode.GDback_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolCode.GDback_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.RoolCode.GDback_9595buttonObjects1[i].getBehavior("Buttons").Release((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.RoolCode.GDback_9595buttonObjects1[k] = gdjs.RoolCode.GDback_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.RoolCode.GDback_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.RoolCode.GDback_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.RoolCode.GDback_9595buttonObjects1[i].behaviorActivated("Buttons") ) {
        isConditionTrue_0 = true;
        gdjs.RoolCode.GDback_9595buttonObjects1[k] = gdjs.RoolCode.GDback_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.RoolCode.GDback_9595buttonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.RoolCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.RoolCode.GDroolScreen_9595bgObjects1.length = 0;
gdjs.RoolCode.GDroolScreen_9595bgObjects2.length = 0;
gdjs.RoolCode.GDback_9595buttonObjects1.length = 0;
gdjs.RoolCode.GDback_9595buttonObjects2.length = 0;
gdjs.RoolCode.GDYellowBackgroundObjects1.length = 0;
gdjs.RoolCode.GDYellowBackgroundObjects2.length = 0;
gdjs.RoolCode.GDTransitionObjects1.length = 0;
gdjs.RoolCode.GDTransitionObjects2.length = 0;

gdjs.RoolCode.eventsList0(runtimeScene);
gdjs.RoolCode.GDroolScreen_9595bgObjects1.length = 0;
gdjs.RoolCode.GDroolScreen_9595bgObjects2.length = 0;
gdjs.RoolCode.GDback_9595buttonObjects1.length = 0;
gdjs.RoolCode.GDback_9595buttonObjects2.length = 0;
gdjs.RoolCode.GDYellowBackgroundObjects1.length = 0;
gdjs.RoolCode.GDYellowBackgroundObjects2.length = 0;
gdjs.RoolCode.GDTransitionObjects1.length = 0;
gdjs.RoolCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['RoolCode'] = gdjs.RoolCode;
