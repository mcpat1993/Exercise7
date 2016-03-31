var dataDownloaded = 0;
//$('.formText').value = "";
$('#toggleButton').click(function() {
   console.log("toggle Button clicked");
   if(dataDownloaded===0)
   {
    console.log("Downloading data...");
    $.ajax({//HOW THE HELL DO I GET THIS REQUEST TO SET FILENAME TO FILE1.TXT?????
        type: "POST",
        url: "ajax/getData.php",
        Filename: "file1.txt",
        data: 'file1.txt',
        success: function(data){
          alert(data);
          var t = document.createTextNode(data);
          document.getElementById('content').appendChild(t);
        }
    });
    //should happen in the ajax response-->
    //var t = document.createTextNode("Hello World");
    //document.getElementById('content').appendChild(t);
    //<--
    dataDownloaded = 1;
   }else
   {
    console.log("Data has already been downloaded");
   }
});