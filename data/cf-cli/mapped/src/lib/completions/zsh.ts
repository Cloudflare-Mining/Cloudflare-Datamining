/**
 * Zsh completion script (embedded)
 * Auto-generated - DO NOT EDIT
 */

/**
 * The zsh completion script to be output by 'cf completions zsh'
 */
export const ZSH_COMPLETION_SCRIPT = `#compdef cf
# CF CLI Zsh Completion Script
# Auto-generated - DO NOT EDIT
#
# All completions are resolved dynamically by 'cf __complete'.
# This script contains no API-specific information.

_cf() {
    local context state state_descr line
    typeset -A opt_args

    # Delegate to cf __complete for all completions
    local completions
    completions=(\${(f)"$(cf __complete "\${words[@]:1}" 2>/dev/null)"})
    if [[ \${#completions[@]} -gt 0 ]]; then
        compadd -a completions
    fi
}

compdef _cf cf
`;
