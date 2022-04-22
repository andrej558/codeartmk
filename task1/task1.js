/**
 *
 * Да се направи функција која за даден број на чекори `n` и низа од вредности, ќе ги поместува елементите кои се наоѓаат во неа следејќи ги следните правила:
 *
 * - Доколку `n` е ПОЗИТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон десно, за онолку места колку што изнесува `n`.
 *
 * - Доколку `n` е НЕГАТИВЕН број, тогаш секој од елементите во низата треба да ја промени својата позиција кон лево, за онолку места колку што изнесува `n`.
 *
 * Пример:
 *  - n = 2, низата ['1', '2', '3'] треба да се претвори во ['2', '3', '1']
 *  - n = -3, низата ['1', '2', '3', '4', '5'] треба да се претвори во ['4', '5', '1', '2', '3']
 */


let arr = [1,2,3,4,5]


alert("To see the result of the shifts open console via Inspect element");

document.getElementById("btnSubmit").addEventListener("click", ()=>{

    var input = document.getElementById("numberShifts");

    if(input.value == "" || input.value == null){
        alert('Enter valid number');
        return;
    }
    var shiftsValue = input.value;

    

    if(shiftsValue > 0){
        for(var i=0;i<shiftsValue;i++){
            arr.unshift(arr.pop());
        }
    }

    else if(shiftsValue < 0){

       shiftsValue = Math.abs(shiftsValue);

       for(var i=0;i<shiftsValue;i++){
           arr.push(arr.shift());
       }
        
    }
    

    console.log(arr);


});