/*
Kita dengarkan/monitor event postMessage() dari program yang berada di UI THREAD
isi dari pesannya kita gunakan untuk melakukan iterasi pada fungsi fibonacci
*/
self.addEventListener('message', function(event){

	var number = event.data;
	var result = Fibonacci(number);

	/**
	hasil perhitungan dari fungsi fibonacci kita kirimkan kembali ke program yang memanggil worker ini
	dengan menggunakan fungsi postMessage()
	*/
	self.postMessage(result);

});

function Fibonacci(number) {
	if ( number < 3 ) {
		return 1;
	} else {
		return Fibonacci(number - 1) + Fibonacci(number - 2);
	}
}