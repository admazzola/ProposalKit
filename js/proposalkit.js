
   //var pageDocument = pageWindow.document;
   (function(view) {

   $( document ).ready(function() {

     var outputfilename = $('#output-file-name-field');

    var get_blob = function() {
       return view.Blob;
     }

     document.getElementById("save-output-file").addEventListener("submit", function(event) {
  event.preventDefault();
  var BB = get_blob();
  saveAs(
      new BB(
        ["this is a test - put the text in here!"]
      , {type: "text/plain;charset=" + document.characterSet}
    )
    , (outputfilename.value || outputfilename.placeholder) + ".txt" //the extension goes here!
  );
}, false);


});
}(self));
