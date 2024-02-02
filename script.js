//your JS code here. If required.

        let currentNode=1;

        const prev=document.getElementById("prev");
        const next=document.getElementById("next");

        function navigate(direction){
            const currentElement=document.getElementById(currentNode);
            if(direction==="next" && currentElement.nextElementSibling){
                currentElement.nextElementSibling.classList.add("active");
                currentElement.nextElementSibling.nextElementSibling.classList.add("active");
                currentNode++;
            }
            if(direction==="prev" && currentElement.previousElementSibling){
                currentElement.classList.remove("active");
                currentElement.previousElementSibling.classList.remove("active");
                currentNode--;
            }

            (currentNode===5) ?(next.disabled=true) : (next.disabled=false);
            (currentNode===1) ?(prev.disabled=true) : (prev.disabled=false);
        }

        next.addEventListener("click",(e)=>{
            navigate("next");
        })
        prev.addEventListener("click",(e)=>{
            navigate("prev");
        })