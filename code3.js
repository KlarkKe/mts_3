gdjs.SubmitScreenCode = {};
gdjs.SubmitScreenCode.localVariables = [];
gdjs.SubmitScreenCode.GDNewSpriteObjects1= [];
gdjs.SubmitScreenCode.GDNewSpriteObjects2= [];
gdjs.SubmitScreenCode.GDNewSpriteObjects3= [];
gdjs.SubmitScreenCode.GDinput_9595bgObjects1= [];
gdjs.SubmitScreenCode.GDinput_9595bgObjects2= [];
gdjs.SubmitScreenCode.GDinput_9595bgObjects3= [];
gdjs.SubmitScreenCode.GDSubmitObjects1= [];
gdjs.SubmitScreenCode.GDSubmitObjects2= [];
gdjs.SubmitScreenCode.GDSubmitObjects3= [];
gdjs.SubmitScreenCode.GDMenuObjects1= [];
gdjs.SubmitScreenCode.GDMenuObjects2= [];
gdjs.SubmitScreenCode.GDMenuObjects3= [];
gdjs.SubmitScreenCode.GDNicknameInputObjects1= [];
gdjs.SubmitScreenCode.GDNicknameInputObjects2= [];
gdjs.SubmitScreenCode.GDNicknameInputObjects3= [];
gdjs.SubmitScreenCode.GDYellowBackgroundObjects1= [];
gdjs.SubmitScreenCode.GDYellowBackgroundObjects2= [];
gdjs.SubmitScreenCode.GDYellowBackgroundObjects3= [];
gdjs.SubmitScreenCode.GDTransitionObjects1= [];
gdjs.SubmitScreenCode.GDTransitionObjects2= [];
gdjs.SubmitScreenCode.GDTransitionObjects3= [];


gdjs.SubmitScreenCode.eventsList0 = function(runtimeScene) {

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


};gdjs.SubmitScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17314684);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SubmitScreenCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.SubmitScreenCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("EnterScene", 255, 0, "linear", 0.5, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SubmitScreenCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SubmitScreenCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTransitionObjects1[i].setFillOpacity((gdjs.SubmitScreenCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("EnterScene")));
}
}}

}


};gdjs.SubmitScreenCode.asyncCallback17319188 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("NextScene")), false);
}gdjs.SubmitScreenCode.localVariables.length = 0;
}
gdjs.SubmitScreenCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.SubmitScreenCode.asyncCallback17319188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SubmitScreenCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(17317660);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SubmitScreenCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.SubmitScreenCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("LeaveScene", 0, 255, "linear", 0.5, false, false);
}
}
{ //Subevents
gdjs.SubmitScreenCode.eventsList2(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SubmitScreenCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SubmitScreenCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTransitionObjects1[i].setFillOpacity((gdjs.SubmitScreenCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("LeaveScene")));
}
}}

}


};gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDMenuObjects1Objects = Hashtable.newFrom({"Menu": gdjs.SubmitScreenCode.GDMenuObjects1});
gdjs.SubmitScreenCode.asyncCallback17260828 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}gdjs.SubmitScreenCode.localVariables.length = 0;
}
gdjs.SubmitScreenCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SubmitScreenCode.asyncCallback17260828(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SubmitScreenCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDSubmitObjects1Objects = Hashtable.newFrom({"Submit": gdjs.SubmitScreenCode.GDSubmitObjects1});
gdjs.SubmitScreenCode.asyncCallback17262252 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Preloader", false);
}gdjs.SubmitScreenCode.localVariables.length = 0;
}
gdjs.SubmitScreenCode.eventsList6 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.SubmitScreenCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.SubmitScreenCode.asyncCallback17262252(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.SubmitScreenCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("NicknameInput"), gdjs.SubmitScreenCode.GDNicknameInputObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(4).setString((( gdjs.SubmitScreenCode.GDNicknameInputObjects1.length === 0 ) ? "" :gdjs.SubmitScreenCode.GDNicknameInputObjects1[0].getText()));
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("name").setString(runtimeScene.getGame().getVariables().getFromIndex(4).getAsString());
}{runtimeScene.getGame().getVariables().getFromIndex(5).getChild("score").setNumber(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}{gdjs.evtTools.network.sendAsyncRequest("https://mts3-game.ru/addscore", gdjs.evtTools.network.variableStructureToJSON(runtimeScene.getGame().getVariables().getFromIndex(5)), "POST", "application/json", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
{ //Subevents
gdjs.SubmitScreenCode.eventsList6(runtimeScene);} //End of subevents
}

}


};gdjs.SubmitScreenCode.eventsList8 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.SubmitScreenCode.eventsList1(runtimeScene);} //End of subevents
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
gdjs.SubmitScreenCode.eventsList3(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.SubmitScreenCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.SubmitScreenCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.SubmitScreenCode.GDTransitionObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Menu"), gdjs.SubmitScreenCode.GDMenuObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDMenuObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList5(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Submit"), gdjs.SubmitScreenCode.GDSubmitObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.SubmitScreenCode.mapOfGDgdjs_9546SubmitScreenCode_9546GDSubmitObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.SubmitScreenCode.eventsList7(runtimeScene);} //End of subevents
}

}


};

gdjs.SubmitScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SubmitScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.SubmitScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.SubmitScreenCode.GDNewSpriteObjects3.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects1.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects2.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects3.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects1.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects2.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects3.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects1.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects2.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects3.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects3.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects1.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects2.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects3.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects1.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects2.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects3.length = 0;

gdjs.SubmitScreenCode.eventsList8(runtimeScene);
gdjs.SubmitScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.SubmitScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.SubmitScreenCode.GDNewSpriteObjects3.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects1.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects2.length = 0;
gdjs.SubmitScreenCode.GDinput_9595bgObjects3.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects1.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects2.length = 0;
gdjs.SubmitScreenCode.GDSubmitObjects3.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects1.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects2.length = 0;
gdjs.SubmitScreenCode.GDMenuObjects3.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects1.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects2.length = 0;
gdjs.SubmitScreenCode.GDNicknameInputObjects3.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects1.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects2.length = 0;
gdjs.SubmitScreenCode.GDYellowBackgroundObjects3.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects1.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects2.length = 0;
gdjs.SubmitScreenCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['SubmitScreenCode'] = gdjs.SubmitScreenCode;
