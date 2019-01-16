// JavaScript Document

function download(filename, cipher) {
    var elHtml = document.getElementById(cipher).innerHTML;
    var link = document.createElement('a');
   
    link.setAttribute('download', filename);
    link.setAttribute('href', 'data:' +  ';charset=utf-8,' + encodeURIComponent(elHtml));
    link.click(); 
}
