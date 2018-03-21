**Code Snippets:**
*  Error Message: missing a $ for variable

```
<html>
  <head>
    <title>Comparing Numbers</title>
  </head>
  <body>
    <p>
      <?php
      $num1 = 9;
      $num2 = 8;

      $num1 > $num2;
      echo "Is ", num1, " greater than ", $num2, " ?";
      // missing $ for num1
      echo "<br>";
      print $num1 > $num2;
      ?>
    </p>
  </body>
</html>

```
Is Use of undefined constant num1 - assumed 'num1' (line 12)num1 greater than 8 ?

*  Error Message: missing ending quote"

```
<html>
  <head>
    <title>Comparing Numbers</title>
  </head>
  <body>
    <p>
      <?php
      $num1 = 9;
      $num2 = 8;

      $num1 > $num2;
      echo "Is ", $num1, " greater than ", $num2, " ?";
      echo "<br>;   // forgot quote
      print $num1 > $num2;
      ?>
    </p>
  </body>
</html>

```
Parse error: syntax error, unexpected $end on line 19

*  Error Message: missing ending semi-colon"

```
<html>
  <head>
  </head>
  <body>
    <p>
      <?php
        $items = 6     // Forgot semi-colon

        if($items > 5) {
          echo "You get a 10% discount!";
        }
      ?>
    </p>
  </body>
</html>
```
Parse error: syntax error, unexpected T_IF on line 9

*  Some methods on strings

```
<html>
    <p>
    <?php
$rand = rand();
echo "<p>$rand</p>";

// prints a number between 1 and 10
print rand(1, 10);


?>
    </p>
    <p>
    <?php
// Use your knowledge of strlen(), substr(), and rand() to
// print a random character from your name to the screen.
$welsh_town = "Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch";
$length     = strlen($welsh_town);
echo "The  string length of ", $welsh_town, " = ", $length;
echo "<br>";
$partial = substr($welsh_town, rand(10, 55));
echo "<br>";
echo "Random string characters: ", $partial;


?>
    </p>
</html>
```

* Name Sorter

```
<html>
    <p>
    <?php
    // Create an array with several elements in it,
    // then sort it and print the joined elements to the screen
    $the_array = array('Sita');
    array_push($the_array, 'Nita', 'Bita', 'Zita', 'Gita', 'Mita');
    sort($the_array);
    print join(", ",$the_array);
    ?>
    </p>
    <p>
    <?php
    // Reverse sort your array and print the joined elements to the screen
    rsort($the_array);
    print join(", ",$the_array);
    ?>
    </p>
</html>
```

* array_splice method mutates the original array

```

$numbers = ['hi', 'bye', 'try', 'lie', 'tie']; // [0 index]
print_r(array_splice($numbers, 2, 2)); // start at position 2 ('try') and take out one more to the right (lie)
print_r($numbers);

/*
output:
Array
(
    [0] => try
    [1] => lie
)
Array
(
    [0] => hi
    [1] => bye
    [2] => tie
)

orginal array has been modifed
 use slice to NOT modify the original array

/*

```

* set time and date

```


<footer>
  <p>&copy; David Powers &nbsp;
    <?php
    // https://stackoverflow.com/questions/470617/how-to-get-the-current-date-and-time-in-php
      date_default_timezone_set('America/Los_Angeles');
        $date = "Today is " . date('D    M/d/Y' , time());
          echo "&nbsp;";
         $time = " The time is " . date('h:i:s a',  time());
          echo $date;
          echo "&nbsp;&nbsp;";
          echo $time;
    ?>
  </p>
</footer>

```

* passsing function parameters by reference

```


// passsing function parameters by reference
// https://stackoverflow.com/questions/879/are-php-variables-passed-by-value-or-by-reference

function add_some_extra(&$string) // allow functions to modify it's arguments & mutates the caller!
{
  // add string to existing variable
  $string .= 'and something extra.';
  echo $string;
}
echo BR;
$str = 'This is a string, ';
echo $str;
echo BR;
add_some_extra($str);
echo BR;
echo $str;

```
