
    /*Filters
    breed: '';
    size: 's', 'm', 'l';
    furLength: 'short','long';
    breedHealthIssues: 'low', 'severe';
    shedding: 'minimal', 'some', 'heavy';
    hypoallergenic: true or false;
    requiresDogExperience: true or false;
    goodForApartment: true or false;
    canStayAlone: true or false;
    familyFriendly: true or false;
    tendencyToBark: true or false;
    energyLevel: 'low', 'moderate', 'high energy';
    goodWithPets: true or false;
    easyTotrain: true or false;
    */
const breedPicker = {};

breedPicker.breeds = [
    // COCKER SPANIEL
    {
        name: 'English Cocker Spaniel',
        id: 'spaniel',
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
    // PUGGY
    {
        name: 'Pug',
        id: 'pug',
        image: 'puggy.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'bad',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    // GOLDENDOODLE / POODLE MIX
    {
        name: 'Goldendoodle',
        id: 'doodle',
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
    // MALTESE
    {
        name: 'Maltese Terrier',
        id: 'maltese',
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
    // BEAGLE
    {
        name: 'Beagle',
        id: 'beagle',
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
    // SHIBA INU
    {
        name: 'Shiba Inu',
        id: 'shiba',
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

    // DACHSHUND
    {
        name: 'Dachshund',
        id: 'dachshund',
        image: 'dachshund.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'some',
        generalHealth: 'bad',
        size: 's',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'moderate'
    },
    // CHIHUAHUA
    {
        name: 'Chihuahua',
        id: 'chihua',
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

    // CORGI
    {
        name: 'Pembroke Welsh Corgi',
        id: 'corgi',
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
    // FRENCHIE
    {
        name: 'French Bulldog',
        id: 'frenchie',
        image: 'frenchie.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'some',
        generalHealth: 'bad',
        size: 'm',
        easyToTrain: true,
        tendencyToBarkOrHowl: false,
        energyLevel: 'moderate'
    },
    // GOLDEN RETRIEVER
    {
        name: 'Golden Retriever',
        id: 'retriever',
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
    // PIT BULL TERRIER
    {
        name: 'Pit Bull Terrier',
        id: 'pitbull',
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
    // BASENJI
    {
        name: 'Basenji',
        id: 'basenji',
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
    // ALASKAN MALAMUTE
    {
        name: 'Alaskan Malamute',
        id: 'malamute',
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
    // GREAT DANE
    {
        name: 'Great Dane',
        id: 'dane',
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
    // AUSTRALIAN SHEPHERD
    {
        name: 'Australian Shepherd',
        id: 'aussie',
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
    // BASSET HOUND
    {
        name: 'Basset Hound',
        id: 'basset',
        image: 'basset.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: true,
        goodWithPets: true,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'bad',
        size: 'm',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'low'
    },
    // POMERANIAN
    {
        name: 'Pomeranian',
        id: 'pomeranian',
        image: 'pomeranian.jpg',
        goodForApartment: true,
        requiresDogExperience: false,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'long',
        shedding: 'heavy',
        generalHealth: 'bad',
        size: 's',
        easyToTrain: false,
        tendencyToBarkOrHowl: true,
        energyLevel: 'moderate'
    },
    // CHOW CHOW
    {
        name: 'Chow Chow',
        id: 'chow',
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
    // SHAR PEI
    {
        name: 'Chinese Shar-Pei',
        id: 'shar-pei',
        image: 'sharpei.jpg',
        goodForApartment: true,
        requiresDogExperience: true,
        kidFriendly: false,
        goodWithPets: false,
        hypoallergenic: false,
        furLength: 'short',
        shedding: 'heavy',
        generalHealth: 'bad',
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

breedPicker.init = function() {
    breedPicker.putDogsOnPage();

    $('input[type=checkbox]').on('click', breedPicker.filterBreeds);
}

breedPicker.filterBreeds = function () {
    // console.log('cliiic');
    const goodForApartment = $('#good-for-apartment').is(':checked');
    console.log(goodForApartment);

    const requiresDogExperience = $('#requires-dog-experience').is(':checked');
    console.log(requiresDogExperience);

    const kidFriendly = $('#kid-friendly').is(':checked');
    console.log(kidFriendly);


    const breedCardIDs = breedPicker.breeds.map(function(breed) {
        return breed.id;
    });
    // console.log(breedCardIDs);

    // hide all dog pictures
    $('.breed-card-container').hide();
    // decide which breeds need to be shown
    // based on the selected criteria
    breedPicker.breeds.forEach(function(breedObj) {
        // let shouldShowBreed = true;

        // let shouldHideBreed 

        let shouldShowBreed = true;

        if (goodForApartment && breedObj.goodForApartment !== goodForApartment) {
            console.log(`${breedObj.name} goodForApt => shouldShow -> false`);
            shouldShowBreed = false;
        }

        if (requiresDogExperience && breedObj.requiresDogExperience !== requiresDogExperience) {
            console.log(`${breedObj.name} requiresDogExperience => should show-> false`);
            shouldShowBreed = false;
        }

        if (kidFriendly && breedObj.kidFriendly !== kidFriendly) {
            console.log(`${breedObj.name} kidFriendly => should show-> false`);
            shouldShowBreed = false;
        }

        
        //     shouldShowBreed = shouldShowBreed && breedObj.requiresDogExperience !== requiresDogExperience;
        // }



        // if (goodForApartment) {
        //     shouldShowBreed = breedObj.goodForApartment !== goodForApartment;
        // }

        // if (requiresDogExperience) {
        //     shouldShowBreed = shouldShowBreed && breedObj.requiresDogExperience !== requiresDogExperience;
        // }

        // if (kidFriendly) { 
        //     shouldShowBreed = shouldShowBreed && breedObj.kidFriendly !== kidFriendly;
        // }


        if (shouldShowBreed) {
            $(`#${breedObj.id}`).show();
        }
    });

}


breedPicker.putDogsOnPage = function() {
    // give a gallery an id of "breed-gallery"
    const $gallery = $('#breed-gallery');

    // for every object in the breeds array 
    breedPicker.breeds.forEach(breed => {
        // --> create a card with two sides: front: an image & back: dog breed name

        // create a breed-card-container
        const $container = $(`<div id="${breed.id}" class="breed-card-container"></div>`);

        // create a breed-card 
        const $card = $(`<div class="breed-card"></div>`);

        // put a breed-card into the breed-card-container
        $container.append($card);

        
        // create a front-side of the card
        const $frontSide = $(`<div class="front-side"></div>`);

        // create an img element and give it src and alt
        const $img = $(`<img class="breed-pic" src="assets/${breed.image}" alt="picture of ${breed.name}">`);

        // put img inside the front-side container
        $frontSide.append($img);

        // create a back-side of the card
        const $backSide = $(`<div class="back-side"></div>`);
        // create a p element and put breed name into it
        const $breedName = $(`<p>${breed.name}</p>`);

        // put p inside the back-side container
        $backSide.append($breedName);

        $card.append($frontSide);
        $card.append($backSide);

        // put container inside the breed gallery
        $gallery.append($container);
    });


}



