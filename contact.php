<!DOCTYPE html>
<html>

<head>
<meta charset="utf-8">
<title>Gumble HTML5 Agency Template | Contact Us</title>
<!-- Stylesheets -->
<link href="css/bootstrap.css" rel="stylesheet">
<link href="css/style.css" rel="stylesheet">
<!-- Responsive -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">
<link href="css/responsive.css" rel="stylesheet">
<!--[if lt IE 9]><script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
<!--[if lt IE 9]><script src="js/respond.js"></script><![endif]-->
</head>

<body>
<div class="page-wrapper">

    <!-- Preloader -->



    <section class="top-bar">
        <div class="auto-container clearfix">
            <div class="left-text pull-left">
                <p>Welcome to Me Financial Services, we have over 12 years of expertise</p>
            </div>
            <div class="right-icons pull-right">
                <ul class="social list-inline">
                    <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                </ul>
            </div>
        </div>
    </section>
    <!-- Main Header -->
    <?php
        include_once("header.php");
    ?>
    <!--End Main Header -->


    <!--Page Title-->
    <section class="page-title" style="background-image:url(images/background/page-title-bg-1.jpg);">
    	<div class="auto-container">
        	<div class="sec-title">
                <h1>Contact Us</h1>
                <div class="bread-crumb"><a href="#">Home</a> / <a href="#" >Contact Us</a></div>
            </div>
        </div>
        <!--Down Arrow-->
        <div class="down-arrow scroll-to-target" data-target=".scroll-to-this"></div>
    </section>


    <!--Contact Section-->
    <section class="contact-section scroll-to-this">
    	<div class="auto-container">

            <!-- Location Map -->


            <!-- Contact Form -->
            <div class="contact-us">

                <div class="form-container">
                    <form method="post" action="http://wp1.themexlab.com/html/gumble/sendemail.php" id="contact-form-one">

                        <div class="row clearfix">
                            <div class="form-group col-lg-3 col-md-6 col-xs-12">
                            	<div class="field-label">Name <span class="req">*</span></div>
                                <input type="text" name="username" value="" placeholder="Your Name">
                            </div>

                            <div class="form-group col-lg-3 col-md-6 col-xs-12">
                            	<div class="field-label">Email ddress <span class="req">*</span></div>
                                <input type="email" name="email" value="" placeholder="Your Email">
                            </div>

                            <div class="form-group col-lg-3 col-md-6 col-xs-12">
                            	<div class="field-label">Phone <span class="req">*</span></div>
                                <input type="text" name="phone" value="" placeholder="Phone">
                            </div>

                            <div class="form-group col-lg-3 col-md-6 col-xs-12">
                            	<div class="field-label">Subject <span class="req">*</span></div>
                                <input type="text" name="subject" value="" placeholder="Subject">
                            </div>

                            <div class="form-group col-lg-12 col-sm-12 col-xs-12">
                            	<div class="field-label">Message <span class="req">*</span></div>
                                <textarea name="message" placeholder="Your Message"></textarea>
                            </div>

                            <div class="form-group col-md-12 col-xs-12">
                                <div class="text-right"><button type="submit" name="submit" class="theme-btn btn-style-one">Send Message</button></div>
                            </div>

                        </div>
                    </form>
                </div>
        	</div>

        </div>
    </section>



    <!--Main Footer-->
    <?php
        include_once("footer.php");
    ?>

</div>
<!--End pagewrapper-->

<!--Scroll to top-->
<div class="scroll-to-top scroll-to-target" data-target=".main-header"><span class="fa fa-arrow-up"></span></div>

<script src="js/jquery.js"></script>
<script src="js/bootstrap.min.js"></script>
<script src="js/validate.js"></script>
<script src="http://maps.google.com/maps/api/js"></script>
<script src="js/googlemaps.js"></script>
<script src="js/wow.js"></script>
<script src="js/script.js"></script>
</body>

</html>
