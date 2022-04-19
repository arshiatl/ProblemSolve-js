var userName = prompt("نام کاربری خود را وارد بکنید");

if(userName . length < 3){

    alert("نام کاربری بایید حداقل دارای 3 کارکتر باشد")
}
else{

    alert("نام کاربری صحیح است");
}

var password = prompt("رمز عبور خود را وارد بکنید");

if(password . length < 8){

    alert("رمز عبور شما بایید حداقل دارای 8 کارکتر باشد");
}
else{

    alert("رمز عبور صحیح وارد شده است");
}

if(userName . length > 3 && password .length > 8){

    alert("ثبت نام با موفقیت انجام شد");
}

if(userName . length < 3 || password .length < 8){

    alert("ثبت نام با ایراد مواجه شد");
}