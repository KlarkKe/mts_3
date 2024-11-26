gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.GDPlayObjects1= [];
gdjs.HomeCode.GDPlayObjects2= [];
gdjs.HomeCode.GDPlayObjects3= [];
gdjs.HomeCode.GDScoreTextObjects1= [];
gdjs.HomeCode.GDScoreTextObjects2= [];
gdjs.HomeCode.GDScoreTextObjects3= [];
gdjs.HomeCode.GDNewSpriteObjects1= [];
gdjs.HomeCode.GDNewSpriteObjects2= [];
gdjs.HomeCode.GDNewSpriteObjects3= [];
gdjs.HomeCode.GDlogo_9595mtsObjects1= [];
gdjs.HomeCode.GDlogo_9595mtsObjects2= [];
gdjs.HomeCode.GDlogo_9595mtsObjects3= [];
gdjs.HomeCode.GDLeaderboardObjects1= [];
gdjs.HomeCode.GDLeaderboardObjects2= [];
gdjs.HomeCode.GDLeaderboardObjects3= [];
gdjs.HomeCode.GDIntroPanelObjects1= [];
gdjs.HomeCode.GDIntroPanelObjects2= [];
gdjs.HomeCode.GDIntroPanelObjects3= [];
gdjs.HomeCode.GDIntroTextObjects1= [];
gdjs.HomeCode.GDIntroTextObjects2= [];
gdjs.HomeCode.GDIntroTextObjects3= [];
gdjs.HomeCode.GDMedievalButtonBrown2Objects1= [];
gdjs.HomeCode.GDMedievalButtonBrown2Objects2= [];
gdjs.HomeCode.GDMedievalButtonBrown2Objects3= [];
gdjs.HomeCode.GDDebugObjects1= [];
gdjs.HomeCode.GDDebugObjects2= [];
gdjs.HomeCode.GDDebugObjects3= [];
gdjs.HomeCode.GDNewSprite2Objects1= [];
gdjs.HomeCode.GDNewSprite2Objects2= [];
gdjs.HomeCode.GDNewSprite2Objects3= [];
gdjs.HomeCode.GDRoolObjects1= [];
gdjs.HomeCode.GDRoolObjects2= [];
gdjs.HomeCode.GDRoolObjects3= [];
gdjs.HomeCode.GDNewSprite3Objects1= [];
gdjs.HomeCode.GDNewSprite3Objects2= [];
gdjs.HomeCode.GDNewSprite3Objects3= [];
gdjs.HomeCode.GDYellowBackgroundObjects1= [];
gdjs.HomeCode.GDYellowBackgroundObjects2= [];
gdjs.HomeCode.GDYellowBackgroundObjects3= [];
gdjs.HomeCode.GDTransitionObjects1= [];
gdjs.HomeCode.GDTransitionObjects2= [];
gdjs.HomeCode.GDTransitionObjects3= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14117060);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("EnterScene", 255, 0, "linear", 0.5, false, false);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].setFillOpacity((gdjs.HomeCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("EnterScene")));
}
}}

}


};gdjs.HomeCode.asyncCallback14121548 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HomeCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().get("NextScene")), false);
}gdjs.HomeCode.localVariables.length = 0;
}
gdjs.HomeCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HomeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.HomeCode.asyncCallback14121548(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14120020);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects2[i].getBehavior("Tween").addValueTween("LeaveScene", 0, 255, "linear", 0.5, false, false);
}
}
{ //Subevents
gdjs.HomeCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].setFillOpacity((gdjs.HomeCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("LeaveScene")));
}
}}

}


};gdjs.HomeCode.eventsList3 = function(runtimeScene) {

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


};gdjs.HomeCode.asyncCallback13716524 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HomeCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.HomeCode.GDPlayObjects3);
{for(var i = 0, len = gdjs.HomeCode.GDPlayObjects3.length ;i < len;++i) {
    gdjs.HomeCode.GDPlayObjects3[i].activateBehavior("Buttons", true);
}
}gdjs.HomeCode.localVariables.length = 0;
}
gdjs.HomeCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HomeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.2), (runtimeScene) => (gdjs.HomeCode.asyncCallback13716524(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.HomeCode.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(13716284);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.hideLayer(runtimeScene, "UI");
}
{ //Subevents
gdjs.HomeCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.HomeCode.GDPlayObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDPlayObjects2[i].getBehavior("Buttons").Release((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDPlayObjects2[k] = gdjs.HomeCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDPlayObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDPlayObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDPlayObjects2[i].behaviorActivated("Buttons") ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDPlayObjects2[k] = gdjs.HomeCode.GDPlayObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDPlayObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
}{runtimeScene.getScene().getVariables().get("NextScene").setString("Game");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Rool"), gdjs.HomeCode.GDRoolObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDRoolObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDRoolObjects2[i].getBehavior("Buttons").Release((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDRoolObjects2[k] = gdjs.HomeCode.GDRoolObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDRoolObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDRoolObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDRoolObjects2[i].behaviorActivated("Buttons") ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDRoolObjects2[k] = gdjs.HomeCode.GDRoolObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDRoolObjects2.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
}{runtimeScene.getScene().getVariables().get("NextScene").setString("Rool");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("NewSprite3"), gdjs.HomeCode.GDNewSprite3Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDNewSprite3Objects1[i].getBehavior("Buttons").Release((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDNewSprite3Objects1[k] = gdjs.HomeCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDNewSprite3Objects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDNewSprite3Objects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDNewSprite3Objects1[i].behaviorActivated("Buttons") ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDNewSprite3Objects1[k] = gdjs.HomeCode.GDNewSprite3Objects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDNewSprite3Objects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
}{runtimeScene.getScene().getVariables().get("NextScene").setString("Leaderboard");
}}

}


};gdjs.HomeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(3)) == "CanPlay";
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList5(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.eventsList7 = function(runtimeScene) {

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
gdjs.HomeCode.eventsList0(runtimeScene);} //End of subevents
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
gdjs.HomeCode.eventsList2(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.HomeCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Play"), gdjs.HomeCode.GDPlayObjects1);
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), false);
}{runtimeScene.getScene().getVariables().getFromIndex(3).setString("CanPlay");
}{for(var i = 0, len = gdjs.HomeCode.GDPlayObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDPlayObjects1[i].activateBehavior("Buttons", false);
}
}}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Transition"), gdjs.HomeCode.GDTransitionObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].setFillOpacity((gdjs.HomeCode.GDTransitionObjects1[i].getBehavior("Tween").getValue("Test")));
}
}{for(var i = 0, len = gdjs.HomeCode.GDTransitionObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDTransitionObjects1[i].drawRectangle(0, 0, gdjs.evtTools.window.getGameResolutionWidth(runtimeScene), gdjs.evtTools.window.getGameResolutionHeight(runtimeScene));
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


{


gdjs.HomeCode.eventsList6(runtimeScene);
}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDPlayObjects1.length = 0;
gdjs.HomeCode.GDPlayObjects2.length = 0;
gdjs.HomeCode.GDPlayObjects3.length = 0;
gdjs.HomeCode.GDScoreTextObjects1.length = 0;
gdjs.HomeCode.GDScoreTextObjects2.length = 0;
gdjs.HomeCode.GDScoreTextObjects3.length = 0;
gdjs.HomeCode.GDNewSpriteObjects1.length = 0;
gdjs.HomeCode.GDNewSpriteObjects2.length = 0;
gdjs.HomeCode.GDNewSpriteObjects3.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects1.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects2.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects3.length = 0;
gdjs.HomeCode.GDLeaderboardObjects1.length = 0;
gdjs.HomeCode.GDLeaderboardObjects2.length = 0;
gdjs.HomeCode.GDLeaderboardObjects3.length = 0;
gdjs.HomeCode.GDIntroPanelObjects1.length = 0;
gdjs.HomeCode.GDIntroPanelObjects2.length = 0;
gdjs.HomeCode.GDIntroPanelObjects3.length = 0;
gdjs.HomeCode.GDIntroTextObjects1.length = 0;
gdjs.HomeCode.GDIntroTextObjects2.length = 0;
gdjs.HomeCode.GDIntroTextObjects3.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects1.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects2.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects3.length = 0;
gdjs.HomeCode.GDDebugObjects1.length = 0;
gdjs.HomeCode.GDDebugObjects2.length = 0;
gdjs.HomeCode.GDDebugObjects3.length = 0;
gdjs.HomeCode.GDNewSprite2Objects1.length = 0;
gdjs.HomeCode.GDNewSprite2Objects2.length = 0;
gdjs.HomeCode.GDNewSprite2Objects3.length = 0;
gdjs.HomeCode.GDRoolObjects1.length = 0;
gdjs.HomeCode.GDRoolObjects2.length = 0;
gdjs.HomeCode.GDRoolObjects3.length = 0;
gdjs.HomeCode.GDNewSprite3Objects1.length = 0;
gdjs.HomeCode.GDNewSprite3Objects2.length = 0;
gdjs.HomeCode.GDNewSprite3Objects3.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects1.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects2.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects3.length = 0;
gdjs.HomeCode.GDTransitionObjects1.length = 0;
gdjs.HomeCode.GDTransitionObjects2.length = 0;
gdjs.HomeCode.GDTransitionObjects3.length = 0;

gdjs.HomeCode.eventsList7(runtimeScene);
gdjs.HomeCode.GDPlayObjects1.length = 0;
gdjs.HomeCode.GDPlayObjects2.length = 0;
gdjs.HomeCode.GDPlayObjects3.length = 0;
gdjs.HomeCode.GDScoreTextObjects1.length = 0;
gdjs.HomeCode.GDScoreTextObjects2.length = 0;
gdjs.HomeCode.GDScoreTextObjects3.length = 0;
gdjs.HomeCode.GDNewSpriteObjects1.length = 0;
gdjs.HomeCode.GDNewSpriteObjects2.length = 0;
gdjs.HomeCode.GDNewSpriteObjects3.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects1.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects2.length = 0;
gdjs.HomeCode.GDlogo_9595mtsObjects3.length = 0;
gdjs.HomeCode.GDLeaderboardObjects1.length = 0;
gdjs.HomeCode.GDLeaderboardObjects2.length = 0;
gdjs.HomeCode.GDLeaderboardObjects3.length = 0;
gdjs.HomeCode.GDIntroPanelObjects1.length = 0;
gdjs.HomeCode.GDIntroPanelObjects2.length = 0;
gdjs.HomeCode.GDIntroPanelObjects3.length = 0;
gdjs.HomeCode.GDIntroTextObjects1.length = 0;
gdjs.HomeCode.GDIntroTextObjects2.length = 0;
gdjs.HomeCode.GDIntroTextObjects3.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects1.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects2.length = 0;
gdjs.HomeCode.GDMedievalButtonBrown2Objects3.length = 0;
gdjs.HomeCode.GDDebugObjects1.length = 0;
gdjs.HomeCode.GDDebugObjects2.length = 0;
gdjs.HomeCode.GDDebugObjects3.length = 0;
gdjs.HomeCode.GDNewSprite2Objects1.length = 0;
gdjs.HomeCode.GDNewSprite2Objects2.length = 0;
gdjs.HomeCode.GDNewSprite2Objects3.length = 0;
gdjs.HomeCode.GDRoolObjects1.length = 0;
gdjs.HomeCode.GDRoolObjects2.length = 0;
gdjs.HomeCode.GDRoolObjects3.length = 0;
gdjs.HomeCode.GDNewSprite3Objects1.length = 0;
gdjs.HomeCode.GDNewSprite3Objects2.length = 0;
gdjs.HomeCode.GDNewSprite3Objects3.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects1.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects2.length = 0;
gdjs.HomeCode.GDYellowBackgroundObjects3.length = 0;
gdjs.HomeCode.GDTransitionObjects1.length = 0;
gdjs.HomeCode.GDTransitionObjects2.length = 0;
gdjs.HomeCode.GDTransitionObjects3.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
