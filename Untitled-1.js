let body = $response.body
let url = $reponse.url
body = JSON.parse(body)
body.advertisement_num = 0;
body.advertisement_info = [];
body = JSON.stringify(body);
$notification.post(url);
$done({body})
