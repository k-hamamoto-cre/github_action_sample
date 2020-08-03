# Hello world javascript action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.
このアクションはログに対して、「"Hello World"」または「"Hello" + 挨拶する人の名前」を出力します。

## Inputs

### `who-to-greet`

**Required** The name of the person to greet. Default `"World"`.
挨拶する人の名前。 デフォルトは「"World"」です。

## Outputs

### `time`

The time we greeted you.
あなたに挨拶した時間。

## Example usage

uses: actions/hello-world-javascript-action@v1
with:
  who-to-greet: 'Mona the Octocat'
