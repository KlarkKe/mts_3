gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDNewTextObjects1= [];
gdjs.LeaderboardCode.GDNewTextObjects2= [];
gdjs.LeaderboardCode.GDNewTextObjects3= [];
gdjs.LeaderboardCode.GDNewText2Objects1= [];
gdjs.LeaderboardCode.GDNewText2Objects2= [];
gdjs.LeaderboardCode.GDNewText2Objects3= [];
gdjs.LeaderboardCode.GDNewSpriteObjects1= [];
gdjs.LeaderboardCode.GDNewSpriteObjects2= [];
gdjs.LeaderboardCode.GDNewSpriteObjects3= [];
gdjs.LeaderboardCode.GDYellowBackgroundObjects1= [];
gdjs.LeaderboardCode.GDYellowBackgroundObjects2= [];
gdjs.LeaderboardCode.GDYellowBackgroundObjects3= [];
gdjs.LeaderboardCode.GDTransitionObjects1= [];
gdjs.LeaderboardCode.GDTransitionObjects2= [];
gdjs.LeaderboardCode.GDTransitionObjects3= [];


gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), false);
if (isConditionTrue_0) {
{gdjs.evtTools.window.setWindowSize(runtimeScene, 720, 1280, false);
}{gdjs.evtTools.window.centerWindow(runtimeScene);
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getGame().getVariables().getFromIndex(0), true);
}}

}


};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10740300);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LeaderboardCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("EnterScene", 255, 0, "linear", 0.5, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LeaderboardCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionObjects1[i].setFillOpacity((gdjs.LeaderboardCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("EnterScene")));
}
}}

}


};gdjs.LeaderboardCode.asyncCallback10474684 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("NextScene")), false);
}gdjs.LeaderboardCode.localVariables.length = 0;
}
gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.LeaderboardCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.LeaderboardCode.asyncCallback10474684(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.LeaderboardCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10227780);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LeaderboardCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("LeaveScene", 0, 255, "linear", 0.5, false, false);
}
}
{ //Subevents
gdjs.LeaderboardCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LeaderboardCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionObjects1[i].setFillOpacity((gdjs.LeaderboardCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("LeaveScene")));
}
}}

}


};gdjs.LeaderboardCode.eventsList4 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Transition", 0, 0, 0);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList1(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.LeaderboardCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.LeaderboardCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDTransitionObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects3.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects3.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects3.length = 0;

gdjs.LeaderboardCode.eventsList4(runtimeScene);
gdjs.LeaderboardCode.GDNewTextObjects1.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects2.length = 0;
gdjs.LeaderboardCode.GDNewTextObjects3.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects1.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects2.length = 0;
gdjs.LeaderboardCode.GDNewText2Objects3.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects1.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects2.length = 0;
gdjs.LeaderboardCode.GDNewSpriteObjects3.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects3.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
