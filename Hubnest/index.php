<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
      <title>Login</title>

      <link rel="stylesheet" href='css/normalize.css'>
      <link rel="stylesheet" href='css/main.css'>      
  </head>
  <body>
    <header class="header">
        <a href="#"><div class="logo"></div></a>
        <div class="logo-back"></div>
    </header>
        <nav>
            <ul>
                <li><a href="#">+ QUOTE</a></li>
                <li><a href="#">CERTFICATES</a></li>
                <li><a href="#">ACCOUNT</a></li>
                <li><a href="#">SIGN OUT</a></li>
            </ul>  
        </nav>
    <div class="wrap">
            <h1>SIGN IN</h1>
            <div class="gold-bar"></div>
            <h5>Sign in below using your email and password.</h5>
            <br/>
        <div class="login-wrap">
            <p>Email Address</p>
            <input id="email" type="text" class="textbox" onfocus="Focus('email')" onblur="Blur('email')">
            <p>Password</p>
            <input id="password" type="text" class="textbox" onfocus="Focus('password')" onblur="Blur('password')">
            <a href="#"><p class="forgotpw">Forgot Password?</p></a>
            <input type="submit" class="button" value="SIGN IN">
        </div>  
        <h5 class="">If you don't have an account yet, <a href="#"><span class="green">SIGN UP HERE</span></a></h5>
        <div class="foot-space"></div>
        <hr>
        <div class="footer-wrap">
          <p>Copyright &#169; 2016 GSIS Inc. DBA LOGISTIQ Insurance Solutions Domiciled &amp; principal place of Business in California.  License 0101602. All Rights Reserved. <a href="#"><span class='green policy'>VIEW FULL POLICY.</span></a></p>
        </div>
    </div>
    <script src="js/app.js"></script>
  </body>
</html>