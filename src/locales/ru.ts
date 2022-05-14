const ru = {
  translation: {
    button: {
      create_vpn_account: '🕳️ Создать VPN аккаунт 🐇',
      show_vpn_account_data: '🗄️ Данные VPN аккаунта',
      show_vpn_instructions: '📃 Инструкции'
    },
    label: {
      instruction_windows: 'Инструкция для windows',
      instruction_android: 'Инструкция для android',
    },
    message: {
      geetings_for_new: `Привет!
Я помогаю подключить ВПН всем, кому он нужен. 😊
Просто нажми кнопку "Создать VPN account" и следуй инструкциям. 👇`,
      geetings_for_old: `Привет!
Я вижу, что у тебя уже есть мой аккуант.
Данные твоего аккаунта:
Логин: <b>{{ login }}</b>
Пароль: <b>{{ password }}</b>
Общий ключ: <b>{{ common_key }}</b>
Ip-адрес сервера: <b>{{ ip_address }}</b>
Если есть проблемы с настройкой VPN на устройстве, то попробуй нажать кнопку "Инструкции". 👇`,
      account_data: `Данные твоего аккаунта:
Логин: <b>{{ login }}</b>
Пароль: <b>{{ password }}</b>
Общий ключ: <b>{{ common_key }}</b>
Ip-адрес сервера: <b>{{ ip_address }}</b>`,
      new_account: `Твой аккаунт создан:
Логин: <b>{{ login }}</b>
Пароль: <b>{{ password }}</b>
Общий ключ: <b>{{ common_key }}</b>
Ip-адрес сервера: <b>{{ ip_address }}</b>`,
      instructions: `Я не предоставляю отдельного приложения, для подключения к VPN, поэтому придется немного поработать.`,
    },
  }
}

export default ru