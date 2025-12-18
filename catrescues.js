

let ids=["manchester", "stockport", "tameside", "oldham", "rochdale", "bury", "bolton", "wigan", "salford", "trafford"];
let dropDown = document.getElementById("chooseDist");

dropDown.onchange = function(){
const selectedOpt = this.value;
for(let x = 0; x < ids.length; x++){
    document.getElementById(ids[x]).style.display = "none";
}
if (selectedOpt === "allgm") {
        for(let x = 0; x < ids.length; x++){
            let showElement = document.getElementById(ids[x]);
            if (showElement) {
                showElement.style.display = "grid";
            }
        }
    } else {
        const showElement = document.getElementById(selectedOpt);
        if (showElement) {
            showElement.style.display = "grid";
        }
    }
}



