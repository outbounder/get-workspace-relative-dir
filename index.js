#!/usr/bin/env node
const path = require('path')
const mapWorkspaces = require('@npmcli/map-workspaces')

async function main (workspaceName) {
  const cwd = process.cwd()
  const packagejson = require(path.join(cwd, 'package.json'))
  let result = await mapWorkspaces({
    cwd,
    pkg: packagejson
  })
  if (!result.get(workspaceName)) {
    console.log('workspace', workspaceName, 'not found')
    process.exit(1)
  }
  console.log(result.get(workspaceName).replace(cwd + path.sep, ''))
}

main(process.argv[2])