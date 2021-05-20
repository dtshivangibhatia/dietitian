function hideAbout(){
    const aboutContent = document.getElementsByClassName('aboutr');
    for(let i = 0; i < aboutContent.length; i++){
        aboutContent[i].style.display = 'none';
    }
    hide(['abouthb']);
    show(['aboutsb']);
}
function showAbout(){
    const aboutContent = document.getElementsByClassName('aboutr');
    for(let i = 0; i < aboutContent.length; i++){
        aboutContent[i].style.display = 'block';
    }
    hide(['aboutsb']);
    show(['abouthb']);
}

function hide(ids){
    ids.forEach(id => {
        document.getElementById(id).style.display = 'none'; 
    });
}
function show(ids){
    ids.forEach(id => {
        document.getElementById(id).style.display = 'inline-block'; 
    });
}
