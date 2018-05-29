var nama = "Riko"
var peran = "Tabib"

if ((nama == "" && peran == "" ) || (nama == "" && peran != "")) {
	console.log(`Nama Harus Diisi`)
}else if (nama != "" && peran == "") {
	console.log(`Halo ${nama}, Pilih peranmu untuk memulai game!`)
}else{
	if (peran == "Ksatria") {
		console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, kamu dapat menyerang dengan senjatamu!`)
	}else if (peran == "Tabib") {
		console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, kamu akan membantu temanmu yang terluka.`)
	}else if (peran == "Penyihir") {
		console.log(`Selamat datang di Dunia Proxytia, ${nama}`)
		console.log(`Halo ${peran} ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
	}
}