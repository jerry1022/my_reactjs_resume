export default function () {
  return [
    {
       id: 1,
       company: "TrendMicro", 
       icon: "images/trendmicro.png", 
       title: "Cloud Software Engineer",
       period: "2010/04~2013/02",
       project: [
         {
           id: 1,
           name: "TCloud Project",
           desc: "Tcloud Lego Team provide the cloud computing IaaS service, It is the infrastructure of cloud",
           responsibility: "Integrate all the modules: Communicate with each module teams, web portal front/backend modules integrate and Implement Restful API log system: system design, implementation, and push server implementation.",
           skills: ['python', 'Django', 'javascript', 'cloud computing']
         }, 
         {
           id: 2,
           name: "Safesync S3 Project",
           desc: " Safesync S3 project is the project which clonei the amazon simple storage service, that provide the cloud storage service like aws s3.( http://hicloud.hinet.net/index_en.html)",
           responsibility: "Restful API implement and Policy function implement",
           skills: ['java', 'spring', 'MySQL', 'cloud computing']
         },
         {
           id: 3,
           name: "Safeync XSP",
           desc: "Safesync xsp is the dropbox like service and customize the product for ISP",
           responsibility: "modify the web for customer and help them fix bugs",
           skills: ['python', 'javascript', 'cloud computing']
         }
       ]
     },
    {
       id: 2,
       company: "Promise", 
       icon: "images/promise.png", 
       title: "Firmware Engineer",
       period: "2013/03~2014/03",
       project: [
         {
           id: 1,
           name: "Promise VTrack",
           desc: "Promise VTrack is a Storage subsystem",
           responsibility: "I was worked in Promise USA to support Firmware development since 2013/6~2013/9, I am in charge of the raid core development. Implement OfflineLD feature",
           skills: ['c', 'RAID']
         } 
       ]
     },
     {
       id: 3,
       company: "IBM", 
       icon: "images/ibm.png", 
       title: "Advisory IT Specialist",
       period: "2014/03~2015/04",
       project: [
         {
           id: 1,
           name: "Cloud Middleware",
           desc: "Softlayer and Cloud Management Service(IaaS)",
           responsibility: "arge Scale Cloud Computing Architecture planning, provision and middleware setting. Using Softlayer API implement internal utility",
           skills: ['java', 'python', 'cloud computing', 'softlayer']
         } 
       ]
     },
     {
       id: 4,
       company: "Nexusguard",
       icon: "images/nexusguard.png", 
       title: "Technical Specialist",
       period: "2015/04~2015/10",
       project: [
          {
           id: 1,
           name: "Tcp Proxy",
           desc: "Nexusguard is a DDos protection service provider",
           responsibility: "Product platform build and integration the service. Tcp Proxy portal implement",
           skills: ['GO', 'Nginx', 'GCP', 'SSDB']
         } 
       ] 
     },
     {
       id: 5,
       company: "picowork",
       icon: "images/picowork.png", 
       title: "Sr. Software Engineer",
       period: "2015/12~2017/02",
       project: [
          {
           id: 1,
           name: "picowork",
           desc: "Picowork is a web base cloud social network and cloud cooperation system (www.picowork.com)",
           responsibility: "Picowork Backend API and services, backend plan/implement",
           skills: ['NodeJs', 'mongodb', 'redis']
         }, 
         {
           id: 2,
           name: "node pushserver",
           desc: "Let user can subscirbe the push notification and  get push notification from apns or firebase",
           responsibility: "Implement and log collection(ELK, node.js)",
           skills: ['nodejs', 'elastic', 'fluent', 'node-push', 'apns', 'gcm']
         }
       ] 
     }
  ]
}
