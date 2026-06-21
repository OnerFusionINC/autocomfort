<?php
$msg = (($subject) ? $subject.' :- ' : '');
$msg .= (($_POST['fname']) ? 'Name: '.$_POST['fname'].', ' : '');
$msg .= (($_POST['telephone']) ? 'Mobile no.: '.$_POST['telephone'].', ' : '');
$msg .= (($_POST['email']) ? 'Email: '.$_POST['email'].', ' : '');
$msg .= (($_POST['country']) ? 'Area: '.$_POST['country'].', ' : '');
$msg .= (($coupon_code) ? 'Coupon code: '.$coupon_code.'' : '');
$mobilenumbers = '971'.substr((($_POST['telephone']) ? $_POST['telephone'] : '971565935770'), -9);

$msg = 'Thank you for registering with Tasjeel. Redeem your code ('.(($coupon_code) ? $coupon_code : 'xxxxxxxxxxxx').') at the following branches: Barsha, Qusais, Al Aweer, and Sharjah Auto Village.';
//Please Enter Your Details
$user="tasjeel"; //your username
$password="19717918"; //your password
//$mobilenumbers="971558086247"; //enter Mobile numbers comma seperated
//$mobilenumbers="971565935770";
$message = $msg; //enter Your Message
$senderid="Smsinfo"; //Your senderid
$senderid="Tasjeel"; //Your senderid
$messagetype="LNG"; //Type Of Your Message
$DReports="Y"; //Delivery Reports
$url="http://www.smscountry.com/SMSCwebservice_Bulk.aspx";
$url="http://api.smscountry.com/SMSCwebservice_bulk.aspx";
$message = urlencode($message);
$ch = curl_init();
if (!$ch){die("Couldn't initialize a cURL handle");}
$ret = curl_setopt($ch, CURLOPT_URL,$url);
curl_setopt ($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
curl_setopt ($ch, CURLOPT_POSTFIELDS,
"User=$user&passwd=$password&mobilenumber=$mobilenumbers&message=$message&sid=$senderid&mtype=$messagetype&DR=$DReports");
$ret = curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
//If you are behind proxy then please uncomment below line and provide your proxy ip with port.
// $ret = curl_setopt($ch, CURLOPT_PROXY, "PROXY IP ADDRESS:PORT");
$curlresponse = curl_exec($ch); // execute
if(curl_errno($ch))
echo 'curl error : '. curl_error($ch);
if (empty($ret)) {
// some kind of an error happened
die(curl_error($ch));
curl_close($ch); // close cURL handler
} else {
$info = curl_getinfo($ch);
curl_close($ch); // close cURL handler
echo $curlresponse; //echo "Message Sent Succesfully" ;
}
?>