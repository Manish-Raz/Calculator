

let string = "";
let buttons = document.querySelectorAll('.new');
Array.from(buttons).forEach((button) => {                //button is diff than new ;it is used as parameter for the array
    button.addEventListener('click', (e) => {
        // console.log(e.target);

        if (e.target.innerHTML == '=') {
            string = eval(string);     //didn't get how those values came in string and evaluated how?
            document.querySelector('input').value = string;

        }
        else {
        
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }

        if (e.target.innerHTML == 'AC') {
            string = "";
            document.querySelector('input').value = string;
        }
        if (e.target.innerHTML == 'D') {
            string = string.substring(0, string.length - 1);
            document.querySelector('input').value = string;

        }

    })

})
