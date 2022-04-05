Работење со third-party API

==============================

API endpoints:
    - https://jsonplaceholder.typicode.com/todos
    - https://jsonplaceholder.typicode.com/users/:id
    - Пример: https://jsonplaceholder.typicode.com/users/1

==============================
  
Да се изработи веб апликација во која ќе се работи со third-party API и која треба да ги исполнува следните барања:
  
1. При отварање на апликацијата, да се прикаже листата од "todos" во UI-to, превземени од наведеното API ( https://jsonplaceholder.typicode.com/todos )
    
2. Да се додаде dropdown мени преку кое ќе може да се исфилтрира листата од прикажаните "todos" со следните можни опции:
    - сите "todos"
    - само завршените "todos"
    - само не завршените "todos"
      
3. Да се додаде копче во рамки на секој од прикажаните "todo" елементи, кое при клик ќе го избрише "todo"-то на кое кликнатото копче му припаѓа.
    
4. Доколку се избришат СИТЕ моментално прикажани "todo" елементи ќе треба повторно да се
    превземе листата од API-то и истото да му се даде до знаење на корисникот преку некаков вид на известување, како нотификација, loader или слично.
    
5. Да се додаде уште едно копче во рамки на секој од прикажаните "todo" елементи, кое при клик ќе го промени неговиот статус означувајќи го "todo"-то како завршено или не завршено (да се прави toggle)
    
6. Да се додаде input поле преку кое ќе може да се пребарува листата од моментално прикажани "todos"
    - Пребарувањето да биде врз основа на насловот на "todo" елементот како што е добиен од API-то.
      
7. При клик на самиот "todo" елемент ( било каде во рамки на елементот, освен на копчето за бришење и копчето за промена на статус ) да се изврши пренасочување на посебна страна на која ќе се превземат податоци за "user"-от кој е поврзан со кликнатото "todo":
    - На оваа страна да се прикажат следните податоци за корисникот:
        - аватар на корисникот во кој ке се прикажуваат иницијалите од името (пример: "Leanne Graham" -> "LG")
        - корисничкото име (username) (пример: "Moriah.Stanton") како параграф
        - адресата на живеење во формат "улица, град" (пример: "Kulas Light, Gwenborough") како параграф
        - email адресата (пример: "Rey.Padberg@karina.biz") како линк
    - Да има копче кое на клик ќе овозможи корисникот да се врати назад на претходната страна
    
8. На страната на корисникот во една листа да се прикажат сите "todos" елементи кои се креирани од корисникот чии податоци ги гледаме во моментот.