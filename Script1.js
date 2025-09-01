 var submenu = document.getElementById("submenu");
    function Toggle(){
        submenu.classList.toggle("open-menu");
    }
    
    var nmenu = document.getElementById("nmenu");
    function NToggle(){
        nmenu.classList.toggle("nopen-menu");
    }

var heading = document.getElementById("mylist");
    var buttons = document.querySelectorAll(".container .images button");
    var myList = document.getElementById("lists");
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const container = button.parentElement;
        const movieName = container.querySelector('p').innerText;
        const imgSrc = container.querySelector('img').src;

        if (heading.textContent === "No Lists") {
          heading.textContent = "My List";
        }

        const existingItems = myList.querySelectorAll('li p');
        for (let item of existingItems) {
          if (item.innerText === movieName) {
            alert('Item already added!');
            return; 
          }
        }
        const li = document.createElement('li');

        const img = document.createElement('img');
        img.src = imgSrc;
        img.classList.add("list-image");

        const p = document.createElement('p');
        p.innerText = movieName;
        p.classList.add("list-text");

        li.appendChild(img);
        li.appendChild(p);
        myList.appendChild(li);
      });
    });


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

    