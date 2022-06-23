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

            if (range[0]==undefined && range[1]!=undefined){
                if (courses[i].prices[1]!=undefined && range[1]>=courses[i].prices[1]){
                    out(courses,i);
                }
                else{
                    if (courses[i].prices[0]!=undefined && range[1]>=courses[i].prices[0]){
                        out(courses,i);
                    }
                }
            }
            else{
                if (range[0]!=undefined && range[1]==undefined){
                    if (courses[i].prices[0]!=undefined && range[0]<=courses[i].prices[0]){
                        out(courses,i);
                    }
                    else{
                        if (courses[i].prices[1]!=undefined && range[0]<=courses[i].prices[1]){
                            out(courses,i);
                        }
                    } 
                }
                else{
                    if (range[0]!=undefined && range[1]!=undefined){
                        if ((courses[i].prices[1]!=undefined && range[1]>=courses[i].prices[1]) || (courses[i].prices[0]!=undefined && range[1]>=courses[i].prices[0])){
                            out(courses,i);
                        }
                    }
                    else{
                        out(courses,i);
                    }
                }
            }
        }
    return 0;
}

//Сортировка
function sorting(course){
    let n = course.length;
    for (let i = 0; i < n-1; i++)
     { for (let j = 0; j < n-1-i; j++)
        { if (course[j+1].prices[0] < course[j].prices[0])
           { let t = course[j+1]; course[j+1] = course[j]; course[j] = t; }
        }
     }                     
    return course;
}



// Вывод курса с ценой
function out (course, i){
    console.log("Наименование курса: " + course[i].name+". Цены: ["+ course[i].prices[0] +','+ course[i].prices[1]+"];");

}

// Запуск функции фильтрации
console.log("Первый диапазон:");
filter(courses,requiredRange1);

console.log("\nВторой диапазон:");
filter(courses,requiredRange2);

console.log("\nТретий диапазон:");
filter(courses,requiredRange3);

// Отсортированные курсы
console.log("\n------------------");
console.log("Отсортированные курсы");
console.log(sorting(courses));