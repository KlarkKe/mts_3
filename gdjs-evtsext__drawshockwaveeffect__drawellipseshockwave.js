
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave || {};

/**
 * Behavior generated from Draw shock waves in ellipse
 */
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave = class DrawEllipseShockWave extends gdjs.RuntimeBehavior {
  constructor(instanceContainer, behaviorData, owner) {
    super(instanceContainer, behaviorData, owner);
    this._runtimeScene = instanceContainer;

    this._onceTriggers = new gdjs.OnceTriggers();
    this._behaviorData = {};
    this._sharedData = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.getSharedData(
      instanceContainer,
      behaviorData.name
    );
    
    this._behaviorData.Start1Width = behaviorData.Start1Width !== undefined ? behaviorData.Start1Width : Number("8") || 0;
    this._behaviorData.Start1Height = behaviorData.Start1Height !== undefined ? behaviorData.Start1Height : Number("8") || 0;
    this._behaviorData.Start3Outline = behaviorData.Start3Outline !== undefined ? behaviorData.Start3Outline : Number("16") || 0;
    this._behaviorData.Start2Color = behaviorData.Start2Color !== undefined ? behaviorData.Start2Color : "255;255;255";
    this._behaviorData.Start2Opacity = behaviorData.Start2Opacity !== undefined ? behaviorData.Start2Opacity : Number("255") || 0;
    this._behaviorData.Start6Angle = behaviorData.Start6Angle !== undefined ? behaviorData.Start6Angle : Number("0") || 0;
    this._behaviorData.End1Width = behaviorData.End1Width !== undefined ? behaviorData.End1Width : Number("64") || 0;
    this._behaviorData.End1Height = behaviorData.End1Height !== undefined ? behaviorData.End1Height : Number("64") || 0;
    this._behaviorData.End3Outline = behaviorData.End3Outline !== undefined ? behaviorData.End3Outline : Number("0") || 0;
    this._behaviorData.End2Color = behaviorData.End2Color !== undefined ? behaviorData.End2Color : "255;217;154";
    this._behaviorData.End2Opacity = behaviorData.End2Opacity !== undefined ? behaviorData.End2Opacity : Number("255") || 0;
    this._behaviorData.End6Angle = behaviorData.End6Angle !== undefined ? behaviorData.End6Angle : Number("0") || 0;
    this._behaviorData.Duration = behaviorData.Duration !== undefined ? behaviorData.Duration : Number("1") || 0;
    this._behaviorData.TweenName = behaviorData.TweenName !== undefined ? behaviorData.TweenName : "easeOutSine";
    this._behaviorData.Width = Number("") || 0;
    this._behaviorData.Height = Number("") || 0;
    this._behaviorData.Outline = Number("") || 0;
    this._behaviorData.Color = "";
    this._behaviorData.Angle = Number("") || 0;
    this._behaviorData.Type = behaviorData.Type !== undefined ? behaviorData.Type : "";
    this._behaviorData.CurrentWidth = Number("") || 0;
    this._behaviorData.CurrentHeight = Number("") || 0;
    this._behaviorData.CurrentOutline = Number("") || 0;
    this._behaviorData.CurrentOpacity = Number("") || 0;
    this._behaviorData.CurrentAngle = Number("") || 0;
    this._behaviorData.CurrentRed = Number("") || 0;
    this._behaviorData.CurrentGreen = Number("") || 0;
    this._behaviorData.CurrentBlue = Number("") || 0;
    this._behaviorData.Pond = Number("0") || 0;
  }

  // Hot-reload:
  updateFromBehaviorData(oldBehaviorData, newBehaviorData) {
    
    if (oldBehaviorData.Start1Width !== newBehaviorData.Start1Width)
      this._behaviorData.Start1Width = newBehaviorData.Start1Width;
    if (oldBehaviorData.Start1Height !== newBehaviorData.Start1Height)
      this._behaviorData.Start1Height = newBehaviorData.Start1Height;
    if (oldBehaviorData.Start3Outline !== newBehaviorData.Start3Outline)
      this._behaviorData.Start3Outline = newBehaviorData.Start3Outline;
    if (oldBehaviorData.Start2Color !== newBehaviorData.Start2Color)
      this._behaviorData.Start2Color = newBehaviorData.Start2Color;
    if (oldBehaviorData.Start2Opacity !== newBehaviorData.Start2Opacity)
      this._behaviorData.Start2Opacity = newBehaviorData.Start2Opacity;
    if (oldBehaviorData.Start6Angle !== newBehaviorData.Start6Angle)
      this._behaviorData.Start6Angle = newBehaviorData.Start6Angle;
    if (oldBehaviorData.End1Width !== newBehaviorData.End1Width)
      this._behaviorData.End1Width = newBehaviorData.End1Width;
    if (oldBehaviorData.End1Height !== newBehaviorData.End1Height)
      this._behaviorData.End1Height = newBehaviorData.End1Height;
    if (oldBehaviorData.End3Outline !== newBehaviorData.End3Outline)
      this._behaviorData.End3Outline = newBehaviorData.End3Outline;
    if (oldBehaviorData.End2Color !== newBehaviorData.End2Color)
      this._behaviorData.End2Color = newBehaviorData.End2Color;
    if (oldBehaviorData.End2Opacity !== newBehaviorData.End2Opacity)
      this._behaviorData.End2Opacity = newBehaviorData.End2Opacity;
    if (oldBehaviorData.End6Angle !== newBehaviorData.End6Angle)
      this._behaviorData.End6Angle = newBehaviorData.End6Angle;
    if (oldBehaviorData.Duration !== newBehaviorData.Duration)
      this._behaviorData.Duration = newBehaviorData.Duration;
    if (oldBehaviorData.TweenName !== newBehaviorData.TweenName)
      this._behaviorData.TweenName = newBehaviorData.TweenName;
    if (oldBehaviorData.Width !== newBehaviorData.Width)
      this._behaviorData.Width = newBehaviorData.Width;
    if (oldBehaviorData.Height !== newBehaviorData.Height)
      this._behaviorData.Height = newBehaviorData.Height;
    if (oldBehaviorData.Outline !== newBehaviorData.Outline)
      this._behaviorData.Outline = newBehaviorData.Outline;
    if (oldBehaviorData.Color !== newBehaviorData.Color)
      this._behaviorData.Color = newBehaviorData.Color;
    if (oldBehaviorData.Angle !== newBehaviorData.Angle)
      this._behaviorData.Angle = newBehaviorData.Angle;
    if (oldBehaviorData.Type !== newBehaviorData.Type)
      this._behaviorData.Type = newBehaviorData.Type;
    if (oldBehaviorData.CurrentWidth !== newBehaviorData.CurrentWidth)
      this._behaviorData.CurrentWidth = newBehaviorData.CurrentWidth;
    if (oldBehaviorData.CurrentHeight !== newBehaviorData.CurrentHeight)
      this._behaviorData.CurrentHeight = newBehaviorData.CurrentHeight;
    if (oldBehaviorData.CurrentOutline !== newBehaviorData.CurrentOutline)
      this._behaviorData.CurrentOutline = newBehaviorData.CurrentOutline;
    if (oldBehaviorData.CurrentOpacity !== newBehaviorData.CurrentOpacity)
      this._behaviorData.CurrentOpacity = newBehaviorData.CurrentOpacity;
    if (oldBehaviorData.CurrentAngle !== newBehaviorData.CurrentAngle)
      this._behaviorData.CurrentAngle = newBehaviorData.CurrentAngle;
    if (oldBehaviorData.CurrentRed !== newBehaviorData.CurrentRed)
      this._behaviorData.CurrentRed = newBehaviorData.CurrentRed;
    if (oldBehaviorData.CurrentGreen !== newBehaviorData.CurrentGreen)
      this._behaviorData.CurrentGreen = newBehaviorData.CurrentGreen;
    if (oldBehaviorData.CurrentBlue !== newBehaviorData.CurrentBlue)
      this._behaviorData.CurrentBlue = newBehaviorData.CurrentBlue;
    if (oldBehaviorData.Pond !== newBehaviorData.Pond)
      this._behaviorData.Pond = newBehaviorData.Pond;

    return true;
  }

  // Network sync:
  getNetworkSyncData() {
    return {
      ...super.getNetworkSyncData(),
      props: {
        
    Start1Width: this._behaviorData.Start1Width,
    Start1Height: this._behaviorData.Start1Height,
    Start3Outline: this._behaviorData.Start3Outline,
    Start2Color: this._behaviorData.Start2Color,
    Start2Opacity: this._behaviorData.Start2Opacity,
    Start6Angle: this._behaviorData.Start6Angle,
    End1Width: this._behaviorData.End1Width,
    End1Height: this._behaviorData.End1Height,
    End3Outline: this._behaviorData.End3Outline,
    End2Color: this._behaviorData.End2Color,
    End2Opacity: this._behaviorData.End2Opacity,
    End6Angle: this._behaviorData.End6Angle,
    Duration: this._behaviorData.Duration,
    TweenName: this._behaviorData.TweenName,
    Width: this._behaviorData.Width,
    Height: this._behaviorData.Height,
    Outline: this._behaviorData.Outline,
    Color: this._behaviorData.Color,
    Angle: this._behaviorData.Angle,
    Type: this._behaviorData.Type,
    CurrentWidth: this._behaviorData.CurrentWidth,
    CurrentHeight: this._behaviorData.CurrentHeight,
    CurrentOutline: this._behaviorData.CurrentOutline,
    CurrentOpacity: this._behaviorData.CurrentOpacity,
    CurrentAngle: this._behaviorData.CurrentAngle,
    CurrentRed: this._behaviorData.CurrentRed,
    CurrentGreen: this._behaviorData.CurrentGreen,
    CurrentBlue: this._behaviorData.CurrentBlue,
    Pond: this._behaviorData.Pond,
      }
    };
  }
  updateFromNetworkSyncData(networkSyncData) {
    super.updateFromNetworkSyncData(networkSyncData);
    
    if (networkSyncData.props.Start1Width !== undefined)
      this._behaviorData.Start1Width = networkSyncData.props.Start1Width;
    if (networkSyncData.props.Start1Height !== undefined)
      this._behaviorData.Start1Height = networkSyncData.props.Start1Height;
    if (networkSyncData.props.Start3Outline !== undefined)
      this._behaviorData.Start3Outline = networkSyncData.props.Start3Outline;
    if (networkSyncData.props.Start2Color !== undefined)
      this._behaviorData.Start2Color = networkSyncData.props.Start2Color;
    if (networkSyncData.props.Start2Opacity !== undefined)
      this._behaviorData.Start2Opacity = networkSyncData.props.Start2Opacity;
    if (networkSyncData.props.Start6Angle !== undefined)
      this._behaviorData.Start6Angle = networkSyncData.props.Start6Angle;
    if (networkSyncData.props.End1Width !== undefined)
      this._behaviorData.End1Width = networkSyncData.props.End1Width;
    if (networkSyncData.props.End1Height !== undefined)
      this._behaviorData.End1Height = networkSyncData.props.End1Height;
    if (networkSyncData.props.End3Outline !== undefined)
      this._behaviorData.End3Outline = networkSyncData.props.End3Outline;
    if (networkSyncData.props.End2Color !== undefined)
      this._behaviorData.End2Color = networkSyncData.props.End2Color;
    if (networkSyncData.props.End2Opacity !== undefined)
      this._behaviorData.End2Opacity = networkSyncData.props.End2Opacity;
    if (networkSyncData.props.End6Angle !== undefined)
      this._behaviorData.End6Angle = networkSyncData.props.End6Angle;
    if (networkSyncData.props.Duration !== undefined)
      this._behaviorData.Duration = networkSyncData.props.Duration;
    if (networkSyncData.props.TweenName !== undefined)
      this._behaviorData.TweenName = networkSyncData.props.TweenName;
    if (networkSyncData.props.Width !== undefined)
      this._behaviorData.Width = networkSyncData.props.Width;
    if (networkSyncData.props.Height !== undefined)
      this._behaviorData.Height = networkSyncData.props.Height;
    if (networkSyncData.props.Outline !== undefined)
      this._behaviorData.Outline = networkSyncData.props.Outline;
    if (networkSyncData.props.Color !== undefined)
      this._behaviorData.Color = networkSyncData.props.Color;
    if (networkSyncData.props.Angle !== undefined)
      this._behaviorData.Angle = networkSyncData.props.Angle;
    if (networkSyncData.props.Type !== undefined)
      this._behaviorData.Type = networkSyncData.props.Type;
    if (networkSyncData.props.CurrentWidth !== undefined)
      this._behaviorData.CurrentWidth = networkSyncData.props.CurrentWidth;
    if (networkSyncData.props.CurrentHeight !== undefined)
      this._behaviorData.CurrentHeight = networkSyncData.props.CurrentHeight;
    if (networkSyncData.props.CurrentOutline !== undefined)
      this._behaviorData.CurrentOutline = networkSyncData.props.CurrentOutline;
    if (networkSyncData.props.CurrentOpacity !== undefined)
      this._behaviorData.CurrentOpacity = networkSyncData.props.CurrentOpacity;
    if (networkSyncData.props.CurrentAngle !== undefined)
      this._behaviorData.CurrentAngle = networkSyncData.props.CurrentAngle;
    if (networkSyncData.props.CurrentRed !== undefined)
      this._behaviorData.CurrentRed = networkSyncData.props.CurrentRed;
    if (networkSyncData.props.CurrentGreen !== undefined)
      this._behaviorData.CurrentGreen = networkSyncData.props.CurrentGreen;
    if (networkSyncData.props.CurrentBlue !== undefined)
      this._behaviorData.CurrentBlue = networkSyncData.props.CurrentBlue;
    if (networkSyncData.props.Pond !== undefined)
      this._behaviorData.Pond = networkSyncData.props.Pond;
  }

  // Properties:
  
  _getStart1Width() {
    return this._behaviorData.Start1Width !== undefined ? this._behaviorData.Start1Width : Number("8") || 0;
  }
  _setStart1Width(newValue) {
    this._behaviorData.Start1Width = newValue;
  }
  _getStart1Height() {
    return this._behaviorData.Start1Height !== undefined ? this._behaviorData.Start1Height : Number("8") || 0;
  }
  _setStart1Height(newValue) {
    this._behaviorData.Start1Height = newValue;
  }
  _getStart3Outline() {
    return this._behaviorData.Start3Outline !== undefined ? this._behaviorData.Start3Outline : Number("16") || 0;
  }
  _setStart3Outline(newValue) {
    this._behaviorData.Start3Outline = newValue;
  }
  _getStart2Color() {
    return this._behaviorData.Start2Color !== undefined ? this._behaviorData.Start2Color : "255;255;255";
  }
  _setStart2Color(newValue) {
    this._behaviorData.Start2Color = newValue;
  }
  _getStart2Opacity() {
    return this._behaviorData.Start2Opacity !== undefined ? this._behaviorData.Start2Opacity : Number("255") || 0;
  }
  _setStart2Opacity(newValue) {
    this._behaviorData.Start2Opacity = newValue;
  }
  _getStart6Angle() {
    return this._behaviorData.Start6Angle !== undefined ? this._behaviorData.Start6Angle : Number("0") || 0;
  }
  _setStart6Angle(newValue) {
    this._behaviorData.Start6Angle = newValue;
  }
  _getEnd1Width() {
    return this._behaviorData.End1Width !== undefined ? this._behaviorData.End1Width : Number("64") || 0;
  }
  _setEnd1Width(newValue) {
    this._behaviorData.End1Width = newValue;
  }
  _getEnd1Height() {
    return this._behaviorData.End1Height !== undefined ? this._behaviorData.End1Height : Number("64") || 0;
  }
  _setEnd1Height(newValue) {
    this._behaviorData.End1Height = newValue;
  }
  _getEnd3Outline() {
    return this._behaviorData.End3Outline !== undefined ? this._behaviorData.End3Outline : Number("0") || 0;
  }
  _setEnd3Outline(newValue) {
    this._behaviorData.End3Outline = newValue;
  }
  _getEnd2Color() {
    return this._behaviorData.End2Color !== undefined ? this._behaviorData.End2Color : "255;217;154";
  }
  _setEnd2Color(newValue) {
    this._behaviorData.End2Color = newValue;
  }
  _getEnd2Opacity() {
    return this._behaviorData.End2Opacity !== undefined ? this._behaviorData.End2Opacity : Number("255") || 0;
  }
  _setEnd2Opacity(newValue) {
    this._behaviorData.End2Opacity = newValue;
  }
  _getEnd6Angle() {
    return this._behaviorData.End6Angle !== undefined ? this._behaviorData.End6Angle : Number("0") || 0;
  }
  _setEnd6Angle(newValue) {
    this._behaviorData.End6Angle = newValue;
  }
  _getDuration() {
    return this._behaviorData.Duration !== undefined ? this._behaviorData.Duration : Number("1") || 0;
  }
  _setDuration(newValue) {
    this._behaviorData.Duration = newValue;
  }
  _getTweenName() {
    return this._behaviorData.TweenName !== undefined ? this._behaviorData.TweenName : "easeOutSine";
  }
  _setTweenName(newValue) {
    this._behaviorData.TweenName = newValue;
  }
  _getWidth() {
    return this._behaviorData.Width !== undefined ? this._behaviorData.Width : Number("") || 0;
  }
  _setWidth(newValue) {
    this._behaviorData.Width = newValue;
  }
  _getHeight() {
    return this._behaviorData.Height !== undefined ? this._behaviorData.Height : Number("") || 0;
  }
  _setHeight(newValue) {
    this._behaviorData.Height = newValue;
  }
  _getOutline() {
    return this._behaviorData.Outline !== undefined ? this._behaviorData.Outline : Number("") || 0;
  }
  _setOutline(newValue) {
    this._behaviorData.Outline = newValue;
  }
  _getColor() {
    return this._behaviorData.Color !== undefined ? this._behaviorData.Color : "";
  }
  _setColor(newValue) {
    this._behaviorData.Color = newValue;
  }
  _getAngle() {
    return this._behaviorData.Angle !== undefined ? this._behaviorData.Angle : Number("") || 0;
  }
  _setAngle(newValue) {
    this._behaviorData.Angle = newValue;
  }
  _getType() {
    return this._behaviorData.Type !== undefined ? this._behaviorData.Type : "";
  }
  _setType(newValue) {
    this._behaviorData.Type = newValue;
  }
  _getCurrentWidth() {
    return this._behaviorData.CurrentWidth !== undefined ? this._behaviorData.CurrentWidth : Number("") || 0;
  }
  _setCurrentWidth(newValue) {
    this._behaviorData.CurrentWidth = newValue;
  }
  _getCurrentHeight() {
    return this._behaviorData.CurrentHeight !== undefined ? this._behaviorData.CurrentHeight : Number("") || 0;
  }
  _setCurrentHeight(newValue) {
    this._behaviorData.CurrentHeight = newValue;
  }
  _getCurrentOutline() {
    return this._behaviorData.CurrentOutline !== undefined ? this._behaviorData.CurrentOutline : Number("") || 0;
  }
  _setCurrentOutline(newValue) {
    this._behaviorData.CurrentOutline = newValue;
  }
  _getCurrentOpacity() {
    return this._behaviorData.CurrentOpacity !== undefined ? this._behaviorData.CurrentOpacity : Number("") || 0;
  }
  _setCurrentOpacity(newValue) {
    this._behaviorData.CurrentOpacity = newValue;
  }
  _getCurrentAngle() {
    return this._behaviorData.CurrentAngle !== undefined ? this._behaviorData.CurrentAngle : Number("") || 0;
  }
  _setCurrentAngle(newValue) {
    this._behaviorData.CurrentAngle = newValue;
  }
  _getCurrentRed() {
    return this._behaviorData.CurrentRed !== undefined ? this._behaviorData.CurrentRed : Number("") || 0;
  }
  _setCurrentRed(newValue) {
    this._behaviorData.CurrentRed = newValue;
  }
  _getCurrentGreen() {
    return this._behaviorData.CurrentGreen !== undefined ? this._behaviorData.CurrentGreen : Number("") || 0;
  }
  _setCurrentGreen(newValue) {
    this._behaviorData.CurrentGreen = newValue;
  }
  _getCurrentBlue() {
    return this._behaviorData.CurrentBlue !== undefined ? this._behaviorData.CurrentBlue : Number("") || 0;
  }
  _setCurrentBlue(newValue) {
    this._behaviorData.CurrentBlue = newValue;
  }
  _getPond() {
    return this._behaviorData.Pond !== undefined ? this._behaviorData.Pond : Number("0") || 0;
  }
  _setPond(newValue) {
    this._behaviorData.Pond = newValue;
  }
}

/**
 * Shared data generated from Draw shock waves in ellipse
 */
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.SharedData = class DrawEllipseShockWaveSharedData {
  constructor(sharedData) {
    
  }
  
  // Shared properties:
  
}

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.getSharedData = function(instanceContainer, behaviorName) {
  if (!instanceContainer._DrawShockWaveEffect_DrawEllipseShockWaveSharedData) {
    const initialData = instanceContainer.getInitialSharedDataForBehavior(
      behaviorName
    );
    instanceContainer._DrawShockWaveEffect_DrawEllipseShockWaveSharedData = new gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.SharedData(
      initialData
    );
  }
  return instanceContainer._DrawShockWaveEffect_DrawEllipseShockWaveSharedData;
}

// Methods:
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects3= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond() < (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setPond(gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene)));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentWidth(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart1Width()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd1Width()), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentHeight(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart1Height()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd1Height()), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentAngle(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart6Angle()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd6Angle()), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentOutline(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart3Outline()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd3Outline()), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentOpacity(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart2Opacity()), (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd2Opacity()), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentRed(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart2Color()), "Red", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd2Color()), "Red", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentGreen(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart2Color()), "Green", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd2Color()), "Green", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setCurrentBlue(gdjs.evtTools.tween.ease((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getTweenName()), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getStart2Color()), "Blue", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtsExt__DrawShockWaveEffect__GetPrimaryColor.func(runtimeScene, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getEnd2Color()), "Blue", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)), gdjs.evtTools.common.normalize((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond()), 0, (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()))));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getPond() > (gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


};gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Line" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[k] = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2 */
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].setOutlineColor(gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRed())) + ";" + gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentGreen())) + ";" + gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentBlue())));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].setFillOpacity(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].setOutlineSize(Math.floor((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentOutline())));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].setOutlineOpacity((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentOpacity()));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].drawEllipse(0, 0, Math.floor((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentWidth())), Math.floor((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHeight())));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].setAngle((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAngle()));
}
}}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getType() == "Fill" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[k] = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1 */
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].setFillColor(gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentRed())) + ";" + gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentGreen())) + ";" + gdjs.evtTools.common.toString((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentBlue())));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].setFillOpacity((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentOpacity()));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].setOutlineSize(0);
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].drawEllipse(0, 0, Math.floor((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentWidth())), Math.floor((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentHeight())));
}
}{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].setAngle((gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getCurrentAngle()));
}
}}

}


};gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList0(runtimeScene, eventsFunctionContext);
}


{


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
}


{



}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEvents = function(parentEventsFunctionContext) {
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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.doStepPreEventsContext.GDObjectObjects3.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart2Color((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColor = function(Color, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartColorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart1Width((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Width")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidth = function(Width, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Width") return Width;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartWidthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart1Height((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Height")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeight = function(Height, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart2Opacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Opacity")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacity = function(Opacity, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOpacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart3Outline((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("outline")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutline = function(outline, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "outline") return outline;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartOutlineContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setStart6Angle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngle = function(Angle, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetStartAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd2Color((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Color") : ""));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColor = function(Color, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Color") return Color;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndColorContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd1Width((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Width")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidth = function(Width, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Width") return Width;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndWidthContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13378556);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd1Height((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Height")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeight = function(Height, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndHeightContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd2Opacity((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Opacity")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacity = function(Opacity, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Opacity") return Opacity;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOpacityContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd3Outline((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Outline")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutline = function(Outline, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Outline") return Outline;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndOutlineContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setEnd6Angle((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Angle")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngle = function(Angle, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Angle") return Angle;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetEndAngleContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setTweenName((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("Name") : ""));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTween = function(Name, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "Name") return Name;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeNameOfTweenContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getOnceTriggers().triggerOnce(13386020);
}
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setType((typeof eventsFunctionContext !== 'undefined' ? "" + eventsFunctionContext.getArgument("TypeName") : ""));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeType = function(TypeName, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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
if (argName === "TypeName") return TypeName;
    return "";
  },
  getOnceTriggers: function() { return that._onceTriggers; }
};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.ChangeTypeContext.GDObjectObjects2.length = 0;


return;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1);
{if (typeof eventsFunctionContext !== 'undefined') { eventsFunctionContext.returnValue = (( gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1[0].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._getDuration()); }}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.Duration = function(parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.DurationContext.GDObjectObjects2.length = 0;


return Number(eventsFunctionContext.returnValue) || 0;
}
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext = {};
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1= [];
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects2= [];


gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Behavior"))._setDuration((typeof eventsFunctionContext !== 'undefined' ? Number(eventsFunctionContext.getArgument("Value")) || 0 : 0));
}
}}

}


};

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDuration = function(Value, parentEventsFunctionContext) {

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
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("DrawShockWaveEffect"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("DrawShockWaveEffect"),
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

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects2.length = 0;

gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave.prototype.SetDurationContext.GDObjectObjects2.length = 0;


return;
}


gdjs.registerBehavior("DrawShockWaveEffect::DrawEllipseShockWave", gdjs.evtsExt__DrawShockWaveEffect__DrawEllipseShockWave.DrawEllipseShockWave);
