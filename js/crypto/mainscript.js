var a='Please enter encryption type';

//encryption function
function enc(){

    var tp = document.getElementById('method').value;
    var kk = document.getElementById("key").value;
    var pp = document.getElementById("plain").value;
    
    switch(tp){
        
        case 'def':
        
        document.getElementById("chipher").innerText = a;
        
        break;
        
        case 'aes':
        
        var encrypted = CryptoJS.AES.encrypt(pp, kk);
		document.getElementById("chipher").innerText = encrypted;

        break;

        case 'des':

		var encrypted = CryptoJS.TripleDES.encrypt(pp, kk);
		document.getElementById("chipher").innerText = encrypted;

        break;

        case 'rc4':

        var encrypted = CryptoJS.RC4.encrypt(pp, kk);
		document.getElementById("chipher").innerText = encrypted;

        break;

        case 'rb':

        var encrypted = CryptoJS.Rabbit.encrypt(pp, kk);
		document.getElementById("chipher").innerText = encrypted;

        break;

        default:

        break;

    }

}

//decryption function

function dec(){
    var tp = document.getElementById('method').value;
    var kk = document.getElementById("key").value;
    var pp = document.getElementById("plain").value;

    switch(tp){
        
        case 'def':
        
        document.getElementById("chipher").innerText = a;
        
        break;
        
        case 'des':
        
        var decrypted = CryptoJS.TripleDES.decrypt(pp, kk);
		document.getElementById("chipher").innerText = (decrypted.toString(CryptoJS.enc.Utf8));

        break;

        case 'aes':

		var decrypted = CryptoJS.AES.decrypt(pp, kk);
		document.getElementById("chipher").innerText = (decrypted.toString(CryptoJS.enc.Utf8));

        break;

        case 'rc4':

        var decrypted = CryptoJS.RC4.decrypt(pp, kk);
		document.getElementById("chipher").innerText = (decrypted.toString(CryptoJS.enc.Utf8));

        break;

        case 'rb':

        var decrypted = CryptoJS.Rabbit.decrypt(pp, kk);
		document.getElementById("chipher").innerText = (decrypted.toString(CryptoJS.enc.Utf8));

        break;

        default:

        break;

    }


}

// HASH functions

function sha1(){
	var pp = document.getElementById("plain").value;
	var hash1 = CryptoJS.SHA1(pp);
	document.getElementById("chipher").innerText = hash1.toString(CryptoJS.enc.Base64);

}
function md(){
	var pp = document.getElementById("plain").value;
	var hash = CryptoJS.MD5(pp);
	document.getElementById("chipher").innerText = hash.toString(CryptoJS.enc.Base64);


}
function sha3(){
	var pp = document.getElementById("plain").value;
	var hash2 = CryptoJS.SHA3(pp,{ outputLength: 224 })
	document.getElementById("chipher").innerText = hash2.toString(CryptoJS.enc.Base64);


}