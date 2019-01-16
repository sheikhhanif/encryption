function doDL(){
    var s = document.getElementById('chipher').innerHTML;
    function dataUrl(data) {return "data:x-application/text," + escape(data);}
    window.open(dataUrl(s));
}