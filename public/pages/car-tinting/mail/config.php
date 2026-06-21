<?php
date_default_timezone_set("Asia/Dubai");
$dbhost = 'localhost';
$dbuser = 'mclcodeco';
$dbpass = ']A3lMycrM6%9';
$conn = mysql_connect($dbhost, $dbuser, $dbpass) or die('Error connecting to mysql');

$dbname = 'mclae_livedb';
mysql_select_db($dbname);
mysql_query("SET time_zone='+04:00'");
$site = 'MCL  ( MAG Container Lines )';
define('ROOT_URL', 'http://www.mcl.ae/');
define('STORE_ID', '1');


?>