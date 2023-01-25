const Service = require('node-windows').Service

const svc = new Service({
  name:"ClientNodeApp",
  description: "This is client side background task",
  script:"D:\\Rashmika\\Case_Study\\BackendCaseStudy\\index.js"
})

svc.on('install', function(){
  svc.start()
})

svc.install()