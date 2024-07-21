const socket = io('/')
// const videoGrid = d -- need to add the video feed in here 
const myPeer = new Peer(undefined, {
    host: '/',
    port: '3001'
})

myPeer.on('open', id =>{
    socket.emit('join-room', ROOM_ID, id)
})

socket.on('user-connected', userId => {
    console.log('User connected: ' + userId)
})