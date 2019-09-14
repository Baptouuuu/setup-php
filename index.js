const core = require('@actions/core');
const github = require('@actions/github');
const exec = require("@actions/exec/lib/exec");
const os_version = process.platform;

try {
    switch (os_version) {
        case 'darwin':
        case 'linux':
            exec
                .exec(`./${os_version}.sh ${core.getInput('version')}`)
                .then(() => {
                    return exec.exec(`./composer.sh`)
                })
                .catch(() => {
                    core.setFailed('Configuration failed');
                });
            break;

        default:
            throw `OS "${os_version}" not supported`;
    }
} catch (e) {
    core.setFailed(e.message);
}
