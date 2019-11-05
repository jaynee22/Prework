document.getElementById("button1").addEventListener("click", function(){

    document.getElementById("box").style.height = "250px";
    document.getElementById("box").style.width = "250px";

    });

    document.getElementById("button2").addEventListener("click", function(){

        document.getElementById("box").style.height = "150px";
        document.getElementById("box").style.width = "150px";
        document.getElementById("box").style.background = "blue";

    });

    document.getElementById("button3").addEventListener("click", function(){

        document.getElementById("box").style.filter = "grayscale(50%)";
        document.getElementById("box").style.background = "#FFA500";

    });

    document.getElementById("button4").addEventListener("click", function(){

        document.getElementById("box").style.filter = "grayscale(0%)";
        

    });