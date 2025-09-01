 var submenu = document.getElementById("submenu");
    function Toggle(){
        submenu.classList.toggle("open-menu");
    }
    
    var nmenu = document.getElementById("nmenu");
    function NToggle(){
        nmenu.classList.toggle("nopen-menu");
    }


let keywords = [
        'Amaran',
        'Titanic',
        'Bigil',
        'A1',
        'Coolie',
        'Squid Game',
        'Vikram',
        'Spider Man',
        'Bat Man'
    ];
    var inputbox = document.getElementById("input-box");
    var resultbox = document.querySelector(".result-box");

    inputbox.onkeyup = function(){
        let result = [];
        let input = inputbox.value;
        if(input.length){
            result = keywords.filter((keys)=>{
                return keys.toLowerCase().includes(input.toLowerCase());
            });
            console.log(result);
            
        }
        display(result);
    }

    function display(result){
        var content = result.map((list)=>{
            return "<li onclick=selectInput(this)>"+list+"</li>";
        });
        resultbox.innerHTML = content;
        resultbox.innerHTML = content.join('');
    }

    function selectInput(list){
        inputbox.value = list.innerHTML;
        resultbox.innerHTML ='';
    }

    