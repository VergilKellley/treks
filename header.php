<?php
  session_start();
?>

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="css/styles.css" />
    <link href="https://fonts.googleapis.com/css2?family=Lato&family=Montserrat&family=Quicksand:wght@600&family=Russo+One&display=swap" rel="stylesheet">

    <script
  src="https://code.jquery.com/jquery-2.2.4.min.js"
  integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44="
  crossorigin="anonymous"></script>
    <script src="js/cart.js" async></script>
    
    <title>Bike City</title>
  </head>
  <body>
    <section id="page-container">
    <header>
      <section class="header-nav-container">
        <nav>
          <a id="nav-logo" href="index.php">t-recs</a>
          <ul>
            <li><a href="index.php">home</a></li>
            <!--<li><a href="">News</a></li>
            <li><a href="">Contact</a></li>-->
            <div id="login-SignUp-Inputs">
            <?php
          if (isset($_SESSION['userId'])) {
            echo '
            <form action="includes/logout.inc.php" method="post">
            <button class="logout-btn btn" type="submit" name="logout-submit">Logout</button>
          </form>';
          } else {
             echo' <form id="login-form" action="includes/login.inc.php" method="post">
                <input
                type="text"
                  id="username"
                  name="mailuid"
                  value=""
                  placeholder="Username" 
                />
                <input
                type="password"
                  id="pwd"
                  name="pwd"
                  value=""
                  placeholder="Password"
                  
                
                />
                <button class="loginBtn" type="submit" name="login-submit" onclick="clearForm()" >Login</button>
                <a href="signup.php">Sign Up</a>
              </form>';
          }
              ?>
            </div>
          </ul>
        </nav>
      </section>
    </header>
    </body>
    </html>   