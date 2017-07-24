/**
 * Created by ash on 7/24/17.
 */
class Member{

  ShowOrderDetails(){
    console.log("check");
    $( "#mainContainer" ).load('src/api/getOrderDetails.html' );
  }
}