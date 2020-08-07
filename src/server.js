const proffys = [
  { name:"Victória Almeida", 
    avatar:"https://avatars2.githubusercontent.com/u/54548466?s=460&u=5fdbdf9c3f26222b533ff0bf614cd39e96ae0cab&v=4", 
    whatsapp:"31415926", 
    bio: "Encantada pela complexidade e beleza da Física. Amante de biografias de grandes físicos, ajudou a desenvolver diversos estudo e disposta a trazer mais pessoas para a área.", 
    subject: "Física", 
    cost:"R$ 80", 
    weekday:[ 4 ], 
    time_from:[ 720 ], 
    time_to:[ 1200 ]
  },

  { name:"Mayk Brito", 
    avatar:"https://avatars2.githubusercontent.com/u/6643122?s=460&u=1e9e1f04b76fb5374e6a041f5e41dce83f3b5d92&v=4", 
    whatsapp:"71925430", 
    bio: "Encantado pela complexidade e beleza da Física. Amante de biografias de grandes físicos, ajudou a desenvolver diversos estudo e disposto a trazer mais pessoas para a área.", 
    subject: "Física", 
    cost:"R$ 30", 
    weekday:[ 2 ], 
    time_from:[ 720 ], 
    time_to:[ 1200 ]
}
]

const subjects = [
  "Artes",
  "Biologia",
  "Ciências",
  "Educação Física",
  "Física",
  "Geografia",
  "História",
  "Matemática",
  "Português",
  "Química",
]

const weekdays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
]


function pageLanding(req, res) {
  return res.render("index.html")
}

function pageStudy(req, res) {
  const filters = req.query

  return res.render("study.html", { proffys , filters, subjects, weekdays})
}

function getSubject(subjectNumber){
  const position = +subjectNumber - 1
  return subjects[position]
}

function pageGiveClasses(req, res) {
  const data = req.query
  
  const isNotEmpty = Object.keys(data).length > 0
  if (isNotEmpty) {

    data.subject = getSubject(data.subject)

    proffys.push(data)

    return res.redirect("/study")  
  }

    return res.render("give-classes.html", {subjects , weekdays})
}
 
const express = require('express')
const server = express()


const nunjucks = require('nunjucks')

nunjucks.configure('src/views',{
  express: server,
  noCache: true,
})

server
.use(express.static("public"))

.get("/", pageLanding)

.get ("/study", pageStudy)

.get ("/give-classes", pageGiveClasses)

.listen(5500)

