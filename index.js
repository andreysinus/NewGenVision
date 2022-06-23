// Курсы
let courses = [
    { name: "Courses in England", prices: [0, 100] }, 
    { name: "Courses in Germany", prices: [500, null] }, 
    { name: "Courses in Italy", prices: [100, 200] }, 
    { name: "Courses in Russia", prices: [null, 400] },
    { name: "Courses in China", prices: [50, 250] },
    { name: "Courses in USA", prices: [200, null] },
    { name: "Courses in Kazakhstan", prices: [56, 324] },
    { name: "Courses in France", prices: [null, null] },
];

// Варианты цен (фильтры), которые ищет пользователь
let requiredRange1 = [null, 200];
let requiredRange2 = [100, 350];
let requiredRange3 = [200, null];


// Фильтрация по курсу и диапазону
function filter(courses, range){
    for (let i=0; i<courses.length;i++){
        if (range[1]!=null){
            if (range[0] == null && range[1]<=courses[i].prices[1]){
                out(courses, i);
            }
            else{
                if (range[0]>=courses[i].prices[0] && range[1]<=courses[i].prices[1]){
                    out(courses, i);
                }
            }
        }

        else{
            if (range[0] == null){
                out(courses,i);
            }
            else{
                if (range[0]>=courses[i].prices[0]){
                    out(courses,i);
                }
            }
        }
    }
    return 0;
}

function out (course, i){
    console.log("Наименование курса: " + course[i].name+" Цены: "+ course[i].prices +';');

}

filter(courses,requiredRange1);