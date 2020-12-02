//this fuction is called when Generate Dialogue button is clicked
function generateDialogue(){
    var dialogues=document.getElementById("conversation").value; // it gets the value of textarea field
    //check if textarea is empty. If it is empty return no conversation else return conversation ui
    if(dialogues.length){
        // splitting the whole conversation into single single conversations 
        var arr = dialogues.split("\n");
        //["teacher:hi","student:hello"]
        var display=""
        var people=[]
        var displayPeople=""
        var left=true
        //looping through all conversations so that we can display each dialogue with their respective avatar
        for (dialogue in arr){
            //"teacher:hi" avatar:teacher actualDialog: hi
            var dialogArr = arr[dialogue].split(':'); // splitting our speaker name and actual dialogue i.e "teacher : hi "  it will split it in["teacher","hi"]
            //this if statement checks wheter or not we gave proper foramt i.e "person:dialogue" suppose we gave input as teacher only then it have no dialogue so it wont display that. 
            if(dialogArr.length!=1){
                var avatar = "https://i.pravatar.cc/150?u="+dialogArr[0].toUpperCase(); // getting random avatar based on name
                var actualDialogue = dialogArr[1];
                // this if statement is used to alter the chat dialogue ui. 
                console.log(dialogArr[0].toUpperCase())
                if(!people.includes(dialogArr[0].toUpperCase())){
                people.push(dialogArr[0].toUpperCase());
                 var fullname=dialogArr[0].toUpperCase().split(" ")
                    if(fullname.length==1){
                        var name=dialogArr[0].toUpperCase()
                    }else{
                        name=fullname[0]
                    }
                    displayPeople +=`<div class="people">
                    <img class="avatar1" src=${avatar}> <p class="peopleName">${name}</p>
                    </div>
                    `
                }
                if (dialogArr[0].toUpperCase()!=="TEACHER" && dialogArr[0].toUpperCase()!=="T"){                    
                    // this is to intorpolate out html as per the dialogue provided
                    display += `
                        <div class="individualDialogue">
                        <img class="avatar" src=${avatar}> 
                        <p> ${actualDialogue} </p>
                        </div>`
                }else{
                    // this is to intorpolate out html as per the dialogue provided with float right
                    display += `
                        <div class="individualDialogueRight">
                        <p style="color:white;background-color:#05728f"> ${actualDialogue} </p>
                        <img class="avatar" src=${avatar}> 
                        </div>`
                }
                left=!left
            }
        }
    }else{
        display="<p> Please provide some conversations </p>"
    }
    
    document.getElementById('dialogue').innerHTML = display;
    var element = document.getElementById("peopleArea");
    element.classList.remove("hidden");
    element.classList.add("peopleAreaClass");
    document.getElementById('peopleArea').innerHTML = displayPeople;
}

