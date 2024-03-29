/**
* node url-parser.js --url="https://api-beta.ripple10.com/api/v2/mentions/hashtags?project=7439&since=2023-09-14+00:00&until=2023-09-17+23:59&section=positive,negative,neutral&pagination=yes&group_service=false&service_category=1,2,3,4,5,6,7&is_total="
* ambil value dari url tersebut yaitu: protocol, domain, path, parameters
* hasil akhir:
* protocol: https
* domain: api-beta.ripple10.com
* path: /api/v2/mentions/hashtags
* parameters: 
*  - project=7439
*  - since=2023-09-14+00:00
*  - until=2023-09-17+23:59
*  - section=positive,negative,neutral
*  - pagination=yes
*  - group_service=false
*  - service_category=1,2,3,4,5,6,7
*  - is_total=
*
*/
const args = process.argv
const splitURL = args[2].split('--url=')
const url = new URL(splitURL[1])
const protocol = url.protocol.replace(":"," ")
const domain = url.host
const path = url.pathname
const parameters = url.searchParams
console.log("protocol: "+ protocol)
console.log("domain: "+domain)
console.log("path: "+path)
console.log("parameters: ")
parameters.forEach((value, key) =>{
    console.log("- "+`${key}: ${value}`)
}) 
