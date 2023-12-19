var inname = document.getElementById("inname");
var outname = document.getElementById("name");


inname.addEventListener('input', function(){
    if (inname.value === "")
        outname.innerHTML = 'JANE APPLESEED'
    else
        outname.innerHTML = inname.value;
});

var innumber = document.getElementById("innumber");
var number = document.getElementById("number");

innumber.addEventListener('input', function(){
    if (innumber.value === "")
        number.innerHTML = '0000 0000 0000 0000'
    else{
        number.innerHTML = innumber.value;
        if(number.innerHTML.length > 4)
        {
            let tmp = '';
            for(let i = 0; i < number.innerHTML.length; i++){
                if(i > 0 && i % 4 === 0)
                    tmp += ' ';
                tmp += number.innerHTML[i];
            }
            number.innerHTML = tmp;
        }
    }
});

var inm = document.getElementById("inmm");
var iny = document.getElementById("inyy");
var my = document.getElementById("my");
var m = "00", y = "00";

inm.addEventListener('input', function(){
    if (inm.value === "")
        m = "00";
    else{
        m = inm.value;
    }
    my.innerHTML = m + '/' + y;
});

iny.addEventListener('input', function(){
    if (iny.value === "")
        y = "00";
    else{
        y = iny.value;
    }
    my.innerHTML = m + '/' + y;
});

var incvc = document.getElementById("incvc");
var outcvc = document.getElementById("outcvc");

incvc.addEventListener('input', function(){
    if(incvc.value === "")
        outcvc.innerHTML = "000";
    else
        outcvc.innerHTML = incvc.value;
});

var errorname = document.getElementById("errorname");
var errornumber = document.getElementById("errornumber");
var errordate = document.getElementById("errordate");
var errorcvc = document.getElementById("errorcvc");

function submit(){
    let formisvalid = 0;

    //check name format

    if(inname.value.length === 0)
    {
        inname.classList.add("invalid");
        errorname.innerHTML = "Can't be blank";
        errorname.style.color = "red";
    }
    else if(inname.value.includes("0") || inname.value.includes("1") || inname.value.includes("2") || inname.value.includes("3") || inname.value.includes("4") || inname.value.includes("5") || inname.value.includes("6") || inname.value.includes("7") || inname.value.includes("8") || inname.value.includes("9"))
    {
        inname.classList.add("invalid");
        errorname.innerHTML = "Can't contain numbers";
        errorname.style.color = "red";
    }
    else if(!inname.value.includes(" "))
    {
        inname.classList.add("invalid");
        errorname.innerHTML = "Wrong format";
        errorname.style.color = "red";
    }
    else
    {
        inname.classList.remove("invalid");
        errorname.style.color = "white";
        formisvalid++;
    }

    //check card number format

    if (innumber.value.length === 0)
    {
        innumber.classList.add("invalid");
        errornumber.innerHTML = "Can't be blank";
        errornumber.style.color = "red";
    }
    else if (innumber.value.length < 16)
    {
        innumber.classList.add("invalid");
        errornumber.innerHTML = "Not enough numbers";
        errornumber.style.color = "red";
    }
    else
    {
        innumber.classList.remove("invalid");
        errornumber.style.color = "white";
        formisvalid++;
    }

    //check date format

    let isdatevalid1 = 1;
    let isdatevalid2 = 1;
    if (inm.value.length === 0 || iny.value.length === 0)
    {
        errordate.innerHTML = "Can't be blank";
        errordate.style.color = "red";
        if (inm.value.length === 0)
        {
            inm.classList.add("invalid");
            isdatevalid1++;
        }
        if (iny.value.length === 0)
        {
            iny.classList.add("invalid");
            isdatevalid2++;
        }
    }
    if (inm.value.length === 1 || iny.value.length === 1)
    {
        errordate.innerHTML = "Wrong format";
        errordate.style.color = "red";
        if (inm.value.length < 2)
        {
            inm.classList.add("invalid");
            isdatevalid1++;
        }
        if (iny.value.length < 2)
        {
            iny.classList.add("invalid");
            isdatevalid2++;
        }
    }
    if (inm.value.length > 0 && (inm.value > 12 || inm.value < 1))
    {
        inm.classList.add("invalid");
        errordate.innerHTML = "Wrong format";
        errordate.style.color = "red";
        isdatevalid1++;
    }
    if (iny.value.length > 0 && iny.value < 24)
    {
        iny.classList.add("invalid");
        errordate.innerHTML = "Wrong format";
        errordate.style.color = "red";
        isdatevalid2++;
    }
    if (isdatevalid1 === 1)
        inm.classList.remove("invalid");
    if (isdatevalid2 === 1)
        iny.classList.remove("invalid");
    if (isdatevalid1 === 1 && isdatevalid2 === 1)
    {
        errordate.style.color = "white";
        formisvalid++;
    }

    //check cvc format

    if (incvc.value.length === 0)
    {
        incvc.classList.add("invalid");
        errorcvc.innerHTML = "Can't be blank";
        errorcvc.style.color = "red"
    }
    else if (incvc.value.length < 3)
    {
        incvc.classList.add("invalid");
        errorcvc.innerHTML = "Wrong format";
        errorcvc.style.color = "red"
    }
    else
    {
        incvc.classList.remove("invalid");
        errorcvc.style.color = "white"
        formisvalid++;
    }

    //confirm informatons

    if (formisvalid === 4)
    {
        let content = document.getElementById("content");
        let confirm = document.getElementById("confirm");
        let thankyou = document.getElementById("thankyou");

        content.style.display = "none";
        confirm.innerHTML = "Continue";
        thankyou.style.display = "flex";
    }
}