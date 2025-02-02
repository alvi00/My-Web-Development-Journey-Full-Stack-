<?php
if(isset($_POST['name'])) {
    $server = "localhost";
    $username = "root";
    $password = "";
    $database = "travel";

    // Create connection
    $conn = mysqli_connect($server, $username, $password, $database);

    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    }

    // Sanitize user inputs
    $name = mysqli_real_escape_string($conn, $_POST['name']);
    $age = (int) $_POST['age'];  // Ensure integer conversion
    $gender = mysqli_real_escape_string($conn, $_POST['gender']);
    $email = mysqli_real_escape_string($conn, $_POST['email']);
    $phone = mysqli_real_escape_string($conn, $_POST['phone']);
    $description = mysqli_real_escape_string($conn, $_POST['description']);

    // Corrected SQL query (removed `id` if it's auto-incremented)
    $sql = "INSERT INTO `users`(`name`, `age`, `gender`, `email`, `phone`, `description`)
            VALUES ('$name', $age, '$gender', '$email', '$phone', '$description')";

    // Execute query
    if (mysqli_query($conn, $sql)) {
        echo "Successfully inserted";
    } else {
        echo "ERROR: $sql <br>" . mysqli_error($conn);
    }

    // Close connection
    mysqli_close($conn);
}
?>


<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Welcome To the Travel Vlog</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="container">
      <h1>Welcome To the Travel From</h1>
      <p>Enter Your details and confirm your participation in the trip</p>
      <p class="submitmsg">
        Thanks For the Submittion. We are happy to see you joining us for the
        project
      </p>
      <form action="index.php" method="post">
    <input type="text" name="name" id="name" placeholder="Enter Your Name" required />
    <input type="number" name="age" id="age" placeholder="Enter Your Age" required />
    <input type="text" name="gender" id="gender" placeholder="Enter your gender" required />
    <input type="email" name="email" id="email" placeholder="Enter your email" required />
    <input type="tel" name="phone" id="phone" placeholder="Enter your phone" required />
    <textarea name="description" id="description" cols="30" rows="10" placeholder="Enter any other information here" required></textarea>
    <button type="submit" class="btn">Submit</button>
</form>

    </div>
    <script src="index.js"></script>
  </body>
</html>
