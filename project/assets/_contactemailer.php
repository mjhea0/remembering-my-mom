<?php ob_start();
$toemail="michael@mherman.org";    // change here if you want
$sub="[Remembering Jane] Email contact";          // change here if you want
$success_page_name="/thanks";
////// do not change in following
if($_SERVER['REQUEST_METHOD']=="POST")
{
$fieldnm_1=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_1']));
$fieldnm_2=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_2']));
$fieldnm_3=str_replace ( array("\n"), array("<br>"),trim($_REQUEST['fieldnm_3']));


$contentmsg=stripslashes("

  <br><strong><font style=color:#CC3300>$sub</font></strong><br>

  <table width=100% border=0 cellpadding=0 cellspacing=0 bgcolor=#CCC>

  <tr>
    <td width=165 align=right valign=top bgcolor=#FFFFFF>
      <strong>Your Name:</strong>
    </td>
    <td width=565 align=left valign=top bgcolor=#FFFFFF>
      $fieldnm_1
    </td>
  </tr>

  <tr>
    <td width=165 align=right valign=top bgcolor=#FFFFFF>
      <strong>Your Email: *:</strong>
    </td>
    <td width=565 align=left valign=top bgcolor=#FFFFFF>
      $fieldnm_2
    </td>
  </tr>

  <tr>
    <td width=165 align=right valign=top bgcolor=#FFFFFF>
      <strong>Message: *:</strong>
    </td>
    <td width=565 align=left valign=top bgcolor=#FFFFFF>
      $fieldnm_3
    </td>
  </tr>

  </table>
");

////
$headers  = "MIME-Version: 1.0
";
$headers .= "Content-type: text/html; charset=iso-8859-1
";

$from=$fieldnm_1;

$headers .= "From: ".$from."
";

@mail($toemail,$sub,$contentmsg,$headers);


header("Location:$success_page_name");

}
?>

