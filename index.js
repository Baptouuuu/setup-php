const core = require('@actions/core');
const github = require('@actions/github');
const exec = require("@actions/exec/lib/exec");
const os_version = process.platform;

try {
    switch (os_version) {
        case 'darwin':
            console.log(os_version);
            console.log(core.getInput('version'));
            break;

        case 'linux':
            exec.exec(`./linux.sh ${core.getInput('version')}`);
            break;

        default:
            throw `OS "${os_version}" not supported`;
    }
} catch (e) {
    core.setFailed(e.message);
}
