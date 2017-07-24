/**
 * Created by ash on 7/23/17.
 */


class Login {

  SignInOnly(){
    $("#error_log").hide();
    var GoToUrl     = $("#GoToUrl").attr("GoBackUrl");
    // $.ajax({
    //   type          : "POST",
    //   url           : url+'userLogin.php',
    //   contentType   : "application/x-www-form-urlencoded;",
    //   data          : { "emailAddress":$('#emailAddress').val(),
    //                     "userPassword":$('#password').val(),
    //                     'action':'LOGIN'}
    // }).done(function(response){

      // var returned_json = JSON.parse(response);
      //
      //
      // var response_result = returned_json['success'];
      // var getBackError = returned_json['userInformation'].errorMsg
      var response_result = true;

      if(response_result == false){
        $("#error_log").show();
        $("#error_log").html(getBackError);
      }else {
        $( "#mainContainer" ).load('src/api/getOrders.html' );

      }


    // });
  }




}