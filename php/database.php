<?php
require "./config.php";
$mysqli = new mysqli($servername, $username, $password, $dbname);

if($mysqli->connect_error){
  die('Error : ('.$mysqli->connect_errno .'))' .$mysqli->connect_error);
}