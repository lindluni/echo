const core = require('@actions/core')

(async function main(){
    const message = core.getInput('message', {required: true, trimWhitespace: true})
    core.info(message)
})()