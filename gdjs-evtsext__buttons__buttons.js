
gdjs.evtsExt__Buttons__Buttons = gdjs.evtsExt__Buttons__Buttons || {};

/**
 * Behavior generated from Button
 */
gdjs.evtsExt__Buttons__Buttons.Buttons = class Buttons extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__Buttons__Buttons.Buttons.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.AllowToucheEffect = behaviorData.AllowToucheEffect !== undefined ? behaviorData.AllowToucheEffect : false;
    this._behaviorData.ToucheEffect = behaviorData.ToucheEffect !== undefined ? behaviorData.ToucheEffect : "";
    this._behaviorData.AllowClickEffect = behaviorData.AllowClickEffect !== undefined ? behaviorData.AllowClickEffect : false;
    this._behaviorData.ClickEffect = behaviorData.ClickEffect !== undefined ? behaviorData.ClickEffect : "";
    this._behaviorData.AllowColorClickEffect = behaviorData.AllowColorClickEffect !== undefined ? behaviorData.AllowColorClickEffect : true;
    this._behaviorData.Tween = behaviorData.Tween !== undefined ? behaviorData.Tween : "";
    this._behaviorData.ButtonText = behaviorData.ButtonText !== undefined ? behaviorData.ButtonText : "Button";
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.AllowToucheEffect !== newBehaviorData.AllowToucheEffect)
      this._behaviorData.AllowToucheEffect = newBehaviorData.AllowToucheEffect;
    if (oldBehaviorData.ToucheEffect !== newBehaviorData.ToucheEffect)
      this._behaviorData.ToucheEffect = newBehaviorData.ToucheEffect;
    if (oldBehaviorData.AllowClickEffect !== newBehaviorData.AllowClickEffect)
      this._behaviorData.AllowClickEffect = newBehaviorData.AllowClickEffect;
    if (oldBehaviorData.ClickEffect !== newBehaviorData.ClickEffect)
      this._behaviorData.ClickEffect = newBehaviorData.ClickEffect;
    if (oldBehaviorData.AllowColorClickEffect !== newBehaviorData.AllowColorClickEffect)
      this._behaviorData.AllowColorClickEffect = newBehaviorData.AllowColorClickEffect;
    if (oldBehaviorData.Tween !== newBehaviorData.Tween)
      this._behaviorData.Tween = newBehaviorData.Tween;
    if (oldBehaviorData.ButtonText !== newBehaviorData.ButtonText)
      this._behaviorData.ButtonText = newBehaviorData.ButtonText;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    AllowToucheEffect: this._behaviorData.AllowToucheEffect,
    ToucheEffect: this._behaviorData.ToucheEffect,
    AllowClickEffect: this._behaviorData.AllowClickEffect,
    ClickEffect: this._behaviorData.ClickEffect,
    AllowColorClickEffect: this._behaviorData.AllowColorClickEffect,
    Tween: this._behaviorData.Tween,
    ButtonText: this._behaviorData.ButtonText,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.AllowToucheEffect !== undefined)
      this._behaviorData.AllowToucheEffect = networkSyncData.props.AllowToucheEffect;
    if (networkSyncData.props.ToucheEffect !== undefined)
      this._behaviorData.ToucheEffect = networkSyncData.props.ToucheEffect;
    if (networkSyncData.props.AllowClickEffect !== undefined)
      this._behaviorData.AllowClickEffect = networkSyncData.props.AllowClickEffect;
    if (networkSyncData.props.ClickEffect !== undefined)
      this._behaviorData.ClickEffect = networkSyncData.props.ClickEffect;
    if (networkSyncData.props.AllowColorClickEffect !== undefined)
      this._behaviorData.AllowColorClickEffect = networkSyncData.props.AllowColorClickEffect;
    if (networkSyncData.props.Tween !== undefined)
      this._behaviorData.Tween = networkSyncData.props.Tween;
    if (networkSyncData.props.ButtonText !== undefined)
      this._behaviorData.ButtonText = networkSyncData.props.ButtonText;
  }

  // Properties:
  
  _getAllowToucheEffect() {
    return this._behaviorData.AllowToucheEffect !== undefined ? this._behaviorData.AllowToucheEffect : false;
  }
  _setAllowToucheEffect(newValue) {
    this._behaviorData.AllowToucheEffect = newValue;
  }
  _toggleAllowToucheEffect() {
    this._setAllowToucheEffect(!this._getAllowToucheEffect());
  }
  _getToucheEffect() {
    return this._behaviorData.ToucheEffect !== undefined ? this._behaviorData.ToucheEffect : "";
  }
  _setToucheEffect(newValue) {
    this._behaviorData.ToucheEffect = newValue;
  }
  _getAllowClickEffect() {
    return this._behaviorData.AllowClickEffect !== undefined ? this._behaviorData.AllowClickEffect : false;
  }
  _setAllowClickEffect(newValue) {
    this._behaviorData.AllowClickEffect = newValue;
  }
  _toggleAllowClickEffect() {
    this._setAllowClickEffect(!this._getAllowClickEffect());
  }
  _getClickEffect() {
    return this._behaviorData.ClickEffect !== undefined ? this._behaviorData.ClickEffect : "";
  }
  _setClickEffect(newValue) {
    this._behaviorData.ClickEffect = newValue;
  }
  _getAllowColorClickEffect() {
    return this._behaviorData.AllowColorClickEffect !== undefined ? this._behaviorData.AllowColorClickEffect : true;
  }
  _setAllowColorClickEffect(newValue) {
    this._behaviorData.AllowColorClickEffect = newValue;
  }
  _toggleAllowColorClickEffect() {
    this._setAllowColorClickEffect(!this._getAllowColorClickEffect());
  }
  _getTween() {
    return this._behaviorData.Tween !== undefined ? this._behaviorData.Tween : "";
  }
  _setTween(newValue) {
    this._behaviorData.Tween = newValue;
  }
  _getButtonText() {
    return this._behaviorData.ButtonText !== undefined ? this._behaviorData.ButtonText : "Button";
  }
  _setButtonText(newValue) {
    this._behaviorData.ButtonText = newValue;
  }
}

/**
 * Shared data generated from Button
 */
gdjs.evtsExt__Buttons__Buttons.Buttons.SharedData = class ButtonsSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__Buttons__Buttons.Buttons.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._Buttons_ButtonsSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._Buttons_ButtonsSharedData = new gdjs.evtsExt__Buttons__Buttons.Buttons.SharedData(
      initialData
    );
  }
  return instanceContainer._Buttons_ButtonsSharedData;
}

// Methods:
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachIndex2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachObjects2 = [];

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachTemporary2 = null;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachTotalCount2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects4= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustResumed(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getScaleX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getScaleY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__InitPosition__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__")).setNumber(1);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13575580);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getScaleX()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getScaleY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__InitPosition__")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getPointY("")));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__")).setNumber(1);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects3Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13577908);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects3Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__"))) * 1.1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__"))) * 1.1, "easeOutQuad", 75, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__"), 1.1, 1.1, "easeOutQuad", 75, false);
}
}}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Release__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleX__"))) * 1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleY__"))) * 1, "easeOutQuad", 100, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text1", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__TextScale__"), 1, 1, "easeOutQuad", 100, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleX__"))) * 1.1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleY__"))) * 1.1, "bouncePast", 50, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__TextScale__"), 1.1, 1.1, "bouncePast", 50, false);
}
}}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Release__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__ScaleX__"))) * 1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__ScaleY__"))) * 1, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text1", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__TextScale__"), 1, 1, "bouncePast", 100, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList3 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToucheEffect() == "Zoom In" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getToucheEffect() == "Bounce" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList4 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__"))) * 1.1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__"))) * 1.1, "easeOutQuad", 75, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__"), 1.1, 1.1, "easeOutQuad", 75, false);
}
}}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleX__"))) * 1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleY__"))) * 1, "easeOutQuad", 100, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text1", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__TextScale__"), 1, 1, "easeOutQuad", 100, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList5 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13585460);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__"))) * 0.95, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__"))) * 0.95, "easeOutQuad", 50, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__"), 0.95, 0.95, "easeOutQuad", 50, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList4(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList6 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList5(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList7 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__"))) * 1.1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__"))) * 1.1, "bouncePast", 75, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__"), 1.1, 1.1, "bouncePast", 75, false);
}
}}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( !(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleX__"))) * 1, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__ScaleY__"))) * 1, "bouncePast", 100, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text1", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__TextScale__"), 1, 1, "bouncePast", 100, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList8 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectScaleTween("__Touche__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleX__"))) * 0.95, (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__ScaleY__"))) * 0.95, "bouncePast", 50, false, true);
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addVariableTween("Text", gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__TextScale__"), 0.95, 0.95, "bouncePast", 50, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList7(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList9 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList8(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList10 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween("__Click__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3[i].getVariables().get("__InitPosition__"))) + 4, "bouncePast", 10, false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween("__Click__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getVariables().get("__InitPosition__"))), "bouncePast", 50, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList11 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList10(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Tween")).addObjectPositionYTween("__Click__", (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getVariables().get("__InitPosition__"))), "bouncePast", 50, false);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList12 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClickEffect() == "Zoom Out" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList6(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClickEffect() == "Bounce" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList9(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getClickEffect() == "Move Down" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList11(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList13 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13600780);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].setColor("116;116;116");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].setColor("255;255;255");
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList14 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects2Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2[i].setColor("255;255;255");
}
}}

}


{

/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546doStepPreEventsContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList13(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList15 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachIndex2) {
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList3(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowClickEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList12(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowColorClickEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList14(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
this._onceTriggers.startNewFrame();
var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.eventsList15(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.doStepPreEventsContext.GDObjectObjects4.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546JustPressedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13603740);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546JustPressedContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.JustPressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects, runtimeScene, true, true);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13606260);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
}
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546PressedContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.Pressed = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.PressedContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546ReleaseContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546ReleaseContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.Release = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ReleaseContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546On_9595OffContext_9546GDObjectObjects1Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13611684);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariables().get("__switch__")).mul(-(1));
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariables().get("__switch__")).setNumber(1);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546On_9595OffContext_9546GDObjectObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariables().get("__switch__")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i].getVariables().get("__switch__")) == -(1) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = false; }}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_Off = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.On_OffContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachObjects2 = [];

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTemporary2 = null;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTotalCount2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects4= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects4= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddTextObjectContext_9546GDTextButtonObjects3Objects = Hashtable.newFrom({"TextButton": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3);

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddTextObjectContext_9546GDTextButtonObjects3Objects, (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0].getPointX("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0].getPointY("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3[i].setZOrder((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0].getZOrder()) + 1);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0] : null), (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3[0] : null));
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddTextObjectContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3[i].setScale((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3[0].getVariables()).get("__TextScale__"))));
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2) {
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("TextButton"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddTextObjectContext_9546GDObjectObjects2Objects, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[i].setCenterPositionInScene((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2[0].getAABBCenterX()),(( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2[0].getAABBCenterY()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[i].setString((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getButtonText()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[i].setTextAlignment("center");
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[i].setWrappingWidth((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2[i].setWrapping(true);
}
}
{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObject = function(TextButton, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextButton": TextButton
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextButton": gdjs.objectsListsToArray(TextButton)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects4.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddTextObjectContext.GDTextButtonObjects4.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachObjects2 = [];

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTemporary2 = null;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTotalCount2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects4= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects4= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBBTextObjectContext_9546GDTextButtonObjects3Objects = Hashtable.newFrom({"TextButton": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3);

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBBTextObjectContext_9546GDTextButtonObjects3Objects, (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getPointX("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getPointY("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3[i].setZOrder((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getZOrder()) + 1);
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0] : null), (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[i].getVariables().get("__Size__")).setNumber((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3[0].getFontSize()));
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBBTextObjectContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3[i].setFontSize((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getVariables()).get("__Size__"))) * (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3[0].getVariables()).get("__TextScale__"))));
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2) {
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("TextButton"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBBTextObjectContext_9546GDObjectObjects2Objects, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[i].setCenterPositionInScene((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2[0].getCenterXInScene()),(( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2[0].getCenterYInScene()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[i].setBBText((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getButtonText()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[i].setAlignment("");
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[i].setWrappingWidth((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2[i].setWordWrap(true);
}
}
{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObject = function(TextButton, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextButton": TextButton
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextButton": gdjs.objectsListsToArray(TextButton)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects4.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBBTextObjectContext.GDTextButtonObjects4.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachObjects2 = [];

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTemporary2 = null;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTotalCount2 = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects4= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects4= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBitmapTextObjectContext_9546GDTextButtonObjects3Objects = Hashtable.newFrom({"TextButton": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3);

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBitmapTextObjectContext_9546GDTextButtonObjects3Objects, (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getPointX("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getPointY("")), (( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getLayer()));
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getVariables().get("init_Scale")).setNumber((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getScale()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getVariables().get("__IDo__")).setNumber((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getVariables()).get("__IDo__"))));
}
}{gdjs.evtTools.linkedObjects.linkObjects(runtimeScene, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0] : null), (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[0] : null));
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].setZOrder((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getZOrder()) + 1);
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBitmapTextObjectContext_9546GDObjectObjects2Objects = Hashtable.newFrom({"Object": gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2});
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getVariables().get("__IDo__")) == (gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getVariables()).get("__IDo__"))) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3 */
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].setCenterXInScene((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getCenterXInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13628804);
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].setCenterYInScene((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getCenterYInScene()));
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3);

gdjs.copyArray(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3);

{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].setScale((gdjs.RuntimeObject.getVariableNumber(((gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getVariables()).get("__TextScale__"))) * (gdjs.RuntimeObject.getVariableNumber(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].getVariables().get("init_Scale"))));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3[i].setText((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length === 0 ) ? "" :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getButtonText()));
}
}}

}


};gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].getVariables().get("__CanID__"), true);
}
}{runtimeScene.getScene().getVariables().get("__GetID__").setNumber(0);
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].getVariableBoolean(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].getVariables().get("__CanID__"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].returnVariable(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].getVariables().get("__IDo__")).setNumber(gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("__GetID__")));
}
}{runtimeScene.getScene().getVariables().get("__GetID__").add(1);
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].setVariableBoolean(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[i].getVariables().get("__CanID__"), false);
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2) {
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
if (true) {

{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList0(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("TextButton"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1);

for (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2 = 0;gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2 < gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1.length;++gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length = 0;


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTemporary2 = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1[gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachIndex2];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.push(gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.linkedObjects.pickObjectsLinkedTo(runtimeScene, gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.mapOfGDgdjs_9546evtsExt_9595_9595Buttons_9595_9595Buttons_9546Buttons_9546prototype_9546AddBitmapTextObjectContext_9546GDObjectObjects2Objects, (gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length !== 0 ? gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2[0] : null), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2[i].setAlignment("center");
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2[i].setWrappingWidth((( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2.length === 0 ) ? 0 :gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2[0].getWidth()));
}
}{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2[i].setWordWrap(true);
}
}
{ //Subevents: 
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList1(runtimeScene, eventsFunctionContext);} //Subevents end.
}
}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObject = function(TextButton, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "TextButton": TextButton
},
  _objectArraysMap: {
"Object": thisObjectList
, "TextButton": gdjs.objectsListsToArray(TextButton)
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects4.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDObjectObjects4.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects2.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects3.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AddBitmapTextObjectContext.GDTextButtonObjects4.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setButtonText((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("NewText") : ""));
}
}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButton = function(NewText, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
if (argName === "NewText") return NewText;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.ChangeTextButtonContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowToucheEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowToucheEffectContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAllowToucheEffect(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAllowToucheEffect(true);
}
}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffect = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowToucheEffectContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getAllowClickEffect() ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1[k] = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = true; }}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffect = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.AllowClickEffectContext.GDObjectObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext = {};
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1= [];
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects2= [];


gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !(typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAllowClickEffect(false);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (typeof eventsFunctionContext !== 'undefined' ? !!eventsFunctionContext.getArgument("Value") : false);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setAllowClickEffect(true);
}
}}

}


};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffect = function(Value, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._runtimeScene;
var thisObjectList = [this.owner];
var Object = Hashtable.newFrom({Object: thisObjectList});
var Behavior = this.name;
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
},
  _objectArraysMap: {
"Object": thisObjectList
},
  _behaviorNamesMap: {
"Behavior": Behavior
, "Tween": this._getTween()
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Buttons"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Buttons"),
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
if (argName === "Value") return Value;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Buttons__Buttons.Buttons.prototype.SetAllowClickEffectContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("Buttons::Buttons", gdjs.evtsExt__Buttons__Buttons.Buttons);
