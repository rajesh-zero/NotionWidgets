var totalSeconds = 64800;

//detect system theme
function detectTheme() {
    var theme = "light";
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
       // theme = "dark";
       // document.body.style.backgroundColor = "#191919";
        
    } else {


        theme = "light";

    }
    return theme;
}

console.log(detectTheme());


function Display() {
    setInterval(() => {
        var dts = new Date();
        var h = dts.getHours();
        var m = dts.getMinutes();
        var s = dts.getSeconds();
        var elapsedsec = h*3600 + m * 60 + s
        
        elapsedsec = elapsedsec - 21600
        if(elapsedsec < 0){
            elapsedsec = 0
        }
        
        
        const a = totalSeconds-elapsedsec;
        let prin = document.getElementById('demo');
        prin.innerHTML = a;
        //console.log(dts + " " + a);
        prin.style.color = getColor(a);

        var elem = document.getElementById("myBar");
        elem.style.width = calculatePercentage(elapsedsec,totalSeconds);
        elem.style.backgroundColor = getColor(a);
    }, 1000);
}

function calculatePercentage(number, totalNumber) {
    return (number / totalNumber) * 100 + '%';
}


Display();



function getColor(seconds) {
    if (seconds < 3600) {
        return '#fd1919';
    } else if (seconds < 7200) {
        return '#fd8019';    
    } else if (seconds < 18000) {
        return '#27ca7e';
    } else {
        return '#27ca7e';
    }
}
