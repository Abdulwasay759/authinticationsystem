function savedata(){
    let set = document.getElementById("ssd")
  let work =  localStorage.setItem("name" ,set.value)
  let set1 = document.getElementById("ssd1")
  let work1 = localStorage.setItem("email" , set1.value)
  let set2 =document.getElementById("ssd2")
  let work2=localStorage.setItem("password" , set2.value)
}
