
// Project Name Change
var ProjDetailProjName = document.getElementById('ProjectName');
var getProjName = localStorage.getItem('Name');
ProjDetailProjName.innerHTML = getProjName;

// Project SubText
var SubTextOfPRoj = document.getElementById('SubTextOfPRoj');
SubTextOfPRoj.innerHTML = getProjName;
// Project Location
var projLoc = document.getElementById('projectLocation');
var loc = document.getElementById('Location');



// Project Banner Image
var projImage = document.getElementById('ProjectBanner');
switch (getProjName) {
    case 'DuaGarden':

        projImage.style.backgroundImage += "url('Project Details/Dua Garden/images.jpg ')";
        projImage.className += ' IamgeSetting';
        projLoc.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14457.441552156019!2d67.1531756!3d25.0557715!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x55f5f6265eef7ece!2sDua%20Garden!5e0!3m2!1sen!2s!4v1673069576921!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        loc.innerHTML = '5, Taiser Town, Karachi, Karachi City, Sindh'`
        loc.innerHTML = " 5, Taiser Town, Karachi, Karachi City, Sindh, Pakistan";



        break;
    case 'Zahida Residencia & Mall':
        projImage.style.backgroundImage += "url('pictures/LatestProjects/zahida_residencia_mall.jfif')";
        projImage.className += ' IamgeSetting';


        break;
    case 'Icon Tower':
        projImage.style.backgroundImage += "url('Project Details/Icon Tower/22-1-640x428.jpg')";
        projImage.className += ' IamgeSetting';
        projLoc.innerHTML = `<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14481.22746691834!2d67.0331266!3d24.8533668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x300455e91612aef!2sBahria%20Opal%20Tower!5e0!3m2!1sen!2s!4v1673069890036!5m2!1sen!2s" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`;
        loc.innerHTML = " V23M+87R, Karachi Cantonment, Karachi, Karachi City, Sindh";

        break;

    default:
        break;
}



// console.log(getProjName);