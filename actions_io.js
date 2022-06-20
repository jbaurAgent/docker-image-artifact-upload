const core = require('@actions/core');

exports.getInput = (name, mandatory = false) => {
    return core.getInput(name, {required: mandatory});
}

exports.writeOutput = (name, val) => {
    try {
        core.debug('Inside try block');
        core.setOutput(name, val);
    }
    catch (err) {
        core.error(`Error ${err}, action may still succeed though`);
    }
}

exports.fail = (msg) => core.setFailed(msg);
