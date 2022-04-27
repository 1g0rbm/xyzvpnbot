const en = {
  translation: {
    button: {
      create_vpn_account: '🕳️ Get VPN account 🐇',
      show_vpn_account_data: '🗄️ Show account credentials'
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
If there are any problems with setting up device, then try to press the button "Instructions". 👇`,
      account_data: `Your account's data:
Login: <b>{{ login }}</b>
Password: <b>{{ password }}</b>
Common key: <b>{{ common_key }}</b>`,
      new_account: `Your account was created:
Login: <b>{{ login }}</b>
Password: <b>{{ password }}</b>
Common key: <b>{{ common_key }}</b>`,
    },
  }
}

export default en