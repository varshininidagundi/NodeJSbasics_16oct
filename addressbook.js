var readlineSync = require('readline-sync');

let{ name_check,city_check,state_check,address_check,phoneno_check,zip_check }= require("./utility.js"); 

const address_book=[
        {
            "name":"varshini",
            "adress":"navanagar",
            "city":"bagalkot",
            "state":"KA",
            "zip":587103,
            "phone_no":9686556133
        },
        {
            "name":"vaishnavi",
            "adress":"rr nagar",
            "city":"bengalore",
            "state":"KA",
            "zip":187104 ,
            "phone_no":1686556134
        },
        {
            "name":"adi",
            "adress":"sector no - 35",
            "city":"bgk",
            "state":"KA",
            "zip":287104 ,
            "phone_no":2686556134
        },
        {
            "name":"asha",
            "adress":"plotno 57",
            "city":"belgavi",
            "state":"KA",
            "zip":387104 ,
            "phone_no":3686556134
        },
        {
            "name":"satish",
            "adress":"opp hospital",
            "city":"nidagundi",
            "state":"KA",
            "zip":487104 ,
            "phone_no":4686556134
        }
];
console.log("address book is as follows \n",address_book)
//console.log(address_book[0].name)
function add(){
    let name=name_check();
    let city=city_check();
    let state=state_check();
    let address=address_check();
    let phone_no=phoneno_check();
    let zip=zip_check();
    const newEntry = {
        "name": name,
        "address": address,
        "city": city,
        "state": state,
        "zip": parseInt(zip),
        "phone_no": parseInt(phone_no)
    };
    console.log("NEW ENTRY",newEntry)
    console.log(address_book);
}
//add()
function eliminate(){
    const index=readlineSync.question("enter index from the index book which you want to delete")
        if (index>=0 && index < address_book.length) {
            const deletedentry = address_book.splice(index, 1);
            console.log(deletedentry[0]);
        }
        else{
            console.log("invalid index");
        }
    console.log(address_book);
}
//eliminate()
const Update=()=>{
    const index=readlineSync.question("enter the index in which u want to alter");
    if(index>=0 && index < address_book.length){
        const subindex =readlineSync.question("1 for name change\n2 for address change\n3 for city change\n4 for state change \n5 for zip change\n 6 for phone number change");
            switch(subindex){
            case "1":
                var name =readlineSync.question("enter the name you want to alter")
                address_book[index].name=name;
                break;
            case "2":
                var address =readlineSync.question("enter the address you want to alter")
                address_book[index].address=address;
                break;
            case "3":
                var city =readlineSync.question("enter the name you want to alter")
                address_book[index].city=city;
                break;
            case "4":
                var state =readlineSync.question("enter the name you want to alter")
                address_book[index].state=state;
                break;
            case "5":
                var zip =readlineSync.question("enter the name you want to alter")
                address_book[index].name=zip;
                break;
            case "6":
                var no =readlineSync.question("enter the name you want to alter")
                address_book[index].name=no;
                break;
            default:
                console.log("invalide choose between 1-6")
        }
        console.log(address_book)
    }
    else{
        console.log("invalid index");
    }
}
//Update();
function sort_by_zip(){
    const sortByZIP = address_book.slice().sort((a, b) => a.zip - b.zip);

    console.log("Sorted Address Book by ZIP Code:");
    console.log(sortByZIP);
}
//sort bt name
function sort_by_name(){
    const sortByName = address_book.slice().sort((a, b) => a.name.localeCompare(b.name));

    console.log("Sorted Address Book by Name:");
    console.log(sortByName);
}


const choice=readlineSync.question("choose the number to perform the operations\n 1. to addd entries\n 2. deleted entries\n 3. to update or edit \n 4. sort by zip \n 5. sort by name\n----")
    do{
    switch(choice){
        case '1':
            add();
            break;
        case '2':
            eliminate();
            break;
        case '3':
            Update();
            break;
        case '4':
            sort_by_zip();
            break;
        case '5':
            sort_by_name();
            break;
        default:
            console.log("invalid");
            break;
    }
}while(true)
