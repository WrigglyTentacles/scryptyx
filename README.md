
# Scryptyx
# Use at your own risk, I am not responsible. This is dangerous to use for many many security reasons.
This is a minimal web service for running scripts on a server. I am using it to restart services and check statuses from my phone. The idea is that this should be as simple as it gets to get functionality out. 
I am running an nginx front for it to get ssl. I am protecting that nginx instance with firewall rules such that it is only accepting connections from specific ranges which are all on seperate vlans/broadcast domains. I have chosen this approach to get reasonable security from the system.

- Add your scripts to the scripts directory on the server and start this as the user that should have access to it.
- I recommend creating good permissions structure on anything using this. Lock it down, control what is going to get run.
