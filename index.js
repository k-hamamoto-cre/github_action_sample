const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello!!! ${nameToGreet}!`);
    // const time = (new Date()).toTimeString();
    const time = "outputs.timeに値を当込むテスト";
    console.log(time)
    core.setOutput("time", time);
    // Get the JSON webhook payload for the event that triggered the workflow
    //   const payload = JSON.stringify(github.context.payload, undefined, 2)
    //   console.log(`The event payload: ${payload}`);
    // throw new Error("エラー発生"); 
} catch (error) {
    // setFailedするとActions側でエラー検知する
    core.setFailed(error.message);
    // console.error("error from console.error(): " + error.message)
}