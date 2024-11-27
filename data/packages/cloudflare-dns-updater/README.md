# cloudflare-dns-updater
A tool that checks the current public IP address and updates Cloudflare A records.

```
Cloudflare A Record Updater.

Usage:
  cloudflare-dns-updater -t <token> -r <zone>:<record> [-r <zone>:<record>...]
  cloudflare-dns-updater (-h | --help)
  cloudflare-dns-updater --version

Options:
  -h --help           Show this help message.
  --version           Show the tool's version.
  -t <token>          Cloudflare API token for authentication.
  -r <zone>:<record>  Specify the Cloudflare zone and A record to update (can be used multiple times).
```
