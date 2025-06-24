#!/bin/bash

GREEN="\033[1;32m"
RED="\033[1;31m"
RESET="\033[0m"

check() {
if eval "$1" &>/dev/null; then
echo -e "$2: ${GREEN}SECURE ✅${RESET}"
else
echo -e "$2: ${RED}NOT SECURE ❌${RESET}"
fi
}

echo -e "\n🔒 Kali VM Security Hardening Report\n"

1. System update
check "grep -q 'apt upgrade' /var/log/apt/history.log" "System recently updated"

2. UFW Firewall enabled
check "ufw status | grep -q 'Status: active'" "UFW firewall enabled"

3. Bluetooth disabled
check "systemctl is-enabled bluetooth.service | grep -q disabled" "Bluetooth service disabled"
check "systemctl is-active bluetooth.service | grep -q inactive" "Bluetooth service stopped"

4. CUPS (printing) disabled
check "systemctl is-enabled cups.service | grep -q disabled" "CUPS printing service disabled"
check "systemctl is-active cups.service | grep -q inactive" "CUPS printing service stopped"

5. SSH hardened
if [ -f /etc/ssh/sshd_config ]; then
check "grep -E '^PermitRootLogin no' /etc/ssh/sshd_config" "SSH root login disabled"
check "grep -E '^PasswordAuthentication no' /etc/ssh/sshd_config" "SSH password auth disabled"
else
echo -e "SSH: ${GREEN}Not installed ✅${RESET}"
fi

6. Default user password locked
check "passwd -S kali | grep -q 'L'" "Default 'kali' user password locked"

7. Fail2ban active
check "systemctl is-active fail2ban | grep -q active" "Fail2ban running"

8. Bash history cleared
check "[[ -z "$(history 10)" ]]" "Bash history cleared"

9. SetUID files audit log exists
check "[ -f ~/setuid_files.txt ]" "SUID audit log exists"

10. MAC spoofing tool installed
check "which macchanger" "macchanger installed"

echo -e "\nDone ✅"
