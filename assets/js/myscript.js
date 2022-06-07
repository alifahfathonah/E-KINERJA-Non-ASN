
//untuk tombol-hapus
$('.tombol-hapus').on('click', function(e){

	e.preventDefault();
	const href = $(this).attr('href');
	
	Swal({
		title : 'Apakah anda yakin',
		text : "data kegiatan akan dihapus",
		type : 'warning',
		showCancelButton : true,
		confirmButtonColor : '#3085d6',
		cancelButtonColor : '#d33',
		confirmButtonText : 'Hapus Data!'
	}).then((result)=>{
		if(result.value){
			document.location.href = href;
		}
	})
});
