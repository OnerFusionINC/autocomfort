<?php ob_start();
/*ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);*/


session_start();



$hader = '';



require_once 'PHPMailerAutoload.php';
//require_once 'src/PHPMailer.php';


///require_once 'config.php';



$mail = new PHPMailer();







if (isset($_POST['email'])) {







    $bname = $_POST['name'];
    $bemail = $_POST['email'];
    $bphone = $_POST['phone'];
    $bmsg = $_POST['message'];













    $subject = "New enquiry from Autocomfort Accessories";



    date_default_timezone_set('Asia/Dubai');



    //Read an HTML message body from an external file, convert referenced images to embedded,



    //convert HTML into a basic plain-text alternative body



    $message = '<table cellpadding="2" cellspacing="0" width="100%">



            <tbody>



              <tr>



                <td colspan="2" style="background-color:#000;font-size:14px;font-weight:bold;color:#fff">New enquiry from Autocomfort Accessories</td>



              </tr>



              <tr>



                <td style="width:20%">&nbsp;</td>



                <td><br>



                </td>



              </tr>



              <tr>



                <td style="font-family:Verdana;font-size:12px;font-weight:bold">Name:</td>



                <td style="font-family:Verdana;font-size:12px">' . $bname . '</td>



              </tr>



             <tr>



                <td style="font-family:Verdana;font-size:12px;font-weight:bold">Email:</td>



                <td style="font-family:Verdana;font-size:12px">' . $bemail . '</td>



              </tr>



			  <tr>



                <td style="font-family:Verdana;font-size:12px;font-weight:bold">Phone:</td>



                <td style="font-family:Verdana;font-size:12px">' . $bphone . '</td>



              </tr>






			  <tr>



                <td style="font-family:Verdana;font-size:12px;font-weight:bold">Message:</td>



                <td style="font-family:Verdana;font-size:12px">' . $bmsg . '</td>



              </tr>







              <tr>



                <td><br></td>



                <td><br></td>



              </tr>



              <tr>



                <td colspan="2" style="background-color:#000"> <br></td>



              </tr>



            </tbody>



          </table>';



    $mail->From = 'noreply@autocomfort.ae';



    $mail->FromName = 'Autocomfort Accessories';







    $mail->AddAddress('autocomfortuae@gmail.com', "Autocomfort Accessories");
	//$mail->AddAddress('jassi@codeandco.ae', "Autocomfort Accessories");
  



    $mail->AddReplyTo($bemail, $bname);



    $mail->CharSet = 'UTF-8';



    $mail->IsHTML(true);



    $mail->Subject = $subject;



    $mail->Body = $message;



    $reponse_array = array();







    if (!$mail->Send()) {


        $reponse_array['success'] = false;
        $reponse_array['message'] = "Problem while sending mail.";
        //echo 'Mailer Error: ' . $mail->ErrorInfo;
		
		
		

    } else {

//print_r($reponse_array);

        $reponse_array['success'] = true;
        $reponse_array['message'] = "Thank you for contacting us.";
		
		$host = "localhost";
		$username = "autocomf_car_tining";
		$password = "tvI8P)fWTZke";
		$database_name = "autocomf_car_tining";
		
		//$filename='database_backup_'.$database_name.'_'.date('G_a_m_d_y').'.sql';

		// Get connection object and set the charset
		$conn = mysqli_connect($host, $username, $password, $database_name);
		$conn->set_charset("utf8");
		$sql = 'INSERT INTO `tbl_contact_us` (`fname`, `telephone`, `email`, `message_details`, `register_ip`) VALUES ("'.$bname.'", "'.$bphone.'", "'.$bemail.'", "'.$bmsg.'", "'.$_SERVER['SERVER_ADDR'].'")';
		$result = mysqli_query($conn, $sql);


    }



    header('Content-Type: application/json');



    echo json_encode($reponse_array);



    die;



}