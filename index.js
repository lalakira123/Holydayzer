import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial", id:"1" },
    { date: "1/3/2022", name: "Carnaval", id:"1" },
    { date: "4/17/2022", name: "Páscoa", id:"4" },
    { date: "4/21/2022", name: "Tiradentes", id:"4" },
    { date: "5/1/2022", name: "Dia do trabalho", id:"5" },
    { date: "6/16/2022", name: "Corpus Christi", id:"6" },
    { date: "9/7/2022", name: "Independência do Brasil", id:"9" },
    { date: "10/12/2022", name: "Nossa Senhora Aparecida", id:"10" },
    { date: "11/2/2022", name: "Finados", id:"11" },
    { date: "11/15/2022", name: "Proclamação da República", id:"11" },
    { date: "12/25/2022", name: "Natal", id:"12" }
  ];

app.get("/holidays", (request, response) => {
    response.send(holidays);
})

app.get("/is-today-holiday", (request, response) => {
    const hoje = new Date();
    const feriado = holidays.filter((item) => {
        return item.date === hoje.toLocaleDateString;
    });

    if(feriado.length !== 0){
        response.send(`Sim, hoje é ${feriado[0].name}`);
    } else{
        response.send("Não, hoje não é feriado");
    }
})

app.get("/holidays/:id", (request, response) => {
    const id = request.params.id;
    const listaHolidayMonth = holidays.filter((item) => {
        return id === item.id;
    })
    response.send(listaHolidayMonth);
});

app.listen(5000);