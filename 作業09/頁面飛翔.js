(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"頁面飛翔_atlas_1", frames: [[0,0,672,670]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Image = function() {
	this.initialize(ss["頁面飛翔_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.ClipGroup = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("A6PaLMAAAg0VMA0fAAAMAAAA0Vg");
	mask.setTransform(168,167.5);

	// 圖層_3
	this.instance = new lib.Image();
	this.instance.setTransform(0,0,0.5,0.5);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup, new cjs.Rectangle(0,0,336,335), null);


// stage content:
(lib.頁面飛翔 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhxBcQjDiEmLhPQAQgVATgWQApgsAYgDIBVAVQBnAeBaAgQEgBqAuBrQAUgvBWg6QCuh0FNg2IBRApQh+AgiXA9QkvB5h7CPQgRgyhghEg");
	this.shape.setTransform(173.95,258.35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgUChQgggqg7gnQi/h+mKg1QAOgVASgWQAlgtAYgFQABgDBVATQBmAXBcAdQEgBcArBrQATgvBVg2QCshvFPggIBOAsQiAAWiXA0QkuBnh0CNQgEgLgQgVg");
	this.shape_1.setTransform(182.725,246.3545);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgUCSQgfgqg4gkQi8h4mIgaQAMgWASgWQAigtAXgHQACgEBVAOQBiAQBgAaQEfBPAoBqQAEgKAPgSQAegkA1ggQCqhpFOgNIBJAvQgIgChJAMQhjARhiAcQkrBWhuCLQgEgKgQgUg");
	this.shape_2.setTransform(191.45,234.5717);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgUCDQgegpg3giQi3hxmDgCQAKgVAPgXQAfguAXgHQACgGBVAKQBhAKBgAWQEdBBAlBqQAFgJAOgRQAegkAzgeQCphjFMAHIBFAxQgKgDhHAHQhgAKhjAXQkoBFhpCJQgEgIgPgUg");
	this.shape_3.setTransform(200.2125,222.9839);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgTBzQgcgjg2giQjPh3liAiQAJgVAOgXQAcguAXgJQABgHBVAEQBfAGBhASQEZA0AjBpQAEgHAOgSQAegjAygcQCmhdFIAaQAdAWAkAeQgMgFhEADQheAEhiARQkkA0hkCHQgEgLgOgRg");
	this.shape_4.setTransform(208.925,211.4656);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgUBlQgaghg2ggQjNhylXA6QAIgVANgXQAYguAXgKIBUgGQBngDBXANQBtAOBYAnQBdAqAUAyQAAAEASgbQAdgiAxgaQCjhXFDAsQAnAhAYAXQgfgFgxgDQhkgGhaANQhzANhmAqQhvAwg2BDQgDgLgOgQg");
	this.shape_5.setTransform(217.8,200.139);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("AgUBaQgYgfg0geQjOhrlIBOQAHgUAKgXQAWgtAVgLIBUgLQBlgKBVAKQBqAJBYAlQBbAmASAwIARgWQAbgcAwgaQC8hcEhBFQAfAdAcAeQgegHgwgHQhigNhXAJQhwAGhlAnQhrArg0BAQgDgKgNgQg");
	this.shape_6.setTransform(226.55,188.6);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AgTBRQgZgcgygdQjKhmk6BjQAFgUAKgVQASgtAVgMIBRgRQBjgPBTAGQBmAEBXAjQBYAjASAuIARgVQAZgbAwgYQC7hVEWBUQAbAeAbAeQgcgIgwgKQhegUhWAEQhsABhiAjQhoAmgxA+QgDgKgMgPg");
	this.shape_7.setTransform(235.3,177.129);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgTBJQgWgbgxgbQhSgmhegDQiPgHizBHQAEgUAIgWQAQgsAUgMIBOgWQBggUBRADQBjAABVAgQBWAfARAtQABgBAPgUQAYgYAugXQC4hQELBkQAVAYAdAlQgbgLgugNQhbgZhTgBQhngEhgAgQhmAigtA7QgEgKgLgOg");
	this.shape_8.setTransform(244.025,165.75);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgSBCQgVgZgvgZQhQgjhaAAQiKAAipBQQgDAAAMgpQAOgqATgOIBLgaQBcgZBPAAQBegEBUAdQBTAdAPAqQACgBAOgSQAXgXAtgVQC1hKD9BxQARAVAcApQgZgOgsgPQhXgehPgEQhjgJheAbQhiAegqA4QgEgJgKgNg");
	this.shape_9.setTransform(252.7117,154.4511);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgRA9QgUgXgtgYQhOghhVAEQiEAFifBaQgDAAAKgoQALgqASgOIBHgdQBYgeBMgDQBagIBRAbQBRAaAOAoQACgBANgRQAVgWAsgTQCzhEDtB7QAWAhASAfQgXgPgpgSQhTgjhMgIQhdgNhcAYQhdAagoA1QgEgJgJgLg");
	this.shape_10.setTransform(261.4063,143.2836);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("An2AvQAJgpAQgOIBDghQBUgiBJgFQBVgLBPAYQBNAYANAmQACgBAMgQQAUgUAqgSQCug+DeCEQAVAhAPAfQgWgRgmgUQhNgnhJgLQhYgRhYAWQhZAVgmAzQgDgJgJgKQgSgWgrgWQhMgdhQAGQh+AKiTBhIgBAAQgDAAAIgmg");
	this.shape_11.setTransform(270.0967,133.3343);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("AgQA1QgSgTgpgVQhJgdhLACQh5AEiSBRQADgRAHgUQANgmAQgNQgBABBBgZQBRgbBDgCQBQgGBKAYQBIAYAPAiQAIgKAFgGQAUgSAngRQBEgZBHADQBtAFCABAQAVAcAUAeQgWgNglgQQhMgfhEgHQhUgMhUAVQhVAXgmAvIgNgTg");
	this.shape_12.setTransform(247.775,122.2069);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhIAOQhHgchHgBQhygBiOBAQAEgQAJgTQARgjARgLQgBACA+gTQBMgTA+ABQBLgDBFAZQBDAXAPAfQAKgVA8gbQBAgYBCAAQBmgBB7A0QATAUAZAfQgVgJgjgMQhKgZhAgDQhQgHhQAWQhQAXgnArQgGgXhAghg");
	this.shape_13.setTransform(225.4,111.8884);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AhFAQQhFgbhBgEQhtgGiJAxQgCgCATgeQAUgiAQgIQgBADA6gNQBJgOA5AEQBFABBBAYQA+AYARAbQAAgFAMgJQASgPAkgQQA8gXA9gDQBggFB1AnQAWAVAYAYIg2gPQhGgRg9AAQhLgDhLAXQhMAXgoAnQAAgRhEgjg");
	this.shape_14.setTransform(203.0194,101.264);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhBASQhDgbg8gGQhngLiDAjQgCgBAWgbQAXgeAPgHQgBABA1gGQBFgIA0AGQBAAEA9AYQA5AXARAZQAAgFAMgIQARgNAigQQA6gXA4gFQBZgJBtAcQAgAYAQAOIgzgHQhEgMg3ADQhGABhIAWQhHAYgoAjQACgNhDgjg");
	this.shape_15.setTransform(180.6701,90.413);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgKAyQgOgKgngUQhBgag1gIQhigPh7AXQAAgDAWgXQAYgbAPgEQgBACAxgCQBBgDAvAHQA7AHA4AXQA1AWASAXQAAACALgOQATgQAdgNQBjgrC/AVIAxAgQAAACgwgEQhBgGgyAFQhCAFhDAXQhCAXgpAgQACgGgMgJg");
	this.shape_16.setTransform(158.3503,79.33);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgIA1QgMgJgmgTQhAgZgwgKQhagSh0AKQAAgCAYgUQAagXANgDQgCADAtABQA+ACApAIQA2AJA0AXQAxAUASAVIALgLQARgOAcgMQBcgpCvAGIAwAZQgGgBgmACQg1ADg1AIQiiAXhAA6QADgGgMgIg");
	this.shape_17.setTransform(135.9625,67.725);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("Ag2AcQhigsjFgMQAAgBAYgRQAagSANgCICDAXQCJAfAXAmIALgKQAQgNAagMQBVglCggIIAvAUQg/AGhLAQQiWAdg9AzQgIgSgvgWg");
	this.shape_18.setTransform(113.7,55.95);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AgzAfQhZgpi0gbIAYgOQAagOALgBQgBACB3AbQB8AjAXAfIAAABIAAgBQAAgBAKgIQAOgMAZgKQBNgiCRgUIAsAOQg3AMhFASQiJAlg6AqQgIgPgtgVg");
	this.shape_19.setTransform(91.375,44.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AgvAhQhQgjijgpIAXgLQAZgLAKABIBoAiQBwAjAWAbQgDgHAwgWQBFgfCCgcIApAIQAAABhtAlQh+Apg2AjQAEgIg1gZg");
	this.shape_20.setTransform(69.0751,32.0989);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AkDgwIAVgIQAXgHAJABQgCADBdAjQBlAlAUAVQgDgGArgUQA8gbB1gkIAlADQACADhhAnQh1AuguAbQAIgPkNhgg");
	this.shape_21.setTransform(46.802,19.9438);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AgmAjQh2g0hHgiQAjgJAMACQgDAEBRAjQBbAlARAQQgDgEAngSQAogSBygvIAggCQAEAGhUAoQhqAxgoAUQADgFgrgUg");
	this.shape_22.setTransform(24.534,7.6478);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_11}]},1).to({state:[{t:this.shape_12}]},1).to({state:[{t:this.shape_13}]},1).to({state:[{t:this.shape_14}]},1).to({state:[{t:this.shape_15}]},1).to({state:[{t:this.shape_16}]},1).to({state:[{t:this.shape_17}]},1).to({state:[{t:this.shape_18}]},1).to({state:[{t:this.shape_19}]},1).to({state:[{t:this.shape_20}]},1).to({state:[{t:this.shape_21}]},1).to({state:[{t:this.shape_22}]},1).wait(1));

	// 圖層_1
	this.instance = new lib.ClipGroup();
	this.instance.setTransform(168,167.5,1,1,0,0,0,168,167.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(24));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(168,167.5,168,167.5);
// library properties:
lib.properties = {
	id: '15737C719079D94B98D142610C93DACB',
	width: 336,
	height: 335,
	fps: 10,
	color: "#FF66FF",
	opacity: 1.00,
	manifest: [
		{src:"images/頁面飛翔_atlas_1.png?1701662729654", id:"頁面飛翔_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['15737C719079D94B98D142610C93DACB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;