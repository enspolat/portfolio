let islem = 0;
function hesapmakinesi(i) {
  if (i === "=") {
    document.getElementById("sonuc").value = eval(
      document.getElementById("sonuc").value
    );
  } else if (i === "+" || i === "-" || i === "*" || i === "/") {
    if (islem === 0) {
      document.getElementById("sonuc").value += i;
      islem = 1;
    }
  } else if (i === "c") {
    document.getElementById("sonuc").value = "";
  } else {
    document.getElementById("sonuc").value += i;
    islem = 0;
  }
}
