import * as core from '@actions/core';
import { context, getOctokit } from '@actions/github';

run();

async function run() {
    const mode = core.getInput("mode", { required: true })
    let input = core.getInput("in")
	if (!input) {
		input = ""
	}

    let result;
    if (mode == "isBlank") {
        result = isBlank(input)
    } else if (mode == "parseTeam") {
        result = parseTeam(input)
    }
	console.log(`Processed input: '${input}'. Result: '${result}'`);

    core.setOutput("result", result);
}

function isBlank(input) {
    return input.trim() == "" ? "true" : "false";
}
function parseTeam(input) {
    return input.substring(input.indexOf("/") + 1, input.length)
}
