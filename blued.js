var url =$request.url;
let headers = $request.headers;
async function launch (){
    if(headers['User-Agent'].indexOf("Blued")!=-1){
        $notification.post('捕获到闪照','点击URL',url);
    }
    $done();
}
launch()