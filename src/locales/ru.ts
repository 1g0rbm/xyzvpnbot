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
      instructions: `Я не предоставляю отдельного приложения для подключения к VPN, поэтому придется немного поработать.`,
      help: `Для настройки VPN на устройстве, попробуй воспользоваться интсрукциями:
1) для widows: https://telegra.ph/Nastrojka-VPN-na-Windows-03-31
2) для android: https://telegra.ph/Nastrojka-VPN-na-Android-05-06

Если VPN на устройстве настроен, но подключиться не получается, попробуй воспользоваться комнадой /start.
Если ты менял свой юзернейм в телеграме, то я перенастрою VPN.`,
    },
  }
}

export default ru