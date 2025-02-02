const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
  '21 savage':{ 
    'age': 29,
    'birthName': 'Shéyaa Bin Abraham-Joseph',
    'birthLocation': 'London, UK'
    },
    'chance the rapper':{ 
        'age': 29,
        'birthName': 'Chancelor Johnathan Bennett',
        'birthLocation': 'Chicago, Illinois'
        },
    'dylan':{ 
        'age': 29,
        'birthName': 'Dylan',
        'birthLocation': 'Dylan'
        },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:rapperName', (request,response)=>{
    const rappersName = request.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
    
})
app.listen(PORT, ()=>{
    console.log(`The Server is running on port ${PORT}! yOU BETTER GO CATCH IT!`)
})