function btn1() {
  let work = document.getElementById("email")
  let work1 = localStorage.getItem("email")
  console.log(work1)
  let walk = document.getElementById("password")
  let wark = localStorage.getItem("password")
  console.log(wark)
  if (work.value === work1 && walk.value === wark) {
    alert("Good job")
  }
  else {
    alert("try again")
  }
}
