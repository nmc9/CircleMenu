/* Global Variables*/

function make_circle_menu(rootUrl){
// var rootUrl = "assets/images/circle/";
var scale = 1.5;
var orbs = [];
var line;
var originX = 400 * scale;
var originY = 400 * scale;
var xoffset = Math.sin(0);
var yoffset = 0 - Math.cos(0);
var roffset = 40 * scale;
var duration = 1000;
var wheelRadius = 175 * scale;
var selectedPercent = 1.06;
var deleteNodes = function() {
  for (var i = 0; i < orbs.length; i++) {
   orbs[i].transition()
   .duration(duration)
   .attr({"x":originX, "y":originY})
   .attr("opacity", 0)
   .remove();
 }
  //clear orbs
  orbs.splice(0,orbs.length)
};


/* build SVG  viewBoxes */
var vbWidthScale = wheelRadius + 300*scale
var hy = 150;
var vbHeightScale = wheelRadius + hy*scale

var vbx = originX - vbWidthScale;
var vby = originY - vbHeightScale;
var vbWidth = vbWidthScale * 2;
var vbHeight = vbHeightScale * 2 - hy*scale;
var viewBox = vbx + " " + vby + " " + vbWidth + " " + vbHeight;
/*Build the Center SVG */
var centerSVG = d3.select("#centerSVG")
.attr("viewBox",viewBox);

var centerImagePath =
rootUrl + "Center.svg";
var centerImageDimension = 125 * scale;

var centerImage = centerSVG
.insert("image")
.attr({
  x: originX - centerImageDimension / 2,
  y: originY - centerImageDimension / 2,
  width: centerImageDimension,
  height: centerImageDimension,
  href: centerImagePath
})
.attr("id", "centerImage");
/* End Center SVG */

/* Build Behind SVG */
var behindSVG = d3.select("#behindSVG")
.attr("viewBox",viewBox);
var behindRadius = wheelRadius * .953;

var centerCircle = behindSVG
.insert("circle")
.attr({
  cx: originX,
  cy: originY,
  r: behindRadius,
  fill:"#eeeeee"
})
.attr("id", "behindCircle");
/* End Build Behind SVG */

/* Start WheelNav */
wheel = new wheelnav("wheelDiv");
wheelnav.cssMode = true;

var wcolors = ["#FCAE18", "#2EA77A", "#20A1B6", "#364485", "#E2391A"];
//Wheel Size and Location
wheel.wheelRadius = wheelRadius;
wheel.centerX = originX ;
wheel.centerY = originY;
wheel.colors = wcolors;
wheel.selectedPercent = selectedPercent;
//Wheel lock in place
wheel.navAngle = -54;
wheel.clickModeRotate = false;

//Stop hovering from removing opacity
wheel.sliceHoverAttr = {};

//Donut and the size of the donut
wheel.slicePathFunction = slicePath().PieSlice;
wheel.slicePathCustom = slicePath().PieSliceCustomization();
wheel.slicePathCustom.titleRadiusPercent = 0.70;
// wheel.slicePathFunction = slicePath().DonutSlice;
// wheel.slicePathCustom = slicePath().DonutSliceCustomization();
// wheel.slicePathCustom.minRadiusPercent = 0.3;
// wheel.slicePathCustom.titleRadiusPercent = 0.3;
// wheel.sliceSelectedPathCustom = wheel.slicePathCustom;
// wheel.sliceInitPathCustom = wheel.slicePathCustom;



wheel.sliceSelectedPathCustom = wheel.slicePathCustom;
wheel.sliceInitPathCustom = wheel.slicePathCustom;

/* Initialize Wheel */
wheel.initWheel([
  "imgsrc:" + rootUrl + "circle-01.png",
  "imgsrc:" + rootUrl + "circle-02.png",
  "imgsrc:" + rootUrl + "circle-03.png",
  "imgsrc:" + rootUrl + "circle-04.png",
  "imgsrc:" + rootUrl + "circle-05.png",

  ]);

// var vbScale = 100
// var vbx = originX - vbScale;
// var vby = originY - vbScale;
// var vbWidth = vbScale * 2;
// var vbHeight = vbScale * 2;
// var viewBox = vbx + " " + vby + " " + vbWidth + " " + vbHeight;
d3.select("#wheelDiv svg")
.attr("viewBox",viewBox);

/* Tweek title position */
wheel.navItems[0].titleWidth = 60 * scale;
wheel.navItems[0].titleHeight = 70 * scale;
wheel.navItems[1].titleWidth = 60 * scale;
wheel.navItems[1].titleHeight = 64 * scale;
wheel.navItems[2].titleWidth = 76 * scale;
wheel.navItems[2].titleHeight = 60 * scale;
wheel.navItems[3].titleWidth = 62 * scale;
wheel.navItems[3].titleHeight = 75 * scale;
wheel.navItems[4].titleWidth = 68 * scale;
wheel.navItems[4].titleHeight = 62 * scale;

/* Create Wheel */
wheel.createWheel();

/* Start Building The Bubbles */
var orbitSVG = d3.select("#wheelDiv>svg");

var bubbleRadius = roffset;
var bubbleSize = {
  width: bubbleRadius,
  height: bubbleRadius
};
var lineSize = {
  width: 75  * scale,
  height: 200  * scale
};
var longLineSize = {
  width: lineSize.width,
  height: lineSize.height + (100  * scale)
};
var bottomLineSize = {
  width: lineSize.width + (25 * scale),
  height: lineSize.height - (50 * scale)
}

var createBubble = function(rotation, image, sizeObject, bubbleObject) {
  return {
    x:
    bubbleObject.originX +
    bubbleObject.distance * Math.sin(rotation * Math.PI / 2) -
    sizeObject.width / 2,
    y:
    bubbleObject.originY -
    bubbleObject.distance * Math.cos(rotation * Math.PI / 2) -
    sizeObject.height / 2,
    width: sizeObject.width,
    height: sizeObject.height,
    href: image
  };
};

var textLocation = function(rotation,xPadding,yPadding, sizeObject, bubbleObject) {
  var anchor = "start";
  if((rotation % 4 ) > 2){
    xPadding = 0 - (xPadding);
    anchor = "end";
  }
  return {
    x:
    bubbleObject.originX +
    bubbleObject.distance * Math.sin(rotation * Math.PI / 2) +
    xPadding,
    y:
    bubbleObject.originY -
    bubbleObject.distance * Math.cos(rotation * Math.PI / 2) -
    sizeObject.height / 2 +
    yPadding,
    "text-anchor":anchor
  };
};
var blockLocation = function(rotation,boxSize,xPadding,yPadding, sizeObject, bubbleObject, imagePadding = 0) {
  if((rotation % 4 ) > 2){
    xPadding = 0 - (xPadding);
    xPadding -= boxSize/2
  }
  return {
    x:
    bubbleObject.originX +
    bubbleObject.distance * Math.sin(rotation * Math.PI / 2) +
    xPadding + imagePadding,
    y:
    bubbleObject.originY -
    bubbleObject.distance * Math.cos(rotation * Math.PI / 2) -
    sizeObject.height / 2 +
    yPadding,
  };
};

var blockTextLocation = function(rotation,boxSize,xPadding,yPadding, sizeObject, bubbleObject, linePadding) {
  var anchor = "end";
  // xPadding += 100;
  // xPadding = xPadding + (15 * scale);
  if((rotation % 4 ) > 2){
    xPadding = 0 - (xPadding);
    xPadding -= boxSize/2
    anchor = "start";
  }else{
    xPadding += linePadding
  }
  return {
    x:
    bubbleObject.originX +
    bubbleObject.distance * Math.sin(rotation * Math.PI / 2) +
    xPadding,
    y:
    bubbleObject.originY -
    bubbleObject.distance * Math.cos(rotation * Math.PI / 2) -
    sizeObject.height / 2 +
    yPadding,
    "text-anchor":anchor
  };
};

orbitSVG.appendBubble = function(rotation, imagePath,size,template, onclick) {
  var x = this.append("image")
  .attr(
    createBubble(rotation, imagePath, size, itemStart)
    )
  .attr("opacity", 0)
  .attr("class","bubble")
  .style("cursor","pointer")
  .on("click", onclick);
  x.transition()
  .duration(duration)
  .attr(createBubble(rotation, imagePath, size, template))
  .attr("opacity", 1);
  orbs.push(x);
};

var headerAttr = function(width,color,size){
  return  {
    textLength:width,
    class:"svg-text-header",
    fill:color,
    "font-family":"GothamBold",
    "font-size":size + "px",
    "font-weight":"bold"
  };
}

var textAttr = function(color,size){
  return  {
    class:"svg-text",
    fill:color,
    "font-family":"GothamHTF",
    "font-size":size + "px",
  };
}

orbitSVG.appendText = function(rotation,headerLength,bubblesize,positionObject,arrayOfText,headerCount = 1){
  var textPadding = (2 * scale);
  var xPadding = bubbleRadius - (10 * scale);
  var yPadding = bubbleRadius / 4;
  var textSize = 10 * scale;
  var headerSize = 15  * scale;
  if(!(headerLength instanceof Array)){
    headerLength = [headerLength];
  }
  for(var i = 0; i < headerCount; i++){
    var x = this.append("text")
    .text(arrayOfText[i])
    .attr("opacity",0)
    .attr(textLocation(rotation,xPadding,yPadding,bubbleSize,itemStart))
    .attr(headerAttr(headerLength[i] * scale,"#122f50",headerSize));
    x.transition()
    .duration(duration)
    .attr(textLocation(rotation,xPadding,yPadding,bubbleSize,positionObject))
    .attr("opacity",1)
    orbs.push(x);
    yPadding += headerSize - textPadding;
  }
  for(var i = headerCount; i < arrayOfText.length; i++){
    var y = this.append("text")
    .text(arrayOfText[i])
    .attr("opacity",0)
    .attr(textLocation(rotation,xPadding,yPadding,bubbleSize,itemStart))
    .attr(textAttr("#122f50",textSize));
    y.transition()
    .duration(duration)
    .attr(textLocation(rotation,xPadding,yPadding,bubbleSize,positionObject))
    .attr("opacity",1)
    orbs.push(y);
    yPadding += textSize + textPadding;
  }
}

orbitSVG.appendBlock = function(rotation,imageObject,linePath,fill,size,positionObject,headerLength,arrayOfText,headerCount = 1){
  if(!(headerLength instanceof Array)){
    headerLength = [headerLength];
  }
  imageObject.width = imageObject.width *scale;
  imageObject.height = imageObject.height* scale;

  var textSize = 10 * scale;
  var headerSize = 20  * scale;
  var imageHeight = imageObject.height;
  var imageWidth = imageObject.width;

  var textbuffer = 2 * scale;
  var headerBuffer = 2 * scale;
  var totalwidth = 200 * scale;
  var totalheight = 0;


  var lineWidth = Math.max(...headerLength) * scale;
  var lineHeight = 20 * scale;


  totalheight += imageHeight + lineHeight;
  totalheight += (headerSize + headerBuffer) * headerCount;
  totalheight += (textSize + textbuffer + 1) * (arrayOfText.length - headerCount);


  var xPadding = 0;
  var imageXPadding = lineWidth / 2 - imageWidth/2;
  var yPadding = bubbleRadius / 4 - totalheight/2;
  var x = this.append("image")
  .attr(blockLocation(rotation,totalwidth,xPadding,yPadding,size,itemStart,imageXPadding))
  .attr(imageObject)
  .attr("opacity",0);
  x.transition()
  .duration(duration)
  .attr(blockLocation(rotation,totalwidth,xPadding,yPadding,size,positionObject,imageXPadding))
  .attr("opacity",1)

  orbs.push(x);
  yPadding += imageHeight;

  for(var i = 0; i < headerCount; i++){
    yPadding += headerSize + headerBuffer;
    var y = this.append("text")
    .text(arrayOfText[i])
    .attr("opacity",0)
    .attr(blockTextLocation(rotation,totalwidth,xPadding,yPadding,size,itemStart,lineWidth))
    .attr(headerAttr(headerLength[i] * scale,fill,headerSize));
    y.transition()
    .duration(duration)
    .attr(blockTextLocation(rotation,totalwidth,xPadding,yPadding,size,positionObject,lineWidth))
    .attr("opacity",1)
    orbs.push(y);
     //- (2*scale);
   }

   var z = this.append("image")
   .attr(blockLocation(rotation,totalwidth,xPadding,yPadding,size,itemStart))
   .attr({
    width:lineWidth,
    height:lineHeight,
    href:linePath
  })
   .attr("opacity",0);
   z.transition()
   .duration(duration)
   .attr(blockLocation(rotation,totalwidth,xPadding,yPadding,size,positionObject))
   .attr("opacity",1)
   orbs.push(z);
   yPadding += lineHeight;

   for(var i = headerCount; i < arrayOfText.length; i++){
    yPadding += textSize + textbuffer;
    var w = this.append("text")
    .text(arrayOfText[i])
    .attr("opacity",0)
    .attr(blockTextLocation(rotation,totalwidth,xPadding,yPadding,size,itemStart,lineWidth))
    .attr(textAttr("#122f50",textSize));
    w.transition()
    .duration(duration)
    .attr(blockTextLocation(rotation,totalwidth,xPadding,yPadding,size,positionObject,lineWidth))
    .attr("opacity",1)
    orbs.push(w);
    // yPadding += textSize ;
  }
  yPadding += textSize + textbuffer;


}


orbitSVG.appendLine = function(rotation, imagePath,size,template) {
  var x = this.append("image")
  .attr(
    createBubble(rotation, imagePath, size, itemStart)
    )
  .attr("opacity", 0)
  .attr("class","arc");
  x.transition()
  .duration(duration - 300)
  .attr(createBubble(rotation, imagePath, size, template))
  .attr("opacity", 1);
  orbs.push(x);
};

var bubblePosition = {
  originX: originX,
  originY: originY,
  distance: 225 * scale
};
var linePosition = {
  originX: originX,
  originY: originY,
  distance: 190 * scale
};
var itemStart = {
  originX: originX,
  originY: originY,
  distance: 0
}
var text_01_01 = [
"Local Area Networks",
"Software and Data live on",
"your network. You get",
"unlimited uses"
]
var text_01_02 = [
"Cloud",
"Your software and data",
"are safe and secure in the",
"cloud. Unlimited users",
"access from anywhere."
]
var text_01_03 = [
"Service Bureau",
"Our trained and experienced",
"staff takes over any part or",
"all of your billing tasks."
]
var text_01_block = [
"CHOICE OF",
"PLATFORM",
"Diversified Utility Billing",
"software will run on a number",
"of different platforms from",
"your in-house LAN to the",
"cloud. It's designed to make",
"integration as easy as possible"
]
var text_02_01 = [
"Standard Operating",
"Procedures",
"Establish rules for every task",
"in the billing operation.",
]
var text_02_02 = [
"Master Calendar",
"Translates SOP rules into",
"a daily action plan for",
"each staffer.",
]
var text_02_03 = [
"Dashboard",
"Provides real-time status",
"of schedule tasks that are",
"in process or overdue.",
]
var text_02_04 = [
"Mobile Work Orders",
"Generate field service",
"work orders electronically",
"to track real-time status.",
]
var text_02_block = [
"GET",
"ORGANIZED!",
"Diversified Utility Billing",
"software will run on a number",
"of different platforms from",
"your in-house LAN to the",
"cloud. It's designed to make",
"integration as easy as possible"
]
var text_03_01 = [
"Accept Online Payments",
"Customers pay at their",
"convenience and you",
"collect 100%!"
]
var text_03_02 =[
"Customer Web Portal",
"Slash inbound calls by",
"giving each customer",
"access to their account",
"info on the web."
]
var text_03_block = [
"CUSTOMER",
"SELF SERVICE",
"Diversified Utility Billing",
"software will run on a number",
"of different platforms from",
"your in-house LAN to the",
"cloud. It's designed to make",
"integration as easy as possible"
]
var text_04_01 = [
"Import, Don’t",
"Keystroke Meter Reads",
"Speed bill calculation  meter read systems.",
"with interfaces to most major",
"meter read systems.",
]
var text_04_02 = [
"Save Postage",
"with Email Bills",
"Generate email, post card",
"or letter bills with checklist",
"driven process.",
]
var text_04_03 = [
"Stay on Top of",
"Receivables",
"Easily identify late payers,",
"then generate late and shut",
"off notices.",
]
var text_04_block = [
"STREAMLINED",
"BILLING",
"PROCESSES",
"Diversified Utility Billing",
"software will run on a number",
"of different platforms from",
"your in-house LAN to the",
"cloud. It's designed to make",
"integration as easy as possible"
]
var text_05_01 = [
"Import, Don't",
"Keystroke Meter Reads",
"Speed bill calculation  meter read systems.",
"with interfaces to most major",
"meter read systems.",
]
var text_05_02 = [
"Save Postage",
"with Email Bills",
"Generate email, post card",
"or letter bills with checklist",
"driven process.",
]
var text_05_03 = [
"Stay on Top of",
"Receivables",
"Easily identify late payers,",
"then generate late and shut",
"off notices.",
]
var text_05_block =[
"SUPERCHARGED",
"PAYMENT",
"PROCESSING",
"Diversified Utility Billing",
"software will run on a number",
"of different platforms from",
"your in-house LAN to the",
"cloud. It's designed to make",
"integration as easy as possible"
]

var displayNodes0 = function() {
  orbitSVG.appendLine(1, rootUrl + "arc-01.svg", lineSize,linePosition);
  orbitSVG.appendBubble(0.8, rootUrl + "bubble-01-01.svg",bubbleSize,bubblePosition, function() {

    window.location = "platforms#in-house";
  });
  orbitSVG.appendText(0.8,140,bubbleSize,bubblePosition,text_01_01);
  orbitSVG.appendBubble(1, rootUrl + "bubble-01-02.svg",bubbleSize,bubblePosition, function() {
    window.location = "home.php";
  });
  orbitSVG.appendText(.98,45,bubbleSize,bubblePosition,text_01_02);

  orbitSVG.appendBubble(1.2, rootUrl + "bubble-01-03.svg",bubbleSize,bubblePosition, function() {
    window.location = "#somethingstupid";
  });
  orbitSVG.appendText(1.2,110,bubbleSize,bubblePosition,text_01_03);
  orbitSVG.appendBlock(3,
  {
    href:rootUrl + "block-01.png",
    width:75,
    height:75
  },
  rootUrl + "line-01.svg","#fe921a",bubbleSize,bubblePosition,[110,110],text_01_block,2)


};


var displayNodes1 = function() {
  orbitSVG.appendLine(1, rootUrl + "arc-02.svg", longLineSize,linePosition);
  orbitSVG.appendBubble(0.75, rootUrl + "bubble-02-01.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(0.73,[135,80],bubbleSize,bubblePosition,text_02_01,2);
  orbitSVG.appendBubble(.91, rootUrl + "bubble-02-02.svg",bubbleSize,bubblePosition, function() {
    window.location = "#somethingstupid";
  });
  orbitSVG.appendText(0.90,110,bubbleSize,bubblePosition,text_02_02);
  orbitSVG.appendBubble(1.08, rootUrl + "bubble-02-03.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(1.08,75,bubbleSize,bubblePosition,text_02_03);
  orbitSVG.appendBubble(1.25, rootUrl + "bubble-02-04.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(1.26,140,bubbleSize,bubblePosition,text_02_04);
  orbitSVG.appendBlock(3,
  {
    href:rootUrl + "block-02.png",
    width:70,
    height:70
  },
  rootUrl + "line-02.svg","#31a879",bubbleSize,bubblePosition,[42,130],text_02_block,2)
};


var displayNodes2 = function() {
  orbitSVG.appendLine(1.34, rootUrl + "arc-03.svg", bottomLineSize,linePosition);
  orbitSVG.appendBubble(1.2, rootUrl + "bubble-03-01.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(1.2,160,bubbleSize,bubblePosition,text_03_01);
  orbitSVG.appendBubble(1.4, rootUrl + "bubble-03-02.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(1.4,150,bubbleSize,bubblePosition,text_03_02);

  orbitSVG.appendBlock(3,
  {
    href:rootUrl + "block-03.png",
    width:85,
    height:85
  }
  ,rootUrl + "line-03.svg","#229fb8",bubbleSize,bubblePosition,[115,135],text_03_block,2)
};




var displayNodes3 = function() {
  orbitSVG.appendLine(3, rootUrl + "arc-04.svg", longLineSize,linePosition);
  orbitSVG.appendBubble(3.2, rootUrl + "bubble-04-01.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(3.22,[90,160],bubbleSize,bubblePosition,text_04_01,2);
  orbitSVG.appendBubble(3, rootUrl + "bubble-04-02.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(3.01,[95,110],bubbleSize,bubblePosition,text_04_02,2);


  orbitSVG.appendBubble(2.8, rootUrl + "bubble-04-03.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(2.8,[95,82],bubbleSize,bubblePosition,text_04_03,2);
  orbitSVG.appendBlock(1,
  {
    href:rootUrl + "block-04.png",
    width:75,
    height:80
  },
  rootUrl + "line-04.svg","#2d457b",bubbleSize,bubblePosition,[145,80,120],text_04_block,3)

};



var displayNodes4 = function() {
  orbitSVG.appendLine(3, rootUrl + "arc-05.svg", lineSize,linePosition);
  orbitSVG.appendBubble(3.2, rootUrl + "bubble-05-01.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });

  orbitSVG.appendText(3.22,[90,160],bubbleSize,bubblePosition,text_05_01,2);

  orbitSVG.appendBubble(3, rootUrl + "bubble-05-02.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(3.01,[95,110],bubbleSize,bubblePosition,text_05_02,2);


  orbitSVG.appendBubble(2.8, rootUrl + "bubble-05-03.svg",bubbleSize,bubblePosition, function() {
    alert("clicked");
  });
  orbitSVG.appendText(2.8,[95,82],bubbleSize,bubblePosition,text_05_03,2);

  orbitSVG.appendBlock(1,
  {
    href:rootUrl + "block-05.png",
    width:70,
    height:70
  }
  ,rootUrl + "line-05.svg","#dc3319",bubbleSize,bubblePosition,[175,95,145],text_05_block,3)
};


var displayHeader = function(){
  var imageWidth = 200*scale;
  var imageHeight = 20 * scale;
  var textSize = 30 *scale;
  var headerSize = 44*scale;

  var negOffset = 40*scale;

  var headerWidth = wheelRadius * 2 + 200*scale;
  var textWidth = wheelRadius * 2 - 150*scale;

  orbitSVG.append("image")
  .attr({
    width:imageWidth,
    height:imageHeight,
    x:originX - imageWidth/2,
    y:originY - wheelRadius - negOffset /2,
    href:rootUrl + "line-00.svg"
  })

  orbitSVG.append("text")
  .attr({
    x:originX - headerWidth/2,
    y:originY - wheelRadius - negOffset,
    textLength:headerWidth,
    class:"svg-header",
    fill:"#122f50",
    "font-family":"Helvetica",
    "font-size":headerSize + "px",
    "font-weight":"bold"
  })
  .text("UTILITY BILLING INNOVATION")

  orbitSVG.append("text")
  .attr({
    x:originX - textWidth/2,
    y:originY - wheelRadius - headerSize - negOffset,
    textLength:textWidth,
    class:"svg-header",
    fill:"#4a4f55",
    "font-family":"GothamHTF",
    "font-size":textSize + "px",
  })
  .text("LEADING IN")
}


/* Set Click Listeners */

wheel.navItems[0].navSlice.mousedown(function() {
  deleteNodes();
  displayNodes0();
});
wheel.navItems[0].navTitle.mousedown(function() {
  deleteNodes();
  displayNodes0();
});
wheel.navItems[1].navSlice.mousedown(function() {
  deleteNodes();
  displayNodes1();
});
wheel.navItems[1].navTitle.mousedown(function() {
  deleteNodes();
  displayNodes1();
});
wheel.navItems[2].navSlice.mousedown(function() {
  deleteNodes();
  displayNodes2();
});
wheel.navItems[2].navTitle.mousedown(function() {
  deleteNodes();
  displayNodes2();
});
wheel.navItems[3].navSlice.mousedown(function() {
  deleteNodes();
  displayNodes3();
});
wheel.navItems[3].navTitle.mousedown(function() {
  deleteNodes();
  displayNodes3();
});
wheel.navItems[4].navSlice.mousedown(function() {
  deleteNodes();
  displayNodes4();
});
wheel.navItems[4].navTitle.mousedown(function() {
  deleteNodes();
  displayNodes4();
});

/* Setup Default View */
displayNodes0();
displayHeader();

// .attr("delay", function(d,i){return 10000})
// .transition()
// .attr("delay", function(d,i){return 100*i}));
}
