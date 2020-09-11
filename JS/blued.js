var url =$request.url;
let headers = $request.headers;
async function launch (){
    if(headers['User-Agent'].indexOf("Blued")!=-1){
        $notification.post('捕获到闪照','下拉点击URL不要在app按住查看','点击',{url: url});
    }
    $done();
}
launch()
