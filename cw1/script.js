const data = [
    {
      title : "Pink lake",
      src: "1.webp",
    },
    {
      title : "Single Island",
      src: "2.webp",
    },
    {
      title : "Forest lake",
      src: "3.webp",
    },
  ]
  
  function changeHTMLInfo( slideNr ){
    const title = data[slideNr].title
    const titleDOM = document.querySelector("h2")
    titleDOM.innerHTML = title
    const image = data[slideNr].src
    const imageDOM = document.querySelector("img")
    imageDOM.src = "img/"+image
  }
  
  changeHTMLInfo(0)

  let currSlide = 1;
  function changeslide( direction){
    if( direction == "left"){
        currSlide--
    }else{
        currSlide++
    }
  }
  changeHTMLInfo(currSlide)


  const leftArr = document.querySelector(".leftArr")
  leftArr.onclick = function(){
    changeslide( "left" )
  }
  const rightArr = document.querySelector(".rightArr")