gdjs.PreloaderCode = {};
gdjs.PreloaderCode.localVariables = [];
gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1= [];
gdjs.PreloaderCode.GDloaderScreen_9595bgObjects2= [];
gdjs.PreloaderCode.GDProgressBarkaObjects1= [];
gdjs.PreloaderCode.GDProgressBarkaObjects2= [];
gdjs.PreloaderCode.GDNewSpriteObjects1= [];
gdjs.PreloaderCode.GDNewSpriteObjects2= [];
gdjs.PreloaderCode.GDYellowBackgroundObjects1= [];
gdjs.PreloaderCode.GDYellowBackgroundObjects2= [];
gdjs.PreloaderCode.GDTransitionObjects1= [];
gdjs.PreloaderCode.GDTransitionObjects2= [];


gdjs.PreloaderCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
gdjs.copyArray(runtimeScene.getObjects("loaderScreen_bg"), gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(0);
}{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(0);
}
}{for(var i = 0, len = gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1[i].getBehavior("Animation").setAnimationIndex(gdjs.randomInRange(0, 6));
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "LoaderTimer");
}}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() + gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(3)) <= 9;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ProgressBarka"), gdjs.PreloaderCode.GDProgressBarkaObjects1);
{for(var i = 0, len = gdjs.PreloaderCode.GDProgressBarkaObjects1.length ;i < len;++i) {
    gdjs.PreloaderCode.GDProgressBarkaObjects1[i].getBehavior("Resizable").setWidth(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() / 7 * 301);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "LoaderTimer") > 9;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};

gdjs.PreloaderCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1.length = 0;
gdjs.PreloaderCode.GDloaderScreen_9595bgObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;
gdjs.PreloaderCode.GDYellowBackgroundObjects1.length = 0;
gdjs.PreloaderCode.GDYellowBackgroundObjects2.length = 0;
gdjs.PreloaderCode.GDTransitionObjects1.length = 0;
gdjs.PreloaderCode.GDTransitionObjects2.length = 0;

gdjs.PreloaderCode.eventsList0(runtimeScene);
gdjs.PreloaderCode.GDloaderScreen_9595bgObjects1.length = 0;
gdjs.PreloaderCode.GDloaderScreen_9595bgObjects2.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects1.length = 0;
gdjs.PreloaderCode.GDProgressBarkaObjects2.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects1.length = 0;
gdjs.PreloaderCode.GDNewSpriteObjects2.length = 0;
gdjs.PreloaderCode.GDYellowBackgroundObjects1.length = 0;
gdjs.PreloaderCode.GDYellowBackgroundObjects2.length = 0;
gdjs.PreloaderCode.GDTransitionObjects1.length = 0;
gdjs.PreloaderCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['PreloaderCode'] = gdjs.PreloaderCode;
