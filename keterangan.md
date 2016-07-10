Pengenalan Web Workers
==========================

Web Worker adalah metode untuk memindahkan komputasi pada THREAD yang berbeda dengan MAIN THREAD/ UI THREAD.

- Aplikasi web hanya menggunakan single thread, sehingga seluruh proses, mulai dari pembentukan UI hingga komunikasi ddata dengan server dilakukan pada thread yang sama.

- Sub-program yang melibatkan komputasi yang intensif dapat menyebabkan browser tidak dapat merespon input, bahkan dapat mengakibatkan browser crash


Yang dapat dan tidak dapat dikerjakan oleh Web Worker
===========================================================
- Fetching data dari resource luar (via AJAX) ataupun manipulasi data lokal.

- Web Worker TIDAK DAPAT MELAKUKAN MANIPULASI TERHADAP DOM ( Document Object Model)!

- Komunikasi dengan sub-program yang berada di UI THREAD dilakukan dengan metode "message passing"

- Perilaku (Behaviour) Web Worker tidak dapat dikendalikan secara langsung oleh sub-program yang memanggilnya (sub-program yang berada di UI THREAD)


OK Langsung aja deh ya...