let tem = parseInt(prompt("Enter the temperature centigrade "));

if(tem<0){
 document.write(tem +" Freezing weather");
 }
 else if((tem>=0)&&(tem<10)){
 document.write(tem +" Very Cold weather");
 }
 else if((tem>=10)&&(tem<20)){
 document.write(tem +" Cold weather");
 }
 else if((tem>=20)&&(tem<30)){
 document.write(tem +" Normal in Temp");
 }
 else if((tem>=30)&&(tem<40)){
 document.write(tem +" Its Hot");
 }
 else if(tem>=40){
 document.write(tem +" Its Very Hot");
 }
 else {
 document.write("Enter the valid details")
 }






