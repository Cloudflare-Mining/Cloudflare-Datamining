/**
 * Bash completion script (embedded)
 * Auto-generated - DO NOT EDIT
 */

/**
 * The bash completion script to be output by 'cf completions bash'
 */
export const BASH_COMPLETION_SCRIPT = `#!/bin/bash
# CF CLI Bash Completion Script
# Auto-generated - DO NOT EDIT
#
# All completions are resolved dynamically by 'cf __complete'.
# This script contains no API-specific information.

_cf_completions() {
    local cur prev words cword
    if type _init_completion &>/dev/null; then
        _init_completion || return
    else
        COMPREPLY=()
        cur="\${COMP_WORDS[COMP_CWORD]}"
        prev="\${COMP_WORDS[COMP_CWORD-1]}"
        words=("\${COMP_WORDS[@]}")
        cword=$COMP_CWORD
    fi

    # Delegate all completions to cf __complete
    local completions
    completions=$(cf __complete "\${words[@]:1}" 2>/dev/null)
    if [[ -n "$completions" ]]; then
        COMPREPLY=($(compgen -W "$completions" -- "$cur"))
        return
    fi

    COMPREPLY=()
}

complete -F _cf_completions cf
`;
