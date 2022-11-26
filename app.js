// document.write("<h2> CHAPTER 21-25 </h2>");
// // QUESTION NO 1
// var firstname=prompt("ENTER YOUR FIRST NAME");
// var lastname=prompt("ENTER YOUR LAST NAME");
// var fullname = firstname + " "+ lastname;
// alert(" HELLO!\n " +  "  " +  fullname );
// // QUESTION NO 2
// var str=prompt("ENTER YOUR FAVOURITE MOBILE PHONE");
// count=0;
// for(var i=0;i<str.length;i++){
//     ++count 
// }
// alert(count);
// // QUUESTION NO 3
// var pa="pakistani";
// length=pa.indexOf("n");
// document.write("STRING : " + pa + "<BR />");
// document.write("INDEX OF 'n' IS : " + length + "<BR />");
// // QUESTION NO 4
// var hello = "HELLO WORLD";
// length2=hello.lastIndexOf("L");
// document.write("STRING : " + hello + "<BR />");
// document.write("INDEX OF 'L' IS : " + length2 + "<BR />");
// // QUESTION NO 5
// var pa="pakistani";
// document.write("STRING : " + pa + "<BR />");
// document.write("CHARACTER AT INDEX 3 IS "+pa.slice(pa.indexOf("i"),4) + "<BR />");
// // QUESTION NO 6
// var fir="HELLO! "
// document.write(fir.concat(" MIRZA"," AHMER"," BAIG")+ "<BR />");
// // QUESTION NO 7
// var city7="HYDERABAD";
// document.write("CITY : " + city7 + "<BR />");
// city7=city7.replace("HYDER","ISLAM");
// document.write("AFTER REPLACEMENT : " + city7 + "<BR />");
// // QUESTIONN NO 8
// var message = "Ali and Sami are best friends. They play cricket and football together.";
// document.write("BEFORE REPLACEMENT : " + message + "<BR />");
// message=message.replace(/and/g,"&");
// document.write("BEFORE REPLACEMENT : " + message + "<BR />");
// // QUESTION NO 9
// var stringn="472"
// document.write("VALUE " + stringn + "<BR />")
// document.write("TYPE : "+typeof(stringn) + "<BR />")
// document.write("VALUE " + stringn + "<BR />")
// stringn=parseInt(stringn);
// document.write("TYPE : "+typeof(stringn) + "<BR />")
// // QUESTION NO 10
// var inputs=prompt("ENTER YOUR WORD")
// document.write("USER INPUT : " + inputs + "<br />")
// inputs=inputs.toUpperCase()
// document.write("UPPER CASE : " + inputs + "<br />")
// // QUESTION NO 11
// var inputL=prompt("ENTER YOUR WORD")
// document.write("USER INPUT : " + inputL + "<br />")
// var input2=inputL[0].toUpperCase();
// var lowerinput=inputL.slice(1);
//  var finalinput =input2.concat(lowerinput);
//  document.write("TITLE CASE : " + finalinput + "<br />")
// // QUESTION NO 12
// var num=35.36
// document.write("NUMBER : " + num + "<br />")
// num=num.toString();
//  var num55 =num.replace(".","");
// document.write("NUMBER : " + num55 + "<br />")
// // QUESTION NO 13
// var userpass=prompt("ENTER A PASSWORD");
// var splitpass=userpass.split("");
// var flag=false;
// for(var i =0;i<splitpass.length;i++){
//     if((splitpass[i] === "!") || (splitpass[i] === ",") || (splitpass[i] === ".") || (splitpass[i] === "@")){
//         flag=true;
//         alert("PLEASE ENTER A VALID PASSWORD")
//     }
// }
// if (flag === false) {
//     alert("Valid password")
// }
// //  QUESTION NO 14
// var orderitem = prompt("ENTER YOUR ORDER");
// orderitem=orderitem.toLowerCase();
// var bakery = ["cake", "applepie", "cookie", "chips", "patties"];
// var match = false;
// for (var i = 0; i < bakery.length; i++) {
//     if (orderitem === bakery[i]) {
//         match = true;
//         document.write("<h2>" + orderitem + " IS AVALIBLE AT INDEX " + i + " IN OUR BAKERY " + "</h2>");
//     }   
// }
// if (match == false) {
//     document.write("<h2>" + orderitem + " IS NOT AVALIBLE IN OUR BAKERY " + "</h2>");
// }  
// //  QUESTION NO 15 
// // sorry nai arahaha ha
// // QUESTION NO  16
// var university ="UNIVERSITY OF KARACHI"
// var uc=university.split("")
// for(var i=0;i<uc.length;i++){
//     document.write(uc[i] + "<br />")
// }
// // QUESTION NO 17
// var userinput2=prompt("ENTER YOUR WORD");
// document.write("<br />" + "USER INPUT : "+ userinput2 );
// var userinpurarray=userinput2.split("");
// resultyy=userinpurarray[userinpurarray.length-1]
// document.write("<br />" + "LAST CHARACTER OF INPUT : "+ resultyy);
// // QUESTION NO 18
// var demytext="The quick brown fox jumps over the lazy dog."
// demytext=demytext.toLowerCase();
// var demyarray=demytext.split(" ")
// var count=0;
// for(var i =0; i<demyarray.length; i++){
//     if(demyarray[i]==="the"){
//         count++
//     }
// }
// document.write("<br />" + "TEXT : "+ demytext);
// document.write("<br />" + "THE WORD 'THE' OCCURENCE IN TEXT IS : "+ count);
// document.write("<h2> CHAPTER 26-30 </h2>");
// // QUESTION NO 1
// var usernumber=+prompt("ENTER A POSITIVE INTEGER")
// if(usernumber<0){
//     alert("PLEASE ENTER A POSITIVE INTEGER")
// }
// document.write("NUMBER : " + usernumber+"<br />")
// document.write("ROUND OFF VALUE : " + Math.round(usernumber)+"<br />")
// document.write("FLOOR VALUE : " + Math.floor(usernumber)+"<br />")
// document.write("CEIL VALUE : " + Math.ceil(usernumber)+"<br />")
// // QUESTION  NO 2
// var usernumber99=+prompt("PLEASE ENTER A NEGATIVE FLOATING  VALUE")
// if(usernumber99>0){
//     alert("PLEASE ENTER A NEGATIVE FLOATING  VALUE")
// }
// document.write("<br />"+"NUMBER : " + usernumber99+"<br />")
// document.write("ROUND OFF VALUE : " + Math.round(usernumber99)+"<br />")
// document.write("FLOOR VALUE : " + Math.floor(usernumber99)+"<br />")
// document.write("CEIL VALUE : " + Math.ceil(usernumber99)+"<br />")
// // QUESTION NO 3
// var number33=+prompt("PLEASE ENTER A NUMBER")
// var absolutenumber;
// if(number33<0){
//     absolutenumber=number33 * -1;
// }
// else if(number33>0){
//     absolutenumber=number33
// }
// document.write("<br />"+"NUMBER : " + number33)
// document.write("<br />"+"ABSOLUTE NUMBER : " + absolutenumber)
// // QUESTION NO 4
// var aBC= Math.floor(Math.random()* 6)+1;
// document.write("<H2>"+ "RANDOM DICE VALUE :" +aBC + "<H2 />")
// QUESTION NO 5
// var tossnum=Math.floor(Math.random()*2)+1;
// console.log(tossnum)
// if(tossnum===1){
//     document.write("<h3>" +tossnum    +"</h3>")
//     document.write("<h3>" +"RANDOM COIN VALUE : TAILS "  +"</h3>")


// }
// else if(tossnum===2){
//     document.write("<h3>" +tossnum    +"</h3>")
//     document.write("<h3>" +"RANDOM COIN VALUE : HEAD "  +"</h3>")
// }
// // QUESTION NO 6
// var gnumber=Math.floor(Math.random()*100)+1;
//     document.write("<h3>" +"RANDOM NUMBER BETWEEN 1 AND 100: "+ gnumber  +"</h3>"+)
// QUESTION NO 7
// var weight=prompt("ENTER YOUR WEIGHT")
// var b,c;

// if(weight.indexOf(".")){
//     b=parseFloat(weight)
//     document.write( "THE WEIGHT OF USER IS : " + b + "kg" )

// }
// else{
//     c=parseInt(weight)
//     document.write("THE WEIGHT OF USER IS "+ c + "kg")

// }
// // QUESTION NO 8
// var stn=Math.floor(Math.random()*10)+1;
// console.log(stn)
// var asknum=+prompt("chose a number")
// if(stn===asknum){
//     document.write("congratulation")
// }
// else{
//     document.write("sorry")
// }
// document.write("<h2> CHAPTER 31-34 </h2>");
// // QUESTION NO 1
// var currentdt=new Date();
// document.write("<h2>"+ currentdt +"</h2>");
// // QUESTION NO 2
// var month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var currentmonth=currentdt.getMonth()
// alert("CURRENT MONTH: "+month[currentmonth])
// // QUESTION NO 3 && 4
// var dayNames = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Sat"];
// var currentDay=currentdt.getDay();
// document.write("<h2>"+ "TODAY IS :"+ dayNames[currentDay]+"</h2>");
// if(dayNames[currentDay]==="sat"   || dayNames[currentDay]==="sun"){
//     document.write("TODAY IS FUN DAY")
// }
// // QUESTION NO 5
// var dateAjKi=currentdt.getDate()
// if(dateAjKi<=15){
//     document.write("<h2>"+ "FIRST FIFTEEN DAYS OF MONTH"+"</h2>");
// }
// else{
//     document.write("<h2>"+ "LAST FIFTEEN DAYS OF MONTH"+"</h2>");
// }
// // QUESTION NO 6
// document.write("<h2>"+ currentdt +"</h2>");
// document.write("<h2>"+"ELAPSED MILLISECONDS SINCE JANUARY 1,1970 : "  + currentdt.getTime() +"</h2>");
// document.write("<h2>"+"ELAPSED MINIUTES SINCE JANUARY 1,1970 : "  + (currentdt.getTime()/(1000*60*60)) +"</h2>");
// // QUESTION NO 7
// var currenthour=currentdt.getHours()
// if(currenthour<=12){
//     document.write("<h2>"+"ITS AM"   +"</h2>")
// }
// else{    document.write("<h2>"+"ITS PM"   +"</h2>")
// }
// // QUESTION NO 8
// var laterdate=new Date("Dec 31, 2020");
// document.write("<h2>"+ "LATER DATE :"+laterdate+"</h2>");
// // QUESTION  NO 9
// var a=new Date("june 18, 2015")
// var diff=currentdt-a;
// var ramazandas=Math.round(diff/(1000*60*60*24))
// document.write("<h2>"+ ramazandas+" DAY HAVE PASSED SINCE 1ST RAMADAN, 2015"+"</h2>");
// // QUESTION NO 10
// var ref=new Date("jan 1, 2015");
// var diff447=currentdt-ref;
// var refsec=Math.round(diff447/(1000*60));
// document.write("<h2>"+ ramazandas+" DAY HAVE PASSED SINCE 1ST RAMADAN, 2015"+"</h2>");
// document.write("<h2>"+" ON REFERENCE DATE : "+ref+", "+refsec +" SECONDS HAD PASSED SINCE BEGINNING OF 2015" +"</h2>");
// // QUESTION NO 11
// document.write("CURRENT DATE AND TIME: "+currentdt +"<br />")
// var oneha=currentdt.setHours(currenthour-1)
// document.write("ONE HOUR AGO: "+currentdt +"<br />")
// // QUESTION NO 12
// document.write("CURRENT DATE AND TIME: "+currentdt +"<br />")
// var currentyear=currentdt.getFullYear()
// var hun100=currentdt.setFullYear(currentyear-100);
// document.write("ONE 100 YEAR AGO : "+currentdt +"<br />")
// // QUESTION NO 13
// var ageuser=+prompt("ENTER YOUR AGE");
// var diffage=currentyear-ageuser;
// document.write("USE AGE IS: "+ageuser +"<br />")
// document.write("YOUR BIRTH YEAR IS : "+diffage +"<br />")
// // QUESTION NO 14
// document.write("**************************************************")
// document.write("<h1>" +"K- ELECTRIC BILL" +"</h1>")
// document.write("**************************************************")
// var coustomerName=prompt("ENTER COUSTOMER NAME")
// coustomerName=coustomerName.toUpperCase();
// var datebill=new Date();
// var month=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
// var monthbill=datebill.getMonth()
// var noOFunits=+prompt("ENTER NO OF UNITS");
// var chargerOfunit=+prompt("ENTER CHARGES OF UNITS");
// var nAiWnD=noOFunits*chargerOfunit;
// var latepayment=350;
// var grossAmount=nAiWnD+latepayment;
// document.write("<br />"+"COUSTOMER NAME :" + coustomerName +"<br />");
// document.write("MONTH :" + month[monthbill] +"<br />");
// document.write("NO OF UNITS :" + noOFunits +"<br />");
// document.write("CHARGE PER  UNITS :" +chargerOfunit  +"<br />");
// document.write("**************************************************"+"<br />")
// document.write("NET AMOUNT WITHIN(DUE DATE) :" + nAiWnD +"<br />");
// document.write("LATE AMOUNT :" +  latepayment+"<br />");
// document.write("NET AMOUNT WITHIN(AFTER DUE DATE) :" + grossAmount+"<br />");
// document.write("**************************************************"+"<br />")
//                        CHAPTER N0 35 -38
// // QUESTION NO 1
// document.write("<h2> CHAPTER 35-38 </h2>");
// function tellDateAndTime(){
//     var currentDateAndTime= new Date()
//     document.write(currentDateAndTime)
// }
// tellDateAndTime();
// // QUESTION NO 2
// function sayGreeting(fname,lname){
//     alert("WELCOME "+fname +" "+ lname)
// }
// sayGreeting("MIRZA","AHMER BAIG")
// // QUESTION NO 3
// function addition2Number(){
// var number1=+prompt("ENTER FIRST NUMBER");
// var number2=+prompt("ENTER SECOND NUMBER");
// var sum=number1+number2;
// return sum;
// }
// var t=addition2Number();
// document.write("<br />" + t);
// // QUESTION NO 4
// document.write("<BR />"+"*****************************************")
// document.write("<h2>"+"CALCULATOR"+"</h2>")
// document.write("*****************************************")
// function calculator(num1,num2,numopert){
//     var resltc;
//     if(numopert==="+"){
//         resltc=num1+num2;
//         document.write("<br />"+num1+numopert+num2+"= "+resltc)
//         return resltc    
//     }
//     else if(numopert==="-"){
//         resltc=num1-num2;
//         document.write("<br />"+num1+numopert+num2+"= "+resltc)
//         return resltc    
//     }
//     else if(numopert==="*"){
//         resltc=num1*num2;
//         document.write("<br />"+num1+numopert+num2+"= "+resltc)
//         return resltc    
//     }
//     else if(numopert==="/"){
//         resltc=num1/num2;
//         document.write("<br />"+num1+numopert+num2+"= "+resltc)
//         return resltc    
//     }
// }
// // QUESTION NO 5
// function square(a){
//      var sq=a*a
//     document.write("<br />"+sq)

// }
// // QUESTION NO 6
// function factorial(n){
//     var fact=1
//     if(n===0){
//         document.write("<h2>"+"0!=1"+"</h2>")

//     }
//     else if(n<0){
//         document.write("<h2>"+"SORRY FACTORIAL CANNOT BE FIND OF NEGATIVE NUMBER"+"</h2>")

//     }
//     else if(n>0){
//         for(var i=1;i<=n;i++){
//             fact=fact*i;
//         }
//         document.write("<h2>"+"THE FACTORIAL OF "+ n +":"+fact+"</h2>")
//     }
// }
// // QUESTION NO 7
// function counting(start,end){
//     for(var i=start;i<=end;i++){
//         document.write("<h2>"+i+"</h2>")
//     }
// }
// // QUESTION NO 8
// WE DONOT LEARN NESTED FUNCTION
// // QUESTION NO 9
// var length=55
// var breadth=77
// function rectangle(l,b){
//     var area=l*b;
//     document.write("<h2>"+area+"</h2>")
// }
// rectangle(length,breadth)
// // QUESTION NO 10
// function palindrone(check){
//     for(var i=0;i<check.length;i++){
//         var straight=check[i]    
//     }
//     for(var i=check.length-1;i>=0;i--){
//         var opposiite=check[i]
//     }
//     if(straight===opposiite){
//         document.write("YOUR WORD IS PALINDRONE")
//     }
//     else{
//         document.write("SORRY YOUR WORD IS NOT PALINDRONE")

//     }
// }
// // QUESTION NO 11
// function capitalFirstLetter(str){
//     var word=str.split(" ");
//     for(var i=0;i<word.length;i++){
//         word[i]=word[i].charAt(0).toUpperCase()+ word[i].slice(1)
//     }
//     console.log(word)

//     return word
// }
// QUESTION NO 12
// function longestWord(wording){
//     var maxword
//     var maxLength =0;
//     var wording=prompt("ENTER THE WORD");
//     wording=wording.toLowerCase();
//     wording=wording.split(" ")
//     for(var i =0;i<wording.length;i++){ 
//         if(wording[i].length>maxLength){
//             maxLength=wording[i].length
//              maxword=wording[i]
//         }
//         } 
//         console.log(maxword)
//         return maxword
//     }
// // QUESTION NO 13
// function countingWords(text,countWord){
//     var text;
//     var countWord;
//     var countWord3=0;
//     for(var i=0;i<text.length;i++){
//         if(text[i]===countWord){
//             ++countWord3
//         }
//     }
//     document.write("<h2>"+"THE GIVEN TEXT IS : "+text+"</h2>")
//     document.write("<h2>"+"THE OCCURENCE OF : "+countWord +" IS "+countWord3+"TIMES"+"</h2>")


//     return countWord3
// }
// // QUESTION NO 14
// function calcCircumference(radius){
//     var curcumference=2 * 3.14 * radius;
//     curcumference=Math.round(curcumference)
//     document.write("<h2>"+"THE CIRCUMFERENCE IS " + curcumference +"</h2>");
//     return curcumference

// }
// var a=calcCircumference(5)
// function calcArea(radius){
//     var curcumarea=3.14 * (radius * radius);
//     document.write("<h2>"+"THE AREA OF CIRCLE IS " + curcumarea +"</h2>");
//     return curcumarea
// }