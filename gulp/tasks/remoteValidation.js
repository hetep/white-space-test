(async () => {
    const validator = require('html-validator');
    const options = {
        format: 'text',
        isLocal: true
    };

    try {
        const result = await validator(options)
        console.log(result)
    } catch (error) {
        console.error(error)
    }
})();