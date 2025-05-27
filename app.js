const translations = {
  en: {
    title: "🌉 MEMEX Bridge Form",
    fromNetworkLabel: "From Network",
    toNetworkLabel: "To Network",
    walletFromLabel: "Your Wallet Address (From)",
    walletToLabel: "Your Wallet Address (To)",
    txidFromLabel: "TX ID (From)",
    gasFeeLabel: "Gas Fee (BONE)",
    transactionHashLabel: "Gas Transaction Hash",
    note: "📌 To bridge from XEP, send MEMEX to:",
    warning: "⚠️ Transactions without sufficient gas will be burned.",
    info: "⏳ Transfers may take up to 24 hours to complete. We appreciate your patience.",
    submitButton: "Submit"
  },
  es: {
    title: "🌉 Formulario de Puente MEMEX",
    fromNetworkLabel: "Red de Origen",
    toNetworkLabel: "Red de Destino",
    walletFromLabel: "Su Dirección de Monedero (Origen)",
    walletToLabel: "Su Dirección de Monedero (Destino)",
    txidFromLabel: "ID de TX (Origen)",
    gasFeeLabel: "Comisión de Gas (BONE)",
    transactionHashLabel: "Hash de Transacción de Gas",
    note: "📌 Para puentear desde XEP, envíe MEMEX a:",
    warning: "⚠️ Las transacciones sin suficiente gas se quemarán.",
    info: "⏳ Las transferencias pueden tardar hasta 24 horas en completarse. Agradecemos su paciencia.",
    submitButton: "Enviar"
  },
  hi: {
    title: "🌉 MEMEX ब्रिज फॉर्म",
    fromNetworkLabel: "से नेटवर्क",
    toNetworkLabel: "से नेटवर्क",
    walletFromLabel: "आपका वॉलेट पता (से)",
    walletToLabel: "आपका वॉलेट पता (से)",
    txidFromLabel: "TX ID (से)",
    gasFeeLabel: "गैस शुल्क (BONE)",
    transactionHashLabel: "गैस लेनदेन हैश",
    note: "📌 XEP से ब्रिज करने के लिए, MEMEX भेजें:",
    warning: "⚠️ पर्याप्त गैस के बिना लेनदेन जला दिए जाएँगे।",
    info: "⏳ स्थानान्तरण पूर्ण होने में 24 घंटे तक का समय लग सकता है। हम आपके धैर्य के लिए आभारी हैं।",
    submitButton: "सबमिट करें"
  },
  bn: {
    title: "🌉 MEMEX ব্রিজ ফর্ম",
    fromNetworkLabel: "থেকে নেটওয়ার্ক",
    toNetworkLabel: "থেকে নেটওয়ার্ক",
    walletFromLabel: "আপনার ওয়ালেট ঠিকানা (থেকে)",
    walletToLabel: "আপনার ওয়ালেট ঠিকানা (থেকে)",
    txidFromLabel: "TX ID (থেকে)",
    gasFeeLabel: "গ্যাস ফি (BONE)",
    transactionHashLabel: "গ্যাস লেনদেন হ্যাশ",
    note: "📌 XEP থেকে ব্রিজ করার জন্য, MEMEX পাঠান:",
    warning: "⚠️ যথেষ্ট গ্যাস ছাড়া লেনদেন পুড়ে যাবে।",
    info: "⏳ ট্রান্সফার সম্পূর্ণ হতে ২৪ ঘন্টা পর্যন্ত সময় লাগতে পারে। আপনার ধৈর্যের জন্য আমরা কৃতজ্ঞ।",
    submitButton: "জমা দিন"
  },
  ar: {
    title: "🌉 نموذج جسر MEMEX",
    fromNetworkLabel: "الشبكة من",
    toNetworkLabel: "الشبكة إلى",
    walletFromLabel: "عنوان محفظتك (من)",
    walletToLabel: "عنوان محفظتك (إلى)",
    txidFromLabel: "معرف المعاملة (من)",
    gasFeeLabel: "رسوم الغاز (BONE)",
    transactionHashLabel: "هاش معاملة الغاز",
    note: "📌 للانتقال من XEP، أرسل MEMEX إلى:",
    warning: "⚠️ سيتم حرق المعاملات التي لا تحتوي على غاز كافٍ.",
    info: "⏳ قد تستغرق عمليات النقل ما يصل إلى 24 ساعة لإكمالها. نشكر لكم صبركم.",
    submitButton: "إرسال"
  },
  pt: {
    title: "🌉 Formulário da Ponte MEMEX",
    fromNetworkLabel: "Rede de Origem",
    toNetworkLabel: "Rede de Destino",
    walletFromLabel: "Seu Endereço de Carteira (Origem)",
    walletToLabel: "Seu Endereço de Carteira (Destino)",
    txidFromLabel: "ID da TX (Origem)",
    gasFeeLabel: "Taxa de Gás (BONE)",
    transactionHashLabel: "Hash da Transação de Gás",
    note: "📌 Para fazer a ponte de XEP, envie MEMEX para:",
    warning: "⚠️ Transações sem gás suficiente serão queimadas.",
    info: "⏳ As transferências podem levar até 24 horas para serem concluídas. Agradecemos sua paciência.",
    submitButton: "Enviar"
  },
  ru: {
    title: "🌉 Форма моста MEMEX",
    fromNetworkLabel: "Сеть отправления",
    toNetworkLabel: "Сеть получения",
    walletFromLabel: "Ваш адрес кошелька (Отправка)",
    walletToLabel: "Ваш адрес кошелька (Получение)",
    txidFromLabel: "ID транзакции (Отправка)",
    gasFeeLabel: "Плата за газ (BONE)",
    transactionHashLabel: "Хэш транзакции газа",
    note: "📌 Для перехода с XEP, отправьте MEMEX на:",
    warning: "⚠️ Транзакции без достаточного газа будут сожжены.",
    info: "⏳ Переводы могут занять до 24 часов. Благодарим за ваше терпение.",
    submitButton: "Отправить"
  },
  ja: {
    title: "🌉 MEMEXブリッジフォーム",
    fromNetworkLabel: "送信元ネットワーク",
    toNetworkLabel: "受信ネットワーク",
    walletFromLabel: "ウォレットアドレス（送信元）",
    walletToLabel: "ウォレットアドレス（受信）",
    txidFromLabel: "TX ID（送信元）",
    gasFeeLabel: "ガス料金（BONE）",
    transactionHashLabel: "ガス取引ハッシュ",
    note: "📌 XEPからブリッジするには、MEMEXを次のアドレスに送信してください。",
    warning: "⚠️ 十分なガスがないトランザクションは燃焼されます。",
    info: "⏳ 転送には最大24時間かかる場合があります。ご理解のほどよろしくお願いいたします。",
    submitButton: "送信"
  },
  pa: {
    title: "🌉 MEMEX ਬ੍ਰਿਜ ਫਾਰਮ",
    fromNetworkLabel: "ਨੈਟਵਰਕ ਤੋਂ",
    toNetworkLabel: "ਨੈਟਵਰਕ ਨੂੰ",
    walletFromLabel: "ਤੁਹਾਡਾ ਵਾਲਿਟ ਐਡਰੈੱਸ (ਤੋਂ)",
    walletToLabel: "ਤੁਹਾਡਾ ਵਾਲਿਟ ਐਡਰੈੱਸ (ਨੂੰ)",
    txidFromLabel: "TX ID (ਤੋਂ)",
    gasFeeLabel: "ਗੈਸ ਫ਼ੀਸ (BONE)",
    transactionHashLabel: "ਗੈਸ ਟ੍ਰਾਂਜੈਕਸ਼ਨ ਹੈਸ਼",
    note: "📌 XEP ਤੋਂ ਬ੍ਰਿਜ ਕਰਨ ਲਈ, MEMEX ਭੇਜੋ:",
    warning: "⚠️ ਕਾਫ਼ੀ ਗੈਸ ਤੋਂ ਬਿਨਾਂ ਟ੍ਰਾਂਜੈਕਸ਼ਨ ਸਾੜ ਦਿੱਤੇ ਜਾਣਗੇ।",
    info: "⏳ ਟ੍ਰਾਂਸਫ਼ਰ ਪੂਰਾ ਹੋਣ ਵਿੱਚ 24 ਘੰਟੇ ਤੱਕ ਦਾ ਸਮਾਂ ਲੱਗ ਸਕਦਾ ਹੈ। ਤੁਹਾਡੇ ਸਬਰ ਲਈ ਧੰਨਵਾਦ।",
    submitButton: "ਸਬਮਿਟ ਕਰੋ"
  },
  de: {
    title: "🌉 MEMEX-Brückenformular",
    fromNetworkLabel: "Von Netzwerk",
    toNetworkLabel: "Zu Netzwerk",
    walletFromLabel: "Ihre Wallet-Adresse (Von)",
    walletToLabel: "Ihre Wallet-Adresse (Zu)",
    txidFromLabel: "TX-ID (Von)",
    gasFeeLabel: "Gasgebühr (BONE)",
    transactionHashLabel: "Gas-Transaktionshash",
    note: "📌 Um von XEP zu überbrücken, senden Sie MEMEX an:",
    warning: "⚠️ Transaktionen ohne ausreichende Gasgebühr werden verbrannt.",
    info: "⏳ Überweisungen können bis zu 24 Stunden dauern. Vielen Dank für Ihre Geduld.",
    submitButton: "Senden"
  }
};

document.addEventListener('DOMContentLoaded', function() {
  // ... existing code ...

  const languageSelect = document.getElementById('language');
  const translateForm = () => {
    const lang = languageSelect.value;
    const trans = translations[lang] || translations.en; // Default to English if translation not found

    document.title = trans.title;
    document.getElementById('title').textContent = trans.title;
    document.getElementById('fromNetworkLabel').textContent = trans.fromNetworkLabel;
    document.getElementById('toNetworkLabel').textContent = trans.toNetworkLabel;
    document.getElementById('walletFromLabel').textContent = trans.walletFromLabel;
    document.getElementById('walletToLabel').textContent = trans.walletToLabel;
    document.getElementById('txidFromLabel').textContent = trans.txidFromLabel;
    document.getElementById('gasFeeLabel').textContent = trans.gasFeeLabel;
    document.getElementById('transactionHashLabel').textContent = trans.transactionHashLabel;
    document.getElementById('note').textContent = trans.note;
    document.getElementById('warning').textContent = trans.warning;
    document.getElementById('info').textContent = trans.info;
    document.getElementById('submitButton').textContent = trans.submitButton;
  };

  languageSelect.addEventListener('change', translateForm);
  translateForm(); // Initial translation
});

document.getElementById('copyAddress').addEventListener('click', () => {
  const addr = document.getElementById('bridgeAddress').innerText;
  navigator.clipboard.writeText(addr).then(() => {
    alert("Address copied!");
  });
});

document.getElementById('copyGasAddress').addEventListener('click', () => {
  const gasAddress = document.getElementById('gasAddress').innerText;
  navigator.clipboard.writeText(gasAddress).then(() => {
    alert("Gas address copied!");
  });
});

document.getElementById('bridgeForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const form = e.target;
  const formData = new FormData(form);

  let amount = formData.get('amount');
  amount = amount.replace(/,/g, '');

  const fromNetwork = formData.get('fromNetwork');
  const toNetwork = formData.get('toNetwork');

  if (fromNetwork === toNetwork) {
    alert('From Network and To Network cannot be the same.');
    return;
  }

  const response = await fetch('save-bridge.php', {
    method: 'POST',
    body: formData
  });

  const res = await response.json();
  if (res.success) {
    const s = res.summary;
    const list = document.getElementById('summaryList');
    list.innerHTML = `
      <li><strong>From:</strong> ${s.fromNetwork}</li>
      <li><strong>To:</strong> ${s.toNetwork}</li>
      <li><strong>Amount:</strong> ${s.amount}</li>
      <li><strong>Wallet From:</strong> ${s.walletFrom}</li>
      <li><strong>Wallet To:</strong> ${s.walletTo}</li>
      <li><strong>TX ID From:</strong> ${s.txidFrom}</li>
      <li><strong>Gas Fee:</strong> ${s.gasFee}</li>
      <li><strong>Transaction Hash:</strong> ${s.transactionHash}</li>
      <li><strong>Time:</strong> ${new Date(s.timestamp).toLocaleString()}</li>
    `;

    form.classList.add('hidden');
    document.getElementById('summaryBox').classList.remove('hidden');
  }
});
