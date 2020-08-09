const Database = require('./db');
const createProffy = require('./createProffy')

Database.then(async (db) => {
  proffyValue = {
    name: "Victória Almeida",
    avatar: "https://avatars2.githubusercontent.com/u/54548466?s=460&u=5fdbdf9c3f26222b533ff0bf614cd39e96ae0cab&v=4", 
    whatsapp: "51900000000", 
    bio: "Entusiasta das melhores tecnologias de química avançada. Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.00 pessoas já passaram por uma das minhas explosões.", 
  }

  classValue = {
    subject: 1, 
    cost: "20", 
  }

  classScheduleValues = [
    {
      weekday: 1,
      time_from: 720,
      time_to: 1220
    },
    {
      weekday: 0,
      time_from: 520,
      time_to: 1220
    }
  ]

  // await createProffy(db, { proffyValue, classValue, classScheduleValues})

  const selectedProffys = await db.all("SELECT * FROM proffys")
  
  const selectClassesAndProffys = await db.all(`
    SELECT classes.*, proffys.*
    FROM proffys
    JOIN classes ON (classes.proffy_id = proffys.id)
    WHERE classes.proffy_id= 1;
  
  `)

    const selectClassesSchedules = await db.all(`
      SELECT class_schedule.*
      FROM class_schedule
      WHERE class_schedule.class_id = "1"
      AND  class_schedule.weekday = "0"
      AND  class_schedule.time_from <= "1300"
      AND  class_schedule.time_to > "1300"
    `)

    //console.log(selectClassesSchedules)

  
})