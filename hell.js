/*
    *  change sortmovies() function to sort movies list by rank
    * sort movies by  id ,rank, and title through dynamic function

    *  crate helper function called findmax() for finding max moves

*/

let movies = [{
        title: "Flight Club",
        rank: 10,
        id: "tt0137523"
    },
    {
        title: "The shawshank redemption",
        rank: 1,
        id: "tt0137523"
    },
    {
        title: "The lord of the rings : the return of the kings",
        rank: 9,
        id: "tt0167260",


    },
    {
        title: "The GOdfather",
        rank: 2,
        id: "tt0068646"
    },
    {
        title: "The Good the bad and the ugly",
        rank: 5,
        id: "tt0060196"
    },
    {
        title: "The god father : part11",
        rank: 3,
        id: "tt0071562"
    },
    {
        title: "The dark knigh",
        rank: 6,
        id: "tt046562"
    },
    {
        title: "pulp fiction",
        rank: 4,
        id: "tt0110912"
    },
    {
        title: "schilders list",
        rank: 8,
        id: "tt0108052"
    },
    {
        title: "12 angry men",
        rank: 7,
        id: "tt0050083",
    }






];



function displaymovies(movies) {
    let table = "<table border='1' style='width:100%'>";
    table += "<tr><th> ID </th> <th> Name </th> <th> Rank </th> </tr>";

    for (let index = 0; index < movies.length; index++) {
        table += "<tr>";
        table += "<td>" + movies[index].id + "</td>";
        table += "<td>" + movies[index].title + "</td>";
        table += "<td>" + movies[index].rank + "</td>";
        table += "</tr>";
    }

    table += "</table>";
    document.getElementById("movie_list").innerHTML = table;
}

function sortBestRatingsRank(movies) {

    for (let j = 0; j < movies.length - 1; j++) {
        let max_num = movies[j];
        let max_location = j;
        for (let i = j + 1; i < movies.length; i++) {
            if (movies[i].rank > max_num.rank) {
                max_num = movies[i];
                max_location = i;
            }
        }
        movies[max_location] = movies[j];
        movies[j] = max_num;
    }
    return movies; 
}

function sortmoviesbyattr(movies , sortattrt){

    for (let j = 0; j < movies.length - 1; j++) {
        let max_num = movies[j];
        let max_location = j;
        for (let i = j + 1; i < movies.length; i++) {
            if (movies[i][sortattrt] > max_num[sortattrt]) {
                max_num = movies[i];
                max_location = i;
            }
        }
        movies[max_location] = movies[j];
        movies[j] = max_num;
    }
    return movies; 
    
}

window.onload = function(){

    let sortedmovies = sortmoviesbyattr(movies , 'id')
    displaymovies( sortedmovies);
}



