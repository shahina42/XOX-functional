const boxarr = document.querySelectorAll(".box");

let mc=0;
let flag = 1;
const x_pos = []
const y_pos = []
const winning_combinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
];

boxarr.forEach((el) => {
    el.addEventListener("click", (event) => {
        if (!event.target.innerText) {
            startgame(event.target);
        }
    });
});

function startgame(e) {
    console.log(e.id)
    // e.innerText = "x"
    if (flag == 1) {
        const p = document.createElement("p");
        p.innerText = "X"
        x_pos.push(Number(e.id))
        p.style.color = "red";
        e.appendChild(p);
        if (check_win(x_pos, winning_combinations) == true){
            console.log("x won")
            console.log("hh:",document.getElementById("result"))
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("message").innerHTML = "X won";
        }
        flag = 0
            
    }
    
    

    else {
        const p = document.createElement("p");
        p.innerText = "O"
        p.style.color = "blue";
        e.appendChild(p);
        y_pos.push(Number(e.id))
        if (check_win(y_pos, winning_combinations) == true) {
            console.log("y won")
            document.getElementById("result").style.visibility = "visible";
            document.getElementById("message").innerHTML= "O won";
        }
        flag = 1
    }
    console.log(x_pos, y_pos)

    mc++
    if (mc == 9) {
        document.getElementById("result").style.visibility = "visible";
        document.getElementById("message").innerHTML = "Its A Tie";
    }
    
    }

function check_win(arr, winning_combinations) {
    for (let i = 0; i < winning_combinations.length; i++) {
        console.log(winning_combinations[i])
        const boole = winning_combinations[i].every((el) => {
            return arr.includes(el)

        })
        if (boole == true) {
            return true
        }
    }
    return false
}

button.onclick=()=>{
  location.reload();
}

