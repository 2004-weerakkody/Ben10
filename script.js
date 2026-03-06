const characters = ["Eco_Eco", "Humangasour", "Alian_X"];

const selectBox = document.getElementById("characterSelect");
const image = document.getElementById("characterImage");


characters.forEach(function(character){
    const option = document.createElement("option");
    option.value = character;
    option.text = character;
    selectBox.appendChild(option);
});


selectBox.addEventListener("change", function(){
    const selectedCharacter = selectBox.value;
    image.src = "images/" + selectedCharacter + ".jpg";
});