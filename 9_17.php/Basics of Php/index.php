<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alvi</title>
</head>
<body>
    <div class="container">
        <h1>This is my first php website</h1>

        <?php
            echo "Hello World and this is using PHP";
            $var1 = 10;
            $var2 = 20;
            $var3= $var1 + $var2;
            $var= "  hello  ";
            echo $var;
            echo $var3;

            $var1=5;
            $var2=2;
            $var3=$var1+$var2;
            $var4=$var1*$var2;
            $var5=$var1-$var2;
            $var6=$var1/$var2;
            echo "<br>";
            echo $var3;
            echo "<br>";
            echo $var4;
            echo "<br>";
            echo $var5;
            echo "<br>";
            echo $var6;


            echo "<br>";
            echo var_dump(1==4);
            echo "<br>";
            echo var_dump(1!=4);
            echo "<br>";
            echo var_dump(1>4);

            echo "<br>";
            $var1++;
            echo $var1;

            $myvar1=(false and true);
            $myvar2=(true or false);
            echo "<br>";
            echo var_dump($myvar1);
            echo "<br>";
            echo var_dump($myvar2);
            echo "<br>";


            $var="This is a string";
            echo($var);
            $lenth=strlen($var);
            echo "The length of the string is ".$lenth . " ok";
            echo "<br>";
            echo "words num is ".str_word_count($var);
            echo "<br>";
            echo "is word is in ".strpos($var,"is");
            echo "<br>";
            echo "replace is with at".str_replace("is","at",$var);
            echo "<br>";

            echo "<br>";
            echo($var);
            echo "<br>";
            $var=true;
            echo($var);
            echo "<br>";
            $var=array("Alvi","Rahman","Alvi");
            echo($var[0]);
            echo "<br>";
            $var=(object)["first"=>"Alvi","last"=>2];
            echo($var->last);
            echo "<br>";
            define("pi",3.14);
            echo(pi);
            $age=20;
            echo "<br>";
            if($age>18){
                echo "You can drink";
            }
            else if($age==18){
                echo "You can drink but be careful";
            }
            else{
                echo "You can't drink";
            }

            echo "<br>";
            $var=10;
            for($i=0;$i<10;$i++){
                $var++;
                echo $var;
                echo "<br>";
            }

            $arr=array("Alvi","Rahman","Alvi");

                foreach($arr as $value){
                    echo $value;
                    echo "<br>";
                }

                function print5()
            {
                echo "5";
                echo "<br>";
            }

            print5();
            function print6($num)
            {
                echo $num;
                echo "<br>";
            }
            print6(6);
            ?>
    </div>
</body>
</html>