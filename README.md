# get-workspace-relative-dir

Prints workspace relative directory

## usage

Given a project with npm workspaces:

```
+ project
|- package.json 
|+ workspaces
 |- my-package
```

Running via `npx`:

```shell
cd ./project
npx get-workspace-relative-dir my-package # prints 'workspaces/my-package'
```

## api

```
get-workspace-relative-dir <workspaceName>
```