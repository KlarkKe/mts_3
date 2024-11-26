gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDld_9595bgObjects1= [];
gdjs.LeaderboardCode.GDld_9595bgObjects2= [];
gdjs.LeaderboardCode.GDBackButtonOutLBObjects1= [];
gdjs.LeaderboardCode.GDBackButtonOutLBObjects2= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects2= [];
gdjs.LeaderboardCode.GD_95951Objects1= [];
gdjs.LeaderboardCode.GD_95951Objects2= [];
gdjs.LeaderboardCode.GD_95952Objects1= [];
gdjs.LeaderboardCode.GD_95952Objects2= [];
gdjs.LeaderboardCode.GD_95953Objects1= [];
gdjs.LeaderboardCode.GD_95953Objects2= [];
gdjs.LeaderboardCode.GD_95954Objects1= [];
gdjs.LeaderboardCode.GD_95954Objects2= [];
gdjs.LeaderboardCode.GD_95955Objects1= [];
gdjs.LeaderboardCode.GD_95955Objects2= [];
gdjs.LeaderboardCode.GD_95956Objects1= [];
gdjs.LeaderboardCode.GD_95956Objects2= [];
gdjs.LeaderboardCode.GD_95957Objects1= [];
gdjs.LeaderboardCode.GD_95957Objects2= [];
gdjs.LeaderboardCode.GD_95958Objects1= [];
gdjs.LeaderboardCode.GD_95958Objects2= [];
gdjs.LeaderboardCode.GD_95959Objects1= [];
gdjs.LeaderboardCode.GD_95959Objects2= [];
gdjs.LeaderboardCode.GD_959510Objects1= [];
gdjs.LeaderboardCode.GD_959510Objects2= [];
gdjs.LeaderboardCode.GDYellowBackgroundObjects1= [];
gdjs.LeaderboardCode.GDYellowBackgroundObjects2= [];
gdjs.LeaderboardCode.GDTransitionObjects1= [];
gdjs.LeaderboardCode.GDTransitionObjects2= [];


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonOutLBObjects1Objects = Hashtable.newFrom({"BackButtonOutLB": gdjs.LeaderboardCode.GDBackButtonOutLBObjects1});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


};gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.LeaderboardCode.GDPlayerNameTextObjects2});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.LeaderboardCode.GDPlayerScoreTextObjects2});
gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtTools.network.sendAsyncRequest("https://mts3-game.ru/getscores", "", "GET", "", runtimeScene.getScene().getVariables().getFromIndex(0), gdjs.VariablesContainer.badVariable);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(0);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BackButtonOutLB"), gdjs.LeaderboardCode.GDBackButtonOutLBObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDBackButtonOutLBObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.LeaderboardCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.network.jsonToVariableStructure(runtimeScene.getScene().getVariables().getFromIndex(0).getAsString(), runtimeScene.getGame().getVariables().getFromIndex(8));
}}

}


{


const repeatCount2 = gdjs.evtTools.variable.getVariableChildCount(runtimeScene.getGame().getVariables().getFromIndex(8));
for (let repeatIndex2 = 0;repeatIndex2 < repeatCount2;++repeatIndex2) {
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;

gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) < 10;
if (isConditionTrue_0)
{
{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects, 100, 200 + runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() * 100, "Layer");
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects, 600, 200 + runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() * 100, "Layer");
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerNameTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getChild("name").getAsString());
}
}{for(var i = 0, len = gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length ;i < len;++i) {
    gdjs.LeaderboardCode.GDPlayerScoreTextObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(8).getChild(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber()).getChild("score").getAsString());
}
}{runtimeScene.getGame().getVariables().getFromIndex(7).add(1);
}}
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDld_9595bgObjects1.length = 0;
gdjs.LeaderboardCode.GDld_9595bgObjects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonOutLBObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GD_95951Objects1.length = 0;
gdjs.LeaderboardCode.GD_95951Objects2.length = 0;
gdjs.LeaderboardCode.GD_95952Objects1.length = 0;
gdjs.LeaderboardCode.GD_95952Objects2.length = 0;
gdjs.LeaderboardCode.GD_95953Objects1.length = 0;
gdjs.LeaderboardCode.GD_95953Objects2.length = 0;
gdjs.LeaderboardCode.GD_95954Objects1.length = 0;
gdjs.LeaderboardCode.GD_95954Objects2.length = 0;
gdjs.LeaderboardCode.GD_95955Objects1.length = 0;
gdjs.LeaderboardCode.GD_95955Objects2.length = 0;
gdjs.LeaderboardCode.GD_95956Objects1.length = 0;
gdjs.LeaderboardCode.GD_95956Objects2.length = 0;
gdjs.LeaderboardCode.GD_95957Objects1.length = 0;
gdjs.LeaderboardCode.GD_95957Objects2.length = 0;
gdjs.LeaderboardCode.GD_95958Objects1.length = 0;
gdjs.LeaderboardCode.GD_95958Objects2.length = 0;
gdjs.LeaderboardCode.GD_95959Objects1.length = 0;
gdjs.LeaderboardCode.GD_95959Objects2.length = 0;
gdjs.LeaderboardCode.GD_959510Objects1.length = 0;
gdjs.LeaderboardCode.GD_959510Objects2.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects2.length = 0;

gdjs.LeaderboardCode.eventsList2(runtimeScene);
gdjs.LeaderboardCode.GDld_9595bgObjects1.length = 0;
gdjs.LeaderboardCode.GDld_9595bgObjects2.length = 0;
gdjs.LeaderboardCode.GDBackButtonOutLBObjects1.length = 0;
gdjs.LeaderboardCode.GDBackButtonOutLBObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GD_95951Objects1.length = 0;
gdjs.LeaderboardCode.GD_95951Objects2.length = 0;
gdjs.LeaderboardCode.GD_95952Objects1.length = 0;
gdjs.LeaderboardCode.GD_95952Objects2.length = 0;
gdjs.LeaderboardCode.GD_95953Objects1.length = 0;
gdjs.LeaderboardCode.GD_95953Objects2.length = 0;
gdjs.LeaderboardCode.GD_95954Objects1.length = 0;
gdjs.LeaderboardCode.GD_95954Objects2.length = 0;
gdjs.LeaderboardCode.GD_95955Objects1.length = 0;
gdjs.LeaderboardCode.GD_95955Objects2.length = 0;
gdjs.LeaderboardCode.GD_95956Objects1.length = 0;
gdjs.LeaderboardCode.GD_95956Objects2.length = 0;
gdjs.LeaderboardCode.GD_95957Objects1.length = 0;
gdjs.LeaderboardCode.GD_95957Objects2.length = 0;
gdjs.LeaderboardCode.GD_95958Objects1.length = 0;
gdjs.LeaderboardCode.GD_95958Objects2.length = 0;
gdjs.LeaderboardCode.GD_95959Objects1.length = 0;
gdjs.LeaderboardCode.GD_95959Objects2.length = 0;
gdjs.LeaderboardCode.GD_959510Objects1.length = 0;
gdjs.LeaderboardCode.GD_959510Objects2.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects1.length = 0;
gdjs.LeaderboardCode.GDYellowBackgroundObjects2.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects1.length = 0;
gdjs.LeaderboardCode.GDTransitionObjects2.length = 0;


return;

}

gdjs['LeaderboardCode'] = gdjs.LeaderboardCode;
