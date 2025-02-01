//datatypes are like
//1. String

$var="This is a string";
echo($var);
$lenth=strlen($var);
echo "The length of the string is ".$lenth;
echo "words num is ".str_word_count($var);
echo "is word is in ".strpos($var,"is");
echo "replace is with at".str_replace("is","at",$var);


//2. Integer

$var=21;
echo($var);



//3. Float

$var=21.1;
echo($var);


//4. Boolean

$var=true;
echo($var);



//5. Array

$var=array("Alvi","Rahman","Alvi");
echo($var[0]);


//6. Object

$var=(object)["first"=>"Alvi","last"=>"Rahman"];
echo($var->first);

//contrains

define("pi",3.14);
echo(pi);
