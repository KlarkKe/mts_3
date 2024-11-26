gdjs.LeaderboardCode = {};
gdjs.LeaderboardCode.localVariables = [];
gdjs.LeaderboardCode.GDld_9595bgObjects1= [];
gdjs.LeaderboardCode.GDld_9595bgObjects2= [];
gdjs.LeaderboardCode.GDback_9595buttonObjects1= [];
gdjs.LeaderboardCode.GDback_9595buttonObjects2= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerNameTextObjects2= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1= [];
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2= [];
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


gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerNameTextObjects2Objects = Hashtable.newFrom({"PlayerNameText": gdjs.LeaderboardCode.GDPlayerNameTextObjects2});
gdjs.LeaderboardCode.mapOfGDgdjs_9546LeaderboardCode_9546GDPlayerScoreTextObjects2Objects = Hashtable.newFrom({"PlayerScoreText": gdjs.LeaderboardCode.GDPlayerScoreTextObjects2});
gdjs.LeaderboardCode.eventsList0 = function(runtimeScene) {

};gdjs.LeaderboardCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("back_button"), gdjs.LeaderboardCode.GDback_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDback_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDback_9595buttonObjects1[i].getBehavior("Buttons").Release((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDback_9595buttonObjects1[k] = gdjs.LeaderboardCode.GDback_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDback_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.LeaderboardCode.GDback_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.LeaderboardCode.GDback_9595buttonObjects1[i].behaviorActivated("Buttons") ) {
        isConditionTrue_0 = true;
        gdjs.LeaderboardCode.GDback_9595buttonObjects1[k] = gdjs.LeaderboardCode.GDback_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.LeaderboardCode.GDback_9595buttonObjects1.length = k;
}
if (isConditionTrue_0) {
{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().get("ChangeScene"), true);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Home", false);
}}

}


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


};

gdjs.LeaderboardCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.LeaderboardCode.GDld_9595bgObjects1.length = 0;
gdjs.LeaderboardCode.GDld_9595bgObjects2.length = 0;
gdjs.LeaderboardCode.GDback_9595buttonObjects1.length = 0;
gdjs.LeaderboardCode.GDback_9595buttonObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
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

gdjs.LeaderboardCode.eventsList1(runtimeScene);
gdjs.LeaderboardCode.GDld_9595bgObjects1.length = 0;
gdjs.LeaderboardCode.GDld_9595bgObjects2.length = 0;
gdjs.LeaderboardCode.GDback_9595buttonObjects1.length = 0;
gdjs.LeaderboardCode.GDback_9595buttonObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerNameTextObjects2.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects1.length = 0;
gdjs.LeaderboardCode.GDPlayerScoreTextObjects2.length = 0;
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
