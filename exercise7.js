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
        data: {file: 'file1.txt'},
        success: function(data){
          //alert(data);
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
    if (document.getElementById("content").style.visibility === "hidden")
    {
      showText();
    }else
    {
      hideText();
    }
    console.log("Data has already been downloaded");
   }
});

function hideText() {
    document.getElementById("content").style.visibility = "hidden"; 
}

function showText() {
    document.getElementById("content").style.visibility = "visible"; 
}