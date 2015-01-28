
var accountText;

   //var pageDocument = pageWindow.document;
   (function(view) {




   $( document ).ready(function() {

     var saveoutputform = document.getElementById("save-output-file");
     var outputfilename = document.getElementById("output-file-name-field");
     var accountfile = document.getElementById("accountfile");

     accountfile.addEventListener('change', function(e) {
          var file = this.files[0];
          var reader = new FileReader();
          reader.onload = function(e) {
            accountText = reader.result; //this is the var with the stored data!
          }
            reader.readAsText(file);
     }, false);

    var get_blob = function() {
       return view.Blob;
     }

     saveoutputform.addEventListener("submit", function(event) {
  event.preventDefault();
  var BB = get_blob();
  saveAs(
      new BB(
        [getOutputFileData() ]
      , {type: "text/plain;charset=" + document.characterSet}
    )
    , (outputfilename.value || outputfilename.placeholder) + ".txt" //the extension goes here!
  );
}, false);


});





}(self));

function getOutputFileData()
{
  //do number crunching here
  return "this is a test - put the text in here! " + accountText;

}
