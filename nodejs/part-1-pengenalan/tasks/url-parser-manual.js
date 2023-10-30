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
const url = splitURL[1]
const splitProt = url.split('//') // Protocol
const prot = splitProt[0].replace(":"," ")
const splitDom = splitProt[1].split('/') //Domain
const splitpath = splitProt[1].split('?')
const repdom = splitpath[0].replace(splitDom[0], '') //Path
const splitParam = splitpath[1].split('&') // semua parameter
console.log('Protocol: '+prot)
console.log('Domain: '+splitDom[0])
console.log('Path: '+repdom)
console.log('Parameter: ')
for (let value of splitParam) {
    console.log('- '+value)
}
