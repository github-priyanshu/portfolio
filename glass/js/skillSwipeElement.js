var skillNo=0;
var skillImgs=opp("#skillBox img");
function skillSwipeInit(elem){
    // remove prevs
    opp("#skillBox img.active").forEach(val=>{
        val.classList.remove("active");
    });

    skillImgs[skillNo].classList.add('active');
    skillNo++;
    skillNo%=skillImgs.length;
}
skillSwipeInit();
setInterval(()=>{
    skillSwipeInit()
},1500);

var textIntoNo=0;
var textIntoSpans=opp("#textIntoBox span");
function textIntoSwipeInit(elem){
    // remove prevs
    opp("#textIntoBox span.active").forEach(val=>{
        val.classList.remove("active");
    });

    textIntoSpans[textIntoNo].classList.add('active');
    textIntoNo++;
    log(textIntoNo)
    textIntoNo%=textIntoSpans.length;
}
textIntoSwipeInit();
setInterval(()=>{
    textIntoSwipeInit()
},3000)