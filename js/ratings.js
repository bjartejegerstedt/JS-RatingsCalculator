function collect_ratings(){

    let rating = 0;
    let element = 0;

    let ratings = {
        count: 0,
        sum: 0,
        average: 0
    };

    const elements = document.querySelectorAll('.rating');

    elements.forEach(function(element) {

        let idStrip= element.id;
        
        rating = parseInt(idStrip.replace('star', ''));

        ratings.count = ratings.count + parseInt(element.value)

        ratings.sum = ratings.sum + parseInt(element.value) * rating;


    });

if (ratings.count === 0){

    ratings.average = 0;

} else {

    ratings.average = ratings.sum / ratings.count;

};

return ratings;
    
};

document.addEventListener("change", function(){

    ratings = collect_ratings();

    let average = document.getElementById("average");

    average.value = ratings.average.toFixed(2);

});
