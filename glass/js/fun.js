var offset = op("#offset");
var pid = op("#pid");
resetFormat();
document.querySelectorAll("*[id]").forEach(val => {
    var id = val.getAttribute("id");
    window[id] = val;
})

var glassHolder = opp(".glassHolder");

if (isMobileDevice()) {


    try {


        let gyroscope = new Gyroscope({ frequency: 60 }); // Set reading frequency

        gyroscope.addEventListener("reading", (e) => {

            var x = gyroscope.y * 20;
            var y = gyroscope.x * 20;

            moveVal(glassHolder[0], -x, -y);

        });

        gyroscope.start();
    }
    catch (e) {
        // log("no giryp")
    }
} else {
    glassHolder.forEach(val => {
        val.style.setProperty("--pointEv","none");
        val.addEventListener("mousemove", (e) => {
            // log(e)

            var x = e.offsetX;
            var y = e.offsetY;
            x = (x - 160) / 160 * 20;
            y = (y - 200) / 200 * 20;
            moveVal(val, -x, -y);
        })

        val.addEventListener("mouseout", () => {
            val.style.transition = "all .5s";
            val.style.transform = `perspective(1500px) rotateX(0deg) rotateY(0deg)`;
        })

        val.addEventListener("mouseenter", () => {
            val.style.transition = "all .15s";
            // val.style.transform=`perspective(1500px) rotateX(0deg) rotateY(0deg)`;

            setTimeout(() => { val.style.transition = "none"; }, 150)
        })
    })


}



function isMobileDevice() {
    if (window.matchMedia && window.matchMedia('(any-pointer:coarse)').matches) {
        return true;
    }

    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        return true;
    }

    return false;
}

function moveVal(val, x, y) {
    val.style.transform = `perspective(1500px) rotateX(${-y}deg) rotateY(${x}deg)`;
}


