const en = {
  translation: {
    button: {
      create_vpn_account: '🕳️ Get VPN account 🐇',
      show_vpn_account_data: '🗄️ Show account credentials',
      show_vpn_instructions: '📃 Instructions'
    },
    label: {
      instruction_windows: 'Instruction for windows',
      instruction_android: 'Instruction for android',
    },
    message: {
      geetings_for_new: `Hi!
I help get VPN for all who need it. 😊
Just press the button "Get VPN account" and follow instructions. 👇`,
      geetings_for_old: `Hi!
I see, you already have an account.
Your account's credentials:
Login: {{ login }}
Password: {{ password }}
Common key: {{ common_key }}
Server's ip-address: <b>{{ ip_address }}</b>
If there are any problems with setting up device, then try to press the button "Instructions". 👇`,
      account_data: `Your account's data:
Login: <b>{{ login }}</b>
Password: <b>{{ password }}</b>
Common key: <b>{{ common_key }}</b>
Server's ip-address: <b>{{ ip_address }}</b>`,
      new_account: `Your account was created:
Login: <b>{{ login }}</b>
Password: <b>{{ password }}</b>
Common key: <b>{{ common_key }}</b>
Server's ip-address: <b>{{ ip_address }}</b>`,
instructions: `I dont give you a special app fot VPN, so you should a bit work to get it.`,
    },
  }
}

export default en