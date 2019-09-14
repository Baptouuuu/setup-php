const core = require('@actions/core');
const github = require('@actions/github');
const os_version = process.platform;

try {
    switch (os_version) {
        case 'darwin':
            console.log(os_version);
            console.log(core.getInput('version'));
            break;

        case 'linux':
            console.log(os_version);
            console.log(core.getInput('version'));
            break;

        default:
            throw `OS "${os_version}" not supported`;
    }
} catch (e) {
    core.setFailed(e.message);
}
