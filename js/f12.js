document.oncontextmenu = new Function("event.returnValue=false;");
document.onselectstart = new Function("event.returnValue=false;");
window.onload = function () {
((function () {
    var callbacks = [], timeLimit = 50, open = false;
    setInterval(loop, 1);
    return {
        addListener: function (fn) {
            callbacks.push(fn);
        },
        cancleListenr: function (fn) {
            callbacks = callbacks.filter(function (v) {
                return v !== fn;
            });
        }
    }
    function loop() {
        var startTime = new Date();
        debugger;
        if (new Date() - startTime > timeLimit) {
            if (!open) {
                callbacks.forEach(function (fn) {
                    fn.call(null);
                });
            }
            open = true;
            window.open("\\./hc/anti_debug","_top");
            window.stop();
        } else {
            open = false;
        }
    }
})()).addListener(function () {
    window.location.reload();
});
	/*document.onkeydown = function (){
			var e = window.event || arguments[0];
			//F12
			if(e.keyCode == 123){
				return false;
			//Ctrl+Shift+I
			}else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
				return false;
			//Ctrl+Shift+C
			}else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 67)){
				return false;
			//Shift+F10
			}else if((e.shiftKey) && (e.keyCode == 121)){
				return false;
			//Ctrl+U
			}else if((e.ctrlKey) && (e.keyCode == 85)){
				return false;
			//Ctrl+S
			}else if((e.ctrlKey) && (e.keyCode == 83)){
			return false;
		}
	};
		document.oncontextmenu = function (){
			return false;
		}*/
}
