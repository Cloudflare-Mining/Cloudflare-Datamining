/**
 * Fish completion script (embedded)
 * Auto-generated - DO NOT EDIT
 */

/**
 * The fish completion script to be output by 'cf completions fish'
 */
export const FISH_COMPLETION_SCRIPT = `# CF CLI Fish Completion Script
# Auto-generated - DO NOT EDIT
#
# All completions are resolved dynamically by 'cf __complete'.
# This script contains no API-specific information.

function __cf_complete
    set -l tokens (commandline -opc)
    set -l current (commandline -ct)

    # Delegate all completions to cf __complete
    cf __complete $tokens[2..-1] $current 2>/dev/null
end

complete -c cf -f -a '(__cf_complete)'
`;
