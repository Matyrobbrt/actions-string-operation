import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';

run();

async function run() {
    const mode = core.getInput("mode", { required: true })
    const input = core.getInput("in", { required: true })

    let result;
    if (mode == "isBlank") {
        result = isBlank(input)
    } else if (mode == "parseTeam") {
        result = parseTeam(input)
    }

    core.setOutput("result", result);
}

async function isBlank(input) {
    return input.trim() == "" ? "true" : "false";
}
async function parseTeam(input) {
    return input.substring(input.indexOf("/") + 1, input.length)
}
