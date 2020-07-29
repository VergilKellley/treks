<?php
    require "header.php";
?>
<section class="hero">
      <div class="hero-overlay"></div>
      <img src="images/bikeHero.jpg" alt="man riding bike" />
      <div id="bikes-hero-text">
       <!--- <h2>bikes for everyone</h2>
        <p>Men Women Children Sport or Leisure!</p>-->
      </div>
    </section>


    <div class="signup-section-wrapper">
        <section class="signup-form-wrapper">
           <h2>Sign Up</h2>
           <p>Get exclusive <span>member's only discounts</span> by singing up!</p>  <form action="includes/signup.inc.php" method="post">
           <input type="text" name="uid" placeholder="Username" required>
           <input type="text" name="mail" placeholder="E-mail" required>
           <input type="password" name="pwd" placeholder="Password" required>
           <input type="password" name="pwd-repeat" placeholder="Repeat Password" required>
           <button type="submit" name="signup-submit">Sign Up</button>
        </form>
        </section>
    </div>

<?php
    require "footer.php";
?>