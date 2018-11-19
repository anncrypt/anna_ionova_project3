//EMPTY OBJECT TO ORGANIZE CODE
const breedPicker = {};

// ARRAY WITH 20 DOG BREED OBJECTS BELOW
breedPicker.breeds = [
    /******* COCKER SPANIEL *******/
    {
        name: 'English Cocker Spaniel',
        id: 'spaniel',
        url: 'https://dogtime.com/dog-breeds/cocker-spaniel',
        image: 'spaniel.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'some',
        generalHealth: 'good',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* PUGGY *******/
    {
        name: 'Pug',
        id: 'pug',
        url: 'https://dogtime.com/dog-breeds/pug',
        image: 'puggy.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'poor',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    /******* GOLDENDOODLE *******/
    {
        name: 'Goldendoodle',
        id: 'doodle',
        url: 'https://dogtime.com/dog-breeds/goldendoodle',
        image: 'goldendoodle.jpg',
        goodForApartment: false,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: true,
        furLength: 'long',
        shedding: 'minimal',
        generalHealth: 'good',
        size: 'l',
        easyToTrain: true,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* MALTESE *******/
    {
        name: 'Maltese Terrier',
        id: 'maltese',
        url: 'https://dogtime.com/dog-breeds/maltese',
        image: 'maltese.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: false, 
        goodWithPets: true,
        hypoallergenic: true,
        furLength: 'long',
        shedding: 'minimal',
        generalHealth: 'moderate',
        size: 's',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    /******* BEAGLE *******/
    {
        name: 'Beagle',
        id: 'beagle',
        url: 'https://dogtime.com/dog-breeds/beagle',
        image: 'beagle.jpg',
        goodForApartment: true,
        requiresDogExperience: true,
        kidFriendly: true, 
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'some',
        generalHealth: 'moderate',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* SHIBA INU *******/
    {
        name: 'Shiba Inu',
        id: 'shiba',
        url: 'https://dogtime.com/dog-breeds/shiba-inu',
        image: 'shibainu.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'medium',
        shedding: 'heavy',
        generalHealth: 'moderate',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },

    /******* DACHSHUND *******/
    {
        name: 'Dachshund',
        id: 'dachshund',
        url: 'https://dogtime.com/dog-breeds/dachshund',
        image: 'dachshund.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'some',
        generalHealth: 'poor',
        size: 's',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'moderate'
    },
    /******* CHIHUAHUA *******/
    {
        name: 'Chihuahua',
        id: 'chihua',
        url: 'https://dogtime.com/dog-breeds/chihuahua',
        image: 'chihuahua.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'medium',
        shedding: 'minimal',
        generalHealth: 'moderate',
        size: 's',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },

    /******* CORGI *******/
    {
        name: 'Pembroke Welsh Corgi',
        id: 'corgi',
        url: 'https://dogtime.com/dog-breeds/pembroke-welsh-corgi',
        image: 'corgi.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'medium',
        shedding: 'heavy',
        generalHealth: 'moderate',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    /******* FRENCHIE *******/
    {
        name: 'French Bulldog',
        id: 'frenchie',
        url: 'https://dogtime.com/dog-breeds/french-bulldog',
        image: 'frenchie.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'some',
        generalHealth: 'poor',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    /******* GOLDEN RETRIEVER *******/
    {
        name: 'Golden Retriever',
        id: 'retriever',
        url: 'https://dogtime.com/dog-breeds/golden-retriever',
        image: 'goldenretriever.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'heavy',
        generalHealth: 'moderate',
        size: 'l',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'high'
    },
    /******* PIT BULL TERRIER *******/
    {
        name: 'Pit Bull Terrier',
        id: 'pitbull',
        url: 'https://dogtime.com/dog-breeds/american-pit-bull-terrier',
        image: 'pitbullterrier.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: true,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'good',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'high'
    },
    /******* BASENJI *******/
    {
        name: 'Basenji',
        id: 'basenji',
        url: 'https://dogtime.com/dog-breeds/basenji',
        image: 'basenji.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'minimal',
        generalHealth: 'moderate',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: false,
        energyLevel: 'high'
    },
    /******* ALASKAN MALAMUTE *******/
    {
        name: 'Alaskan Malamute',
        id: 'malamute',
        url: 'https://dogtime.com/dog-breeds/alaskan-malamute',
        image: 'malamute.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'heavy',
        generalHealth: 'good',
        size: 'l',
        easyToTrain: true,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* GREAT DANE *******/
    {
        name: 'Great Dane',
        id: 'dane',
        url: 'https://dogtime.com/dog-breeds/great-dane',
        image: 'greatdane.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'moderate',
        size: 'l',
        easyToTrain: true,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* AUSTRALIAN SHEPHERD *******/
    {
        name: 'Australian Shepherd',
        id: 'aussie',
        url: 'https://dogtime.com/dog-breeds/australian-shepherd',
        image: 'aussie.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'medium',
        shedding: 'moderate',
        generalHealth: 'moderate',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: true,
        energyLevel: 'high'
    },
    /******* BASSET HOUND *******/
    {
        name: 'Basset Hound',
        id: 'basset',
        url: 'https://dogtime.com/dog-breeds/basset-hound',
        image: 'basset.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'poor',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'low'
    },
    /******* POMERANIAN *******/
    {
        name: 'Pomeranian',
        id: 'pomeranian',
        url: 'https://dogtime.com/dog-breeds/pomeranian',
        image: 'pomeranian.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'heavy',
        generalHealth: 'poor',
        size: 's',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'moderate'
    },
    /******* CHOW CHOW *******/
    {
        name: 'Chow Chow',
        id: 'chow',
        url: 'https://dogtime.com/dog-breeds/chow-chow',
        image: 'chow.jpg',
        goodForApartment: false,
        requiresDogExperience: true,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'some',
        generalHealth: 'moderate',
        size: 'l',
        easyToTrain: false,
        tendencyToBarkOrHowl: false,
        energyLevel: 'low'
    },
    /******* SHAR PEI *******/
    {
        name: 'Chinese Shar-Pei',
        id: 'shar-pei',
        url: 'https://dogtime.com/dog-breeds/chinese-shar-pei',
        image: 'sharpei.jpg',
        goodForApartment: true,
        requiresDogExperience: true,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'poor',
        size: 'l',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'low'
    }
];


// DOCUMENT READY
$(document).ready(function(){
    breedPicker.init(); 
});

// INIT
breedPicker.init = function() {
    // all dog image cards are loaded on page
    breedPicker.putDogsOnPage();
    
    // images hover state functions below
    // on mouseover
    $('.breed-card').on('mouseover', function() {
        $(this).find('.hover-state').css('display', 'flex');
    });
    // on mouseout
    $('.breed-card').on('mouseout', function () {
        $(this).find('.hover-state').css('display', 'none');
    })

    // filter functions below
    // on click on checkboxes
    $('input[type=checkbox]').on('click', breedPicker.filterBreeds);
    // on change in select options
    $('select').on('change', breedPicker.filterBreeds);
}

// FUNCTION THAT CHECKS IF A PARTICULAR BREED CONFORMS TO A SELECTED SET OF FILTERS
breedPicker.filterBreeds = function () {
   
    // get filter values

    /************* checkboxes *************/
    const goodForApartment = $('#good-for-apartment').is(':checked');

    const requiresDogExperience = $('#requires-dog-experience').is(':checked');

    const kidFriendly = $('#kid-friendly').is(':checked');

    const goodWithPets = $('#good-with-pets').is(':checked');

    const hypoallergenic = $('#hypoallergenic').is(':checked');

    const easyToTrain = $('#easy-to-train').is(':checked');

    const tendencyToBarkOrHowl = $('#tendency-to-bark-or-howl').is(':checked');

    /************* select options *************/
    const furLength = $('#fur-length').val();

    const shedding = $('#shedding').val();

    const generalHealth = $('#general-health').val();

    const size = $('#size').val();

    const energyLevel = $('#energy-level').val();


    // hide all dog pictures
    $('.breed-card').hide();


    // decide which breeds need to be shown
    // based on the selected criteria
    breedPicker.breeds.forEach(function(breedObj) {

        // start with showing breed by default
        let shouldShowBreed = true;

        // for only filters that are checked, make sure breed satisfies each of them

        /************* checkboxes *************/
        if (goodForApartment && breedObj.goodForApartment !== goodForApartment) {
            shouldShowBreed = false;
        }

        if (requiresDogExperience && breedObj.requiresDogExperience !== requiresDogExperience) {
            shouldShowBreed = false;
        }

        if (kidFriendly && breedObj.kidFriendly !== kidFriendly) {
            shouldShowBreed = false;
        }

        if (goodWithPets && breedObj.goodWithPets !== goodWithPets) {
            shouldShowBreed = false;
        }

        if (hypoallergenic && breedObj.hypoallergenic !== hypoallergenic) {
            shouldShowBreed = false;
        }

        if (easyToTrain && breedObj.easyToTrain !== easyToTrain) {
            shouldShowBreed = false;
        }

        if (tendencyToBarkOrHowl && breedObj.tendencyToBarkOrHowl !== tendencyToBarkOrHowl) {
            shouldShowBreed = false;
        }
        
        /************* select options *************/
        if (furLength !== '' && breedObj.furLength !== furLength) {
            shouldShowBreed = false;
        }

        if (shedding !== '' && breedObj.shedding !== shedding) {
            shouldShowBreed = false;
        }

        if (generalHealth !== '' && breedObj.generalHealth !== generalHealth) {
            shouldShowBreed = false;
        }

        if (size !== '' && breedObj.size !== size) {
            shouldShowBreed = false;
        }

        if (energyLevel !== '' && breedObj.energyLevel !== energyLevel) {
            shouldShowBreed = false;
        }

        // if shouldShowBreed is true we show this card
        if (shouldShowBreed) {
            $(`#${breedObj.id}`).show();
        }
    });

};

// ADDING & DISPLAYING IMAGE GALLERY ON THE PAGE
breedPicker.putDogsOnPage = function() {
    // give a gallery an id of "breed-gallery"
    const $gallery = $('#breed-gallery');

    // for every object in the breeds array 
    breedPicker.breeds.forEach(function(breed) {
        // create a dog image card
        const $card = $(`<a href="${breed.url}" target ="_blank" id="${breed.id}" class="breed-card"></a>`);
        
        // create a front-side of the card
        const $imgContainer = $(`<div class="img-container"></div>`);

        // create an img element and give it src and alt
        const $img = $(`<img class="breed-pic" src="assets/${breed.image}" alt="picture of ${breed.name}">`);

        // put img inside the image container
        $imgContainer.append($img);

        // create a hover-state 
        const $hoverState = $(`<div class="hover-state"></div>`);
        // create a p element and put breed name into it
        const $breedName = $(`<p>${breed.name}</p>`);

        // put p inside the hover-state container
        $hoverState.append($breedName);

        $card.append($imgContainer);
        $card.append($hoverState);

        // put breed-card inside the gallery
        $gallery.append($card);
    });
}



