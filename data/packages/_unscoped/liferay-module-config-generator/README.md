Liferay AMD Module config generator
=====

Generates the config file, needed to load AMD files via combobox in Liferay

```bash
  Usage: liferay-cfgen [options] <file ...>

  Options:

    -h, --help                                   output usage information
    -b, --base [file name]                       Already existing template to be used as base for the parsed configuration
    -c, --config [config variable]               The configuration variable to which the modules should be added. Default: __CONFIG__
    -e, --extension [module extension]           Use the provided string as an extension instead to get it automatically from the file name. Default: ""
    -f, --format [module format]                 Regex and value which will be applied to the file name when generating the module name. Example: "/_/g,-". Default: ""
    -i, --ignorePath [ignore path]               Do not create module path and fullPath properties.
    -k, --keepExtension [keep file extension]    If true, will keep the file extension when it generates module name. Default: false
    -l, --lowerCase [lower case]                 Convert file name to lower case before to use it as module name. Default: false
    -m, --moduleConfig [module configuration]    JSON file which contains configuration data for the modules, for example module prefix
    -n, --namespace [namespace]                  The namespace that should be used for "define" and "require" calls. Default: ""
    -o, --output [file name]                     Output file to store the generated configuration
    -p, --filePattern [file pattern]             The pattern to be used in order to find files for processing. Default: "**/*.js"
    -r, --moduleRoot [module root]               The folder which will be used as starting point from which the module name should be generated. Default: current working directory
    -s, --skipFileOverride [skip file override]  Do not overwrite module file if name is auto generated.
    -V, --version                                output the version number
```