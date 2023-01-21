
function ChangeData(Name, Image) {
    var projName = Name;
    var ProjImage = Image
    localStorage.setItem('Name', projName);
    localStorage.setItem('ProjImage', Image);
    console.log(projName);
    console.log(ProjImage);
}
