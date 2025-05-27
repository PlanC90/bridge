<?php
header('Content-Type: application/json');

// Formdan gelen verileri al ve güvenli hale getir
function clean($key) {
  return htmlspecialchars(trim($_POST[$key] ?? ''), ENT_QUOTES, 'UTF-8');
}

$fromNetwork = clean('fromNetwork');
$toNetwork = clean('toNetwork');
$amount = floatval(str_replace(',', '', $_POST['amount'] ?? '0'));
$walletFrom = clean('walletFrom');
$walletTo = clean('walletTo');
$txidFrom = clean('txidFrom');
$gasFee = 0.001; // Fixed gas fee
$transactionHash = clean('transactionHash');

// Ağ kontrolü
$validNetworks = ['XEP', 'SHIBARIUM'];
if (!in_array($fromNetwork, $validNetworks) || !in_array($toNetwork, $validNetworks)) {
  echo json_encode(['success' => false, 'message' => 'Invalid network selection']);
  exit;
}

if ($fromNetwork === $toNetwork) {
  echo json_encode(['success' => false, 'message' => 'Cannot bridge to the same network']);
  exit;
}

// Zaman damgası
$timestamp = time();

// Veriyi özet halinde hazırla
$formattedAmount = number_format($amount, 0, ',', '.');

$summary = [
  'fromNetwork' => $fromNetwork,
  'toNetwork' => $toNetwork,
  'amount' => $amount, // Store the raw amount without separators
  'walletFrom' => $walletFrom,
  'walletTo' => $walletTo,
  'txidFrom' => $txidFrom,
  'gasFee' => $gasFee,
  'transactionHash' => $transactionHash,
  'timestamp' => $timestamp
];

// JSON olarak kaydet
$dataFile = __DIR__ . '/data/bridges.json';
if (!file_exists(dirname($dataFile))) {
  mkdir(dirname($dataFile), 0777, true);
}

$all = [];
if (file_exists($dataFile)) {
  $json = file_get_contents($dataFile);
  $all = json_decode($json, true) ?? [];
}

$all[] = $summary;

file_put_contents($dataFile, json_encode($all, JSON_PRETTY_PRINT));

// Başarılı dönüş
echo json_encode([
  'success' => true,
  'summary' => $summary
]);
?>
