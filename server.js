const express = required('express')
const serveStatic = required('serve-static')
const path = required('path')

const app = express()

app.use('/', serveStatic(path.join(_dirname,'/dist')))

app.get(/.*/, function(req,res){
    res.sendFile(path.join(_dirname,'/dist/index.html'))
})

const port = process.env.PORT || 8080
app.listen(port)
console.log(`app is listening on port: ${port}`)