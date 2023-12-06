// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDXksCQuPWQNQ2nHWIyjHVJbOG9e9_gvYw",
    authDomain: "squaremarketing-555d6.firebaseapp.com",
    projectId: "squaremarketing-555d6",
    storageBucket: "squaremarketing-555d6.appspot.com",
    messagingSenderId: "1050365026421",
    appId: "1:1050365026421:web:ff60a018db9a24c53bd83c",
    measurementId: "G-5G90DZSMEY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();






var ClientName = document.getElementById('Name');
var ClientEmail = document.getElementById('email');
var ClientPhoneNumber = document.getElementById('tel');
var clientProjectName = document.getElementById('ProjectName');


// var Apartment = document.getElementById('Apartments');



// window.CheckingCheckbox = function () {}




window.AddClient = function () {
    // ---------------->>>>>>>>>>>>>Project Type<<<<<<<<<<<<<-------------------------

    var Apartment = document.getElementById('Apartments');
    var Plots = document.getElementById('Plots');
    var HousingSchemes = document.getElementById('HousingSchemes');
    var ResortsFarmhouse = document.getElementById('ResortsFarmhouse');
    var ShopsShowrooms = document.getElementById('ShopsShowrooms');
    var others1 = document.getElementById('others1');
    var ProjectType = [Apartment, Plots, HousingSchemes, ResortsFarmhouse, ShopsShowrooms, others1];
    var ProjectSelected = [];

    for (var i = 0; i < ProjectType.length; i++) {
        if (ProjectType[i].checked == true) {
            ProjectSelected.push(ProjectType[i].name);
        }
    }
    // console.log(ProjectSelected);
    // ---------------->>>>>>>>>>>>>Serviices<<<<<<<<<<<<<-------------------------
    var DirectMarket = document.getElementById('DirectMarkting');
    var SocialMediaMarketing = document.getElementById('SocialMediaMarketing');
    var PrintMedia = document.getElementById('PrintMedia');
    var ElectronicMedia = document.getElementById('ElectronicMedia');
    var EventManagemet = document.getElementById('EventManagemet');
    var others2 = document.getElementById('others2');
    var Services = [DirectMarket, SocialMediaMarketing, PrintMedia, ElectronicMedia, EventManagemet, others2];
    var ServicesSelected = [];

    for (var i = 0; i < Services.length; i++) {
        if (Services[i].checked == true) {
            ServicesSelected.push(Services[i].name);
        }
    }
    var obj = {
        Name: ClientName.value,
        Email: ClientEmail.value,
        PhoneNo: ClientPhoneNumber.value,
        ProjName: clientProjectName.value,
        ProjectType: ProjectSelected,
        Services: ServicesSelected,

    };

    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `Client/${obj.id}/`)
    set(reference, obj)
    console.log(obj)
}



