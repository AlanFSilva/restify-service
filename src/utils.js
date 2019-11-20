const priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
    CRITICAL: 3
}

module.exports = {
    getTimeStamp: () => {
        const date = new Date()
        const month = (date.getMonth() + 1).toString().padStart(2, '0')
        const day = (date.getDate() + 1).toString().padStart(2, '0')
        const year = date.getFullYear().toString().padStart(4, '0')
        const hour = date.getHours().toString().padStart(2, '0')
        const minutes = date.getMinutes().toString().padStart(2, '0')
        const seconds = date.getSeconds().toString().padStart(2, '0')

        return `${year}-${month}-${day} ${hour}:${minutes}:${seconds}`
    },

    getPriorityValue: (value) => {
        switch (value) {
            case 'LOW':
                return priority.LOW
            case 'NORMAL':
                return priority.NORMAL
            case 'HIGH':
                return priority.HIGH
            case 'CRITICAL':
                return priority.CRITICAL
            default:
                return 'ERROR'
        }
    },

    getHomeBody: () => {
        return `<head><meta http-equiv="Content-Type" content="text/html; charset=utf-8"></head>
        <body> 
            <h2>Restify Service</h2>
            <p> Para mais informações sobre as URIs de operações da API acesse o link do <a href="https://github.com/AlanFSilva/restify-service" target="_blank">GitHub</a> </p>
            <p><a href="https://drive.google.com/file/d/1imAx_KpwE1QpKmlyPVSHK7r0410yyV1Z"  target="_blank">Arquivo do Insomnia</a> com as operações para teste do funcionamento da Api </p>
            <p> Arquivo de Dump para configuração do MySQL  <a href="https://drive.google.com/file/d/1B8Vc4jL5vmOe4H8RDfvUMV3n8u4mnKcl" target="_blank">mysql-rest-service-schema.json</a></p>
        </body>`
    },

    objectToLowerCase: (object) =>{
        let newObject = {}
        Object.keys(object).forEach(key => {
            newObject[key] = object[key].toLowerCase()
        });
        return newObject
    }
}