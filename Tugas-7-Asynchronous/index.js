const kedua = setTimeout(() => console.log("ini baris kedua"), 1000);

const tampilkan = (post, callback) =>{
  setTimeout(() => {
    console.log(post)
    callback()
   }, 3000)
}

tampilkan("ini baris pertama", kedua)