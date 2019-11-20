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
}