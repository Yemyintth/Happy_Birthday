let imageIndex = 0;
    let images = ["Static/img/Gift-rafiki (1).png", "Static/img/Happy birthday-pana.png"];

    document.getElementById("theChange").addEventListener("click", function() {
      imageIndex = (imageIndex + 1) % images.length;
      document.getElementById("theImage").src = images[imageIndex];

    });

let isInitial = true;
function toChange(){
  const textElement = document.getElementById("theHeadder");
  if(isInitial){
    textElement.innerHTML = "You R completed &";
  }
  else
  {
    textElement.innerHTML = "Wishes for you...";
  }

  const headerElement = document.getElementById("theHeadder-1");
  if(isInitial){
    headerElement.innerHTML = "thank you for...";
  }
  else
  {
    headerElement.innerHTML = "------------------------";
  }

  const text_1 = document.getElementById("theText-1");
  if(isInitial){
    text_1.innerHTML = "teaching us.🎁";
  }
  else
  {
    text_1.innerHTML = "🎉May your day be fill with laugh,love,& joy.";
  }

  const text_2 = document.getElementById("theText-2");
  if(isInitial){
    text_2.innerHTML = "being discipline to us.🎁";
  }
  else
  {
    text_2.innerHTML = "Wishing Ur days are special as U R.🌈";
  }

  const text_3 = document.getElementById("theText-3");
  if(isInitial){
    text_3.innerHTML = "share all your knowledges.🎁";
  }
  else
  {
    text_3.innerHTML = "🎂Getting a good soulmate in Ur life .";
  }

  const text_4 = document.getElementById("theText-4");
  if(isInitial){
    text_4.innerHTML = "and prevent us for dangers.🎁";
  }
  else
  {
    text_4.innerHTML = "🌟🌟🌟.";
  }
  isInitial = !isInitial
}
  

