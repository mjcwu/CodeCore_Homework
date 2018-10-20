const express = require("express");
const router = express.Router();
const knex = require("../db/client");

// superTeam#new URL: /cohort/new METHOD: GET
router.get("/cohort/new", (req, res) => {
  res.render("superTeam/new");
});

router.post("/cohort", (req, res) => {
  knex("cohorts")
    .insert({
      id: req.body.id,
      Name: req.body.Name,
      logoUrl: req.body.logoUrl,
      Members: req.body.Members
    })
    .returning("*")
    .then(aCohort => {
      res.redirect(`/cohort/${aCohort[0].id}`);
    });
});

router.get("/cohort", (req, res) => {
  knex("cohorts")
  .select("*")
  .orderBy("createdAt", "desc")
  .then(cohort => {
    res.render("superTeam/index", { cohorts: cohort });
    });
});

router.get("/cohort/:id", (req, res) => {
  const id = req.params.id;
  let quantity = parseInt(req.query.quantity)
  let method = req.query.method
  knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {
      if(quantity && method){
        teams = assignTeam(quantity, method, cohort.Members)
        res.render("superTeam/show", {cohort: cohort, teams: teams});
      } else {
        
        let teams=[]
        
        res.render("superTeam/show", {cohort: cohort, teams: teams});
      }
    });
});

const assignTeam = (quantity, method, arrName) => {
  let team=[]
  let newArr=(arrName.replace(/\s/g, '')).split(',');
  let totalMembers = newArr.length
  if(method==='teamCount'){
    let counter=0;
    for(let i=0; i<totalMembers; i++){
      let randIndex = Math.floor(Math.random()*newArr.length)
      if(i<quantity){
        team.push(newArr[randIndex])
      } else if(counter<quantity){
        console.log(counter)
        team[counter]+= `, ${newArr[randIndex]}`
        counter+=1;
      } else { 
        counter=0
        console.log("-----",counter)
        team[counter]+= `, ${newArr[randIndex]}`
        counter+=1;
        }
      deleteObj=newArr.splice(randIndex,1)
    } 
  } else {
    let counter2= 0
    for(let i=0; i<totalMembers; i++){
      let randIndex = Math.floor(Math.random()*newArr.length)
      if (counter2==0){
        team.push(newArr[randIndex])
        counter2+=1;
      } else if(counter2<quantity){
        team[team.length-1]+= `, ${newArr[randIndex]}`
        counter2++
      } else {
        counter2=0;
        team.push(newArr[randIndex])
        counter2+=1;
      }
      deleteObj=newArr.splice(randIndex,1)
    }
  }
  console.log(team)
return team;
}

router.get("/cohort/:id/edit", (req, res) => {
  const id = req.params.id;

  knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {
      res.render("superTeam/edit", { cohort: cohort });
    });
});

router.patch("/cohort/:id", (req, res) => {
  const id = req.params.id;

  knex("cohorts")
    .where("id", id)
    .update({
      logoUrl: req.body.logoUrl,
      Name: req.body.Name,
      Members: req.body.Members
    })
    .then(() => {
      res.redirect(`/cohort/${id}`);
    });
});

router.delete("/cohort/:id", (req, res) => {
  const id = req.params.id;

  knex("cohorts")
    .where("id", id)
    .del()

    .then(() => {
      res.redirect("/cohort");
    });
});


module.exports = router;