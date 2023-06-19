<p align="justify">
Dahulu, komputer hanya bekerja untuk menjalankan sebuah program hanya pada satu waktu (monotasking), hal ini tentu saja sangatlah tidak efisien dan memakan waktu lama karena hanya bisa mengerjakan atau menjalankan sebuah program pada satu waktu. Namun seiring perkembangan zaman, komputer kini bisa menjalankan program secara bersamaan (multitasking) dalam proses yang berbeda-beda dan tentu saja terisolate (maksudnya gak bakal ganggu antar proses). Contoh yang sering kita lakukan yaitu saat ngoding, kita pasti buka stackoverflow, kita pasti buka dokumentasi dan lain-lain.
</p>

### Apa itu Thread?

<p align="justify">
Nah program-program yang berjalan tersebut akan memiliki resource dengan sifat yang indepedent. Sekarang komputer tidak hanya bisa menjalankan multitasking, namun juga dapat menjalankan banyak pekerjaan sekaligus atau dikenal dengan istilah menjalankan thread (sebuah proses ringan). Thread ini membuat proses aplikasi berjalan tidak harus selalu sequential (saling tunggu-tungguan) melainkan kita bisa membuat proses aplikasi tersebut berjalan secara async atau parallel.
</p>

### Concurrency dan Parallel

<p align="justify">
Concurrency secara sederhana adalah proses yang dilakukan oleh komputer untuk mengerjakan tugas satu persatu dalam satu waktu. Sedangkan parallel secara sederhana adalah proses yang dilakukan oleh komputer untuk mengerjakan banyak tugas sekaligus dalam satu waktu. Contohnya browser adalah aplikasi yang concurreny dan parallel. Browser akan melakukan proses concurreny ketika membuka web, browser akan melakukan http request, lalu mendownload semua file web (HTML, CSS, JavaScript) lalu merender dalam bentuk tampilan web (saling tunggu-tungguan). Kemudian Browser akan melakukan proses parallel, ketika kita membuka beberapa tab web (seperti pada contoh sebelumnya)
</p>

### Synchronous vs Asynchronous

<p align="justify">
Saat membuat aplikasi yang concurrent atau parallel, kadang kita sering menemui istilah
synchronous dan asynchronous. Tidak perlu bingung dengan istilah tersebut, secara sederhana Synchronous adalah ketika kode program kita berjalan secara sequential, dan semua tahapan ditunggu sampai prosesnya selesai baru akan dieksekusi ke tahapan selanjutnya. Sedangkan, Asynchronous artinya ketika kode program kita berjalan dan kita tidak perlu
menunggu eksekusi kode tersebut selesai, kita bisa lanjutkan ke tahapan kode program selanjutnya
</p>

[<<Web Applications](https://github.com/Bahrul-Rozak/mastering-node-js/tree/main/node-js-dasar/02-Web-Applications)
<br>
[Threadpool Web Model>>]()
