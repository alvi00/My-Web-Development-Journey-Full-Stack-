//operators in php
// 1. Arithmetic operators
//Arithmetic operators are like + - / * this sort of things

$var1=10;
$var2=20;
$var3=$var1+$var2;
$var4=$var1*$var2;
$var5=$var1-$var2;
$var6=$var1/$var2;

//this is how it works


// 2. Assignment operators

//Assignment operators are like = += -= *= /= this sort of things

$newvar= $var1;
$newvar += 1;
$newvar -= 1;
$newvar *= 1;
$newvar /= 1;


//this is how it works



//3. Comparison operators
//Comparison operators are like == != > < >= <= this sort of things

var_dump(1==4);
var_dump(1!=4);
var_dump(1>4);

//this var_dump will return true or false on the basis of the comparison


//4. Increment/Decrement operators
//this are like ++ -- this sort of things

$var1++;
$var1--;




//5. Logical operators

//Logical operators are like and or xor not this sort of things which are writen as && || xor !

$myvar=(true and true);
$myvar=(true or false);
$myvar=(true xor false);
//xor is like if one is true and other is false then it will return true otherwise false


//this will return true or false on the basis of the logical operators
echo var_dump($myvar);
