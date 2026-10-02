const nama = "Kaindra Azyiel";
let usia = 30;

function generateBiodata() {
    if (usia > 10 && usia < 18) {
        // ini adalah kondisi pertama
        console.log("anda dewasa")
    } else {
        // ini adalah jika kondisi tidak terpenuhi
        console.log("anda anak-anak")
    }
}

console.log(nama);
console.log(usia);

generateBiodata();