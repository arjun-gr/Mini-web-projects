let genButton = document.getElementById('gen');
let storyElem = document.getElementById('story')



function genData(){
  let inpData = document.getElementById('inp')
  
  function rep(ary){
    let ind = Math.floor(Math.random() * ary.length);
    return ary[ind]
  } 
  
  let txt = "My name is :name: and i am a :insertX:, and i like to go to :insertY: and i am a very :insertZ:, Good to meet you. But as :name: is growing old he is understanding his limits and knows his boundries, hence he :insertY:'s as much as he can."
  
    let newStory = txt;
  
  let insertX = ["Gamer", "Singer","Dancer", "Musician"]
  let insertY = ["Party","Vacation","Club","Beach"]
  let insertZ = ["Good person","Great person", "Amazing person"]

  let strX = rep(insertX);
  let strY = rep(insertY);
  let strZ = rep(insertZ);
  
  newStory = newStory.replaceAll(':insertX:', strX);
  newStory = newStory.replaceAll(':insertY:', strY);
  newStory = newStory.replaceAll(':insertZ:', strZ);
  if(inpData.value == ""){
    newStory = newStory.replaceAll(":name:", "Bob")
  }
  else{
      newStory = newStory.replaceAll(":name:", inpData.value)
  }
  
  storyElem.innerText = newStory
}

genButton.addEventListener("click",genData)