// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCFFTcLgxHhqFq8l9n9D00ctw7Vq37z7J0",
    authDomain: "squaremarketing-ef46e.firebaseapp.com",
    databaseURL: "https://squaremarketing-ef46e-default-rtdb.firebaseio.com",
    projectId: "squaremarketing-ef46e",
    storageBucket: "squaremarketing-ef46e.appspot.com",
    messagingSenderId: "946112687653",
    appId: "1:946112687653:web:abc66bb17e80c0c3f999cc",
    measurementId: "G-1HEB43KT4E"
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



