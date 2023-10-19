const telegramID=document.getElementById("telLogo")
const instagramLogo=document.getElementById("instagramLogo")
const adressLogo=document.getElementById("adressLogo")
let showLiknId=document.getElementById("show-Likn-Id")
let tagAIdShower=document.getElementById("tag-a-idShower")
const searchLogo=document.getElementById("searchBar")
let searchBarElem=document.getElementById("searchInput")

//

telegramID.addEventListener("mouseover",function(){
  showLiknId.classList.remove("hidden")
  showLiknId.classList.add("flex")  
  showLiknId.classList.add("-translate-x-7")
  tagAIdShower.innerHTML="@subbass"
  tagAIdShower.setAttribute("href","https://t.me/subbass")
  showLiknId.setAttribute("href","https://t.me/subbass")
})

telegramID.addEventListener("mouseleave",function(){
    showLiknId.classList.remove("flex")  
    showLiknId.classList.add("hidden")   
    showLiknId.classList.remove("-translate-x-7")
})
telegramID.addEventListener("click",function(){
    location="https://google.com"
})

////////////

instagramLogo.addEventListener("mouseover",function(){
    showLiknId.classList.remove("hidden")
    showLiknId.classList.add("flex")  
    showLiknId.classList.add("-translate-x-20")
    tagAIdShower.innerHTML="@patrol_nistm"
  })
 instagramLogo.addEventListener("mouseleave",function(){
    showLiknId.classList.remove("flex")  
      showLiknId.classList.add("hidden")  
      showLiknId.classList.remove("-translate-x-20")
  })
  instagramLogo.addEventListener("click",function(){
    location="https://google.com"
})

  /////////
  adressLogo.addEventListener("mouseover",function(){
    showLiknId.classList.remove("hidden")
    showLiknId.classList.add("flex")  
    showLiknId.classList.add("-translate-x-3")
    tagAIdShower.innerHTML="mashhad fallahi blv "
  })
  adressLogo.addEventListener("mouseleave",function(){
    showLiknId.classList.remove("flex")  
      showLiknId.classList.add("hidden")  
      showLiknId.classList.remove("-translate-x-3")
  })
  adressLogo.addEventListener("click",function(){
    location="https://google.com"
})
searchLogo.addEventListener("click",searchBar)
function searchBar(){
    console.log(searchBarElem.childElementCount);
    if(searchBarElem.childElementCount>0){
        console.log("amber")
        let searchNode=document.getElementById("search")
        searchNode.remove()

    }else{
        let searchInput=document.createElement("input")
        searchInput.classList="rounded-md font-serif hover:-rotate-3 transition-all"
        searchInput.setAttribute("placeholder","  search ...")
        searchInput.setAttribute("type","text")
        let searchBackgGround=document.createElement("div")
        searchBackgGround.id="search"
        searchBackgGround.classList="absolute mt-2 p-1 bg-gradient-to-t from-teal-200 via-amber-800 to-slate-500 rounded-xl hover:rotate-3 transition-all"
        searchBackgGround.append(searchInput)
        searchBarElem.appendChild(searchBackgGround)
    }

}