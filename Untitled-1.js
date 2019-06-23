let body = $response.body
body = JSON.parse(body)
body.advertisement_num = 0;
body.advertisement_info = [];
body = JSON.stringify(body);
$notification.post(body);
$done({body})
