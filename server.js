const express = require('express')
const useSoket = require('socket.io')



const app = express()
const server = require('http').Server(app)
const io = useSoket(server)


const rooms = new Map();

app.get('/rooms', function(req,res)
{

    res.json(rooms)
})

app.get('/users',function(req,res)
{
    console.log("Hello")
    res.send('Answer')
})

io.on('connection', (socket) =>
{
    console.log('user connect', socket.id)
})

server.listen(8000, function(err)
{
    if(err)
    {
        throw Error(err)
    }
    console.log("Server has been start!")
})