const {mongodb} = require('mongodb')
let url = "mongodb+srv://Dison:f7i6cHg3s88639K@learningdbcluster.0oiga.mongodb.net/test?authSource=admin&replicaSet=atlas-x7ls53-shard-0&readPreference=primary&ssl=true"
const connection = new mongodb(url)
await connection.connect()
const docs = [{
    name:'Михаил',
    surname:'Новиков',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/tIflDwO9e-k.jpg',
},
{
    name:'Кристина',
    surname:'Базаева',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'Алексей',
    surname:'Арановский',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/aranovskii.jpg',
},
{
    name:'Милена',
    surname:'Крюкова',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/milena.jpg',
},
{
    name:'Павел',
    surname:'Симоненко',
    project:'Разработка заданий WS',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'М.',
    surname:'Крюкова',
    project:'Разработка рамы БПЛА',
    imgLink:'imgs/photos/anon_pic.jpg',
},
{
    name:'А.',
    surname:'Лапикова',
    project:'Разработка рамы БПЛА',
    imgLink:'imgs/photos/anon_pic.jpg',
}
]
for(doc of docs){
    connection.CAD.users.insertOne(doc)
}